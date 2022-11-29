import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorldComponent } from './hola-mundo.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloWorldComponent]
})
export class holaMundoModule { }
