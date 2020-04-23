import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';

import { loadRecipientsSuccess, loadRecipientsFailure } from './actions';

export function* load({ payload }) {
  try {
    let response;
    const { query } = payload;
    if (query) {
      response = yield call(api.get, `/recipients?q=${query}`);
    } else {
      response = yield call(api.get, `/recipients`);
    }

    yield put(loadRecipientsSuccess(response.data));
  } catch (err) {
    toast.error('Não foi possível carregar os destinatários');
    yield put(loadRecipientsFailure());
  }
}

export default all([takeLatest('@recipients/LOAD', load)]);
