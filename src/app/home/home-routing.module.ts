import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children :[
      {
        path: 'inicio',
        loadChildren: () => import('./../page/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'graficas',
        loadChildren: () => import('./../page/graficas/graficas.module').then( m => m.GraficasPageModule)
      },
      {
        path: 'intercambio',
        loadChildren: () => import('./../page/intercambio/intercambio.module').then( m => m.IntercambioPageModule)
      },
      {
        path: 'deposito',
        loadChildren: () => import('./../page/deposito/deposito.module').then( m => m.DepositoPageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./../page/wallet/wallet.module').then( m => m.WalletPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
