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

  constructor(private formBuilder: FormBuilder, private service: BaseService, private router: Router) {
    // this.service.googleSignUp()
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
      .fetchData('users', this.loginForm.get('userName').value, 'userName')
      .subscribe((pResponse) => {
        if(pResponse[0].password == this.loginForm.get('password')) {
          this.router.navigate(['dashboard']);
        }
      });
  }
}
