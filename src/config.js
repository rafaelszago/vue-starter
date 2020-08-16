import components from './components/global'
import directives from './directives/global'
import filters from './filters/global'
import mixins from './mixins/global'

import './assets/sass/app.scss'

export default {
  install (Vue) {
    Vue.use(components)
    Vue.use(directives)
    Vue.use(filters)
    Vue.use(mixins)
  }
}
