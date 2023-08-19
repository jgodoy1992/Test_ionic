import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Validar aquí los datos ingresados
    if (this.username.length >= 3 && this.username.length <= 8 && /^\d{4}$/.test(this.password)) {
      // Pasar los datos a la página Home
      this.router.navigate(['/home'], {
        state: { username: this.username },
      });
    } else {
      // Mostrar mensaje de error
      console.log('Error en los datos ingresados.');
    }
  }
}
