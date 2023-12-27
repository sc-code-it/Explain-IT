import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { Hero } from '../../../common/interfaces/interfaces';
import { ConfigService } from '../../../common/service/config.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  config: Hero[] | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.add('Bob');
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig().subscribe((data) => {
      console.log(data);
    });
  }


  // showConfig() {
  //   this.configService.getHeroes().subscribe((data) => {
  //     this.config = [...data];
  //     console.log(this.config);
  //   });
  // }

  // showConfigResponse() {
  //   this.configService
  //     .getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe((resp) => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       console.log(resp);
  //       console.log(keys.map((key) => `${key}: ${resp.headers.get(key)}`));

  //       // access the body directly, which is typed as `Config`.
  //       this.config = [...resp.body!];
  //       console.log(this.config);
  //     });
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    // The server will generate the id for this new hero
    const newHero: any = {test: 'Hello'};
    this.configService.addHero(newHero).subscribe((hero) => console.log(hero));
  }
}

// <video class="video" #liveVideo autoplay controls width="320" height="240"></video>
// <canvas id="canvasOutput" width="320" height="240"></canvas>

// videoElement!: HTMLVideoElement;
// stream!: MediaStream;
// cv!: any;
// faceCascade: any;

// @ViewChild('liveVideo') videoElementRef!: ElementRef;

// constructor() {
//   setTimeout(() => {
//     cv = (window as any).cv;
//     navigator.mediaDevices
//       .getUserMedia({
//         video: {
//           width: 480,
//         },
//       })
//       .then((stream) => {
//         console.log(this.videoElementRef.nativeElement.height);
//         this.loadHaarFaceModels().then(() => {
//           this.processVideo(stream);
//         });
//       });
//   }, 1000);
// }

// async ngOnInit() {}

// processVideo(stream: any) {
//   this.videoElement = this.videoElementRef.nativeElement;

//   this.stream = stream;
//   this.videoElement.srcObject = stream;

//   const src = new cv.Mat(
//     this.videoElementRef.nativeElement.height,
//     this.videoElementRef.nativeElement.width,
//     cv.CV_8UC4
//   );

//   const dst = new cv.Mat(
//     this.videoElementRef.nativeElement.height,
//     this.videoElementRef.nativeElement.width,
//     cv.CV_8UC4
//   );

//   const gray = new cv.Mat();

//   let cap = new cv.VideoCapture(this.videoElement);
//   const FPS = 30;
//   let classifier = this.faceCascade;
//   let faces = new cv.RectVector();

//   function captureFaces() {
//     let begin = Date.now();

//     // start processing.
//     cap.read(src);
//     src.copyTo(dst);
//     cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);

//     classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
//     for (let i = 0; i < faces.size(); ++i) {
//       let face = faces.get(i);
//       let point1 = new cv.Point(face.x, face.y);
//       let point2 = new cv.Point(face.x + face.width, face.y + face.height);
//       cv.rectangle(dst, point1, point2, [255, 0, 0, 255], 2);
//     }
//     cv.imshow('canvasOutput', dst);
//     let delay = 1000/FPS - (Date.now() - begin);
//     setTimeout(captureFaces, delay);
//   }

//   setTimeout(captureFaces, 0);
// }

// async loadDataFile(cvFilePath: string, url: string) {
//   const response = await fetch(url);
//   const buffer = await response.arrayBuffer();
//   const data = new Uint8Array(buffer);
//   cv.FS_createDataFile('/', cvFilePath, data, true, false, false);
// }

// async loadHaarFaceModels() {
//   console.log('=======start downloading Haar-cascade models=======');
//   return this.loadDataFile(
//     'haarcascade_frontalface_alt.xml',
//     'assets/js/models/haarcascade_frontalface_alt.xml'
//   )
//     .then(
//       () =>
//         new Promise<void>((resolve) => {
//           setTimeout(() => {
//             // load pre-trained classifiers
//             this.faceCascade = new cv.CascadeClassifier();
//             this.faceCascade.load('haarcascade_frontalface_alt.xml');
//             resolve();
//           }, 2000);
//         })
//     )
//     .then(() => {
//       console.log('=======downloaded Haar-cascade models=======');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
