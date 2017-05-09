import { Component, Inject } from '@angular/core';
import { HttpLoggerService } from './http-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isValid = false;

  constructor(@Inject('logger') private logger) {
  }


  isFormValid() {
    // console.log('method validation called');
    // Will return true if form is valid and is ready to be submitted
    return false;
  }
}
