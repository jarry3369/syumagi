type TReducerStates = {
  gone: Set<unknown>;

  pause: boolean;
  is_pause_button_active: boolean;
};
type TReducerActionTypes =
  | "PAUSE_DECK_AUTOPLAY"
  | "TOGGLE_PAUSE_BUTTON"
  | "ADD_GONE"
  | "CLEAR_GONE";

type TReducerActions = {
  type: TReducerActionTypes;
  payload?: any;
};
