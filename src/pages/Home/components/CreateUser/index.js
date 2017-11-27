import React, { Component } from 'react';
import { Modal, View, TextInput } from 'react-native';
import { Button, Text } from 'components';
import { t } from 'services';
import PropTypes from 'prop-types';

import styles from './styles';

export class CreateUser extends Component {
  static propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired,
    save: PropTypes.func.isRequired
  };

  state = {
    name: ''
  }

  render() {
    const { opened, onRequestClose, save } = this.props;
    return (
      <Modal
        animationType='fade'
        transparent
        visible={opened}
        onRequestClose={onRequestClose}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.containerHeader}>
              <Text style={styles.header} phrase='ADD_NEW_LOCATION' />
            </View>
            <View>
              <TextInput placeholder={t('USER_INPUT')} style={styles.input} onChangeText={name => this.setState({ name })} />
            </View>
            <View style={styles.containerActions}>
              <Button style={styles.btnCancel} onPress={onRequestClose} phrase='CANCEL' />
              <Button style={styles.btnSave} onPress={() => save(this.state.name)} phrase='SAVE' />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
