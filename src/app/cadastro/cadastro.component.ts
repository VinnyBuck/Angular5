import { FotoService } from './../servicos/foto.services';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'app-cadastro',
  templateUrl: `./cadastro.component.html`,
  styles: []
})
export class CadastroComponent implements OnInit {

  //foto: FotoComponent = new FotoComponent()
  foto = new FotoComponent()
  mensagem = ''

  conApi: Http

  //ajax: Http
  constructor(private servico: FotoService) { 
      
      }
    //this.conApi = ajax;



  ngOnInit() {
  }

  salvar(evt: Event){

    evt.preventDefault();

    this.servico.cadastrar(this.foto)
            .subscribe( 
                () => {this.foto  = new FotoComponent()
                       this.mensagem = `Foto ${this.foto.titulo} cadastrada com sucesso`
                       setTimeout(()  => {
                        this.mensagem = ''
                      }, 1500)
              
                }, 
                erro => console.log(erro))
    //let cabecalho = new Headers()
    //cabecalho.append('Content-Type', 'application/json')
    
    //this.conApi.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto),{
    //  headers: cabecalho  
    //}
    //).subscribe(
    //() => {
    //  this.foto = new FotoComponent()
    //},//resposta => console.log(resposta),
    //erro => console.log(erro)
    //)
    //console.log('hello');
    //console.log(this.foto);
  }

}
