import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

/**
 * WHY takeLatest
 *
 * 'takeLatest', does not allow concurrent fetches of user. If the same dispatch
 * 'GET_ID' gets dispatched while a fetch is already pending, that pending fetch
 * is cancelled and only the latest one will be run.
 * 
 * 'takeLatest' - DO NOT use on other Sagas unless you explicitly want the above behavior.
 */
function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
