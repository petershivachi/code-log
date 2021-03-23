import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CodeLogComponent } from './components/code-log/code-log.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CodeLogComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
