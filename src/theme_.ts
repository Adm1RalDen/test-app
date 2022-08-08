const breakpoint = {
  tablet: 768,
  laptop: 1024,
  desktop: 1400,
}

const devices = {
  mobile: `screen and (max-width: ${breakpoint.tablet}px)`,
  tablet: `screen and (min-width: ${breakpoint.tablet}px)`,
  laptop: `screen and (min-width: ${breakpoint.laptop}px)`,
  desktop: `screen and (min-width: ${breakpoint.desktop}px)`,
}

const theme = {
  colors: {
    yellow: '#ffd803',
    darkBlue: '#272343',
    paragraph: '#2d334a',
    background: '#fffffe',
    buttonText: '#272343',
    secondary: '#e3f6f5',
    lightBlue: '#bae8e8',
    white: '#FFFFFF',
    black: '#000000',
    lightRed: '#DB542A1A',
    green: '#0AD042',
    grey: '#F8F8F8',
    otterWarmBlack: '#382E2B',
    darkeyGrey: '#A5A5A5',
    lightGrey: '#F2F2F2',
    pelicanGrey: '#DBD9D6',
    error: '#C5292A',
    horizonOrange: '#FF5F00',
  },

  spacing: {
    tiny: '4px',
    xxs: '6px',
    xs: '8px',
    s: '12px',
    base: '16px',
    sm: '20px',
    md: '24px',
    lg: '32px',
    xl: '36px',
    xxl: '40px',
    xxxl: '48px',
    large: '64px',
    xlarge: '80px',
  },
  devices,
}

export default theme
