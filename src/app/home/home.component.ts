import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public IndexCounter  = new BehaviorSubject<number>(0) 

  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_3rwasyjy.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };

  constructor() { }
  

  private counter = 0

  private interval = setInterval(() => {
    this.counter++;
    if(this.counter > 4)
      this.counter = 0
    this.IndexCounter.next(this.counter);
  },3000)


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  

}
