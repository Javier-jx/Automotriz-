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
  getDistribuciones(){
    return this.firestore.collection('distribucion').snapshotChanges();
      }
      // tslint:disable-next-line:typedef
      createDistribucion(distribucion: any){
        return this.firestore.collection('distribucion').add(distribucion);
      }
      // tslint:disable-next-line:typedef
      updateDistribucion(id: any, distribucion: any){
        return  this.firestore.collection('distribucion').doc(id).update(distribucion);
      }
      // tslint:disable-next-line:typedef
      deleteDistribucion(id: any){
        return  this.firestore.collection('distribucion').doc(id).delete();
      }
  }

