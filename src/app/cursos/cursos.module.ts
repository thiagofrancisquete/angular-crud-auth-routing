// <--  ** MODULO DE FUNCIONALIDADE ** -->
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CursosService } from './cursos.service';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  imports: [AppRoutingModule, CommonModule, RouterModule, CursosRoutingModule],
  exports: [],
  declarations: [CursosComponent, CursoDetalheComponent, NotFoundComponent],
  providers: [CursosService]
})
export class CursosModule {}
