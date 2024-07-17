import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
} from '@angular/forms';
import { BaseService } from '../../../services/service';
import { Router } from '@angular/router';
import { GoolgeUser } from '../../../dto/google-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  originalText = 'Manage Your Tasks!';
  displayText = '';
  cursor = '|';
  showLoginView = true;
  googleUser = new GoolgeUser();

  constructor(private formBuilder: FormBuilder, private service: BaseService, private router: Router) {
    
  }

  ngOnInit() {
    for (let i = 0; i < this.originalText.length; i++) {
      setTimeout(() => {
        this.displayText += this.originalText[i];
      }, 120 * i);
    }
    this.displayCursor();

    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  displayCursor(): void {
    setInterval(() => {
      if (this.cursor == '') {
        this.cursor = '|';
      } else {
        this.cursor = '';
      }
    }, 500);
  }

  login(): void {
    this.service
      .fetchData('users', this.loginForm.get('email').value, 'email')
      .subscribe((pResponse) => {
        if(pResponse[0].password == this.loginForm.get('password').value) {
          this.router.navigate(['dashboard']);
        }
      });
  }

  googleLogIn(): void {
    this.service.googleSignIn().then(({ user, token }) => {
      this.googleUser.email = user.email;
      this.googleUser.userName = user.displayName;
      this.googleUser.access_token = token;
      this.service.fetchData('users', this.googleUser.email, 'email').subscribe(pResponse => {
        if(pResponse.length > 0) {
          localStorage.setItem('loggedUser', JSON.stringify(pResponse[0]));
          this.router.navigate(['/dashboard'])
        } else {
          this.service.addUserFromGoogleLogin(this.googleUser).subscribe(() => {
            localStorage.setItem('loggedUser', JSON.stringify(this.googleUser));
          });
        }
      });
    }).catch((error) => {
      console.error('Error during sign in:', error);
    });
  }
}
