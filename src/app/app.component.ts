import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/ui/header/header.component';
import { PositiveInfoComponent } from './components/pages/positive-info/positive-info.component';
import { NegativeInfoComponent } from './components/pages/negative-info/negative-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    PositiveInfoComponent,
    NegativeInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Explain-IT';
}
