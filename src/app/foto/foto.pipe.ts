import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{

    transform(listaFotos, valorRetornado){

        console.log(valorRetornado)
        
        return listaFotos
    }

}