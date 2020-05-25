import ApiService from './api'
import { StorageService } from './'

const UserService = {
  login: async (email, password) => {
    const requestData = {
      email: email,
      password: password
    }

    try {
      const { data } = await ApiService.create('/signin', requestData)

      console.log(data.token.token)

      StorageService.saveToken(data.token.token)
      ApiService.addErrorMonitor()
      ApiService.setHeader()

      return data
    } catch (error) {
      return error
    }
  },

  logout () {
    StorageService.removeToken()
    ApiService.removeHeader()
  }
}

export default UserService

export { UserService }
