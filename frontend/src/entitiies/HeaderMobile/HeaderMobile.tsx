import React, {FC} from 'react'
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../../shared/Menu";
import {pages, settings} from "../../widgets/Header/data";

interface Props {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
    anchorElNav:null | HTMLElement,
    handleCloseNavMenu:() => void

}

const HeaderMobile: FC<Props> = ({handleOpenNavMenu,anchorElNav,handleCloseNavMenu}) => {

        return (
            <>
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        items={pages}
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    />
                </Box>
                <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: {xs: 'flex', md: 'none'},
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>


            </>
        )
    }

    export default HeaderMobile
