import React, { FC, useEffect, useState } from 'react';
import List from '../../entitiies/List';
import api from '../../shared/api';

const { socket } = api;

const GetMessages: FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    function onPing(msg: string) {
      setItems((prevState) => prevState.concat(msg));
    }

    socket.on('messageResponse', onPing);

    return () => {
      socket.off('messageResponse', onPing);
    };
  }, [items]);

  return <List items={items} />;
};

export default GetMessages;
