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
    backgroundColor: "transparent",
    // backgroundColor: theme.colors.SG02_1,
  })}

  ${media.md`
    padding: 1rem 1.6rem;
    max-width: 100%;

    .nav-item-wrapper {
        display:none
    }
  `}
`;

const NavItem = styled(NavLink)`
  position: relative;

  text-decoration-style: none;
  ${({ theme }) => ({
    ...theme.fontStyle.subtitle,
  })}

  ::after {
    display: block;
    content: "";
    position: absolute;
    top: 100%;
    width: 0.25rem;
    height: 0.25rem;
    left: 50%;
    margin-top: 0.5rem;
    border-radius: 1rem;
    background-color: currentColor;
    transform: translateX(-50%) scale(0.2);
    opacity: 0;
    transition: transform var(--animation-speed), opacity var(--animation-speed);

    transform: translateX(-50%);
    transition: transform var(--animation-speed),
      opacity calc(var(--animation-speed--fast) / 2);
    opacity: 1;
  }
`;

export { NavigationContainer, NavItem };
