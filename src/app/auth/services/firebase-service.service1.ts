import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({

  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getEmails(){
    return this.firestore.collection('email').snapshotChanges();
      }
      // tslint:disable-next-line:typedef
      createEmail(email: any){
        return this.firestore.collection('email').add(email);
      }
      // tslint:disable-next-line:typedef
      updateEmail(id: any, email: any){
        return  this.firestore.collection('email').doc(id).update(email);
      }
      // tslint:disable-next-line:typedef
      deleteEmail(id: any){
        return  this.firestore.collection('email').doc(id).delete();
      }
  }

