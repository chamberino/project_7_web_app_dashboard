const sidebarButton = document.querySelector('.arrow');
const sidebar = document.querySelector('.sidebar');
const gridItem = document.querySelectorAll('.grid-item')
sidebarButton.addEventListener('click', ()=> {
  for(i=0; i<gridItem.length; i++) {
    gridItem[i].classList.add('open')
  }
  sidebar.classList.add('close');
  sidebarButton.style.display = 'none'
});

sidebar.addEventListener('click', ()=> {
  const sidebar = document.querySelector('.sidebar');
  for(i=0; i<gridItem.length; i++) {
    gridItem[i].classList.remove('open')
  }
  sidebar.classList.remove('close');
  sidebarButton.style.display = ''
});



// Chart.js //
Chart.defaults.global.legend.display = false;
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-7", "18-24", "25-31"],
        datasets: [{
            dislay: [false],
            labelString: [false],
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
            backgroundColor: [
                'rgb(216, 218, 255)',
            ],
            borderColor: [
                'rgb(115, 119, 191)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      elements: {
        line: {
          tension: 0, //disables bezier curves
        scales: {
            yAxes: [{
                ticks: {
                    labelOffset: 100,
                    max: 250,
                    min: 0,
                    stepSize: 50
                }
            }]
        }
      }
    }
  }
});


var ctx = document.getElementById("myChart2");
var myChart2 = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          dislay: [false],
          labelString: [false],
          data: [50, 75, 150, 100, 200, 175, 75],
          backgroundColor: [
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
          ],
          borderColor: [
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  labelOffset: 20,
                  max: 250,
                  min: 0,
                  stepSize: 50
              }
          }]
      }
  }
});

var ctx = document.getElementById("myChart3");
var myChart2 = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          dislay: [false],
          labelString: [false],
          data: [50, 75, 150],
          backgroundColor: [
              'rgb(115, 119, 191)',
              'rgb(129, 201, 143)',
              'rgb(116, 177, 191)',
          ],
          borderColor: [
            'rgb(115, 119, 191)',
            'rgb(129, 201, 143)',
            'rgb(116, 177, 191)',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  labelOffset: 20,
                  max: 250,
                  min: 0,
                  stepSize: 50
              }
          }]
      }
  }
});

window.addEventListener('resize', function () { myChart.resize() })
