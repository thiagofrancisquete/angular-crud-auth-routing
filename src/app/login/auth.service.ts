import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  /* ↓↓↓ usado para emitir o evento de login ↓↓↓ */
  showMenu = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  /* verifica se o usuario esta autenticado para liberar acesso ao menu */
  fazerLogin(user: Usuario) {
    if (user.nome === 'leandra@email.com' && user.senha == '123456') {
      this.usuarioAutenticado = true; /* permitindo acesso  */
      this.showMenu.emit(true); /* depois de autenticado mostra o menu  */

      this.router.navigate(['/']);
    } else {
      /* bloqueando o acesso do menu  */
      this.usuarioAutenticado = false;
      this.showMenu.emit(false);
    }
  }

  /* usado para guarda de rotas  */
  userIsLogged() {
    return this.usuarioAutenticado;
  }
}
