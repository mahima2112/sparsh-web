import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:boolean;
  login:boolean;
  checkoutForm;
  signupform;
  loginform;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.signup = false;
    this.login = true;
    this.signupform = this.formBuilder.group({
      name: '',
      phone:'',
      email: '',
      password: ''
    });
    this.loginform = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit() {
  }

  BackToHome(){
    let url = '/'
    this.router.navigateByUrl(url);
  }

  togglesignup(){
    this.signup = true;
    this.login = false;
  }
  togglelogin(){
    this.signup = false;
    this.login = true;
  }

  signUp(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    // console.warn(data)
    this.http.post('http://localhost:3000/signup',JSON.stringify(data),options).subscribe((responseData)=>{
      console.log(responseData)
      if(responseData['success'] == true)
      {
        // this.getSchools();
        let url = '/home'
        this.router.navigateByUrl(url);
      }
    })
  }


  logIn(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    // console.warn(data)
    this.http.post('http://localhost:3000/login',JSON.stringify(data),options).subscribe((responseData)=>{
      console.log(responseData)
      if(responseData['success'] == true)
      {
        let url = '/home'
        this.router.navigateByUrl(url);
      }
    })
  }

  buttonselect(data){
    console.log(data)
    if(this.signup == true){
      this.signUp(data);
    }
    else{
      this.logIn(data);
    }
  }

}
