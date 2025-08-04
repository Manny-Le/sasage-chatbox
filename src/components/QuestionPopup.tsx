import React, { FC } from 'react';
import { Grid } from '@mui/material';
import config from '../utils/config';
import {
  PopupContainer,
  WelcomeContainer,
  WelcomeTitle,
  WelcomeSubtitle,
  QuestionsContainer,
  QuestionsTitle,
  QuestionChip,
  HelperText
} from './styled';

interface QuestionPopupProps {
  onQuestionSelect: (question: string) => void;
}

const QuestionPopup: FC<QuestionPopupProps> = ({ onQuestionSelect }) => {
  const suggestedQuestions = [
    "Bạn có thể giúp tôi tạo một ứng dụng React không?",
    "Làm thế nào để tối ưu hóa hiệu suất website?",
    "Cách xử lý lỗi trong JavaScript?",
    "Tôi muốn học về API REST",
    "Cách deploy ứng dụng lên server?",
    "Làm thế nào để sử dụng Material UI?",
    "Tôi cần tạo database schema",
    "Cách implement authentication?",
    "Tôi muốn tạo chatbot AI",
    "Làm thế nào để test ứng dụng React?"
  ];

  const handleQuestionClick = (question: string) => {
    onQuestionSelect(question);
  };

  return (
    <PopupContainer>
      {/* Welcome Message */}
      <WelcomeContainer>
        <WelcomeTitle variant="h4">
          Xin chào!
        </WelcomeTitle>
        <WelcomeSubtitle variant="h6">
          {config.getAppName()} cho {config.getCompanyName()}
        </WelcomeSubtitle>
      </WelcomeContainer>

      {/* Suggested Questions */}
      <QuestionsContainer elevation={0}>
        <QuestionsTitle variant="h6">
          Bạn muốn hỏi gì?
        </QuestionsTitle>

        <Grid container spacing={1}>
          {suggestedQuestions.map((question, index) => (
            <Grid key={index}>
              <QuestionChip
                label={question}
                onClick={() => handleQuestionClick(question)}
              />
            </Grid>
          ))}
        </Grid>

        <HelperText variant="body2">
          Hoặc bạn có thể nhập câu hỏi tùy ý ở bên dưới
        </HelperText>
      </QuestionsContainer>
    </PopupContainer>
  );
};

export default QuestionPopup; 