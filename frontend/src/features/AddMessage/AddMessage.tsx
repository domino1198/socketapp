import React, { FC, useState } from 'react';
import Form from '../../entitiies/Form';
import api from '../../shared/api';

const { socket } = api;

const AddMessage: FC = () => {
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    socket.emit('chat message', message);

    setMessage('');
  };

  return <Form setMessage={setMessage} message={message} onSubmit={onSubmit} />;
};

export default AddMessage;
