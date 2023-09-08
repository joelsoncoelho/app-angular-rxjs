import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnDestroy{

  listaLivros: [] = [];
  campoBusca = '';

  subscription!: Subscription;

  constructor(private livroService: LivroService){}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buscarLivros(){
    this.subscription = this.livroService.buscar(this.campoBusca)
      .subscribe(
        {
            next: (APIRetorno) => {
                   console.log(APIRetorno);
            },
            error: (erro) => {
                    console.error(erro)
            },
            complete() {
               console.log('done');
          }
        }
    )
  }

}
