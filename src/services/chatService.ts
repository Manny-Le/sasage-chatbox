import axios from 'axios';
import config from '../utils/config';

const API_BASE_URL = config.getApiBaseUrl();

const chatService = {
  // Gửi tin nhắn đến AI agent
  sendMessage: async (message: string, conversationId: string | null = null) => {
    try {
      const payload = {
        message: message,
        conversation_id: conversationId
      };

      const response = await axios.post(`${API_BASE_URL}/chat`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  // Tạo conversation mới
  createNewConversation: () => {
    return `conversation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
};

export default chatService; 