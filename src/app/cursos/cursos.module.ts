import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent
  ],
  providers: [CursosService]
})
export class CursosModule {}
