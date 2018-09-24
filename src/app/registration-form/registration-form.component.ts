import { Component, OnInit } from "@angular/core";
import {MatSnackBar} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistration } from "../user-registration";
import { RegistrationService } from "../registration.service";

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit {
 // user= new UserRegistration;
user:UserRegistration = new UserRegistration();
  hide = true;
  isLinear = true;
  movieGenere: string[]= new Array();
  eventCategory: string[]= new Array();
  languages: Language[] = [
    { value: 'english', viewValue: 'English' },
    { value: 'hindi', viewValue: 'Hindi' },
    { value: 'bengali', viewValue: 'Bengali' },
    { value: 'telugu', viewValue: 'Telugu' },
    { value: 'tamil', viewValue: 'Tamil' },
    { value: 'marathi', viewValue: 'Marathi' },
    { value: 'punjabi', viewValue: 'Punjabi' },
    { value: 'kannada', viewValue: 'Kannada' }
  ];

  constructor(private formBuilder: FormBuilder,private registrationService: RegistrationService) { }

  ngOnInit() {
  }
onclick(m){
this.movieGenere.push(m);
console.log(this.movieGenere);
}
onclickevent(n){
  this.eventCategory.push(n);
  console.log(this.eventCategory);
  }
  onSubmit() {
    this.user.movieGenre = this.movieGenere;
    this.user.eventCategory = this.eventCategory;
      this.registrationService
      .addUser(this.user)
      .subscribe(res => console.log("Saved"));
  }


}