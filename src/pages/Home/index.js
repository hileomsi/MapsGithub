import reducer from './ducks';
import component from './Container';
import saga from './sagas';
import Redux from './connect';

export { component, reducer, saga };
export default Redux(component);
