import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import * as cv from "@techstark/opencv-js";

import { HeaderComponent } from './components/ui/header/header.component';
import { SideInfoComponent } from './components/ui/side-info/side-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    HeaderComponent,
    SideInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor() {
    setTimeout(() => {
      (window as any).cv = cv;
    }, 1000);
  }

}
