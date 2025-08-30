const TOKEN_KEY = 'job_portal_token'

const tokenHelper = {
  saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },
  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },
  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  }
}

export default tokenHelper
