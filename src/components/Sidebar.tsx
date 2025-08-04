import React, { useState, useEffect, FC } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
  Divider,
  Tooltip,
  Box
} from '@mui/material';
import {
  Add as AddIcon,
  Chat as ChatIcon,
  Delete as DeleteIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { storageUtils } from '../utils/storage';
import {
  SidebarContainer,
  SidebarHeader,
  NewChatButton,
  ChatHistoryTitle,
  ChatListItem,
  ChatTitle,
  ChatDate,
  DeleteButton,
  EmptyStateContainer,
  SidebarFooter,
  SettingsButton
} from './styled';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  onNewChat: () => void;
  onSelectChat: (chat: any) => void;
  selectedChatId: string | undefined;
  chatHistory: any[];
}

const Sidebar: FC<SidebarProps> = ({ 
  open, 
  onToggle, 
  onNewChat, 
  onSelectChat, 
  selectedChatId,
  chatHistory 
}) => {
  const [keepMenuOpen, setKeepMenuOpen] = useState(false);

  const handleNewChat = () => {
    onNewChat();
    if (!keepMenuOpen) {
      onToggle();
    }
  };

  const handleSelectChat = (chat: any) => {
    onSelectChat(chat);
    if (!keepMenuOpen) {
      onToggle();
    }
  };

  const handleDeleteChat = (conversationId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    storageUtils.deleteChat(conversationId);
    // Refresh chat history
    window.location.reload();
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Hôm nay';
    if (diffDays === 2) return 'Hôm qua';
    if (diffDays <= 7) return `${diffDays - 1} ngày trước`;
    return date.toLocaleDateString('vi-VN');
  };

  const drawerWidth = 280;

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onToggle}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #e0e0e0'
        },
      }}
    >
      <SidebarContainer>
        {/* Header */}
        <SidebarHeader>
          <IconButton onClick={onToggle} sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </SidebarHeader>

        {/* Keep menu open checkbox */}
        <Box sx={{ mb: 2 }}>
          <NewChatButton
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleNewChat}
            fullWidth
          >
            Tạo chat mới
          </NewChatButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Chat History */}
        <ChatHistoryTitle variant="h6">
          Gần đây
        </ChatHistoryTitle>

        <List sx={{ p: 0 }}>
          {chatHistory.map((chat) => (
            <ListItem
              key={chat.conversationId}
              disablePadding
              sx={{ mb: 1 }}
            >
              <ChatListItem
                onClick={() => handleSelectChat(chat)}
                selected={selectedChatId === chat.conversationId}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <ChatIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <ChatTitle
                      variant="body2"
                      selected={selectedChatId === chat.conversationId}
                    >
                      {chat.title || 'Chat mới'}
                    </ChatTitle>
                  }
                  secondary={
                    <ChatDate variant="caption">
                      {formatDate(chat.timestamp)}
                    </ChatDate>
                  }
                />
                <Tooltip title="Xóa chat">
                  <DeleteButton
                    size="small"
                    onClick={(e) => handleDeleteChat(chat.conversationId, e)}
                  >
                    <DeleteIcon sx={{ fontSize: 16 }} />
                  </DeleteButton>
                </Tooltip>
              </ChatListItem>
            </ListItem>
          ))}
        </List>

        {/* Empty state */}
        {chatHistory.length === 0 && (
          <EmptyStateContainer>
            <ChatIcon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Chưa có cuộc trò chuyện nào
            </Typography>
          </EmptyStateContainer>
        )}
      </SidebarContainer>

      {/* Footer */}
      <SidebarFooter>
        <Divider sx={{ mb: 2 }} />
        <SettingsButton startIcon={<SettingsIcon />}>
          Cài đặt & Trợ giúp
        </SettingsButton>
      </SidebarFooter>
    </Drawer>
  );
};

export default Sidebar; 