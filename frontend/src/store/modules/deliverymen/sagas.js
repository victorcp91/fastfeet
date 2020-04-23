import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';

import { loadDeliverymenSuccess, loadDeliverymenFailure } from './actions';

export function* load({ payload }) {
  try {
    let response;
    const { query } = payload;
    if (query) {
      response = yield call(api.get, `/deliverymen?q=${query}`);
    } else {
      response = yield call(api.get, `/deliverymen`);
    }

    yield put(loadDeliverymenSuccess(response.data));
  } catch (err) {
    toast.error('Não foi possível carregar os entregadores');
    yield put(loadDeliverymenFailure());
  }
}

export default all([takeLatest('@deliverymen/LOAD', load)]);
