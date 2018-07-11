import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TextComponent } from './fields/text/text.component';
import { EmailComponent } from './fields/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TextComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
