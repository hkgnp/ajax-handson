let data = [
  39,
  11,
  12,
  40,
  18,
  38,
  6,
  23,
  42,
  19,
  73,
  9,
  28,
  71,
  29,
  90,
  8,
  37,
  65,
  39,
];
let yearArr = [
  2016,
  2016,
  2016,
  2016,
  2016,
  2017,
  2017,
  2017,
  2017,
  2017,
  2018,
  2018,
  2018,
  2018,
  2018,
  2019,
  2019,
  2019,
  2019,
  2019,
];
// let's define the chart options
const options = {
  chart: {
    type: 'line',
    height: '100%',
  },
  // one series is one set of data
  series: [
    {
      name: 'ufo-sightings',
      // data below will be the y axis
      data: data,
    },
    {
      name: 'meteors-sighting',
      data: [20, 10, 11, 33, 24, 55],
    },
  ],
  xaxis: {
    categories: yearArr,
  },
  colors: ['#5C573E', '#A5B452', '#C8D96F', '#C8D96F', '#9BA7C0'],
};

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
