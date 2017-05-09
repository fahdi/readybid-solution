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

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})

export class SimpleFormComponent implements OnInit, AfterViewChecked {

  textNumberForm: NgForm;
  @ViewChild('textNumberForm') currentForm: NgForm;
  @Output() isValid = new EventEmitter();

  // Defining the validation error messages
  validationMessages = {
    'theText': {
      'required': 'Text is required.',
      'maxlength': 'Text cannot be more than 50 characters long.',
    },
    'theNumber': {
      'required': 'The number is required.',
      'pattern': 'Only two decimal places are allowed'
    }
  };

  formValues: FormData = {
    theText: 'text',
    theNumber: 12.33
  };

  formErrors = {
    'theText': '',
    'theNumber': ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  onSubmit() {
    console.log('form submitted');
  }

  formChanged() {

    if (this.currentForm.valid) {
      console.log('emit valid');
      this.isValid.emit(true);
    } else {
      console.log('emit invalid');
      this.isValid.emit(false);
    }

    if (this.currentForm === this.textNumberForm) {
      console.log('did work');
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
          this.formErrors[field] += messages[key] + ' ';
        }

      }
    }
  }

}

export class FormData {
  theText: string;
  theNumber: number;
}

