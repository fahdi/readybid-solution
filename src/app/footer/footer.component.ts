import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  isValid = Function;

  constructor() { }

  ngOnInit() {
  }
  handleSubmit() {
    // Submit the form action here
    console.log('the form is valid and button is clicked.');
  }

}
