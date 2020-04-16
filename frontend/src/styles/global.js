import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-BoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-BlackItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-MediumItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-ThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
  }

  @font-face {
      font-family: 'Roboto';
      src: url('../assets/fonts/Roboto-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body{
    -webkit-font-smoothing: antialised !importnt;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
