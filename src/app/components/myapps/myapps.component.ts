import { Component, OnInit } from '@angular/core';
import { Card, CategoryType, TopicType } from 'src/models/models';

@Component({
  selector: 'app-myapps',
  templateUrl: './myapps.component.html',
  styleUrls: ['./myapps.component.scss']
})
export class MyappsComponent implements OnInit {
  public Elements = Array<Card>()
  constructor() { }

  ngOnInit(): void {
    this.Elements = [
      {title: "The Watcher",subtitle: "teste",description: "Watcher is a daily habits diary that makes you more productive.", link: "https://play.google.com/store/apps/details?id=com.teixeiracompany.watcher", category: CategoryType.App, topics: [TopicType.xamarin,TopicType.dotnet]}
    ]
  }

}
