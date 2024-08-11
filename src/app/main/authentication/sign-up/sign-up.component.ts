import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseService } from '../../../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    reEnterPassword: new FormControl(''),
  });

  originalText = 'Manage Your Tasks!';
  displayText = '';
  cursor = '|';
  showLoginView = true;

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
}
