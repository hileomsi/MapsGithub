import t from './localization';
import storage from './storage';
import { required, max, min, email, confirmPassword } from './validations';

export { t, storage };
export const validations = {
  required,
  max,
  min,
  email,
  confirmPassword
};
export { github } from './github';
