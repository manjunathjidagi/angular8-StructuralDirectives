import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-example',
  template: `
    <p>Welcome to If Condition</p>
    <p *ngIf="true">I am rendered</p>
    <p *ngIf="false">I am not rendered</p>

    <p *ngIf="greetMe; else elseBlock">
      Heyy, Welcome
    </p>
    <ng-template #elseBlock>
      <p>
        Heyy, Stay Safe
      </p>
    </ng-template>

    <div *ngIf="displayBlock; then thenBlock; else elseBlock2;"></div>
    <ng-template #thenBlock>
      <p>
        I am from Then Block
      </p>
    </ng-template>
    <ng-template #elseBlock2>
      <p>
        I am from Else Block
      <p>
    </ng-template>

  `,
  styleUrls: ['./if-example.component.css']
})
export class IfExampleComponent implements OnInit {
  public greetMe = false
  public displayBlock = false
  constructor() { }
  ngOnInit(): void {
  }
}
