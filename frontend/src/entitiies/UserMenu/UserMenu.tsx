import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "../../shared/Menu";
import {settings} from "../../widgets/Header/data";

interface Props {
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
    handleCloseUserMenu: () => void,
    anchorElUser: null | HTMLElement,
    setAnchorElUser: Dispatch<SetStateAction<null | HTMLElement>>
}

const UserMenu: FC<Props> = ({handleOpenUserMenu, handleCloseUserMenu, setAnchorElUser, anchorElUser}) => {


    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                </IconButton>
            </Tooltip>
            <Menu
                items={settings}
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            />
        </Box>
    )
}

export default UserMenu
