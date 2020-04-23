export function loadDeliverymen(query) {
  return {
    type: '@deliverymen/LOAD',
    payload: { query },
  };
}

export function loadDeliverymenSuccess(deliverymen) {
  return {
    type: '@deliverymen/LOADED',
    payload: { deliverymen },
  };
}

export function loadDeliverymenFailure() {
  return {
    type: '@deliverymen/LOADING_FAILURE',
  };
}
