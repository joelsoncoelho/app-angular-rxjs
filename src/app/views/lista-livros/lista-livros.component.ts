import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent /*implements OnDestroy */{



 // listaLivros!: Livro[];
  campoBusca = new FormControl();
  //subscription!: Subscription;
  //livro!: Livro;


  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(PAUSA),
      filter((valorDigitado)=> valorDigitado.length >= 3),
      tap(()=> console.log('Fluxo inicial')),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.livroService.buscar(valorDigitado)),
      tap((retornoAPI)=> console.log(retornoAPI)),
      map((items)=> /*this.listaLivros =*/ this.livrosResultadoParaLivros(items)
      )
    )

  constructor(private livroService: LivroService){}

  /*
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  */

   /*
  buscarLivros(){
    this.subscription = this.livroService.buscar(this.campoBusca)
      .subscribe(
        {
            next: (items) => {
              console.log('Requições ao servidor:');

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
  */

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

  /*
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
*/


}
