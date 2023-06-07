import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { generateImageName } from 'src/app/util/InstrumentoUtil';
import { Instrumento } from 'src/types/Instrumento';

@Component({
  selector: 'app-form-instrumento',
  templateUrl: './form-instrumento.component.html'
})
export class FormInstrumentoComponent implements OnInit {

  instrumento: Instrumento;
  imagen: File;

  constructor(private service: InstrumentoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getInstrumentoById(Number(id));
  }

  async getInstrumentoById(id: number) {
    this.instrumento = await this.service.findInstrumentoById(id) || new Instrumento();
  }

  handleChangeImagen(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const newImagen = inputElement.files[0];
      this.imagen = newImagen;
    }
  }

  async submit(instrumento: Instrumento) {
    
    if (this.imagen) {
      const imagenName = generateImageName();
      instrumento.imagen = imagenName;
      await this.service.saveImageInstrumento(this.imagen, imagenName);
    }

    if (instrumento.id === 0) {
      this.save(instrumento);
    } else {
      this.update(instrumento.id, instrumento);
    }

    window.location.href = "grilla";
  }

  async save(instrumento: Instrumento) {
    await this.service.saveInstrumento(instrumento);
  }

  async update(id: number, instrumento: Instrumento) {
    await this.service.updateInstrumento(id, instrumento);
  }

}