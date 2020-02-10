import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import * as Chart from '../../../../../node_modules/chart.js'
import { ApiService } from '../../../api.service.js';
//import * as Chart from 'chart.js'

@Component({
  selector: 'ngx-csco',
  styleUrls: ['./csco.component.scss'],
  templateUrl: './csco.component.html',
})
export class CscoComponent {

  constructor(private menuService: NbMenuService, private apiService : ApiService) {
    this.apiResponse = {
      labels: ['udit', 'richu' , 'shreesha','ashwathy'],
      data : [20,39,15,45]
    }
  }
/*
  goToHome() {
    this.menuService.navigateHome();
  } */

  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  canvas2: any;
  ctx2: any;
  public  apiResponse: any
  ngAfterViewInit() {
    this.canvas = document.getElementById('cs');
    this.ctx = this.canvas.getContext('2d');
    this.canvas2 = document.getElementById('cs2');
    this.ctx2 = this.canvas2.getContext('2d');
    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: this.apiResponse['labels'],
          datasets: [{
              label: 'CSCO Stocks',
              data: this.apiResponse['data'],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
    var myChart2 = new Chart(this.ctx2, {
      type: 'line',
      data: {
          labels: this.apiResponse['labels'],
          datasets: [{
              label: 'CSCO Stocks',
              data: this.apiResponse['data'],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
    this.apiService.apiGetCall("http://localhost:9200/api/stock/csco")
    .subscribe((data)=>{
      this.apiResponse = data
      myChart.data.labels = this.apiResponse['labels']
      myChart.data.datasets[0].data = this.apiResponse['data']
      myChart.update()
    })
    
  }

}



