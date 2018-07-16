import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  formData = {
    firstname: {
      type: 'text',
      value: 'some name',
      label: 'First Name',
      array: 'firstname'
    },
    lastname: {
      type: 'text',
      value: 'some lastname',
      label: 'Last Name'
    },
    phone: {
      type: 'number',
      value: '38',
      label: 'Phone',
      array: 'phone'
    },
    email: {
      type: 'email',
      value: 'some email',
      label: 'Email'
    },
    gender: {
      type: 'radio',
      value: 'male',
      label: 'Choose your destiny',
      options: [
        { label: 'Female', value: 'female' },
        { label: 'Male', value: 'male' }
      ]
    },
    country: {
      type: 'select',
      value: 'ua',
      label: 'Country',
      options: [
        { label: 'USA', value: 'usa' },
        { label: 'UA', value: 'ua'}
      ]
    },
    inn: {
      type: 'number',
      value: 1488228,
      label: 'Personal INN',
      dependency: {
        field: 'country',
        value: 'usa'
      },
      array: 'inn'
    },
    passport: {
      type: 'text',
      value: 'KO1488228',
      label: 'Passport ID',
      dependency: {
        field: 'country',
        value: 'ua'
      }
    }
  };
  constructor() { }

  getFormData(){
    return this.formData;
  }
}
