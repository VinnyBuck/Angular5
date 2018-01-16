import { Component,Input } from '@angular/core'



@Component ({
    selector:'foto',
    template:`<img class="img-responsive" src="{{url}}" [alt]="titulo">`
})  

export class FotoComponent {

    @Input() url;

}