import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

// import { routing } from './app.routing';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterializeModule,
    // routing <-- constante da rota sem modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
