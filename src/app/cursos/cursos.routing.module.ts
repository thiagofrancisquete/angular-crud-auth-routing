import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NotFoundComponent } from './not-found/not-found.component';

const cursosRoutes: Routes = [
  { path: 'cursos', component: CursosComponent }, 
  { path: 'curso/:id', component: CursoDetalheComponent }, 
  { path: 'notFound', component: NotFoundComponent }, 
]

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule { }
