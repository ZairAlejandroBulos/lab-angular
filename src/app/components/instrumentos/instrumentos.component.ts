import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { Instrumento } from 'src/types/Instrumento';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html'
})
export class InstrumentosComponent implements OnInit {

  instrumentos: Instrumento[];

  constructor(private service: InstrumentoService) {}

  ngOnInit(): void {
    this.getInstrumentos();
  }

  async getInstrumentos() {
    this.instrumentos = await this.service.findInstrumentos();
  }

}
