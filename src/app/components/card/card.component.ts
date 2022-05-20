import { Component, OnInit, Input } from '@angular/core';
import { Card, CategoryType, TopicType} from '../../../models/models'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() CardData: Card | undefined
  constructor() { }

  ngOnInit(): void {
    
  }

  toArray(array: Array<TopicType>)
  {
    array.forEach(a =>{
      console.log(a)
    })
    return array
  }

}
