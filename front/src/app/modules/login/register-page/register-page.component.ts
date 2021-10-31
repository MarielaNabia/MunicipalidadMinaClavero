import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import {
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
} from 'src/app/core/interfaces/users/users.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(MIN_USERNAME_LENGTH),
          Validators.maxLength(MAX_USERNAME_LENGTH),
        ])
      ),
      password: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?.,])[A-Za-z\\d#$@!%&*?.,]{5,250}$'
          ),
        ])
      ),
    });
  }

  register() {
    if (this.registerForm.valid) {
      // TOOD llamar a la API y en caso de haber un error capturarlo y mostrarselo al usuario con un toastr como en el login
    }
  }
}