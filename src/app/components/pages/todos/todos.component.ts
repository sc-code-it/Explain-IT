import { Component } from '@angular/core';

import { HeaderComponent } from '../../ui/header/header.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { MainComponent } from '../../ui/main/main.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {}
