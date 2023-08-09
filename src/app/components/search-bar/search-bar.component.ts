import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  teste: string 
  @Output() public searchEvent = new EventEmitter<string>()
  constructor() {
    this.teste = ""

   }

  ngOnInit(): void {
  }

  searching(input: any){
    console.log(input.value)
    this.searchEvent.emit(input.value)
  }

}
