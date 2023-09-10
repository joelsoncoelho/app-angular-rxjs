import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnDestroy{

  listaLivros!: Livro[];
  campoBusca = '';
  subscription!: Subscription;
  livro!: Livro;

  constructor(private livroService: LivroService){}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buscarLivros(){
    this.subscription = this.livroService.buscar(this.campoBusca)
      .subscribe(
        {
            next: (items) => {
              this.listaLivros = this.livrosResultadoParaLivros(items)
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

  livrosResultadoParaLivros(items: any[]): Livro[] {

    const livros: Livro[] = []

    items.forEach(item => {
      livros.push(this.livro = {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.previewLink,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail
      })
    })
    return livros;
  }



}
