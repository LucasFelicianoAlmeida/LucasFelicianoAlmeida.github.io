import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  learnings: Learning[] = [
    {title: 'Angular', subtitle: '2 years', img: '../assets/angular.png'},
    {title: 'Ionic', subtitle: '1 month', img: '../assets/angular.png'},
    {title: 'Dotnet', subtitle: '1 month', img: '../assets/angular.png'},
    {title: 'Figma', subtitle: '1 month', img: '../assets/angular.png'},
  ]
  title = 'portfolio';
}

interface Learning{
  title: string
  subtitle: string
  img: string
}
