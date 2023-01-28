import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  learnings: Learning[] = [
    {title: 'Angular', subtitle: '2 years', img: '../assets/angular.svg', style: {transform: 'translateX(0px)'}},
    {title: 'Dotnet', subtitle: '2 years', img: '../assets/dot-net.svg',style: {transform: 'translateX(-100px)'}},
    {title: 'Xamarin', subtitle: '2 years', img: '../assets/xamarin.svg', style: {transform: 'translateX(-100px)'}},
    {title: 'Figma', subtitle: '5 months', img: '../assets/figma.svg',style: {transform: 'translateX(0)'}},
  ]
  title = 'portfolio';
}

interface Learning{
  title: string
  subtitle: string
  img: string
  style?: Object
}
