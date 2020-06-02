import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { CursosService } from "./cursos.service";
import { CursosRoutingModule } from "./cursos.routing.module";

@NgModule({
  declarations: [CursosComponent, NotFoundComponent, CursoDetalheComponent],
  imports: [CommonModule, CursosRoutingModule],
  providers: [CursosService],
})
export class CursosModule {}
