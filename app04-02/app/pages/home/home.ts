import {Component, SimpleChange} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HighlightDirective} from '../../components/highlight/highlight.directive';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [HighlightDirective]
})
export class HomePage {
  private bgColor: string;
  constructor(private navCtrl: NavController) {}
}
