import {
  Component,
  AfterViewChecked,
  AfterViewInit,
  ViewChild,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validator} from '@angular/forms';
import {FormData} from './formdata.model';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})

export class SimpleFormComponent implements AfterViewChecked {
  @Input()
  isValid = true;

  @Output()
  validFlag: EventEmitter<boolean> = new EventEmitter<boolean>();

  textNumberForm: NgForm;
  @ViewChild('textNumberForm') currentForm: NgForm;

  formValues: FormData = {
    theText: 'text',
    theNumber: 12.33
  };

  // Defining the validation error messages
  validationMessages = {
    'theText': {
      'required': 'Text is required.',
      'maxlength': 'Text cannot be more than 50 characters long.',
    },
    'theNumber': {
      'required': 'The number is required.',
      'pattern': 'Only postive numbers with two decimal places are allowed',
      'max' : '10,000 is the maximum number allowed'
    }
  };

  formErrors = {
    'theText': '',
    'theNumber': ''
  };

  ngAfterViewChecked() {
    this.formChanged();
  }

  onSubmit() {
    console.log('form submitted');
  }

  formChanged() {

    if (this.currentForm.valid) {
      console.log('emit valid');
      this.validFlag.emit(true);
    } else {
      console.log('emit invalid');
      this.validFlag.emit(false);
    }

    if (this.currentForm === this.textNumberForm) {
      return;
    }

    this.textNumberForm = this.currentForm;

    if (this.textNumberForm) {
      this.textNumberForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.textNumberForm) {
      return;
    }
    const form = this.textNumberForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (typeof messages[key] !== 'undefined') {
            this.formErrors[field] += messages[key] + ' ';
          }

        }

      }
    }
  }

}
