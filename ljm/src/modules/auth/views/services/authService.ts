import axios from 'axios';

// Cambia el puerto (3000, 8000, etc) por el que use tu Backend
const API_URL = 'http://localhost:3000/api'; 

export const authService = {
  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password
      });
      return response.data; // Aquí vendría tu Token y datos del usuario
    } catch (error: any) {
      throw error.response?.data?.message || 'Error al conectar con el servidor';
    }
  }
};