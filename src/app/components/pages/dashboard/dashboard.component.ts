import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  videoElement!: HTMLVideoElement;
  stream!: MediaStream;
  cv!: any;
  faceCascade: any;

  @ViewChild('liveVideo') videoElementRef!: ElementRef;

  constructor() {
    setTimeout(() => {
      cv = (window as any).cv;
      navigator.mediaDevices
        .getUserMedia({
          video: {
            width: 480,
          },
        })
        .then((stream) => {
          console.log(this.videoElementRef.nativeElement.height);
          this.loadHaarFaceModels().then(() => {
            this.processVideo(stream);
          });
        });
    }, 1000);
  }

  async ngOnInit() {}

  processVideo(stream: any) {
    this.videoElement = this.videoElementRef.nativeElement;

    this.stream = stream;
    this.videoElement.srcObject = stream;

    const src = new cv.Mat(
      this.videoElementRef.nativeElement.height,
      this.videoElementRef.nativeElement.width,
      cv.CV_8UC4
    );

    const dst = new cv.Mat(
      this.videoElementRef.nativeElement.height,
      this.videoElementRef.nativeElement.width,
      cv.CV_8UC4
    );

    const gray = new cv.Mat();

    let cap = new cv.VideoCapture(this.videoElement);
    const FPS = 30;
    let classifier = this.faceCascade;
    let faces = new cv.RectVector();

    function captureFaces() {
      let begin = Date.now();

      // start processing.
      cap.read(src);
      src.copyTo(dst);
      cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);

      classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
      for (let i = 0; i < faces.size(); ++i) {
        let face = faces.get(i);
        let point1 = new cv.Point(face.x, face.y);
        let point2 = new cv.Point(face.x + face.width, face.y + face.height);
        cv.rectangle(dst, point1, point2, [255, 0, 0, 255], 2);
      }
      cv.imshow('canvasOutput', dst);
      let delay = 1000/FPS - (Date.now() - begin);
      setTimeout(captureFaces, delay);
    }

    setTimeout(captureFaces, 0);
  }

  async loadDataFile(cvFilePath: string, url: string) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const data = new Uint8Array(buffer);
    cv.FS_createDataFile('/', cvFilePath, data, true, false, false);
  }

  async loadHaarFaceModels() {
    console.log('=======start downloading Haar-cascade models=======');
    return this.loadDataFile(
      'haarcascade_frontalface_alt.xml',
      'assets/js/models/haarcascade_frontalface_alt.xml'
    )
      .then(
        () =>
          new Promise<void>((resolve) => {
            setTimeout(() => {
              // load pre-trained classifiers
              this.faceCascade = new cv.CascadeClassifier();
              this.faceCascade.load('haarcascade_frontalface_alt.xml');
              resolve();
            }, 2000);
          })
      )
      .then(() => {
        console.log('=======downloaded Haar-cascade models=======');
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
