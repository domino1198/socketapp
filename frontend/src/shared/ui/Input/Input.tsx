import React, { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';

const Input: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <TextField
      fullWidth={true}
      size="small"
      placeholder="Введите сообщение"
      label="Сообщение"
      variant="outlined"
      {...props}
    />
  );
};

export default memo(Input);
