import React from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

import PropTypes from 'prop-types';

import styles from './styles';

export const Avatar = ({ user: { coordinates, image, name, description } }) => (
  <Marker coordinate={coordinates} title={name} description={description}>
    <Image
      style={styles.image}
      source={{ uri: image }}
    />
  </Marker>
);

Avatar.propTypes = {
  user: PropTypes.shape({
    coordinates: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};
