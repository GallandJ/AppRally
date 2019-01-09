import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimesService } from '../../services/timesService';

@Component({
  selector: 'temps-home',
  templateUrl: 'temps.html'
})
export class TempsPage {

  private times: any;

  constructor(public navCtrl: NavController, public service: TimesService) {
    this.getTimes();
  }

  getTimes(){
    this.service.getTimes()
    .then(data => {
      this.times = data;
      console.log(this.times);
    })
  }

}
