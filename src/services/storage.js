const TOKEN_KEY = 'token'

const StorageService = {
  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },

  saveToken (accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  }
}

export default StorageService
