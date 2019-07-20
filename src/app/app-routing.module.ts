import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '',  redirectTo: 'Usuario', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Usuario', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'userDetail', loadChildren: './pages/detalle-usuario/detalle-usuario.module#DetalleUsuarioPageModule' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
