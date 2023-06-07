import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MapComponent } from './components/map/map.component';
import { ItemInstrumentoComponent } from './components/item-instrumento/item-instrumento.component';
import { InstrumentoService } from './services/instrumento.service';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { GrillaInstrumentosComponent } from './components/grilla-instrumentos/grilla-instrumentos.component';
import { FormInstrumentoComponent } from './components/form-instrumento/form-instrumento.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentosComponent,
    HomeComponent,
    NavigationComponent,
    MapComponent,
    ItemInstrumentoComponent,
    DetalleInstrumentoComponent,
    GrillaInstrumentosComponent,
    FormInstrumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
