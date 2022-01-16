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
  getAgencias(){
    return this.firestore.collection('agencia').snapshotChanges();
      }
      // tslint:disable-next-line:typedef
      createAgencia(agencia: any){
        return this.firestore.collection('agencia').add(agencia);
      }
      // tslint:disable-next-line:typedef
      updateAgencia(id: any, agencia: any){
        return  this.firestore.collection('agencia').doc(id).update(agencia);
      }
      // tslint:disable-next-line:typedef
      deleteAgencia(id: any){
        return  this.firestore.collection('agencia').doc(id).delete();
      }
  }

