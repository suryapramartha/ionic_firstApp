import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private toastController: ToastController,
    private router: Router
    ) {}

  async showToast(){
    const x = await this.toastController.create({
      message: 'Hello from suryapramartha',
      duration: 3000
    });
    x.present();
  }

  navigateToDetail() {
    this.router.navigateByUrl('/detail');
  }

}
