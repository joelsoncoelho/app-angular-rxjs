import { Component, Input } from '@angular/core';
import { Livro } from 'src/app/models/interfaces';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {

  @Input() livro!: Livro;
  modalAberto!: boolean;

  onModelChange(evento: boolean) {
    this.modalAberto = evento;
  }

}
