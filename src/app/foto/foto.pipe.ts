import { FotoComponent } from './foto.component';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{

    transform(listaFotos: FotoComponent[], valorRetornado: string){

        //console.log(valorRetornado)
        return listaFotos.filter( foto => {
            if (foto.titulo.toLowerCase().includes(valorRetornado.toLowerCase())){
                return foto
            }
        })
        //return listaFotos
    }

}