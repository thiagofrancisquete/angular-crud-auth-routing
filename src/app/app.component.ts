import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-auth';

  showMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    /* se inscreve e ve se show é true ou false pra habilitar no component  */
    this.authService.showMenu.subscribe(show => (this.showMenu = show));
  }
}
