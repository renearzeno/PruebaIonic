import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleUsuarioPage } from './detalle-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleUsuarioPage]
})
export class DetalleUsuarioPageModule {}
