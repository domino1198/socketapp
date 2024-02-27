import React, { FC, memo, ReactElement, ReactNode } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@mui/material';

interface Props extends DialogProps {
  customTitle?: ReactNode;
  customContent?: ReactNode;
  customAction?: ReactNode;
  wrapper?: (children: ReactElement) => ReactNode;
}

const Modal: FC<Props> = ({
  customAction,
  customContent,
  customTitle,
  wrapper,
  ...props
}) => {
  const DialogBody = () => (
    <>
      <DialogTitle>{customTitle}</DialogTitle>
      <DialogContent>{customContent}</DialogContent>
      <DialogActions>{customAction}</DialogActions>
    </>
  );

  return <Dialog {...props}>{wrapper ? wrapper(<DialogBody />) : null}</Dialog>;
};

export default memo(Modal);
