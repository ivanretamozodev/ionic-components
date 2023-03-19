import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {
  result!: string;
  constructor(public actionSheetCtlr: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtlr.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          icon: 'trash-bin-outline',
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          icon: 'share-social-outline',
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          icon: 'close-outline',
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}
