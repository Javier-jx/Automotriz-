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
  getVentas(){
    return this.firestore.collection('venta').snapshotChanges();
      }
      // tslint:disable-next-line:typedef
      createVenta(venta: any){
        return this.firestore.collection('venta').add(venta);
      }
      // tslint:disable-next-line:typedef
      updateVenta(id: any, venta: any){
        return  this.firestore.collection('venta').doc(id).update(venta);
      }
      // tslint:disable-next-line:typedef
      deleteVenta(id: any){
        return  this.firestore.collection('venta').doc(id).delete();
      }
  }
