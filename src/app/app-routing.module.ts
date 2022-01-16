import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciaComponent } from './agencia/agencia.component';
import { DistribucionComponent } from './distribucion/distribucion.component';
import { EmailComponent } from './email/email.component';

import { ProductoComponent } from './producto/producto.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { VentaComponent } from './venta/venta.component';



const routes: Routes = [
  { path: '',
redirectTo: '/home',
pathMatch: 'full',
},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
   { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
   { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)},
   { path: 'producto', component: ProductoComponent},
   { path: 'email', component: EmailComponent},
   { path: 'telefono', component: TelefonoComponent},
   { path: 'distribucion', component: DistribucionComponent},
   { path: 'agencia', component: AgenciaComponent},
   { path: 'venta', component: VentaComponent},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
