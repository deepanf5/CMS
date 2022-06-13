import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId:any;
  password:any;
  form:any;

 

  constructor(private router:Router) { 
    this. form = new FormGroup({
      emailId : new FormControl('', Validators.required),
      password : new FormControl('',Validators.required),
    })
  
  
  }

  ngOnInit(): void {
  }

  login() {
    // console.log(this.form.value.emailId);
    // console.log(this.form.value.password);


    if (this.form.value.emailId === '123@gmail.com' && this.form.value.password === 'admin') {

      // console.log('welcome user');
      this.router.navigate(["dashboard"]);
    }
    else alert ('invalid details');
  }

}
