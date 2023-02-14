import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from './shared/models/project';
import { ThemeService } from './shared/services/theme.service';

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

  projects: Project[] = [
    {title: 'Watcher: Habits and Tasks', description: 'An daily habit reminder to help you in day to day tasks', cards: [6,0,8], imgs: [ {imgURL: '../assets/watcher1.webp'},{imgURL: '../assets/watcher2.webp'}] , link:'', githubURL:'github' },
    {title: 'Ailos Challenge', description: 'An daily habit reminder to help you in day to day tasks', cards: [6,0,8,5], imgs: [ {imgURL: '../assets/watcher1.webp'},{imgURL: '../assets/watcher2.webp'}] , link:'', githubURL:'' }
  ]

  developerMode: boolean = false;

  constructor(public themeService: ThemeService){

  }
  toggle(){
    this.developerMode = !this.developerMode;

    const element = <HTMLImageElement>document.getElementsByClassName('img-rectangle')[0];

    const imgSrc = this.developerMode ? 'rectangle1.svg' : 'rectangle.svg';
    element.src = '../assets/' + imgSrc;
    // console.log(element);
    this.themeService.toggleTheme();
  }
  title = 'portfolio';
}

interface Learning{
  title: string
  subtitle: string
  img: string
  style?: Object
}
