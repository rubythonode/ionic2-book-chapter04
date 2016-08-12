import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TemperatureConverterPipe} from '../../pipes/TemperatureConverterPipe';


@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TemperatureConverterPipe]
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
