import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectProps,
  Theme,
  useTheme,
} from '@mui/material';
import React, { FC, memo } from 'react';
import { ItemMultipleSelect } from './types';
import MenuItem from '@mui/material/MenuItem';

interface Props extends SelectProps {
  items: ItemMultipleSelect[];
  label?: string;
}

const getStyles = (name: string, personName: string[], theme: Theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const MultipleSelect: FC<Props> = ({ items, label, ...props }) => {
  const theme = useTheme();

  return (
    <FormControl sx={{ width: '100%' }} size="small">
      {label && (
        <InputLabel id={`multiple-name-label-${label}`}>{label}</InputLabel>
      )}
      <Select
        labelId={`multiple-name-label-${label}`}
        id={`multiple-name-${label}`}
        input={<OutlinedInput label={label} />}
        {...props}
        multiple={true}
      >
        {items.map((name) => (
          <MenuItem
            key={name.value}
            value={name.value}
            style={getStyles(
              name.value,
              items.map((name) => name.value),
              theme
            )}
          >
            {name.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(MultipleSelect);
