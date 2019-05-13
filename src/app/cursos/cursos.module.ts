import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { NgModule } from '@angular/core';
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
