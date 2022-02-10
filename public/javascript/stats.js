// Chart Options
const options = {
  chart: {
    type: 'line',
    height: 450,
    width: '80%',
    
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
  // plotOptions: {
  //   bar: {

};


// Init chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// Render Chart
chart.render();


// var options = {

// }