import { all } from 'redux-saga/effects';

import auth from 'store/modules/auth/sagas';
import recipients from 'store/modules/recipients/sagas';
import deliverymen from 'store/modules/deliverymen/sagas';

export default function* rootSaga() {
  return yield all([auth, recipients, deliverymen]);
}
