import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';



@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
