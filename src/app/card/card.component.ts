import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cardImg: string = '';
  @Input() cardTitle: string = '';
  @Input() cardLocation: string = '';
}