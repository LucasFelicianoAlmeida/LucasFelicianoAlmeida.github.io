import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topic'
})
export class TopicPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var topicsArray = [".NET","C#","Angular","ReactJS","Backend","FrontEnd","Xamarin Forms"]
    return topicsArray[value];
  }

}
