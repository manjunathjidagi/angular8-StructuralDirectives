import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { ForExampleComponent } from './for-example/for-example.component';

@NgModule({
  declarations: [
    AppComponent,
    IfExampleComponent,
    SwitchExampleComponent,
    ForExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
