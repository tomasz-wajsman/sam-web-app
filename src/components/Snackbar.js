import React from 'react';
import { Snackbar as MaterialSnackbar, SnackbarContent } from '@material-ui/core';

const Snackbar = ({ visible, style, message, onHide }) => {
  return (
    <MaterialSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      autoHideDuration={3000}
      open={visible}
      onClose={onHide}
    >
      <SnackbarContent
        style={{
          backgroundColor: style === 'success' ? 'green' : 'red'
        }}
        message={message}
      />
    </MaterialSnackbar>
  );
};
export default Snackbar;
