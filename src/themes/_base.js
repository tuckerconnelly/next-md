export default `
  body {
    color: ${colors.textBlack};
    font-family: 'Roboto', sans-serif;
  }
  .display4 {
    font-size: 112;
    font-weight: 300;
    line-height: 112;
  }
  .display3 {
    font-size: 56;
    line-height: 56;
  }
  .display2 {
    font-size: 45;
    line-height: 48;
  }
  .display1 {
    font-size: 34;
    line-height: 40;
  }
  .headline {
    font-size: 24;
    line-height: 28;
  }
  .title {
    font-size: 20;
    font-weight: 500;
    line-height: 32;
  }
  .subheading {
    font-size: 16;
    line-height: 20;
  }
  ${breakpoints.ml} {
    .subheading {
      font-size: 15;
    }
  }
  .body2 {
    font-size: 14;
    font-weight: 500;
    line-height: 24;
  }
  ${breakpoints.ml} {
    .subheading {
      font-size: 13;
    }
  }
  .body1 {
    font-size: 14;
    line-height: 20;
  }
  ${breakpoints.ml} {
    .subheading {
      font-size: 13;
    }
  }
  .caption {
    font-size: 12;
    line-height: 16;
  }


  .dp0 {
    box-shadow:
      0 0px 0px 0px rgba(0, 0, 0, 0),
      0 0px 0px 0px rgba(0, 0, 0, 0);
  }
  .dp2 {
    box-shadow:
      0 2px 2px 0px rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .dp3 {
    box-shadow:
      0 3px 4px 0px rgba(0, 0, 0, 0.14),
      0 3px 3px -2px rgba(0, 0, 0, 0.2);
  }
  .dp4 {
    box-shadow:
      0 4px 5px 0px rgba(0, 0, 0, 0.14),
      0 1px 10px -2px rgba(25, 184, 222, 0.2);
  }
  .dp6 {
    box-shadow:
      0 6px 10px 0px rgba(0, 0, 0, 0.14),
      0 1px 18px 0px rgba(0, 0, 0, 0.2);
  }
  .dp8 {
    box-shadow:
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 3px 5px -1px rgba(0, 0, 0, 0.2);
  }
  .dp12 {
    box-shadow:
      0 12px 16px 1px rgba(0, 0, 0, 0.14),
      0 3px 22px 3px rgba(0, 0, 0, 0.2);
  }
  .dp16 {
    box-shadow:
      0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.2);
  }
  .dp24 {
    box-shadow:
      0 24px 32px 3px rgba(0, 0, 0, 0.14),
      0 12px 36px 8px rgba(0, 0, 0, 0.2);
  }
`
