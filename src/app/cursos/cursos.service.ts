import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [{ nome: 'Angular', id: 1 }, { nome: 'React', id: 2 }];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      } 
    } 
    return null;
  }

  constructor() {}

}
