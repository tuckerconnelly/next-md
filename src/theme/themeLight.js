export default {
  animations: {
    standard: {
      transitionDuration: '300ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    large: {
      transitionDuration: '375ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    entrance: {
      transitionDuration: '225ms',
      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
    },
    exit: {
      transitionDuration: '195ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)'
    },
    tempExit: {
      transitionDuration: '195ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }
  },
  breakpoints: {
    xs: 'min-width: 480px',
    sm: 'min-width: 600px',
    ms: 'min-width: 840px',
    md: 'min-width: 960px',
    ml: 'min-width: 1280px',
    lg: 'min-width: 1440px',
    xl: 'min-width: 1600px'
  },
  colors: {
    primary: '#232d51',
    secondary: '#f571c1'
  },
  elevations: {
    dp0: {
      boxShadow: `0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0)`,
      zIndex: 0
    },
    dp2: {
      boxShadow: '0 2px 2px 0px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
      zIndex: 200
    },
    dp3: {
      boxShadow: '0 3px 4px 0px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2)',
      zIndex: 300
    },
    dp4: {
      boxShadow: '0 4px 5px 0px rgba(0, 0, 0, 0.14), 0 1px 10px -2px rgba(25, 184, 222, 0.2)',
      zIndex: 400
    },
    dp6: {
      boxShadow: '0 6px 10px 0px rgba(0, 0, 0, 0.14), 0 1px 18px 0px rgba(0, 0, 0, 0.2)',
      zIndex: 600
    },
    dp8: {
      boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 3px 5px -1px rgba(0, 0, 0, 0.2)',
      zIndex: 800
    },
    dp12: {
      boxShadow: '0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 3px 22px 3px rgba(0, 0, 0, 0.2)',
      zIndex: 1200
    },
    dp16: {
      boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.2)',
      zIndex: 1600
    },
    dp24: {
      boxShadow: '0 24px 32px 3px rgba(0, 0, 0, 0.14), 0 12px 36px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 2400
    }
  },
  type: {
    display4: {
      fontSize: '112px',
      fontWeight: 300,
      lineHeight: '112px'
    },
    display3: {
      fontSize: '56px',
      lineHeight: '56px'
    },
    display2: {
      fontSize: '45px',
      lineHeight: '48px'
    },
    display1: {
      fontSize: '34px',
      lineHeight: '40px'
    },
    headline: {
      fontSize: '24px',
      lineHeight: '28px'
    },
    title: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '32px'
    },
    subheading: {
      fontSize: '16px',
      lineHeight: '20px'
    },
    subheadingDesktop: {
      fontSize: '15px'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '24px'
    },
    body2Desktop: {
      fontSize: '13px'
    },
    body1: {
      fontSize: '14px',
      lineHeight: '20px'
    },
    body1Desktop: {
      fontSize: '13px'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px'
    }
  },
  g: 4,
  components: {
    ripples: {
      rippleColor: 'white'
    }
  }
}
