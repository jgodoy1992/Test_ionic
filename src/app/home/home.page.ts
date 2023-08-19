import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthdate: string = '';

  constructor(private router: Router, private alertCtrl: AlertController) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['username']) {
      this.username = state['username'];
    }
  }

  async showInfo() {
    const alert = await this.alertCtrl.create({
      header: 'Usuario',
      message: `Su nombre es: ${this.firstName} ${this.lastName}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthdate = '';
  }
}