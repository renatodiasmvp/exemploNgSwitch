import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { LivroComponent } from './livro/livro.component';
import { FilmeComponent } from './filme/filme.component';
import { RevistaComponent } from './revista/revista.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    LivroComponent,
    FilmeComponent,
    RevistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
