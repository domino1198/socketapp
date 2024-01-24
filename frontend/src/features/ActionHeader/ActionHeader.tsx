import React, { FC } from 'react';
import Header from '../../entitiies/Header';
import HeaderMobile from '../../entitiies/HeaderMobile';

const ActionHeader: FC = () => {
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
    <>
      <Header handleCloseNavMenu={handleCloseNavMenu} />
      <HeaderMobile
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        anchorElNav={anchorElNav}
      />
    </>
  );
};

export default ActionHeader;
