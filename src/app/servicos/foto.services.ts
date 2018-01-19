import { FotoComponent } from './../foto/foto.component';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { Observable } from "rxjs";
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    url = 'http://localhost:3000/v1/fotos'

    cabecalho = new Headers()

    
    constructor(private conexaoApi: Http) {

        this.cabecalho.append('Content-Type','application/json')
    }

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get(this.url)
                       .map(
                           resposta => resposta.json()
                        )
    }

    cadastrar(foto: FotoComponent): Observable<Response> {
        return this.conexaoApi.post(   
                            this.url, 
                            JSON.stringify(foto), {
                                headers : this.cabecalho
                            }
                        )
    }

    alterar(foto: FotoComponent): Observable<Response> {
        return this.conexaoApi.put(
                `${this.url}/${foto._id}`,JSON.stringify(foto),{headers: this.cabecalho})

    }

    deletar(foto: FotoComponent): Observable<Response> {
        return this.conexaoApi.delete(`${this.url}/${foto._id}`)
    }

    consultar(id): Observable<FotoComponent>{
        return this.conexaoApi.get(`${this.url}/${id}`).map(resposta => resposta.json())

    }

    salvar(foto: FotoComponent): Observable<Response> {
        if (foto._id) {
            return this.alterar(foto)            
        }
        return this.cadastrar(foto)
    }
}