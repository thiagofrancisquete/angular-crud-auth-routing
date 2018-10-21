import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

// import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    MaterializeModule, 
    CursosModule,
    AppRoutingModule
    // routing
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
