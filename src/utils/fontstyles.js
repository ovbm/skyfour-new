import { createGlobalStyle } from 'styled-components';
import fontFiles from './fonts';

const fontStyles = createGlobalStyle`
  @font-face {
    font-family: "Spartan";
    font-style: normal;
    font-weight: 400;
    src: url(${fontFiles.SpartanRegular}) format("truetype");
  }
  @font-face {
    font-family: "Spartan";
    font-style: normal;
    font-weight: 500;
    src: url(${fontFiles.SpartanMedium}) format("truetype");
  }
  @font-face {
    font-family: "Spartan";
    font-style: normal;
    font-weight: 600;
    src: url(${fontFiles.SpartanBold}) format("truetype");
  }
  `;

export default fontStyles;