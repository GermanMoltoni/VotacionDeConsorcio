import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//------------
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//-------
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth) {
  }
  onClick(){
    //this.user = firebase.auth().signInWithEmailAndPassword(this.mail, this.password).catch(function(error) {
      // Handle Errors here.
       
      //console.log(error.message);
      // ...
    //});
    //console.log(this.user);
  }
  SocialLogin(nombre:string){
    switch (nombre) {
      case 'facebook':
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res))
      .catch();
        break;
      case 'google':
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => console.log(res));
        break;
      case 'twitter':
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res => console.log(res));
        break;
      default:
        break;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
