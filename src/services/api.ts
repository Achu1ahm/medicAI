import axiosInstance from '../utils/axios.config';
import { Message } from '../types/context';

class ApiService {
  async sendMessage(text: string): Promise<Message> {
    try {
      const { data } = await axiosInstance.post<{ text: string }>('/', { text });
      return {
        from: 'ai',
        text: data.text
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      throw new Error(error.response.data.message || 'An error occurred');
    }
    throw new Error('Network error occurred');
  }
}

const apiService = new ApiService();

export default apiService;