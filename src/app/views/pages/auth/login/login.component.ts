import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),
    password: new FormControl(''),
  });

  constructor(private router: Router, private toastrService: ToastrService) {}

  ngOnInit(): void {}

  handleLogin() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;

    this.isLoading = true;
    setTimeout(() => {
      if (email === 'toinv2610@gmail.com' && password === 'test') {
        this.router.navigate(['/']);
        this.toastrService.success('Success!');
      } else {
        this.toastrService.error('Email or password is invalid!');
      }
      this.isLoading = false;
    }, 3000);
  }
}
