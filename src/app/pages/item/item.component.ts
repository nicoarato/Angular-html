import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;
  constructor(private _route: ActivatedRoute,
              public _producto: ProductosService) { }

  ngOnInit() {

    this._route.params.subscribe(resp => {
      //console.log(resp['id']);

      this._producto.getProducto(resp['id'])
          .subscribe((producto: ProductoDescripcion) => {
            this.producto = producto;
            this.id = resp['id'];
            //console.log(producto);
          });
    });

  }

}
