import { UserService, StorageService } from '../../services'
import router from '../../router'

const state = {
  accessToken: StorageService.getToken(),
  loggedUser: false,
  error: false
}

const getters = {
  loggedUser: state => {
    return state.loggedUser
  },

  loggedIn: state => {
    return !!state.accessToken && !!state.loggedUser
  },

  error: state => {
    return state.error
  }
}

const actions = {
  async login ({ commit }, { email, password }) {
    try {
      const { token, user } = await UserService.login(email, password)

      if (token && user) {
        commit('loginSuccess', { token, user })

        router.push(router.history.current.query.redirect)

        return true
      }

      return false
    } catch (err) {
      commit('loginError', { err })

      return err
    }
  },

  logout ({ commit }) {
    UserService.logout()

    commit('logoutSuccess')

    router.push('/signin')
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  },

  loginSuccess (state, { token, user }) {
    state.accessToken = token.token
    state.loggedUser = user
  },

  loginError (state, { error }) {
    state.error = error
  },

  logoutSuccess (state) {
    state.accessToken = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
