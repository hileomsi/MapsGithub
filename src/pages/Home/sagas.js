import { call, put, takeLatest } from 'redux-saga/effects';
import { github } from 'services';

import { Github as GithubActions, Types } from './ducks';

function* fetchAndAddUser(action) {
  try {
    const user = yield call(github.fetch, action.payload);
    yield put(GithubActions.succeeded(user));
  } catch(err) {
    yield put(GithubActions.failed(err.message));
  }
}

export default [takeLatest(Types.GITHUB_FETCH_REQUESTED, fetchAndAddUser)];
