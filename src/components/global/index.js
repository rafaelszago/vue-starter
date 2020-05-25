import Vue from 'vue'

const components = require.context(
  './',
  true,
  /[A-Z]\w+\.(vue|js)$/
)

components.keys().forEach(fileName => {
  const componentConfig = components(fileName)

  Vue.component(
    componentConfig.default.name,
    componentConfig.default
  )
})
