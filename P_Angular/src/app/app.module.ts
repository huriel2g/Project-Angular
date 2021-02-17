import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    AddProductoComponent,
    AddCategoriaComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
