import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(@Inject('logger') private logger) { }

  ngOnInit() {
  }

}
