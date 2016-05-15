import Chart from 'chart.js'

export default {
  template: '<canvas :width="width" :height="height"></canvas>',
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 250,
    },
    title: {
      type: Object,
    },
  },
  data: () => ({
    defaultTitle: {
      display: true,
      text: 'My VueChart',
    },
  }),
  ready() {
    /* eslint-disable no-new */
    const thisChart = new Chart(this.$el, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3]
        }]
      },
      options: {
        responsive: false,
        title: Object.assign({}, this.defaultTitle, this.title),
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
        },
      },
    })
  },
}
