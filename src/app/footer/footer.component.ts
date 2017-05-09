import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Output()
  submitted: EventEmitter<boolean>= new EventEmitter<boolean>();

  handleSubmit() {
    // Submit the form action here
    this.submitted.emit(true);
    console.log('button is clicked.');
  }

}
