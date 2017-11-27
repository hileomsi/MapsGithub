import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';
import { t } from 'services';

const Text = ({ phrase, values, children, ...props }) => (
  <RNText {...props}>{t(phrase, values) || children}</RNText>
);

Text.propTypes = {
  phrase: PropTypes.string.isRequired,
  values: PropTypes.shape({}),
  children: PropTypes.string
};

Text.defaultProps = {
  values: null,
  children: ''
};

export default Text;
