import { createTheme } from '@mui/material/styles';
import config from '../utils/config';

// Custom palette colors
const palette = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#666666',
    light: '#9e9e9e',
    dark: '#424242',
    contrastText: '#ffffff',
  },
  background: {
    default: '#ffffff',
    paper: '#ffffff',
    sidebar: '#f8f9fa',
    chat: '#fafafa',
    input: '#f8f9fa',
  },
  text: {
    primary: '#333333',
    secondary: '#666666',
    disabled: '#999999',
  },
  divider: '#e0e0e0',
  success: {
    main: '#4caf50',
  },
  error: {
    main: '#f44336',
  },
  warning: {
    main: '#ff9800',
  },
  info: {
    main: '#2196f3',
  },
};

// Custom component styles
const components = {
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        fontWeight: 500,
        '&.MuiChip-clickable:hover': {
          backgroundColor: '#e3f2fd',
          borderColor: '#1976d2',
          color: '#1976d2',
        },
      },
      label: {
        whiteSpace: 'normal',
        textAlign: 'left' as const,
        lineHeight: 1.4,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
        borderRadius: '8px',
        fontWeight: 500,
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)',
        },
      },
      outlined: {
        borderWidth: '1px',
        '&:hover': {
          borderWidth: '1px',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          backgroundColor: '#f8f9fa',
          '&:hover': {
            backgroundColor: '#f1f3f4',
          },
          '&.Mui-focused': {
            backgroundColor: '#ffffff',
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        '&.Mui-selected': {
          backgroundColor: '#e3f2fd',
          '&:hover': {
            backgroundColor: '#e3f2fd',
          },
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: '1px solid #e0e0e0',
      },
    },
  },
};

// Custom typography
const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h4: {
    fontWeight: 600,
    color: '#1976d2',
  },
  h5: {
    fontWeight: 600,
    color: '#333333',
  },
  h6: {
    fontWeight: 600,
    color: '#333333',
  },
  body1: {
    lineHeight: 1.6,
  },
  body2: {
    lineHeight: 1.5,
  },
  caption: {
    opacity: 0.7,
  },
};

// Custom spacing
const spacing = 8;

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#666666',
      light: '#9e9e9e',
      dark: '#424242',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      // @ts-ignore
      sidebar: '#f8f9fa',
      // @ts-ignore
      chat: '#fafafa',
      input: '#f8f9fa',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
    },
    divider: '#e0e0e0',
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
  },
  typography,
  components,
  spacing,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(0, 0, 0, 0.1)',
    '0 4px 12px rgba(0, 0, 0, 0.15)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
    '0 5px 15px rgba(0, 0, 0, 0.2)',
  ],
});

export default theme; 