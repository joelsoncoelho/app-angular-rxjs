import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent {

  listaLivros: [] = [];
  campoBusca = '';

  constructor(private livroService: LivroService){}

  buscarLivros(){
    this.livroService.buscar(this.campoBusca)
      .subscribe(
        {
            next: (APIRetorno) => {
                   console.log(APIRetorno);
            },
            error: (erro) => {
                    console.log(erro)
            },
            complete() {
               console.log('done');
          }
        }
    )
  }

}
