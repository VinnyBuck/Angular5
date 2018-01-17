import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";

@Component({
  selector: 'app-cadastro',
  templateUrl: `./cadastro.component.html`,
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent()
  
  constructor() { }



  ngOnInit() {
  }

  salvar(evt: Event){

    evt.preventDefault();

    console.log('hello');

    console.log(this.foto);
    
    
  }

}
