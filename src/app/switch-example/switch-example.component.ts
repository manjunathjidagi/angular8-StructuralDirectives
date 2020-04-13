import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  template: `
    <p>Welcome To Switch Example</p>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You Selected Red</div>
      <div *ngSwitchCase="'orange'">You Selected Orange</div>
      <div *ngSwitchCase="'blue'">You Selected Blue</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>
  `,
  styleUrls: ['./switch-example.component.css']
})
export class SwitchExampleComponent implements OnInit {

  public color="grey"
  constructor() { }

  ngOnInit(): void {
  }

}
