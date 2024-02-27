import React, { FC, memo, ReactNode } from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { ItemMenu } from '../Menu/types';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu';
import { StyledLink } from '../../../entitiies/Page/styled';

interface Props {
  rightItems?: ReactNode;
  leftItems?: ItemMenu[];
}

const Header: FC<Props> = ({ leftItems = [], rightItems }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <StyledLink to="/main">
            <AdbIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                color: 'inherit',
              }}
            />
            <Typography
              variant="h6"
              noWrap={true}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </StyledLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {(leftItems ?? []).map((page) => (
              <StyledLink key={page.id} to={page.link ?? '/'}>
                <Button
                  onClick={!page.link ? page.action : undefined}
                  sx={{
                    my: 2,
                    color: 'inherit',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                >
                  {page.title}
                </Button>
              </StyledLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              items={leftItems}
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            />
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap={true}
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
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
          {rightItems}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default memo(Header);
