import React from 'react';
import { Typography } from '@material-ui/core';

const Paragraph = ({ children, variant }) => {
  return (
    <>
      <Typography variant={variant || 'body1'} component='p'>
        {children}
      </Typography>
      <br />
    </>
  );
};

export default Paragraph;
