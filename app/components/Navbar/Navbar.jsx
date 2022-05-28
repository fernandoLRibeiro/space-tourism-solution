import React from "react";
import { NavText, NavTextNumber } from "../Typography/Typography.styled";
import Link from "next/link";

import {
  StyledNavbar,
  Logo,
  NavLinksContainer,
  NavLink,
} from "./Navbar.styled.";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo src="./assets/shared/logo.svg" />

      <NavLinksContainer>
        <Link href="./">
          <NavLink>
            <NavTextNumber>00</NavTextNumber>

            <NavText>Home</NavText>
          </NavLink>
        </Link>

        <NavLink>
          <NavTextNumber>01</NavTextNumber>

          <NavText>Destination</NavText>
        </NavLink>

        <NavLink>
          <NavTextNumber>02</NavTextNumber>

          <NavText>Crew</NavText>
        </NavLink>

        <NavLink>
          <NavTextNumber>03</NavTextNumber>

          <NavText>Technology</NavText>
        </NavLink>
      </NavLinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;
