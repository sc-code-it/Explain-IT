import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-positive-message',
  standalone: true,
  imports: [],
  templateUrl: './positive-message.component.html',
  styleUrl: './positive-message.component.css'
})
export class PositiveMessageComponent {
  selectedItem: string = ''

  @Input()
  set id(heroId: string) {
    this.selectedItem = heroId;
  }
}
