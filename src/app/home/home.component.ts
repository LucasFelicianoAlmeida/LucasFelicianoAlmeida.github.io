import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public IndexCounter  = new BehaviorSubject<number>(0) 
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
