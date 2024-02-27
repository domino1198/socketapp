import React, { FC, memo, ReactNode } from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <ButtonMUI color="primary" variant="contained" {...props}>
      {children}
    </ButtonMUI>
  );
};

export default memo(Button);
