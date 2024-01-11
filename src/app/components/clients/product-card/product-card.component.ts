import { Component, Input } from '@angular/core';
import { DescriptionPipe } from '../../../pipes/description.pipe';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DescriptionPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productChild: any;
}
