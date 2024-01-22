import React, {FC} from 'react'
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {Menu as MenuMUI, MenuProps} from '@mui/material';
import { ItemMenu } from './types';



interface Props extends MenuProps {
    items:ItemMenu[]
}

const Menu: FC<Props> = ({items,...props}) => {

    return (<MenuMUI
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        sx={{
            display: {xs: 'block', md: 'none'},
        }}
        {...props}
    >
        {items.map((item) => (
            <MenuItem key={item.id} onClick={item.action}>
                <Typography textAlign="center">{item.title}</Typography>
            </MenuItem>
        ))}
    </MenuMUI>)
}

export default Menu
