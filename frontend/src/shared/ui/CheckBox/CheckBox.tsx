import React, { FC, memo } from 'react';
import {
  CheckboxProps,
  Checkbox as MUICheckBox,
  FormControlLabel,
} from '@mui/material';

interface Props extends CheckboxProps {
  label?: string;
}

const CheckBox: FC<Props> = ({ label, ...props }) => {
  return (
    <FormControlLabel control={<MUICheckBox {...props} />} label={label} />
  );
};

export default memo(CheckBox);
