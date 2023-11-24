import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const username = ref('')
    const password = ref('') // Tambahkan variabel password

    const login = (name: string, pass: string) => {
        username.value = name 
        password.value = pass // Set nilai password
    }

    const logout = () => {
        username.value = ''
        password.value = '' // Kosongkan password saat logout
    }
    
    return { username, password, login, logout }
})