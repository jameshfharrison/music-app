import { Component, OnInit } from '@angular/core';
import User from '../User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { userName: '', password: '', _id: '' };
  warning: string = '';
  loading: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.user.userName === '') {
      this.warning = 'Please enter a valid username';
    } else if (this.user.password === '') {
      this.warning = 'Please enter a valid password';
    } else {
      this.loading = true;
      this.auth.login(this.user).subscribe(
        (data) => {
          this.loading = false;
          localStorage.setItem('access_token', data.token);
          this.router.navigate(['/newReleases']);
        },
        (error) => {
          this.loading = false;
          this.warning = error.error.message;
        }
      );
    }
  }
}
