import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent
  ],
  providers: []
})
export class CursosModule {}
