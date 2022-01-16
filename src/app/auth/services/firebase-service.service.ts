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
  getProductos(){
    return this.firestore.collection('producto').snapshotChanges();
      }
      // tslint:disable-next-line:typedef
      createProducto(producto: any){
        return this.firestore.collection('producto').add(producto);
      }
      // tslint:disable-next-line:typedef
      updateProducto(id: any, producto: any){
        return  this.firestore.collection('producto').doc(id).update(producto);
      }
      // tslint:disable-next-line:typedef
      deleteProducto(id: any){
        return  this.firestore.collection('producto').doc(id).delete();
      }
  }

