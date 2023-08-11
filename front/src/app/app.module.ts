import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './modules/question/question.component';


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
