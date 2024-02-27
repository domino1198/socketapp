import React, { Dispatch, FC, memo, SetStateAction } from 'react';
import { Grid } from '@mui/material';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';

interface Props {
  message: string;
  onSubmit: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
}

const Form: FC<Props> = ({ message, setMessage, onSubmit }) => {
  return (
    <Grid alignItems="center" container={true} columnGap={2}>
      <Grid item={true} xs={3}>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      </Grid>
      <Grid item={true} xs={1}>
        <Button onClick={onSubmit}>Отправить</Button>
      </Grid>
    </Grid>
  );
};

export default memo(Form);
