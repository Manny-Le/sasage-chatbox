import React, { useState, useRef, useEffect, FC } from 'react';
import {
  Box,
  Avatar,
  Paper,
  TextField,
  IconButton,
  Typography,
  CircularProgress,
  Chip
} from '@mui/material';
import {
  Send as SendIcon,
  Mic as MicIcon,
  Add as AddIcon,
  VideoCall as VideoIcon,
  Search as SearchIcon,
  Brush as CanvasIcon,
  Image as ImageIcon
} from '@mui/icons-material';
import QuestionPopup from './QuestionPopup';
import config from '../utils/config';
import {
  ChatContainer,
  ChatHeader,
  ChatMessagesArea,
  ChatInputArea,
  MessageContainer,
  MessageBubble,
  MessagePaper,
  MessageTime,
  MessageAvatar,
  InputContainer,
  SendButton,
  ActionButtonsContainer,
  ActionChip,
  LoadingContainer,
  LoadingBubble,
  LoadingPaper
} from './styled';

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

interface ChatWindowProps {
  currentChat: Chat | null;
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onNewChat: () => void;
}

export const ChatWindow: FC<ChatWindowProps> = ({ 
  currentChat, 
  onSendMessage, 
  isLoading,
  onNewChat 
}) => {
  const [message, setMessage] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  useEffect(() => {
    // Show suggestions when there are no messages
    setShowSuggestions(!currentChat?.messages || currentChat.messages.length === 0);
  }, [currentChat]);

  const handleSendMessage = (): void => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuestionSelect = (question: string): void => {
    setMessage(question);
    setShowSuggestions(false);
  };

  const formatTime = (timestamp: number): string => {
    return new Date(timestamp).toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <ChatContainer>
      {/* Header */}
      <ChatHeader>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ mr: 1 }}>
            {config.getAppName()}
          </Typography>
          <Chip
            label={config.getAppVersion()}
            size="small"
            sx={{
              backgroundColor: 'primary.light',
              color: 'primary.main',
              fontWeight: 500
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Chip
            label="PRO"
            size="small"
            sx={{
              backgroundColor: 'grey.100',
              color: 'text.secondary',
              mr: 2
            }}
          />
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
            M
          </Avatar>
        </Box>
      </ChatHeader>

      {/* Messages Area */}
      <ChatMessagesArea>
        {showSuggestions ? (
          <QuestionPopup onQuestionSelect={handleQuestionSelect} />
        ) : (
          <Box>
            {currentChat?.messages?.map((msg, index) => (
              <MessageContainer key={index} isUser={msg.sender === 'user'}>
                <MessageBubble isUser={msg.sender === 'user'}>
                  {msg.sender === 'assistant' && (
                    <MessageAvatar isUser={false}>
                      AI
                    </MessageAvatar>
                  )}
                  
                  <MessagePaper isUser={msg.sender === 'user'}>
                    <Typography variant="body1">
                      {msg.content}
                    </Typography>
                    <MessageTime isUser={msg.sender === 'user'}>
                      {formatTime(msg.timestamp)}
                    </MessageTime>
                  </MessagePaper>

                  {msg.sender === 'user' && (
                    <MessageAvatar isUser={true}>
                      U
                    </MessageAvatar>
                  )}
                </MessageBubble>
              </MessageContainer>
            ))}

            {isLoading && (
              <LoadingContainer>
                <LoadingBubble>
                  <MessageAvatar isUser={false}>
                    AI
                  </MessageAvatar>
                  <LoadingPaper>
                    <CircularProgress size={16} />
                    <Typography variant="body2" color="text.secondary">
                      Đang suy nghĩ...
                    </Typography>
                  </LoadingPaper>
                </LoadingBubble>
              </LoadingContainer>
            )}
          </Box>
        )}
        <div ref={messagesEndRef} />
      </ChatMessagesArea>

      {/* Input Area */}
      <ChatInputArea>
        {/* Input Field */}
        <InputContainer>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Nhập tin nhắn cho Sasage Agent..."
            variant="outlined"
          />
          <SendButton
            onClick={handleSendMessage}
            disabled={!message.trim() || isLoading}
          >
            <SendIcon />
          </SendButton>
          <IconButton>
            <MicIcon />
          </IconButton>
        </InputContainer>

        {/* Action Buttons */}
        <ActionButtonsContainer>
          <ActionChip
            icon={<AddIcon />}
            label="Tệp"
            size="small"
          />
          <ActionChip
            icon={<VideoIcon />}
            label="Video"
            size="small"
          />
          <ActionChip
            icon={<SearchIcon />}
            label="Tìm kiếm sâu"
            size="small"
          />
          <ActionChip
            icon={<CanvasIcon />}
            label="Canvas"
            size="small"
          />
          <ActionChip
            icon={<ImageIcon />}
            label="Hình ảnh"
            size="small"
          />
        </ActionButtonsContainer>
      </ChatInputArea>
    </ChatContainer>
  );
}; 