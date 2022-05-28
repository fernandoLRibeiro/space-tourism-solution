import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  position: static;
  margin-top: 2.5em;
  display: flex;
  align-items: center;
  height: 6em;
  justify-content: space-between;
  padding-left: 3.5em;
`;

export const Logo = styled.img``;

export const NavLinksContainer = styled.ul`
  background-color: rgba(255, 255, 255, 0.1);
  gap: 3em;
  height: 100%;
  width: 58%;
  display: flex;
  align-items: center;
  padding: 0 8em;
  list-style: none;
`;

export const NavLink = styled.li`
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerifCondensed};
  font-size: ${({ theme }) => theme.font.fontSize.small};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.navText};
  display: flex;
  gap: 0.6875em;
`;
