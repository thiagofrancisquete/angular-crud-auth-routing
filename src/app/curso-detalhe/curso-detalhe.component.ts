import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route); <- o que eu manipulo ta aqui
    // this.id = this.route.snapshot.params['id']; <- essa solucao tira o snapshot da primeira rota, pra att o id tem que dar f5
   }

  ngOnInit() { // <- quando a classe é inicializada
   this.inscricao = this.route.params.subscribe( // <- params é do tipo BehaviorSubject entao da pra se 'inscrever e ficar escutando' as mudanças de valor
     (params: any) => {
       this.id = params['id'];
     }
   );  
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe(); // <- reset
  }

}
