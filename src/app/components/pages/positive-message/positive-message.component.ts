import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-positive-message',
  standalone: true,
  imports: [],
  templateUrl: './positive-message.component.html',
  styleUrl: './positive-message.component.css'
})
export class PositiveMessageComponent implements OnInit {
  selectedItem: string = ''

  @Input()
  set id(heroId: string) {
    this.selectedItem = heroId;
  }

  ngOnInit(): void {
      const data = history.state;
      console.log(data)
  }
}
