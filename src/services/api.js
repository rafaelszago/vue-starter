import apisauce from 'apisauce'
import { StorageService } from '../services'
import store from '../store'

const api = apisauce.create({ baseURL: process.env.VUE_APP_API_URL })

const ApiService = {
  _errorHandler: null,

  setHeader () {
    api.setHeader('Authorization', `Bearer ${StorageService.getToken()}`)
  },

  removeHeader () {
    api.setHeader('Authorization', false)
  },

  index (resource, params) {
    return api.get(resource, params)
  },

  show (resource, id) {
    return api.get(`${resource}/${id}/`)
  },

  create (resource, data) {
    return api.post(`${resource}/`, data)
  },

  update (resource, id, data) {
    return api.put(`${resource}/${id}/`, data)
  },

  delete (resource, id) {
    return api.delete(`${resource}/${id}/`)
  },

  addErrorMonitor () {
    return api.addMonitor(async response => {
      if (response.status === 401) {
        await store.dispatch('auth/logout')
      }
    })
  }
}

export default ApiService
