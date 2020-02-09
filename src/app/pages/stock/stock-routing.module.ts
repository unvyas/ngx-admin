import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockComponent } from './stock.component';
import { CscoComponent } from './csco/csco.component';

  const routes: Routes = [
  {
    path: '',
    component: StockComponent,
    children: [
      {
        path: 'csco',
        component: CscoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {
}

export const routedComponents = [
  CscoComponent,
];