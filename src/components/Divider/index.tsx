import * as S from './style';

export interface DividerProps {
  vertical?: boolean;
  color?: string;
  style?: object;
}

const Divider = (props: DividerProps) => {
  return <S.Divider {...props} />;
};

export default Divider;
