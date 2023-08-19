import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private alertCtrl: AlertController) {}

  login() {
    
    // Validar aquí los datos ingresados
    if (this.username.length >= 3 && this.username.length <= 8 && /^\d{4}$/.test(this.password)) {
      // Pasar los datos a la página Home
      this.router.navigate(['/home'], {
        state: { username: this.username },
      });
    } else {
      this.mostrarAlerta()
      // Mostrar mensaje de error
      console.log('Error en los datos ingresados.');
    }
  }

  async mostrarAlerta(){
    const alert = await this.alertCtrl.create({
      message: `Usuario entre 3 y 8 caracteres y contraseña de 4 digitos`,
      buttons: ['OK'],
    });
    await alert.present()
  }

  
}
