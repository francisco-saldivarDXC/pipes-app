import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipeTsPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Puede volar' : 'No puede volar';
  }

}
