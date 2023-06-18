import cloneDeep from "lodash.clonedeep";

const Deck_States: TReducerStates = {
  gone: new Set(),

  pause: false,
  is_pause_button_active: false,
};

const Deck_Reducer = (state: TReducerStates, action: TReducerActions) => {
  const { type, payload } = action;
  const _state = cloneDeep(state);

  switch (type) {
    case "PAUSE_DECK_AUTOPLAY":
      _state.pause = payload;
      return _state;
    case "TOGGLE_PAUSE_BUTTON":
      _state.is_pause_button_active = payload;
      _state.pause = _state.is_pause_button_active;
      return _state;
    case "ADD_GONE":
      _state.gone = _state.gone.add(payload);
      return _state;
    case "CLEAR_GONE":
      _state.gone = new Set();
      return _state;
    default:
      return _state;
  }
};

export { Deck_States, Deck_Reducer };
