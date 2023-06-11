import Divider from "../Divider";
import * as S from "./style";
import { Link } from "react-router-dom";

import { TNavContent } from "@/constants/types";

import { LazyImage } from "../Image";
import Stack from "@/components/Stack";

import logo from "@/assets/image/syumagi_logo.svg";

const NavigationBar = ({ items }: { items: Array<TNavContent> }) => {
  return (
    <S.NavigationContainer direction="row" justify="space-between" spacing={40}>
      <Link to={"/"}>
        <LazyImage height={48} src={logo} />
      </Link>
      <Stack
        className="nav-item-wrapper"
        direction="row"
        spacing={10}
        sx={{ width: "max-content" }}
        divider={<Divider vertical={true} style={{ height: "1rem" }} />}
      >
        {items.map((item, index) => {
          const { path, label } = item;
          return (
            <S.NavItem key={`nav-${label}-item${index}`} to={path}>
              {label}
            </S.NavItem>
          );
        })}
      </Stack>
    </S.NavigationContainer>
  );
};

export default NavigationBar;
