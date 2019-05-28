import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async forgotPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Forgot password ?',
      message: 'Wathever your password, you\'re welcome !',
      buttons: ['OK']
    });

    await alert.present();
  }
}
