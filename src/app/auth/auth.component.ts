import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  hide = true; // Propiedad para controlar la visibilidad de la contraseña
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,

    ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Lógica adicional al iniciar el componente
  }

  getLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (data) => {

          console.log("Login correcto");
          this.router.navigateByUrl("/store/home");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}
