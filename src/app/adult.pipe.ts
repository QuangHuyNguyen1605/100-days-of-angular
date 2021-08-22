import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adult',
  pure: false
})
export class AdultPipe implements PipeTransform {
  transform(value) {
    return value.filter(v => v.age >= 18);
  }
}
