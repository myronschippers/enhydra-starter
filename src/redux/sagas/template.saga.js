import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on 'GET_TEMPLATE' actions
function* getTemplates(action) {
  try {
    // call to get API route and store the response
    const getResponse = yield axios.get('/api/template');
    // after successful get API call use put to set the data
    yield put({
        type: 'SET_TEMPLATES',
        payload: getResponse.data,
    });
  } catch (error) {
    console.log('Error with get template:', error);
  }
}

// worker Saga: will be fired on 'POST_TEMPLATE' actions
function* postTemplate(action) {
  try {
    // post will send whatever is on the action.payload to the server route
    yield axios.post('api/user/logout', action.payload);
    // on successful post the 'GET_TEMPLATES' saga is dispateched (put)
    yield put({
        type: 'GET_TEMPLATES',
    });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* templateSaga() {
  yield takeEvery('GET_TEMPLATES', getTemplates);
  yield takeEvery('POST_TEMPLATE', postTemplate);
}

export default templateSaga;
