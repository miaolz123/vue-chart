<template>
  <canvas></canvas>
</template>
<script>
import Chart from 'chart.js'
import assign from 'lodash.assign'
export default {
  props: {
    type: {
      type: String,
      default: 'line'
    },
    data: {
      type: Object,
      default:function () {
        return {
          labels: [],
          datasets: []
        }
      }
    },
    options: {
      type: Object
    }
  },
  data: function () {
    return {
      chart: null
    }
  },
  ready() {
    var me=this;
    me.chart = new Chart(this.$el, {
      type: me.type,
      data: me.data,
      options: me.options
    });
    me.$watch('data', function () {

      if (me.data.datasets && me.data.datasets.length > 0) {
        this.data.datasets.map(function (dataset, i){
          if (i === me.chart.config.data.datasets.length) return
          me.data.datasets[i] = assign(me.chart.config.data.datasets[i], dataset)
        })
      }
      me.chart.config.data = assign(me.chart.config.data, me.data)
      me.$nextTick(function ()  {
        me.chart.update()
      })
    })
    me.$watch('options', function () {
      me.chart.config.options = assign(me.chart.config.options, me.options);
      me.$nextTick(function () {
        me.chart.update()
      })
    })
  }
}
</script>
