import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {
  constructor(private readonly alertCtrlr: AlertController) {}
  async showAlert() {
    const alert = await this.alertCtrlr.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showAlert2() {
    const alert = await this.alertCtrlr.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'OK',
          handler: (DATA) => console.log('Click OK', DATA),
        },
      ],

      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}
