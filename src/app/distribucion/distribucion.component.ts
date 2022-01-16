import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from '../auth/services/firebase-service.service4';
import { isNullOrUndefined } from 'util';





@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styleUrls: ['./distribucion.component.css'],
})
export class DistribucionComponent implements OnInit {

  closeResult = '';

  distribucionForm: FormGroup;

  idFirabaseActualizar: string;
  actualizar: boolean;


  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseServiceService: FirebaseServiceService,

  ) { }

  config: any;
  collection = { count: 0, data: [] };

  ngOnInit(): void {
    this.idFirabaseActualizar = '';
    this.actualizar = false;

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.data.length
    };

    this.distribucionForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      capacidad: ['', Validators.required],
      fecha: ['', Validators.required],
      nump: ['', Validators.required],
      idp: ['', Validators.required],
    });

    this.firebaseServiceService.getDistribuciones().subscribe(resp => {
      this.collection.data = resp.map((e: any) => {
        return {
          id: e.payload.doc.data().id,
          nombre: e.payload.doc.data().nombre,
          capacidad: e.payload.doc.data().capacidad,
          fecha: e.payload.doc.data().fecha,
          nump: e.payload.doc.data().nump,
          idp: e.payload.doc.data().idp,


          idFirebase: e.payload.doc.id
        };
      });
    },
      error => {
        console.error(error);
      }
    );
  }


  // tslint:disable-next-line:typedef
  pageChanged(event) {
    this.config.currentPage = event;
  }

  eliminar(item: any): void {
    this.firebaseServiceService.deleteDistribucion(item.idFirebase);
  }

  guardarDistribucion(): void {
    this.firebaseServiceService.createDistribucion(this.distribucionForm.value).then(resp => {
      this.distribucionForm.reset();
      this.modalService.dismissAll();
    }).catch(error => {
      console.error(error);
    });
  }

  // tslint:disable-next-line:typedef
  actualizarDistribucion() {
    if (!isNullOrUndefined(this.idFirabaseActualizar)){
      this.firebaseServiceService.updateDistribucion(this.idFirabaseActualizar, this.distribucionForm.value).then(resp => {
        this.distribucionForm.reset();
        this.modalService.dismissAll();
      }).catch(error => {
        console.error(error);
      });
        }
    }


  // tslint:disable-next-line:typedef
  openEditar(content, item: any) {
    this.distribucionForm.setValue({
      id: item.id,
      nombre: item.nombre,
      capacidad: item.capacidad,
      fecha: item.fecha,
      nump: item.nump,
      idp: item.idp,
    });
    this.idFirabaseActualizar = item.idFirebase;
    this.actualizar = true;


    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  // tslint:disable-next-line:typedef
  open(content) {
    this.actualizar = false;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
