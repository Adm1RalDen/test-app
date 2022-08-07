import styled from 'styled-components'
import theme from 'theme_'

export const H1 = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 32px;
  ${(p) => p.color && `color: ${p.color}`};
`

export const H2 = styled.h2`
  margin: 0;
  font-size: 28px;
  line-height: 32px;

  @media ${theme.devices.tablet} {
    font-size: 24px;
  }

  @media ${theme.devices.desktop} {
    font-size: 32px;
  }
`

export const H3 = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
`

export const H4 = styled.h4`
  margin: 0;
  font-size: 20px;
  line-height: 32px;
  @media ${theme.devices.tablet} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const H5 = styled.h5`
  margin: 0;
  font-size: 18px;
  line-height: 32px;
`
