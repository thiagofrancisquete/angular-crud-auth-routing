import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  getCursos() {
    return [
      { id: 1, nome: "angular 2" },
      { id: 2, nome: "react" },
      { id: 3, nome: "vue" },
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();

    return cursos.find(curso => curso.id == id)
  }

  constructor() {}
}
