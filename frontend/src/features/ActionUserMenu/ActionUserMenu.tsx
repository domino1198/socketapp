import React, { FC, useState } from 'react';
import UserMenu from '../../entitiies/UserMenu';

const ActionUserMenu: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <UserMenu
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      anchorElUser={anchorElUser}
      setAnchorElUser={setAnchorElUser}
    />
  );
};

export default ActionUserMenu;
