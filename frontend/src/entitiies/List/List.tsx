import React, { FC } from 'react';
import { List as ListMUI, ListItem, ListItemText } from '@mui/material';

interface Props {
  items: string[];
}

const List: FC<Props> = ({ items }) => {
  return (
    <ListMUI>
      {items.map((itemMap) => (
        <ListItem>
          <ListItemText primary={itemMap} />
        </ListItem>
      ))}
    </ListMUI>
  );
};

export default List;
