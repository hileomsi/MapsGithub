import createSagaMiddleware from 'redux-saga';
import { saga as homeSaga } from 'pages/Home';

function* root() {
  yield [...homeSaga];
}

export const sagaRoot = root;
export default createSagaMiddleware();
