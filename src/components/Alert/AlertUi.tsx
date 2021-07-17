import React, { useState } from 'react';
import { Alert, AlertTitle, Color } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

interface iProps {
  variant: Color | undefined;
  title?: string | undefined;
  children: React.ReactNode;
  className?: string | undefined;
  collapse?: boolean | undefined;
}

const AlertUi: React.FC<iProps> = ({ variant, title, children, className, collapse }) => {
  const [open, setOpen] = useState<boolean | undefined>(collapse);

  if (collapse) {
    return (
      <Collapse in={open}>
        <Alert
          severity={variant}
          className={className}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {children}
        </Alert>
      </Collapse>
    );
  }

  return (
    <Alert severity={variant} className={className}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </Alert>
  );
};

export default AlertUi;
