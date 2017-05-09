import { Component, Inject, AfterViewInit } from '@angular/core';
import { HttpLoggerService } from './http-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isValid: boolean;

  constructor(@Inject('logger') private logger) {
  }

  setIsValid(value) {
    console.log(value);
    this.isValid = value;
  }

  getIsValid() {
    console.log(!!this.isValid);
    return !!this.isValid;
  }
  onButtonClick(event) {
    console.log('Button in the footer clicked ' + event + '\n');
  }

}
