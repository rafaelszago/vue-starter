import { ApiService } from '../../services'

const state = {
  product: false,
  products: false,
  error: false
}

const getters = {
  getProduct: state => state.product,
  getProducts: state => state.products,
  getError: state => state.error
}

const actions = {
  async create ({ commit }, product) {
    const { data, ok } = await ApiService.create('products', product)

    if (ok) {
      commit('setProduct', data)
    } else {
      commit('setError', data)
    }
  },

  async show ({ commit }, id) {
    const { data, ok } = await ApiService.show('products', id)

    if (ok) {
      commit('setProduct', data)
    } else {
      commit('setError', data)
    }
  },

  async index ({ commit }, id) {
    const { data, ok } = await ApiService.index('products', id)

    if (ok) {
      commit('setProducts', data)
    } else {
      commit('setError', data)
    }
  },

  async update ({ commit }, { product, id }) {
    const { data, ok } = await ApiService.update('products', id, product)

    if (ok) {
      commit('setProduct', data)
    } else {
      commit('setError', data)
    }
  },

  async delete ({ commit }, id) {
    const { data, ok } = await ApiService.delete('products', id)

    if (!ok) {
      commit('setError', data)
    }
  }
}

const mutations = {
  setProduct (state, product) {
    state.product = product
  },

  setProducts (state, products) {
    state.products = products
  },

  setError (state, error) {
    state.error = error
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
