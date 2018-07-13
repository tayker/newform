import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  formData: any;
  formProps = [];

  constructor(private ds: DataService,
              private fb: FormBuilder) {

  }

  ngOnInit() {
    const formData = {};
    this.formData = this.ds.getFormData();

    for (const prop of Object.keys(this.formData)) {
      formData[prop] = new FormControl(this.formData[prop].value);

      this.formProps.push({
        key: prop,
        label: this.formData[prop].label,
        value: this.formData[prop].value,
        type: this.formData[prop].type,
        options: this.formData[prop].options,
        dependency: this.formData[prop].dependency,
        array: this.formData[prop].array
      });
      this.myForm = this.fb.group(formData);
    }
  }
  submit() {
    console.log(this.myForm);
  }
  isDependent(dependent: any): boolean {
    if (dependent) {
      return dependent.value === this.myForm.controls[dependent.field].value;
    }
    else { return true; }
  }
  addContact(arrayField){
    console.log(this.myForm.get[arrayField])
    // (<FormArray>this.myForm.get[arrayField]).push(
    //   new FormGroup({
    //     value: new FormControl('')
    //   })
    // );
  }
}
