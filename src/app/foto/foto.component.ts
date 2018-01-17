import { Component,Input } from '@angular/core'
import { Output } from '@angular/core';



@Component ({
    selector:'foto',
    template:`<img class="img-responsive img-rounded center-block" src="{{url}}" [alt]="titulo">`
})  

export class FotoComponent {

    @Input() url;
    @Input() titulo;
}