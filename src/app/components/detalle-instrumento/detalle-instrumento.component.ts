import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { Instrumento } from 'src/types/Instrumento';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html'
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento: Instrumento | null;

  constructor(private service: InstrumentoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getInstrumentoById(Number(id));
    }
  }

  async getInstrumentoById(id: number) {
    this.instrumento = await this.service.findInstrumentoById(id);
  }

}
