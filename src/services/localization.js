import { Platform, NativeModules } from 'react-native';
import Polyglot from 'node-polyglot';
import { enUS, ptBR } from 'config/locales';

const language = Platform.OS === 'android'
  ? NativeModules.I18nManager.localeIdentifier
  : NativeModules.SettingsManager.settings.AppleLocale;

const polyglot = new Polyglot({ phrases: language.includes('en-US') ? enUS : ptBR });
export default polyglot.t.bind(polyglot);
