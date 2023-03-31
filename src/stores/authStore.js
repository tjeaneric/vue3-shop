import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', () => {
  const isLoggedIn = ref(false)
  const login = () => (isLoggedIn.value = true)
  const logout = () => (isLoggedIn.value = false)

  return { isLoggedIn, login, logout }
})
