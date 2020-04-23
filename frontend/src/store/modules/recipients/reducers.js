import { produce } from 'immer';

const INITIAL_STATE = {
  loading: true,
  data: [],
};

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipients/LOADING': {
        draft.loading = true;
        break;
      }
      case '@recipients/LOADED': {
        draft.loading = false;
        draft.data = action.payload.recipients;
        break;
      }
      case '@recipients/LOADING_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
