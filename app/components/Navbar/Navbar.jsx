import React from "react";
import { NavText, NavTextNumber } from "../Typography/Typography.styled";
import Link from "next/link";

import {
  StyledNavbar,
  Logo,
  NavLinksContainer,
  NavLink,
  NavLi,
} from "./Navbar.styled.";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo src="./assets/shared/logo.svg" />

      <NavLinksContainer>
        <NavLi>
          <Link href="/" passHref>
            <NavLink>
              <NavTextNumber>00</NavTextNumber>
              <NavText>Home</NavText>
            </NavLink>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/destination" passHref>
            <NavLink>
              <NavTextNumber>01</NavTextNumber>
              <NavText>Destination</NavText>
            </NavLink>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/crew" passHref>
            <NavLink>
              <NavTextNumber>02</NavTextNumber>
              <NavText>Crew</NavText>
            </NavLink>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/technology" passHref>
            <NavLink>
              <NavTextNumber>03</NavTextNumber>
              <NavText>Technology</NavText>
            </NavLink>
          </Link>
        </NavLi>
      </NavLinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;
