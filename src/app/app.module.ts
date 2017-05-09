import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { HttpLoggerConsoleComponent } from './http-logger-console/http-logger-console.component';
import {HttpLoggerService} from './http-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SimpleFormComponent,
    HttpLoggerConsoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomFormsModule
  ],
  providers: [{provide: 'logger', useClass: HttpLoggerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
