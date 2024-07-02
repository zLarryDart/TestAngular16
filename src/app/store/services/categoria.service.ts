import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl="https://prueba.sandboxmb.com/api/getCategorias/"
  constructor(private http: HttpClient) { }
  getData(): Observable<Categoria> {
    return this.http.get<Categoria>(this.apiUrl);
  }
}
