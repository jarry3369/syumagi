import { styled } from "styled-components";

import Stack from "@components/Stack";
import { NavLink } from "react-router-dom";
import { media } from "@/constants/media";

const NavigationContainer = styled(Stack)`
  position: fixed;
  top: 0;
  left: 0;

  padding: 1rem 2.2rem;

  width: 100%;
  width: -webkit-fill-available;

  ${({ theme }) => ({
    backgroundColor: theme.colors.SG02_1,
  })}

  ${media.tablet`
    padding: 1rem 1.6rem;
    max-width: 100%;

    .nav-item-wrapper {
        display:none
    }
  `}
`;

const NavItem = styled(NavLink)`
  text-decoration-style: none;
  ${({ theme }) => ({
    ...theme.fontStyle.subtitle,
  })}
`;

export { NavigationContainer, NavItem };
