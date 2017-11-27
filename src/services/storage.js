import { AsyncStorage } from 'react-native';

class Storage {
  clear = () => AsyncStorage.clear();
  get = async key => JSON.parse(await AsyncStorage.getItem(key));
  set = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));
}

export default new Storage();
