import React, {FC} from 'react'
import {Grid} from "@mui/material";
import AddMessage from "../../features/AddMessage";
import Messages from "../../features/Messages";

interface Props {
    props?: any
}

const Chat: FC<Props> = ({props}) => {

    return (        <Grid container spacing={2}>
        <Grid item xs={12}>
            <AddMessage/>
        </Grid>
        <Grid item xs={12}>
            <Messages/>
        </Grid>
    </Grid>)
}

export default Chat
