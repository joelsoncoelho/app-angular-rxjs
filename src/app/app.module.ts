import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';
import { ModalLivroComponent } from './views/modal-livro/modal-livro.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LivroComponent } from './components/livro/livro.component';
import { LivroService } from './service/livro.service';
import { AutoriaPipe } from './pipes/autoria.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LivroComponent,
    ListaLivrosComponent,
    ModalLivroComponent,
    AutoriaPipe,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
