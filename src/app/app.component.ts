import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from './shared/models/project';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hideAndShow', [
      state('show', style({
        opacity: 1
      })),

      state('hide', style({
        opacity: 0
      })),


      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-int'))
    ]),
  ]
})
export class AppComponent {
  learnings: Learning[] = [
    { title: 'Angular', subtitle: '2 years', img: '../assets/angular.svg', style: { transform: 'translateX(0px)' } },
    { title: 'Dotnet', subtitle: '2 years', img: '../assets/dot-net.svg', style: { transform: 'translateX(-100px)' } },
    { title: 'Xamarin', subtitle: '2 years', img: '../assets/xamarin.svg', style: { transform: 'translateX(-100px)' } },
    { title: 'Figma', subtitle: '5 months', img: '../assets/figma.svg', style: { transform: 'translateX(0)' } },
  ]

  projects: Project[] = [
    { title: 'Watcher: Habits and Tasks', description: `Watcher is my first app on Play Store. It's a a daily habit reminder to help you in day to day tasks. I challenge myself by using local database (SQLite)`, cards: [6, 0, 8], imgs: [{ imgURL: '../assets/watcher1.webp' }, { imgURL: '../assets/watcher2.webp' }], link: 'https://play.google.com/store/apps/details?id=com.teixeiracompany.watcher&hl=pt_BR&gl=US', githubURL: 'github', type: 'mobile' },
    { title: 'Ailos Challenge', description: 'That was a company challenge I used to improve my skills in responsive layout, mocking and testing.', cards: [2, 5], imgs: [{ imgURL: 'https://i.imgur.com/LsTSQRM.png' }, { imgURL: 'https://i.imgur.com/2aLAEjw.png' }], link: undefined, githubURL: 'https://github.com/lucass-teixeira/Ailos-Challenge', type: 'web' }
  ]

  developerMode: boolean = false;

  constructor(public themeService: ThemeService) {
    const theme = this.themeService.InitMode();

    console.log(theme);
    if (theme === 'darkMode')
      this.developerMode = true;
  }


  get stateName() {
    return this.developerMode ? 'show' : 'hide';
  }

  get returnText() {
    return this.developerMode ? 'My Name is' : "When I don't code...";
  }

  toggle() {
    this.developerMode = !this.developerMode;

    // const element = <HTMLImageElement>document.getElementsByClassName('img-rectangle')[0];

    // const imgSrc = this.developerMode ? 'rectangle1.svg' : 'rectangle.svg';
    // element.src = '../assets/' + imgSrc;
    // console.log(element);
    this.themeService.toggleTheme();
  }
  title = 'portfolio';
}

interface Learning {
  title: string
  subtitle: string
  img: string
  style?: Object
}
