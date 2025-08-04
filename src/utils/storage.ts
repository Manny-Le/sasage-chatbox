interface ChatMessage {
  content: string;
  sender: 'user' | 'assistant';
  timestamp: number;
}

interface Chat {
  conversationId: string;
  title: string;
  timestamp: number;
  messages: ChatMessage[];
}

const STORAGE_KEY = 'sasage_chat_history';

export const storageUtils = {
  // Lưu lịch sử chat
  saveChatHistory: (chats: Chat[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  },

  // Đọc lịch sử chat
  getChatHistory: (): Chat[] => {
    try {
      const history = localStorage.getItem(STORAGE_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error reading chat history:', error);
      return [];
    }
  },

  // Thêm chat mới vào lịch sử
  addNewChat: (chat: Chat): Chat[] => {
    try {
      const history = storageUtils.getChatHistory();
      const updatedHistory = [chat, ...history];
      storageUtils.saveChatHistory(updatedHistory);
      return updatedHistory;
    } catch (error) {
      console.error('Error adding new chat:', error);
      return [];
    }
  },

  // Cập nhật chat trong lịch sử
  updateChat: (conversationId: string, updatedChat: Chat): Chat[] => {
    try {
      const history = storageUtils.getChatHistory();
      const updatedHistory = history.map(chat => 
        chat.conversationId === conversationId ? updatedChat : chat
      );
      storageUtils.saveChatHistory(updatedHistory);
      return updatedHistory;
    } catch (error) {
      console.error('Error updating chat:', error);
      return [];
    }
  },

  // Xóa chat khỏi lịch sử
  deleteChat: (conversationId: string): Chat[] => {
    try {
      const history = storageUtils.getChatHistory();
      const updatedHistory = history.filter(chat => chat.conversationId !== conversationId);
      storageUtils.saveChatHistory(updatedHistory);
      return updatedHistory;
    } catch (error) {
      console.error('Error deleting chat:', error);
      return [];
    }
  }
}; 