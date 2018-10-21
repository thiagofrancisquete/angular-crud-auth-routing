import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, CursosComponent, CursoDetalheComponent, CursoNotFoundComponent],
  imports: [BrowserModule, MaterializeModule, AppRoutingModule], // routing
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
