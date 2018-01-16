import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        {{texto}}
      </h1>
        <form>
          <div class="col-md-12 form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Filtrar pelo nome da placa">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    <br>
    <foto url="./assets/img/arduino.png" titulo="arduino">  </foto>
    <foto url="./assets/img/beagle.jpeg" titulo="Beagle">  </foto>
    <foto url="./assets/img/esp.jpg" titulo="Esp">  </foto>
  `,
  styles: []
})
export class AppComponent {
  texto = 'IoTPics';
}
