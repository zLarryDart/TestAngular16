import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { StoreRoutingModule } from './store.routing.module';
import { CategoriaCardComponent } from './components/categoria-card/categoria-card.component';
import { OfertaCardComponent } from './components/oferta-card/oferta-card.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    CategoriaCardComponent,
    OfertaCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule,
    MaterialModule
  ]
})
export class StoreModule { }
