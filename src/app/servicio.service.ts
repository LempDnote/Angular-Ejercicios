import { Injectable } from '@angular/core';
import { EJERCICIOS } from './coleccion-ejercicios';
import { Ejercicio } from './ejercicio';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor() { }
  getEjercicios():Observable <Ejercicio[]>{
    return of(EJERCICIOS);
  }
}
