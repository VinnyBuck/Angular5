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
      <foto url="./assets/img/arduino.png" titulo="arduino">  </foto>
      <foto url="./assets/img/beagle.jpeg" titulo="Beagle">  </foto>
      <foto url="./assets/img/esp.jpg" titulo="Esp">  </foto>
      <foto url="./assets/img/orange.jpg" titulo="Esp">  </foto>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  texto = 'IoTPics';

  constructor(ajax: Http) {
  
    ajax.get('http://localhost:3000/v1/fotos')
  
  }
}
