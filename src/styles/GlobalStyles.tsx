import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

  :root {
    --color-primary: ${theme.colors.primary};
    --color-primary-dark: ${theme.colors.primaryDark};
    --color-secondary: ${theme.colors.secondary};
    --color-text: ${theme.colors.text};
    --color-text-light: ${theme.colors.textLight};
    --color-white: ${theme.colors.white};
    --color-background: ${theme.colors.background};
    --color-border: ${theme.colors.border};
    --color-error: ${theme.colors.error};
    --color-success: ${theme.colors.success};
    
    --font-primary: ${theme.fonts.primary};
    --font-secondary: ${theme.fonts.secondary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 500;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: var(--font-primary);
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input, textarea, select {
    font-family: var(--font-primary);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles; 