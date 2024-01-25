import { Grid } from '@mui/material';
import AddMessage from '../../features/AddMessage';
import GetMessages from '../../features/GetMessages';
import React from 'react';


const Chat = () => {
  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} xs={12}>
        <AddMessage />
      </Grid>
      <Grid item={true} xs={12}>
        <GetMessages />
      </Grid>
    </Grid>
  );
};

export default Chat