import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, maxLength: number): unknown {
    let slice = text.slice(0, maxLength);
    if (text.length > maxLength)
    {
      slice += '...';
      return slice;
    }

    return text;
  }

}
