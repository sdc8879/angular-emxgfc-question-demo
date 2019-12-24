import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { OptionsComponent } from './options/options.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ButtonsComponent, OptionsComponent, QuestionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
