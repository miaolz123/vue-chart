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
  data: () => ({
    chart: null,
  }),
  ready() {
    this.chart = new Chart(this.$el, {
      type: this.type,
      data: this.data,
      options: this.options,
    })
    this.$watch('type', () => {
      this.chart.config.type = this.type
      this.$nextTick(() => {
        this.chart.update()
      })
    })
    this.$watch('data', () => {
      this.chart.config.data = this.data
      this.$nextTick(() => {
        this.chart.update()
      })
    })
    this.$watch('options', () => {
      this.chart.config.options = this.options
      this.$nextTick(() => {
        this.chart.update()
      })
    })
  },
}
