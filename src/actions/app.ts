export const APP_BOOTSTRAP = "APP_BOOTSTRAP";
export const APP_BOOTSTRAP_PENDING = "APP_BOOTSTRAP_PENDING";
export const APP_BOOTSTRAP_SUCCESS = "APP_BOOTSTRAP_SUCCESS";
export const APP_BOOTSTRAP_ERROR = "APP_BOOTSTRAP_ERROR";
export const APP_SNACKBAR_INIT = "APP_SNACKBAR_INIT";
export const APP_SNACKBAR_RESET = "APP_SNACKBAR_RESET";

export const bootstrap = () =>
  ({
    type: APP_BOOTSTRAP
  } as const);

export const appBootstrapPending = (payload: any) =>
  ({
    type: APP_BOOTSTRAP_PENDING,
    payload
  } as const);

export const appBootstrapSuccess = (payload: any) =>
  ({
    type: APP_BOOTSTRAP_SUCCESS,
    payload
  } as const);

export const appBootstrapError = (payload: any) =>
  ({
    type: APP_BOOTSTRAP_ERROR,
    payload,
    error: true
  } as const);

export const appSnackBarInit = (payload: any) =>
  ({
    type: APP_SNACKBAR_INIT,
    payload
  } as const);

export const appSnackBarReset = () =>
  ({
    type: APP_SNACKBAR_RESET
  } as const);

export type TAppReducerActions =
  | ReturnType<typeof bootstrap>
  | ReturnType<typeof appBootstrapPending>
  | ReturnType<typeof appBootstrapSuccess>
  | ReturnType<typeof appBootstrapError>
  | ReturnType<typeof appSnackBarInit>
  | ReturnType<typeof appSnackBarReset>;

export type AppActionDataTypes = TAppReducerActions["type"];
