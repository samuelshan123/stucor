import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedGatepass'
})
export class CompletedGatepassPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
