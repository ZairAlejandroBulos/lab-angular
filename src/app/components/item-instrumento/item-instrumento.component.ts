import { Component, Input, OnInit } from '@angular/core';
import { Instrumento } from 'src/types/Instrumento';

@Component({
  selector: 'app-item-instrumento',
  templateUrl: './item-instrumento.component.html'
})
export class ItemInstrumentoComponent implements OnInit {
  
  @Input() instrumento: Instrumento

  constructor() {}

  ngOnInit(): void {}

}
