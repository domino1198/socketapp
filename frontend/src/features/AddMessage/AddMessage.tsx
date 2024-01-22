import React, {FC, useState} from 'react'
import {socket} from "../../app/socket";
import Form from "../../entitiies/Form";

const AddMessage: FC = () => {

    const [message, setMessage] = useState('')

    const onSubmit = () => {
        socket.emit('chat message', message);

        setMessage('')
    }

    return (<Form setMessage={setMessage} message={message} onSubmit={onSubmit}/>)
}

export default AddMessage
