import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductoComponent } from './producto/producto.component';
import { EmailComponent } from './email/email.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { DistribucionComponent } from './distribucion/distribucion.component';
import { AgenciaComponent } from './agencia/agencia.component';
import { VentaComponent } from './venta/venta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductoComponent,
    EmailComponent,
    TelefonoComponent,
    DistribucionComponent,
    AgenciaComponent,
    VentaComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgxPaginationModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
