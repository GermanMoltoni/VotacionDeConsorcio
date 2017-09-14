import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//------------
 import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';

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
  private user:any;
  public password:string;
  public mail:string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth) {
  }
  onClick(){
    this.user = firebase.auth().signInWithEmailAndPassword(this.mail, this.password).then(data =>this.user = data).catch(function(error:any) {
 
      switch (error.code) {
        case 'auth/invalid-email':
           ;
          break;
        case 'auth/wrong-password':
          
          break;
        case 'auth/user-disabled':
          
          break;
        case 'auth/user-not-found':
          
          break;
        default:
          break;
      }
    
    });
    //this.navCtrl.push(HomePage);
   }
  SocialLogin(nombre:string){
    switch (nombre) {
      case 'facebook':
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => this.user = res)
      .catch();
       this.navCtrl.push(HomePage);
        break;
      case 'google':
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => this.user = res);
         this.navCtrl.push(HomePage);
        break;
      case 'twitter':
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res => this.user = res);
       this.navCtrl.push(HomePage);
      break;
      default:
        break;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
   
    
  
}
