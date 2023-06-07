import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { Instrumento } from 'src/types/Instrumento';

@Component({
  selector: 'app-grilla-instrumentos',
  templateUrl: './grilla-instrumentos.component.html'
})
export class GrillaInstrumentosComponent implements OnInit {

  instrumentos: Instrumento[];

  constructor(private service: InstrumentoService) {}

  ngOnInit(): void {
    this.getInstrumentos();
  }

  async getInstrumentos() {
    this.instrumentos = await this.service.findInstrumentos();
  }

  async deleteInstrumento(id: number) {
    await this.service.deleteInstrumento(id);
    window.location.reload();
  }

}
