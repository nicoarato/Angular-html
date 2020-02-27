import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private _http: HttpClient) {

    this.cargarProductos();
   }


  private cargarProductos() {
    this._http.get('https://angular-html-72844.firebaseio.com/productos_idx.json')
              .subscribe((resp: Producto[]) => {
                console.log(resp);
                this.cargando = false;
                this.productos = resp;

              });
  }




}
