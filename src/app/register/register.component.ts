import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import RegisterUser from '../RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  registerUser: RegisterUser = { userName: '', password: '', password2: '' };
  warning: string = '';
  success: boolean = false;
  loading: boolean = false;

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerUser.userName == '') {
      this.warning = 'Please enter a valid user name';
      this.success = false;
      this.loading = false;
    } else if (
      this.registerUser.password == '' ||
      this.registerUser.password2 == ''
    ) {
      this.warning = 'Please enter a valid password';
      this.success = false;
      this.loading = false;
    } else if (this.registerUser.password != this.registerUser.password2) {
      this.warning = 'Passwords do not match';
      this.success = false;
      this.loading = false;
    } else {
      this.loading = true;
      this.auth.register(this.registerUser).subscribe(
        (data) => {
          console.log(data);
          this.success = true;
          this.warning = '';
          this.loading = false;
        },
        (error) => {
          this.warning = error.error.message;
          this.success = false;
          this.loading = false;
        }
      );
    }
  }
}
