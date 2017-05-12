import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, arg1, arg2, arg3 ): string {

        console.log(value);
        console.log(arg1);
        console.log(arg2);
        console.log(arg3);

        return "Hola mundo!";
        
    }
}