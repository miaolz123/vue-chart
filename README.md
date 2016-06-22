# vue-chart

[![npm](https://img.shields.io/npm/v/vue-chart.svg?style=flat)](https://www.npmjs.com/package/vue-chart)
[![npm](https://img.shields.io/npm/l/vue-chart.svg?style=flat)](https://www.npmjs.com/package/vue-chart)
[![npm](https://img.shields.io/npm/dt/vue-chart.svg?style=flat)](https://www.npmjs.com/package/vue-chart)

A Powerful and Highspeed Chart Parser for Vue.

# Example

[DEMO](//miaolz123.github.io/vue-chart/)

# Instllation

### Browser globals

> The **dist** folder contains `vue-chart.js` and `vue-chart.min.js` with the component exported in the `window.VueChart` object. 

```html
<body>
  <vue-chart source="i am a ~~tast~~ **test**."></vue-chart>
</body>
<script src="path/to/vue.js"></script>
<script src="path/to/vue-chart.js"></script>
<script>
    Vue.use(VueChart);
    var vm = new Vue({
        el: "body"
    });
</script>
```

### NPM

```shell
$ npm install --save vue-chart
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
| type | String | `title="line"` |
| data | Object | [DOCS](//www.chartjs.org/docs/#line-chart-data-structure) |
| options | Object | [DOCS](//www.chartjs.org/docs/#chart-configuration) |

# License

Copyright (c) 2016 [miaolz123](https://github.com/miaolz123) by [MIT](https://opensource.org/licenses/MIT)