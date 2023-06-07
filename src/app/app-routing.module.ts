import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { GrillaInstrumentosComponent } from './components/grilla-instrumentos/grilla-instrumentos.component';
import { FormInstrumentoComponent } from './components/form-instrumento/form-instrumento.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'instrumentos', component: InstrumentosComponent },
  { path: 'grilla', component: GrillaInstrumentosComponent },
  { path: 'detalle/:id', component: DetalleInstrumentoComponent },
  { path: 'form/:id', component: FormInstrumentoComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
