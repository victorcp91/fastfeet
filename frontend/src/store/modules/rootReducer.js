import { combineReducers } from 'redux';

import auth from 'store/modules/auth/reducers';
import recipients from 'store/modules/recipients/reducers';
import deliverymen from 'store/modules/deliverymen/reducers';

export default combineReducers({
  auth,
  recipients,
  deliverymen,
});
