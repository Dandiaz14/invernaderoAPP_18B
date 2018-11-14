import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import{PlantaPage} from "../planta/planta";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  plantaPage = PlantaPage;
  invernaderos = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    console.log(this.navParams.get('usuario'),this.navParams.get('password'));
    this.getInvernaderos();
  }

  clickPlanta(i){
    this.navCtrl.push(this.plantaPage, i);
  }

  getInvernaderos() {
    this.http.get('/invernadero/?usuario=' +
      this.navParams.get('usuario') + '&password=' + this.navParams.get('password'))
      .subscribe(data => {
        console.log(data.text());
        this.invernaderos=data.json();
      }, error1 => {
        console.log('error');
      });
  }
}
