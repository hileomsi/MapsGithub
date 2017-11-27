import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import { CreateUser, Avatar } from './components';
import styles from './styles';


const Home = ({ users, opened, toogle, open, save }) => (
  <View style={styles.container}>
    <MapView
      initialRegion={{
        latitude: -27.2177659,
        longitude: -49.6451598,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0031
      }}
      style={styles.container}
      onLongPress={open}
    >
      <For each='user' of={users}>
        <Avatar key={user.id} user={user} />
      </For>
    </MapView>
    <CreateUser
      opened={opened}
      onRequestClose={toogle}
      save={save}
    />
  </View>
);

Home.propTypes = {
  toogle: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(Avatar.propTypes.user).isRequired,
  open: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
};

export default Home;
