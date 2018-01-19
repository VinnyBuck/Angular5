import { FotoService } from './../servicos/foto.services';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FotoComponent } from "../foto/foto.component";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: [`.row {
    margin-bottom: 1.4em;
}`]

})
export class ListagemComponent implements OnInit {
  texto = 'IoTPics';

  //listaFotos: Array<Object> = []
  listaFotos: FotoComponent[] = []
  foto = new FotoComponent()
  mensagem = '' 

  constructor(private servico : FotoService) {
      
    servico.listar().subscribe(
                        JsonListaFotos => {
                          // console.log(listaFotos);
                          this.listaFotos = JsonListaFotos
                        },
                        erro => console.log(erro));
  }

  ngOnInit() {
  }

  excluir(foto: FotoComponent) {
    this.servico.deletar(foto).subscribe( () => { 
                                    //console.log(`foto ${foto.titulo} apagada com sucesso`)
                                    this.mensagem = (`foto ${foto.titulo} apagada com sucesso`)
                                    this.listaFotos = this.listaFotos.filter( fotoFilter => fotoFilter != foto)
                                    setTimeout(()  => {
                                      this.mensagem = ''
                                    }, 1500)
/*                                     this.listaFotos = this.listaFotos.filter ( fotoFilter => {

                                      if(fotoFilter != foto) {
                                        return fotoFilter
                                      }
                                    }) */
                                    , erro => console.log(erro)
                                    
    //console.log(`foto ${this.foto.titulo} excluida`);
    
  })}

}
