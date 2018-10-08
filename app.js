//Opening sidebar changed grid-template-area layout
const grid = document.querySelector('.grid');
const search = document.querySelector('#search');
const trafficOptions = document.querySelector('.traffic-options');



// Event listener for sidebar arrow. Adds class to reposition grid-items when sidebar is open. //
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

// Close Alert message //
const closeAlert = document.querySelector('.close-alert');
closeAlert.addEventListener('click', () => {
  const alert = document.querySelector('.alert');
  alert.parentNode.removeChild(alert);
});

// Traffic-Option Handler //
trafficOptions.addEventListener('click', (event) => {
  if (event.target.tagName == 'P') {
  for(i=0; i<trafficOptions.children.length; i++) {
      trafficOptions.children[i].className = '';
    }
    event.target.classList.add('traffic-options-active');
    if(event.target.innerHTML === 'Hourly') {
    createChart('rgb(216, 218, 255)', 'rgb(115, 119, 191)', [500, 1000, 500, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000]);
    } if(event.target.innerHTML === 'Daily') {
    createChart('rgb(166, 234, 179)', 'rgb(66, 188, 88)', [1000, 250, 500, 1250, 1750, 1250, 1500, 1000, 500, 1500, 250]);
    } if (event.target.innerHTML === 'Weekly') {
  createChart('rgb(65, 212, 242)','rgb(72, 179, 203)', [750, 750, 500, 750, 250, 1250, 1500, 1000, 1250, 1500, 500]);
    } if (event.target.innerHTML === 'Monthly') {
  createChart('rgb(239, 167, 178)', 'rgb(216, 149, 155)', [250, 750, 500, 750, 1000, 1250, 1500, 1000, 2000, 1500, 750]);
  }
  }
});


// Autocomplete Functionality //
var input = document.querySelector('#userName');
var people = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
var results;

function autocomplete(val) {
  var people_return = [];

  for (i = 0; i < people.length; i++) {
    if (val.toUpperCase() === people[i].slice(0, val.length).toUpperCase()) {
      people_return.push(people[i]);
    }
  }

  return people_return;
}

const autocomplete_results = document.querySelector("#autofill");
input.onkeyup = function(e) {
  let input_val = this.value; // updates the variable on each ocurrence

  if (input_val.length > 0) {
    var people_to_show = [];
    autocomplete_results.classList.add('autofill')
    autocomplete_results.innerHTML = '';
    people_to_show = autocomplete(input_val);

    for (i = 0; i < people_to_show.length; i++) {
      autocomplete_results.innerHTML += '<li>' + people_to_show[i] + '</li>';

    }
    autocomplete_results.style.display = 'block';

    autocomplete_results.addEventListener('mouseover', (event) => {
      if (event.target.tagName == 'LI') {
      for(i=0; i<autocomplete_results.children.length; i++) {
          autocomplete_results.children[i].className = '';
        }
        event.target.classList.add('active-li');
      }
    });


  } else {
    people_to_show = [];
    autocomplete_results.innerHTML = '';
    autocomplete_results.classList.remove('autofill')
  }
}

// Event removes people_to_show array and clear search value //
autocomplete_results.addEventListener('mouseleave', (event) => {
  if (event.target.tagName == 'UL') {
    people_to_show = [];
    autocomplete_results.innerHTML = '';
    autocomplete_results.classList.remove('autofill')
  }
});

// Event sets input value to selected LI //
autocomplete_results.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI') {
    people_to_show = [];
    autocomplete_results.innerHTML = '';
    autocomplete_results.classList.remove('autofill')
    input.value = event.target.innerHTML;
  }
});

// Chart.js //
// Chart.defaults.global.legend.display = false;
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
            data: [500, 1000, 500, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
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
      legend: {
      display: false
    },
      elements: {
        line: {
          tension: 0, //disables bezier curves
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             labelOffset: 100,
        //             max: 250,
        //             min: 0,
        //             stepSize: 50
        //         }
        //     }]
        // }
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
          legend: {
         display: false
      },
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
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [{
          label: '# of users',
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
      }]
  },
  options: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 13,
      }
    }
  }
});

window.addEventListener('resize', function () { myChart.resize() })

// OPTIONAL CHARTS
const createChart = (color1, color2, dataArray) => {
  let trafficContainer = document.querySelector('.daily-traffic-container')
  var element = document.getElementsByTagName('CANVAS');
  element[0].parentNode.removeChild(element[0]);
  let canvas = document.createElement("CANVAS");
  canvas.setAttribute("id", "myChart4");
  var ctx = document.getElementById("myChart4");
  trafficContainer.appendChild(canvas);
var ctx = document.getElementById("myChart4");
  var myChart4 = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-7", "18-24", "25-31"],
          datasets: [{
              dislay: [false],
              labelString: [false],
              data: dataArray,
              backgroundColor: [
                  color1,
              ],
              borderColor: [
                  color2,
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
        display: false
      },
        elements: {
          line: {
            tension: 0, //disables bezier curves
        }
      }
    }
  });
}

// Display Notifications
const bell = document.querySelector('#bell');
const notifications = document.querySelector('#notifications');
  bell.addEventListener('click', () => {
    if (notifications.innerHTML === '') {
    const alertIcon = document.querySelector('.active-alert');
    alertIcon.style.display = 'none';
    notifications.innerHTML += `<div class="member">
                <img src="images/member-3.jpg" alt="Dawn Wood" class="member-pic">
                <ul>
                  <li>Dawn Wood commented on Facebook's Changed for 2016</li>
                  <li>5 hours ago</li>
                </ul>
                <div class="date">
                  <span>&#8250;</span>
                </div>
              </div>
              <div class="member">
              <img src="images/member-4.jpg" alt="Dan Oliver" class="member-pic">
              <ul>
                <li>Dan Oliver posted YourApp's SEO Tips</li>
                <li>1 day ago</li>
              </ul>
              <div class="date">
                <span>&#8250;</span>
              </div>`;
 };
});


// These two handlers clear the notifications upon scroll and click
document.addEventListener("click", function(){
if (notifications.innerHTML !== '') {
document.addEventListener("click", function(){
  notifications.innerHTML = '';
})
}
})

document.addEventListener("click", function(){
if (notifications.innerHTML !== '') {
document.addEventListener("scroll", function(){
  notifications.innerHTML = '';
})
}
})



//On Off Buttons Local Storage

//for loading
var emailSettingsInput = document.getElementById("emailSettingsInput");
var privacySettingsInput = document.getElementById("privacySettingsInput");
var checkedEmailSettings = JSON.parse(localStorage.getItem("emailSettingsInput"));
    document.getElementById("emailSettingsInput").checked = checkedEmailSettings;
var checkedPrivacySettings = JSON.parse(localStorage.getItem("privacySettingsInput"));
    document.getElementById("privacySettingsInput").checked = checkedPrivacySettings;

var timezone = document.getElementById("timezone");
var selectedTimezone = timezone.options[timezone.selectedIndex]
var checkedTimezoneSettings = JSON.parse(localStorage.getItem("selectedTimeZone"));
    timezone.options[timezone.selectedIndex] = checkedTimezoneSettings;

    // timezone = checkedTimezoneSettings;
// var timezone = timezone.options[timezone.selectedIndex].text;

function save() {
	// var privacySettingsInput = document.getElementById("privacySettingsInput");
    localStorage.setItem("privacySettingsInput", privacySettingsInput.checked);
    localStorage.setItem("emailSettingsInput", emailSettingsInput.checked);
    localStorage.setItem("timezone", timezone.options[timezone.selectedIndex]);
}


// On Off Buttons //
const privacyCheckbox = document.querySelector('#privacyCheckbox');
const privacySettings = document.querySelector('.privacySettings');
  privacyCheckbox.addEventListener("click", function(){
  if (privacySettingsInput.checked) {
    privacySettings.classList.add('off');
    privacySettings.classList.remove('on');
} else {
  privacySettings.classList.add('on');
  privacySettings.classList.remove('off');
}
})

const emailCheckbox = document.querySelector('#emailCheckbox');
const emailSettings = document.querySelector('.emailSettings');
  emailCheckbox.addEventListener("click", function(){
  if (emailSettingsInput.checked) {
  emailSettings.classList.add('off');
  emailSettings.classList.remove('on');
  // save()
} else {
  emailSettings.classList.add('on');
  emailSettings.classList.remove('off');
  // save()
}
})

const saveButton = document.querySelector('.save');
saveButton.addEventListener('click', () => {
  save();
  alert('Your settings have been saved!')
})

const sendMessage = document.querySelector('#sendMessage');
sendMessage.addEventListener('click', () => {
  alert('Your message has been sent!')
})
