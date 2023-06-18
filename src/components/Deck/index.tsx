import { Fragment, useEffect } from "react";
import { useDrag } from "@use-gesture/react";
import { useSprings, to as interpolate } from "@react-spring/web";

import useInterval from "@/hooks/useInterval";

import * as S from "./style";
import {
  BiPlayCircle,
  BiStopCircle,
  BiSkipNextCircle,
  BiSkipPreviousCircle,
} from "react-icons/bi";

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: Math.floor(Math.random() * (1 - -1) + -1) * 6,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: 0 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

// items should be string array ( img urls )
export const Deck = ({
  _state,
  _dispatch,
  items,
}: {
  _state: TReducerStates;
  _dispatch: React.Dispatch<TReducerActions>;
  items: Array<string>;
}) => {
  const [props, api] = useSprings(items.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const deckGathering = () => {
    console.log(_state.gone.size >= items.length);
    if (_state.gone.size >= items.length - 1)
      setTimeout(() => {
        _dispatch({ type: "CLEAR_GONE" });
        api.start((i) => to(i));
      }, 1000);
  };

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      !_state.is_pause_button_active &&
        _dispatch({ type: "PAUSE_DECK_AUTOPLAY", payload: active });

      console.log(index, active);

      const trigger = vx > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!active && trigger) _state.gone.add(index);
      // if (!active && trigger) _dispatch({ type: "ADD_GONE", payload: index });

      api.start((i) => {
        if (index !== i) return;
        const isGone = _state.gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : active ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 80,
            tension: active ? 800 : isGone ? 200 : 500,
          },
        };
      });
      deckGathering();
    }
  );

  useEffect(() => {
    console.log("is : ", _state.pause, "btn : ", _state.is_pause_button_active);
  }, [_state]);

  useInterval(
    () => {
      _dispatch({
        type: "ADD_GONE",
        payload: items.length - 1 - _state.gone.size,
      });
      api.start((i) => {
        if (i === items.length - 1 - _state.gone.size) {
          return {
            x: 200 + window.innerWidth,
            scale: 1,
            delay: undefined,
            config: {
              friction: 50,
              tension: 200,
            },
          };
        }
      });
      deckGathering();
    },
    3000,
    _state.pause
  );

  return (
    <Fragment>
      {props.map(({ x, y, rot, scale }, i) => (
        <S.Deck key={i} style={{ x, y }}>
          <S.Card
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${items[i]})`,
            }}
          />
        </S.Deck>
      ))}

      <div
        className="controller"
        style={{
          position: "absolute",
          bottom: "4rem",
          left: "4rem",
          color: "#000",
        }}
      >
        <BiSkipPreviousCircle
          size={30}
          onClick={() => {
            _dispatch({
              type: "TOGGLE_PAUSE_BUTTON",
              payload: !_state.is_pause_button_active,
            });
          }}
        />
        {_state.pause ? (
          <BiPlayCircle
            size={30}
            onClick={() => {
              _dispatch({
                type: "TOGGLE_PAUSE_BUTTON",
                payload: !_state.is_pause_button_active,
              });
            }}
          />
        ) : (
          <BiStopCircle
            size={30}
            onClick={() => {
              _dispatch({
                type: "TOGGLE_PAUSE_BUTTON",
                payload: !_state.is_pause_button_active,
              });
            }}
          />
        )}
        <BiSkipNextCircle
          size={30}
          onMouseUp={() => {
            _dispatch({ type: "PAUSE_DECK_AUTOPLAY", payload: !_state.pause });
          }}
          onClick={() => {
            _dispatch({ type: "PAUSE_DECK_AUTOPLAY", payload: !_state.pause });
            _dispatch({
              type: "ADD_GONE",
              payload: items.length - 1 - _state.gone.size,
            });
            api.start((i) => {
              if (i === items.length - 1 - _state.gone.size) {
                return {
                  x: 200 + window.innerWidth,
                  scale: 1,
                  delay: undefined,
                  config: {
                    friction: 50,
                    tension: 200,
                  },
                };
              }
            });
            deckGathering();
          }}
        />
      </div>
    </Fragment>
  );
};

export default Deck;
