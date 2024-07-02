import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';
import { OfertaService } from '../services/oferta.service';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  categorias!: Categoria;
  ofertas!: Oferta;
  ultimaVisita!: Oferta;

  constructor(
    private categoriasService: CategoriaService,
    private ofertasService: OfertaService
    ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getOfertas();
    this.getUltimaVisita();
  }

  getCategories() {
    this.categoriasService.getData().subscribe(
      (data) => {
        this.categorias = data;
        console.log(this.categorias);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getOfertas() {
    this.ofertasService.getData().subscribe(
      (data) => {
        this.ofertas = data;
        console.log(this.ofertas);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getUltimaVisita() {
    this.ofertasService.getDataUltimaVisita().subscribe(
      (data) => {
        this.ultimaVisita = data;
        console.log(this.ofertas);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
