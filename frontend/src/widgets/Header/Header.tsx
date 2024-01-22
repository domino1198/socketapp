import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {FC} from "react";
import ActionHeader from "../../features/ActionHeader";
import ActionUserMenu from "../../features/ActionUserMenu";

interface Props {
    props?: any
}


const Header: FC<Props> = () => {


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ActionHeader/>
                    <ActionUserMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
