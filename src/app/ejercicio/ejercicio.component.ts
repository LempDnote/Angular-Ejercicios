import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  ejercicio = "Flexiones"
  constructor() { }

  ngOnInit(): void {
  }

}
