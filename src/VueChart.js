import Chart from 'chart.js'

export default {
  template: '<canvas></canvas>',
  props: {
    type: {
      type: String,
      default: 'line',
    },
    data: {
      type: Object,
      default: () => ({
        labels: [],
        datasets: [],
      }),
    },
    options: {
      type: Object,
    },
  },
  ready() {
    /* eslint-disable no-new */
    new Chart(this.$el, {
      type: this.type,
      data: this.data,
      options: this.options,
    })
    this.$watch('type', () => {
      new Chart(this.$el, {
        type: this.type,
        data: this.data,
        options: this.options,
      })
    })
    this.$watch('data', () => {
      new Chart(this.$el, {
        type: this.type,
        data: this.data,
        options: this.options,
      })
    })
    this.$watch('options', () => {
      new Chart(this.$el, {
        type: this.type,
        data: this.data,
        options: this.options,
      })
    })
  },
}
