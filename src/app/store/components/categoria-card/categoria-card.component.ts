import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-card',
  templateUrl: './categoria-card.component.html',
  styleUrls: ['./categoria-card.component.sass']
})
export class CategoriaCardComponent implements OnInit {
  @Input() image!:string;
  @Input() nombre!:string;
  ngOnInit(){
    console.log("una instancia mas¿¿");
  }
}
