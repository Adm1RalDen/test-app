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
    white: '#FFFFFF',
    black: '#000000',
    lightRed: '#DB542A1A',
    green: '#0AD042',
    grey: '#F8F8F8',
    otterWarmBlack: '#382E2B',
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
