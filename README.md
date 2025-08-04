Sasage Agent - Chat Application

A chat agent application built with ReactJS and Material UI.

## Installation

# Install dependencies
npm install

# Run the application
npm start

## Project Structure

src/
├── components/
│   ├── Sidebar.js          # Sidebar for chat management
│   ├── ChatWindow.js       # Main chat window
│   └── QuestionPopup.js    # Question suggestion pop-up
├── services/
│   └── chatService.js      # Service for API calls
├── utils/
│   └── storage.js          # Utility for handling localStorage
└── App.js                  # Main component

## Environment Configuration

The application automatically detects the environment and uses the appropriate API endpoints.

### Environment Files

- `.env` - Default environment variables
- `.env.development` - Development environment
- `.env.staging` - Staging environment  
- `.env.production` - Production environment

### Available Scripts

```bash
# Development
npm run start:dev

# Staging
npm run start:staging

# Production
npm run start:prod

# Build for different environments
npm run build:dev
npm run build:staging
npm run build:prod
```

### API Configuration

The application automatically selects the API endpoint based on the environment:

- **Development**: `http://127.0.0.1:8000/api/v1`
- **Staging**: `http://staging-api.caster.com/api/v1`
- **Production**: `https://api.caster.com/api/v1`

Request structure:
```json
{
  "message": "User's message",
  "conversation_id": "ID of the conversation"
}
```

## Technologies Used

- React 19.1.1
- Material UI (MUI)
- Axios - HTTP client
- LocalStorage - For data storage

## Usage Guide

1.  New Chat: Click the "New Chat" button in the sidebar.
2.  Send Message: Type your message and press Enter or click the Send button.
3.  View History: Click on old chats in the sidebar.
4.  Suggested Questions: Choose one of the suggested questions to start.

## Development

# Run in development mode
npm start

# Build for production
npm run build

# Run tests
npm test

## Author

Sasage Agent for Caster Company