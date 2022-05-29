import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  top: 2.5em;
  display: flex;
  align-items: center;
  height: 6em;
  justify-content: space-between;
  padding-left: 3.5em;

  @media (max-width: 768px) {
    top: 0;
    align-items: flex-start;
    height: max-content;
    padding: 0;
  }
`;

export const Logo = styled.img``;

export const NavLinksContainer = styled.ul`
  background-color: hsl(0 0% 100% /0.1);
  backdrop-filter: blur(2em);
  gap: 3em;
  height: 100%;
  width: 58%;
  display: flex;
  align-items: center;
  padding: 0 10em;
  list-style: none;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    align-items: flex-start;
    gap: 1em;
    inset: 0 0 0 30%;
    margin: 0;
    padding-top: min(25vh, 5em);
  }
`;

export const NavLi = styled.li`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;

  &::after {
    content: "";
    height: 3px;
    width: 0%;
    background-color: white;
  }

  &:hover::after {
    width: 100%;
    transition: 0.03s ease-in;
  }

  @media (max-width: 480px) {
    height: min-content;
    padding: 0 0 2.745em 0;
  }
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerifCondensed};
  font-size: ${({ theme }) => theme.font.fontSize.small};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.navText};
  display: flex;
  gap: 0.6875em;
  text-decoration: none;
  color: inherit;

  height: 100%;
  align-items: center;
`;
