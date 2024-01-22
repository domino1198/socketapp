import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Grid} from "@mui/material";
import Messages from "../../features/Messages";
import AddMessage from "../../features/AddMessage";


const Main = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AddMessage/>
            </Grid>
            <Grid item xs={12}>
                <Messages/>
            </Grid>
        </Grid>
    );
}

export default Main;
