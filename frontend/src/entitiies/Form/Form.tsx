import React, {Dispatch, FC, SetStateAction} from 'react'
import {Grid} from "@mui/material";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

interface Props {
    message: string,
    onSubmit: () => void,
    setMessage: Dispatch<SetStateAction<string>>
}

const Form: FC<Props> = ({message, setMessage, onSubmit}) => {


    return (
        <Grid alignItems={'center'} container columnGap={2}>
            <Grid item xs={3}>
                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Grid>
            <Grid item xs={1}>
                <Button onClick={onSubmit}>
                    Отправить
                </Button>
            </Grid>
        </Grid>
    )
}

export default Form
