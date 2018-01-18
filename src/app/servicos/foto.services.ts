import { FotoComponent } from './../foto/foto.component';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

export class FotoService {

    url = 'http://localhost:3000/v1/fotos'

    cabecalho = new Headers()

    
    constructor(private conexaoApi: Http) {

        this.cabecalho.append('Content-Type','application/json')
    }

    listar(): Observable<any> {
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

    alterar() {}

    deletar() {}

    consultar(){}
}