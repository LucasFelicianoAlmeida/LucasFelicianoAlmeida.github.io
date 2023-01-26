import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() src!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
