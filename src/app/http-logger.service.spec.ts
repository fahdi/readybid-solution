/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpLoggerService } from './http-logger.service';

describe('HttpLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLoggerService]
    });
  });

  it('should ...', inject([HttpLoggerService], (service: HttpLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
