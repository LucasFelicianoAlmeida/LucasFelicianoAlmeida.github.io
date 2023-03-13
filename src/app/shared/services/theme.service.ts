import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  hasTheme(): boolean {
    return localStorage.getItem("theme") !== null
  }
  getTheme() {
    return localStorage.getItem("theme")
  }

  toggleTheme() {
    const body = document.querySelector("html")



    if (!this.hasTheme()) {
      localStorage.setItem('theme', 'lightMode')
    }

    if (this.getTheme() === 'lightMode') {
      body?.classList.add("darkMode")
      localStorage.setItem('theme', 'darkMode');
    }
    else {
      body?.classList.remove("darkMode")
      localStorage.setItem('theme', 'lightMode');

    }
  }

  get GetHtml() {
    return <HTMLHtmlElement>document.querySelector('html')
  }


  InitMode(): 'darkMode' | 'lightMode' {
    const theme = localStorage.getItem('theme')
    var html = this.GetHtml;

    if (theme === 'darkMode') {
      html.classList.add(`darkMode`)
      return 'darkMode';
    }

    return 'lightMode';
  }


}
