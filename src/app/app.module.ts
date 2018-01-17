import { PainelModule } from './card/painel.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { roteamento } from './app.routes';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    FormsModule,
    HttpModule,
    roteamento,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
