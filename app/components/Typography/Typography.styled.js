import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: ${({ theme }) => theme.font.fontSize.lagest};
  font-weight: 400;
`;

export const Heading2 = styled.h2`
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: ${({ theme }) => theme.font.fontSize.xxxLarge};
  font-weight: 400;
`;

export const Heading3 = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: ${({ theme }) => theme.font.fontSize.xxLarge};
  font-weight: 400;
`;

export const Heading4 = styled.h4`
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: ${({ theme }) => theme.font.fontSize.xLarge};
  font-weight: 400;
`;

export const Heading5 = styled.h5`
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerifCondensed};
  font-size: ${({ theme }) => theme.font.fontSize.large};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.heading5};
`;

export const Subheading1 = styled.h5`
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: ${({ theme }) => theme.font.fontSize.large};
  font-weight: 400;
`;

export const Subheading2 = styled.h6`
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerifCondensed};
  font-size: ${({ theme }) => theme.font.fontSize.xSmall};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.subheading2};
`;

export const NavText = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerifCondensed};
  font-size: ${({ theme }) => theme.font.fontSize.small};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.navText};
`;

export const BodyText = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerifCondensed};
  font-size: ${({ theme }) => theme.font.fontSize.regular};
  font-weight: 400;
`;

export const NavTextNumber = styled(NavText)`
  font-weight: 700;
`;
