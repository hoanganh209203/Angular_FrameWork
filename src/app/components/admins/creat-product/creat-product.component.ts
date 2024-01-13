import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../type/product';
import { title } from 'process';
@Component({
  selector: 'app-creat-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './creat-product.component.html',
  styleUrl: './creat-product.component.css'
})
export class CreatProductComponent {
productAdd = {
  title:'',
  price:0,
  image:''
}

hanldSubmit(){
  console.log(this.productAdd.title);
  
}
}
