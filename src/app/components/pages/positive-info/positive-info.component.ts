import { Component } from '@angular/core';
import { CardComponent, CardInfo } from '../../ui/card/card.component';

@Component({
  selector: 'app-positive-info',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './positive-info.component.html',
  styleUrl: './positive-info.component.css'
})
export class PositiveInfoComponent {
  cardItems: CardInfo[] = [
    {name: 'Yes', type: 'p'},
    {name: 'Family', type: 'p'},
    {name: 'Food', type: 'p'},
    {name: 'Drink', type: 'p'},
  ] 
}
