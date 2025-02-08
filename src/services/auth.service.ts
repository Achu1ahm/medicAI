import axiosInstance from '../utils/axios.config';
import { LoginCredentials, User } from '../types';

class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    try {
    //   const { data } = await axiosInstance.post<User>('/login', credentials);
    if  (credentials.email === 'test@test.com' && credentials.password === 'secret') {
      const data = {
          username: 'admin',
          email: 'test@test.com',
          role: 'admin',
          // Add other user properties as needed
        };
        return data;
        
      } else {
        throw new Error('Invalid credentials');
      }

    } catch (error) {
      throw this.handleError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await axiosInstance.post('/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      throw new Error(error.response.data.message || 'An error occurred');
    }
    throw new Error('Network error occurred');
  }
}

const authService = new AuthService();
export default authService;