import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {
  @Input() Topic:number = 0 
  @Input() public isActive = false 
  @Input() public canBeSelected = false 
  @Output() public selected  = new EventEmitter<{hasBeenSelected: boolean, topic: number}>()
  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void{
    this.isActive = !this.isActive
    console.log(this.isActive)
    this.selected.emit({hasBeenSelected: !this.isActive, topic: this.Topic})
  }

}
