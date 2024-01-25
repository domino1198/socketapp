import styled from 'styled-components';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const ContainerSignStyled = styled(Container)`
  display: flex !important;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  justify-content: center;
`;

export const TitleSignStyled = styled(Typography)`
  font-weight: 500;
`;
