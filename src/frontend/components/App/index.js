import React from 'react';
import { Div, GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'

// Components
import Header from '../Header';
import Content from "../Content";
import Menu from "../Menu";
import Footer from "../Footer";

// Hooks
import useTheme from "../../hooks/useTheme";
import useMenu from "../../hooks/useMenu";

function App() {
  const [theme, ] = useTheme();
  const [menu, setTheme] = useMenu();

  return (
      <React.Fragment>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Div className={`App ${menu}`}>
                    <Header setTheme={setTheme} />
                    <Content />
                    <Menu />
                    <Footer />
                </Div>
            </ThemeProvider>
          </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
