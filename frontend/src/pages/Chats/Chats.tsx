import React, { FC } from 'react';
import AddChat from '../../features/AddChat';

interface Props {
  props?: any;
}

const Chats: FC<Props> = ({ props }) => {
  return (
    <div>
      <AddChat />
    </div>
  );
};

export default Chats;
