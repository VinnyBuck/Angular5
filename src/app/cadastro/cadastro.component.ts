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

  conApi: Http

  constructor(ajax: Http) { 

    this.conApi = ajax;
  }



  ngOnInit() {
  }

  salvar(evt: Event){

    evt.preventDefault();

    let cabecalho = new Headers()

    cabecalho.append('Content-Type', 'application/json')

    this.conApi.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto),{
      headers: cabecalho  
    }
  ).subscribe(
    () => {
      this.foto = new FotoComponent()
    },//resposta => console.log(resposta),
    erro => console.log(erro)
    
  )
    //console.log('hello');
    //console.log(this.foto);
  }

}
