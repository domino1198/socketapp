import React, {FC, useEffect, useState} from 'react'
import {socket} from "../../app/socket";
import List from "../../entitiies/List";

const Messages: FC = () => {

    const [items, setItems] = useState<string[]>([])

    useEffect(() => {
        socket.connect();

        return () => {
            socket.disconnect()
        }
    }, []);

    useEffect(() => {
        function onPing(msg: string) {
            console.log('msg: ', msg)
            setItems((prevState) => prevState.concat(msg))
        }

        socket.on('messageResponse', onPing);

        return () => {
            socket.off('messageResponse', onPing);
        }

    }, [items]);


    return (<List items={items}/>)
}

export default Messages
