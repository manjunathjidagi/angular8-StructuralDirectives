import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-example',
  template: `
    <p>Welcome to For Example</p>

    <div *ngFor="let fruit of fruits">
      <h3>{{fruit}}</h3>
    </div>

    <div *ngFor="let fruit of fruits; index as i">
      <h3>{{i}} - {{fruit}}</h3>
    </div>

    <div *ngFor="let fruit of fruits; first as f;">
      <h3>{{f}} - {{fruit}}</h3>
    </div>

    <div *ngFor="let fruit of fruits; first as f; last as l; odd as o; even as e">
      <h3>{{f}} _ {{l}} _ {{o}} _ {{e}} - {{fruit}}</h3>
    </div>

  `,
  styleUrls: ['./for-example.component.css']
})
export class ForExampleComponent implements OnInit {

  public fruits = ["Apple", "Orange", "Grapes", "WaterMelon"]

  constructor() { }

  ngOnInit(): void {
  }

}
