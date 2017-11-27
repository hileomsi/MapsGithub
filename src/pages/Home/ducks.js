import { Map } from 'immutable';
import { createReducer } from 'redux-create-reducer';

// Action Types
export const Types = {
  MODAL_TOOGLE: '@HOME/MODAL_TOOGLE',
  GITHUB_FETCH_REQUESTED: '@HOME/GITHUB_FETCH_REQUESTED',
  GITHUB_FETCH_SUCCEEDED: '@HOME/GITHUB_FETCH_SUCCEEDED',
  GITHUB_FETCH_FAILED: '@HOME/GITHUB_FETCH_FAILED',
  SET_COORDINATES: '@HOME/SET_COORDINATES'
};

// Action Creators
export const Modal = {
  toogle: () => ({ type: Types.MODAL_TOOGLE })
};

export const Coordinate = {
  set: payload => ({ type: Types.SET_COORDINATES, payload })
};

export const Github = {
  requested: name => ({ type: Types.GITHUB_FETCH_REQUESTED, payload: name }),
  succeeded: user => ({ type: Types.GITHUB_FETCH_SUCCEEDED, payload: user }),
  failed: message => ({ type: Types.GITHUB_FETCH_REQUESTED, payload: message })
};

// Reducer
const init = Map({
  opened: false,
  coordenates: {
    latitude: 0,
    longitude: 0
  },
  users: [],
  errorMessage: ''
});

export default createReducer(init, {
  [Types.MODAL_TOOGLE]: state => Map(state)
    .set('opened', !state.get('opened')),

  [Types.SET_COORDINATES]: (state, { payload }) => Map(state)
    .set('coordenates', payload),

  [Types.GITHUB_FETCH_SUCCEEDED]: (state, { payload }) => {
    const user = Object.assign(payload, { coordinates: state.get('coordenates') });
    const users = state.get('users') || [];
    return Map(state)
      .set('users', [...users, user]);
  },

  [Types.GITHUB_FETCH_FAILED]: (state, { payload }) => Map(state)
    .set('errorMessage', payload)
});
