import React, {Dispatch, FC, SetStateAction} from 'react'
import {Button, Grid, TextField} from "@mui/material";

interface Props {
    message: string,
    onSubmit: () => void,
    setMessage: Dispatch<SetStateAction<string>>
}

const Form: FC<Props> = ({message, setMessage, onSubmit}) => {


    return (
        <Grid alignItems={'center'} container columnGap={2}>
            <Grid item xs={3}>
                <TextField value={message}
                           fullWidth={true}
                           onChange={(e) => setMessage(e.target.value)}
                           placeholder={'Write message'}
                           label="Messages"
                           variant="outlined"
                />
            </Grid>
            <Grid item xs={1}>
                <Button onClick={onSubmit} color={'primary'} variant={'contained'}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}

export default Form
