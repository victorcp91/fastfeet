import { produce } from 'immer';

const INITIAL_STATE = {
  loading: true,
  data: [],
};

export default function deliverymen(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliverymen/LOADING': {
        draft.loading = true;
        break;
      }
      case '@deliverymen/LOADED': {
        draft.loading = false;
        draft.data = action.payload.deliverymen;
        break;
      }
      case '@deliverymen/LOADING_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
