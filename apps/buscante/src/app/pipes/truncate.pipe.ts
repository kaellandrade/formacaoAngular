import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(texto: string, inicio: number, fim: number): string {
    return `${texto.slice(inicio, fim)} ...`;
  }
}
