export default {
  template: '<div></div>',
  props: {
    watches: {
      type: Array,
      default: () => ['source', 'show', 'toc'],
    },
  },
  data: () => ({
    msg: 'hello', //test
  }),
  ready() {
    rende(this)
    this.$watch('source', () => { rende(this) })
    this.watches.forEach((v) => {
      this.$watch(v, () => { rende(this) })
    })
  },
}
