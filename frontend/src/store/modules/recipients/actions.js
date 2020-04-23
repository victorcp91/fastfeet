export function loadRecipients(query) {
  return {
    type: '@recipients/LOAD',
    payload: { query },
  };
}

export function loadRecipientsSuccess(recipients) {
  return {
    type: '@recipients/LOADED',
    payload: { recipients },
  };
}

export function loadRecipientsFailure() {
  return {
    type: '@recipients/LOADING_FAILURE',
  };
}
