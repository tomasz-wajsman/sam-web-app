import React from 'react';
import { TextField } from '@material-ui/core';

import PropTypes from 'prop-types';

const FormTextInput = ({ value, placeholder, onChangeText, helperVisible, helperType, helperText, additionalHelperText }) => {
  return (
    <>
      <TextField
        style={{ padding: 5, height: 24 }}
        value={value}
        placeholder={placeholder}
        label={placeholder}
        error={helperText !== ''}
        helperText={helperText}
        onInput={e => onChangeText(e.target.value)}
      />
      <br />
    </>
  );
};

FormTextInput.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  additionalHelperText: PropTypes.string
};
FormTextInput.defaultProps = {
  defaultValue: '',
  placeholder: '',
  additionalHelperText: ''
};

export default FormTextInput;
