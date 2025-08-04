import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  ListItemButton,
  Chip,
  Avatar,
  TextField,
} from '@mui/material';

// Layout Components
export const AppContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
});

export const MainContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MobileHeader = styled(Box)`
  display: { xs: 'flex', md: 'none' };
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.background.default};
`;

// Chat Components
export const ChatContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const ChatHeader = styled(Box)`
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatMessagesArea = styled(Box)`
  flex: 1;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => (theme.palette.background as any).chat};
`;

export const ChatInputArea = styled(Box)`
  padding: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const MessageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>(({ theme, isUser }) => ({
  display: 'flex',
  justifyContent: isUser ? 'flex-end' : 'flex-start',
  marginBottom: theme.spacing(2),
}));

export const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>(({ theme, isUser }) => ({
  maxWidth: '70%',
  display: 'flex',
  flexDirection: isUser ? 'row-reverse' : 'row',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
}));

export const MessagePaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>(({ theme, isUser }) => ({
  padding: theme.spacing(2),
  backgroundColor: isUser ? theme.palette.primary.main : theme.palette.background.paper,
  color: isUser ? theme.palette.primary.contrastText : theme.palette.text.primary,
  borderRadius: theme.spacing(2),
  maxWidth: '100%',
  wordBreak: 'break-word',
}));

export const MessageTime = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>(({ theme, isUser }) => ({
  display: 'block',
  marginTop: theme.spacing(1),
  opacity: 0.7,
  textAlign: isUser ? 'right' : 'left',
}));

export const MessageAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>(({ theme, isUser }) => ({
  width: 32,
  height: 32,
  fontSize: '0.875rem',
  backgroundColor: isUser ? theme.palette.secondary.main : theme.palette.primary.main,
}));

// Input Components
export const InputContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const SendButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.divider};
    color: ${({ theme }) => theme.palette.text.disabled};
  }
`;

export const ActionButtonsContainer = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-wrap: wrap;
`;

export const ActionChip = styled(Chip)`
  cursor: pointer;
`;

// Sidebar Components
export const SidebarContainer = styled(Box)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const SidebarHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const NewChatButton = styled(Button)`
  justify-content: flex-start;
  text-transform: none;
  border-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.dark};
    background-color: rgba(25, 118, 210, 0.04);
  }
`;

export const ChatHistoryTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ChatListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
  marginBottom: theme.spacing(1),
  borderRadius: theme.spacing(1),
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.light + '20',
    '&:hover': {
      backgroundColor: theme.palette.primary.light + '20',
    },
  },
}));

export const ChatTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
  fontWeight: selected ? 600 : 400,
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const ChatDate = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const DeleteButton = styled(IconButton)(({ theme }) => ({
  opacity: 0.6,
  '&:hover': {
    opacity: 1,
  },
}));

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4, 0),
}));

export const SidebarFooter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
}));

export const SettingsButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  textTransform: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

// Question Popup Components
export const PopupContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  maxWidth: 600,
  margin: '0 auto',
  padding: theme.spacing(0, 3),
}));

export const WelcomeContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

export const WelcomeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

export const WelcomeSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 400,
}));

export const QuestionsContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: (theme.palette.background as any).sidebar,
  borderRadius: theme.spacing(2),
  width: '100%',
}));

export const QuestionsTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const QuestionChip = styled(Chip)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: 48,
  textAlign: 'left',
  justifyContent: 'flex-start',
  padding: theme.spacing(1, 1.5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.light + '20',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  '& .MuiChip-label': {
    whiteSpace: 'normal',
    textAlign: 'left',
    lineHeight: 1.4,
  },
}));

export const HelperText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
}));

// Loading Components
export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: theme.spacing(2),
}));

export const LoadingBubble = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
}));

export const LoadingPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
})); 