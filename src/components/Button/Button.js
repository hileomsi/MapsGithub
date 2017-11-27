import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, TouchableOpacity, TouchableNativeFeedback, Text as RNText } from 'react-native';

import { Text } from 'components';

import styles from './styles';

const defineColor = ({ primary, secundary, success, danger, warning, info, black, white }) => {
  if(primary) return 'primary';
  if(secundary) return 'secundary';
  if(success) return 'success';
  if(danger) return 'danger';
  if(warning) return 'warning';
  if(info) return 'info';
  if(black) return 'black';
  if(white) return 'success';

  return 'default';
};

const Button = ({ phrase, style, textStyle, children, ...props }) => (
  <Choose>
    <When condition={Platform.OS === 'ios'}>
      <TouchableOpacity
        {...props}
        style={[
          styles.buttonContainer,
          styles[`button-color-${defineColor(props)}`],
          style
        ]}
      >
        <Choose>
          <When condition={children}>{children}</When>
          <Otherwise>
            <Text phrase={phrase} style={[styles.text, textStyle]} />
          </Otherwise>
        </Choose>
      </TouchableOpacity>
    </When>
    <Otherwise>
      <TouchableNativeFeedback
        {...props}
        style={[
          styles.buttonContainer,
          styles[`button-color-${defineColor(props)}`],
          style
        ]}
      >
        <Choose>
          <When condition={children}>{children}</When>
          <Otherwise>
            <Text phrase={phrase} style={[styles.text, textStyle]} />
          </Otherwise>
        </Choose>
      </TouchableNativeFeedback>
    </Otherwise>
  </Choose>
);

Button.propTypes = {
  phrase: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style,
  textStyle: RNText.propTypes.style,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool
};

Button.defaultProps = {
  style: undefined,
  textStyle: undefined,
  success: false,
  danger: false,
  warning: false,
  info: false,
  black: false,
  white: false
};

export default Button;