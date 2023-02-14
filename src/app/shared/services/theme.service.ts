import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  hasTheme() {
    return localStorage.getItem("theme") !== null
  }
  getTheme() {
    return localStorage.getItem("theme")
  }

  toggleTheme() {
    const body = document.querySelector("html")
    body?.classList.toggle("darkMode")
  }

  get GetHtml() {
    return <HTMLHtmlElement>document.querySelector('html')
  }
  InitMode() {
    const theme = localStorage.getItem('theme')
    var html = this.GetHtml;


  }
}
