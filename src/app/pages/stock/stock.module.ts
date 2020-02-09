import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { CscoComponent } from './csco/csco.component';
//import { EchartsMultipleXaxisComponent } from './csco/csco-multiple-xaxis.component';

/*
const components = [
  EchartsMultipleXaxisComponent,
];
*/

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    StockRoutingModule,

    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    
  ],
  declarations: [
    StockComponent,
    CscoComponent,
  ],
})
export class StockModule { }
