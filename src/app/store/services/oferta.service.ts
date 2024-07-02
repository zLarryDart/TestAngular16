import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from '../models/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  apiUrl="https://prueba.sandboxmb.com/api/getProductosOferta/"
  ultimaVisitaUrl= "https://prueba.sandboxmb.com/api/getProductosUltimaVisita/"
  constructor(private http: HttpClient) { }
  getData(): Observable<Oferta> {
    return this.http.get<Oferta>(this.apiUrl);
  }
  getDataUltimaVisita(): Observable<Oferta> {
    return this.http.get<Oferta>(this.apiUrl);
  }
}
