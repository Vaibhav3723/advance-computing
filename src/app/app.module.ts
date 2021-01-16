import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonCompsModule } from './common/common-comp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonCompsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
