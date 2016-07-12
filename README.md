# vue-chart

[![npm](https://img.shields.io/npm/v/vue-chart.svg?style=flat)](https://www.npmjs.com/package/vue-chart)
[![npm](https://img.shields.io/npm/l/vue-chart.svg?style=flat)](https://www.npmjs.com/package/vue-chart)
[![npm](https://img.shields.io/npm/dt/vue-chart.svg?style=flat)](https://www.npmjs.com/package/vue-chart)

A Powerful and Highspeed Chart Parser for Vue.

# Example



# Instllation

### Browser globals

> The **dist** folder contains `vue-chart.js` and `vue-chart.min.js` with the component exported in the `window.VueChart` object.

```html
<body>
  <vue-chart type="line" :data="myData" :options="myOptions"></vue-chart>
</body>
<script src="path/to/vue.js"></script>
<script src="path/to/vue-chart.js"></script>
<script>
    var vm = new Vue({
        el: "body",
         components: {
            VueChart
          }
    });
</script>
```

## CommonJS

```js
var VueChart = require('vue-chart');

new Vue({
  components: {
    'vue-chart': VueChart
  }
})
```

## js

```js
// <script src="dist/vue-chart.js"></script>

new Vue({
  components: {
    VueChart
  }
})
```

## ES6

```js
import VueChart from 'vue-chart'

new Vue({
  components: {
    VueChart
  }
})
```

# Props

| Prop | Type | Default |
| ---- | ---- | ------- |
| type | String | `type="line"` |
| data | Object | [DOCS](//www.chartjs.org/docs/#line-chart-data-structure) |
| options | Object | [DOCS](//www.chartjs.org/docs/#chart-configuration) |
[Chartjs](http://www.chartjs.org/docs/)

# License

Copyright (c) 2016
