import React, {FC} from 'react'
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {pages} from "../../widgets/Header/data";
import Button from "@mui/material/Button";

interface Props {
    handleCloseNavMenu:() => void

}

const Header: FC<Props> = ({handleCloseNavMenu}) => {



    return (
        <>
            <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>

            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                    <Button
                        key={page.id}
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'white', display: 'block'}}
                    >
                        {page.title}
                    </Button>
                ))}
            </Box>
        </>
    )
}

export default Header