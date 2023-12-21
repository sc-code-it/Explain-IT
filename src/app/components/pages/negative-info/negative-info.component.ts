import { Component } from '@angular/core';
import { CardComponent, CardInfo } from '../../ui/card/card.component';

@Component({
  selector: 'app-negative-info',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './negative-info.component.html',
  styleUrl: './negative-info.component.css'
})
export class NegativeInfoComponent {
  cardItems: CardInfo[] = [
    {name: 'No', type: 'p'},
    {name: 'Comfort', type: 'p'},
    {name: 'Hygiene', type: 'p'},
  ] 
}
