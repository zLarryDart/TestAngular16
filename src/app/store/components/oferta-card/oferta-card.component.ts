import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oferta-card',
  templateUrl: './oferta-card.component.html',
  styleUrls: ['./oferta-card.component.sass']
})
export class OfertaCardComponent {
  @Input() sku!:string;
  @Input() image!:string;
  @Input() nombre!:string;
  @Input() descripcion!:string;
  @Input() precio!:number;

}
