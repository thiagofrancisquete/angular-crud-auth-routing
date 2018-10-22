import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoNotFoundComponent } from './cursos/curso-not-found/curso-not-found.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: '404', component: CursoNotFoundComponent}
];

// rotas sao guardadas na const routing
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);