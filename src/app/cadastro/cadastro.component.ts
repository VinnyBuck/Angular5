import { FotoService } from './../servicos/foto.services';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


@Component({
  selector: 'app-cadastro',
  templateUrl: `./cadastro.component.html`,
  styles: []
})
export class CadastroComponent implements OnInit {

  //foto: FotoComponent = new FotoComponent()
  foto = new FotoComponent()
  mensagem = ''
  formCadastro: FormGroup

  conApi: Http

  //ajax: Http
  constructor(private servico: FotoService, 
              private rotaAtiva: ActivatedRoute,
              private roteamento: Router,
              construtorForm: FormBuilder) { 

              this.formCadastro = construtorForm.group({
                titulo: ['', Validators.compose([
                  Validators.required,
                  Validators.minLength(3)
                ])],
                url: ['', Validators.compose([
                  Validators.required,
                Validators.minLength(200)])
              ],
              
                descricao: ''
              })

              }

    //this.conApi = ajax;

  ngOnInit() {
    this.carregarFoto()
  }

  carregarFoto(){
    this.rotaAtiva.params.subscribe(
      parametros => 
      { 
        if(parametros.id) 
          { 
            this.servico.consultar(parametros.id).subscribe( fotoResponse => { this.foto = fotoResponse })
          }
      })
    }
  
  salvar(){

    //evt.preventDefault();

    this.servico.salvar(this.foto)
            .subscribe( 
                () => {this.foto  = new FotoComponent()
                       this.mensagem = `Foto ${this.foto.titulo} cadastrada com sucesso`
                       setTimeout(()  => {
                        this.mensagem = ''
                        this.roteamento.navigate([''])
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
