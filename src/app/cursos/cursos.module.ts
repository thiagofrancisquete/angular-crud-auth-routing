import { NgModule } from '@angular/core';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [CursosListaComponent]
})
export class CursosModule { }
