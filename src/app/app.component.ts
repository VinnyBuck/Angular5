import { Component } from '@angular/core';
import { UrlResolver } from '@angular/compiler';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <header class="jumbotron">
          <h1 class="text-center">
            {{texto}}
          </h1>
    </header>

    <div class="container" style="text-align:center">
      <form>
        <div class="col-md-12 form-group">      
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Filtrar pelo nome da placa">
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>

      <div class="row">
      {{listaFotos}}
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  texto = 'IoTPics';

  listaFotos: Array<Object> = []
  //listaFotos: any[];

  constructor(ajax: Http) {
  
    ajax.get('http://localhost:3000/v1/fotos')
      .subscribe(
        resposta => {
          this.listaFotos = resposta.json()
        },
        erro => console.log(erro)
        //(function(resposta) {
        //console.log((resposta.json()));  
      )
  }
}
