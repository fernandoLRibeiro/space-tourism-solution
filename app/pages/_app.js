import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #0B0D17;
    color: #FFFFFF;
    
    width: 100%;
    max-width: 100vw;
  }
`;

const theme = {
  color: {
    black: "#0B0D17",
    grey: "#616476",
    lightBlue: "#D0D6F9",
    white: "#FFFFFF",
  },
  font: {
    fontFamily: {
      // Heading 1, Heading 2, Heading 3, Heading 4, Subheading 1
      serif: `'Bellefair', serif`,
      // Heading 5, Subheading2, Nav Text
      sansSerifCondensed: `'Barlow Condensed', sans-serif`,
    },
    fontSize: {
      // Heading 1 desktop
      largest: "9.375em",
      // Heading 2 Desktop
      xxxLarge: "6.25em",
      // Heading 3 Desktop
      xxLarge: "3.5em",
      // Heading 4 desktop
      xLarge: "2em",
      // Heading 5 Desktop, Subheading 1 desktop
      large: "1.75em",
      // Body Text desktop
      regular: "1.125em",
      // Nav Text desktop
      small: "1em",
      // Subheading 2 desktop
      xSmall: "0.875em",
    },
    letterSpacing: {
      heading5: "4.75px",
      subheading2: "2.35px",
      navText: "2.7px",
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
