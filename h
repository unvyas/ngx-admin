{
      type: 'line',
      data: {
          labels: 'this.apiResponse['labels']',
          datasets: [{
              label: 'CSCO Stocks',
              data: 'this.apiResponse['data']',
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
    }
