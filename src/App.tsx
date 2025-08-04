import React, { useState, useEffect, FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import { ChatWindow } from './components/ChatWindow';
import chatService from './services/chatService';
import { storageUtils } from './utils/storage';
import theme from './theme';
import { AppContainer, MainContent, MobileHeader } from './components/styled';

// Interfaces
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

const App: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Load chat history from localStorage when component mounts
  useEffect(() => {
    const history = storageUtils.getChatHistory();
    setChatHistory(history);
  }, []);

  const handleToggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNewChat = (): void => {
    const newConversationId = chatService.createNewConversation();
    const newChat: Chat = {
      conversationId: newConversationId,
      title: 'Chat mới',
      timestamp: Date.now(),
      messages: []
    };

    // Add to history
    const updatedHistory = storageUtils.addNewChat(newChat);
    setChatHistory(updatedHistory);
    setCurrentChat(newChat);
  };

  const handleSelectChat = (chat: Chat): void => {
    setCurrentChat(chat);
  };

  const handleSendMessage = async (message: string): Promise<void> => {
    if (!currentChat) {
      // Create a new chat if one doesn't exist
      handleNewChat();
      return;
    }

    // Add user's message
    const userMessage: ChatMessage = {
      content: message,
      sender: 'user',
      timestamp: Date.now()
    };

    const updatedMessages = [...(currentChat.messages || []), userMessage];
    const updatedChat: Chat = {
      ...currentChat,
      messages: updatedMessages,
      title: message.length > 30 ? message.substring(0, 30) + '...' : message
    };

    setCurrentChat(updatedChat);
    setIsLoading(true);

    try {
      // Call API
      const response = await chatService.sendMessage(message, currentChat.conversationId);
      
      // Add AI's message
      const aiMessage: ChatMessage = {
        content: response.response || 'Xin lỗi, tôi không thể xử lý yêu cầu của bạn.',
        sender: 'assistant',
        timestamp: Date.now()
      };

      const finalMessages = [...updatedMessages, aiMessage];
      const finalChat: Chat = {
        ...updatedChat,
        messages: finalMessages
      };

      setCurrentChat(finalChat);
      
      // Update history
      storageUtils.updateChat(currentChat.conversationId, finalChat);
      const updatedHistory = storageUtils.getChatHistory();
      setChatHistory(updatedHistory);

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: ChatMessage = {
        content: 'Xin lỗi, có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.',
        sender: 'assistant',
        timestamp: Date.now()
      };

      const finalMessages = [...updatedMessages, errorMessage];
      const finalChat: Chat = {
        ...updatedChat,
        messages: finalMessages
      };

      setCurrentChat(finalChat);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        {/* Sidebar */}
        <Sidebar
          open={sidebarOpen}
          onToggle={handleToggleSidebar}
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          selectedChatId={currentChat?.conversationId}
          chatHistory={chatHistory}
        />

        {/* Main Content */}
        <MainContent>
          {/* Mobile Header */}
          <MobileHeader>
            <MenuIcon
              onClick={handleToggleSidebar}
              sx={{ cursor: 'pointer', mr: 2 }}
            />
          </MobileHeader>

          {/* Chat Window */}
          <ChatWindow
            currentChat={currentChat}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            onNewChat={handleNewChat}
          />
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
