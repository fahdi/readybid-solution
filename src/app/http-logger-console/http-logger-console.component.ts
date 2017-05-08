import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-http-logger-console',
  templateUrl: './http-logger-console.component.html',
  styleUrls: ['./http-logger-console.component.css']
})
export class HttpLoggerConsoleComponent implements OnInit {
  logs = [
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy',
    'Trust worthy'

  ];
  constructor(@Inject('logger') private logger) { }

  ngOnInit() {
  }

}
