import React, { FC, memo } from 'react';
import {
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  FormControl as FormControlMUI,
  InputLabel,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { OutlinedInputProps } from '@mui/material/OutlinedInput/OutlinedInput';

interface Props extends OutlinedInputProps {
  label?: string;
  textError?: string;
}

const FormControl: FC<Props> = ({ label, textError, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControlMUI sx={{ width: '100%' }} size="small" variant="outlined">
      {label && (
        <InputLabel style={{ zIndex: 1111 }} htmlFor={props.id}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        {...props}
        type={
          props.type === 'password'
            ? showPassword
              ? 'text'
              : 'password'
            : props.type
        }
        label={label}
        endAdornment={
          props.type === 'password' ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : undefined
        }
      />
      {textError && (
        <FormHelperText error={props.error}>{textError}</FormHelperText>
      )}
    </FormControlMUI>
  );
};

export default memo(FormControl);
