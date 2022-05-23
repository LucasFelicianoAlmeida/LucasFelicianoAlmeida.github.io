import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topic'
})
export class TopicPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var topicsArray = ["dotnet","CSharp","Angular","ReactJS","backend","FrontEnd","xamarin","sql","sqlite"]

    return topicsArray[value];
  }

}
