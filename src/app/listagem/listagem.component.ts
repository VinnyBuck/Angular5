import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []

})
export class ListagemComponent implements OnInit {
  texto = 'IoTPics';
  listaFotos: Array<Object> = []

  constructor(http : Http) {
    http.get('http://localhost:3000/v1/fotos')
      .subscribe(
        resposta => {
          this.listaFotos = resposta.json()
        },
      erro => console.log(erro)
      //(function(resposta) {
      //console.log((resposta.json()));  
    );
   }

  ngOnInit() {
  }

}