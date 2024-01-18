import { Component, Input } from '@angular/core';
import { DescriptionPipe } from '../../../pipes/description.pipe';
import { ProductRatingComponent } from '../product-rating/product-rating.component';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DescriptionPipe,ProductRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productChild: any;
}
