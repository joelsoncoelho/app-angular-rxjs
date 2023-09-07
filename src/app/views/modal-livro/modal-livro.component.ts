import { Component, EventEmitter, Input, Output } from '@angular/core';

const body: any = document.querySelector("body");

@Component({
  selector: 'app-modal-livro',
  templateUrl: './modal-livro.component.html',
  styleUrls: ['./modal-livro.component.css']
})
export class ModalLivroComponent {

  constructor() { }

  @Input() livro!: Object;
  statusModal: boolean = true;
  @Output() mudouModal = new EventEmitter()

  fecharModal() {
    this.statusModal = false
    this.mudouModal.emit(this.statusModal)

    body.style.overflow = "scroll"
  }

  esconderScroll(){
    if(this.statusModal == true ) {
      body.style.overflow = "hidden";
    }
  }

  lerPrevia() {
    window.open( '_blank');
  }

}
