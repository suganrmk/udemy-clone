import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class CommonServices {
   // todos$: FirebaseListObservable<any[]>;

    constructor(private http: Http, public afdatabase: AngularFireDatabase, private afAuth: AngularFireAuth,) {
      //  this.todos$ = this.afdatabase.list('/todos');
    }



    get(url) {
        return this.http.get(url)
            .map(data => data.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }


    loginWithGoogle() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (error) {
          alert('${error.message} Please try again')
        })
      }


      getProduct(category){
          return this.afdatabase.list('/udemy/productlist/'+ category);
      }

}
