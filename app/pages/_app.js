import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
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
    fontSizes: {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
