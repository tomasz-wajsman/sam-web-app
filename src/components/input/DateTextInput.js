import React from 'react';
import { TextField } from '@material-ui/core';

import PropTypes from 'prop-types';
import util from '../../util';

const DateTextInput = ({ value, placeholder, onChangeText, helperVisible, helperType, helperText, additionalHelperText }) => {
  return (
    <TextField
      style={{ padding: 5, height: 24 }}
      value={value}
      placeholder={placeholder}
      label={placeholder}
      error={helperText !== ''}
      helperText={helperText}
      onInput={e => onChangeText(e.target.value)}
    />
  );
};

DateTextInput.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  additionalHelperText: PropTypes.string
};
DateTextInput.defaultProps = {
  defaultValue: util.date.unixToDate(0),
  placeholder: '',
  additionalHelperText: 'Date time format: YYYY-MM-DD HH:mm'
};

export default DateTextInput;
