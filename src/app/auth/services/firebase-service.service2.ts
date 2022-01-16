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
  getTelefonos(){
    return this.firestore.collection('telefono').snapshotChanges();
      }
      // tslint:disable-next-line:typedef
      createTelefono(telefono: any){
        return this.firestore.collection('telefono').add(telefono);
      }
      // tslint:disable-next-line:typedef
      updateTelefono(id: any, telefono: any){
        return  this.firestore.collection('telefono').doc(id).update(telefono);
      }
      // tslint:disable-next-line:typedef
      deleteTelefono(id: any){
        return  this.firestore.collection('telefono').doc(id).delete();
      }
  }

