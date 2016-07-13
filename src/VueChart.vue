<template>
  <canvas></canvas>
</template>
<script>
  import Chart from 'chart.js'
  import _ from 'underscore'

  function clone(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
      return;
    } else if (window.JSON) {
      str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
      for (var i in obj) {
        newobj[i] = typeof obj[i] === 'object' ?
          clone(obj[i]) : obj[i];
      }
    }
    return newobj;
  }

  function getVal(newVal, oldVal) {
    return _.isEqual(newVal, oldVal) ? oldVal : maxExtend(oldVal, newVal)

  }

  function maxExtend(destination, sources) {
    if (_.isObject(destination) && _.isObject(sources) || _.isArray(destination) && _.isArray(sources)) {
      _.each(sources, function (val, index) {
        destination[index] = getVal(val, _.has(destination, index) ? destination[index] : null);
      });
    } else {
      destination = sources == destination ? destination : sources;
    }
    return destination;
  }


  export default {
    props: {
      type: {
        type: String,
        default: 'line'
      },
      data: {
        type: Object,
        default: function () {
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
       // chart: null
      }
    },
    ready() {
      var me = this;
      me.chart = new Chart(this.$el, {
        type: me.type,
        data: clone(me.data),
        options: clone(me.options)
      });
    },
    methods: {
      updateData: function (o,n) {
        maxExtend(o, clone(n));
        this.chart.update()
      }
    },
    watch: {
      'data': {
        deep: true,
        handler: function (val, oldVal) {
          this.updateData(this.chart.config.data,this.data);
        }
      },
      'options': {
        deep: true,
        handler: function (val, oldVal) {
          this.updateData(this.chart.config.options,this.options);

        }
      }
    }
  }
</script>
