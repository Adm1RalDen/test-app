import styled from 'styled-components'
import theme from 'theme_'

export const CommonStyledInput = styled.input<{ invalid?: boolean }>`
  margin: 0 0 ${theme.spacing.s};
  padding: 0 ${theme.spacing.s};
  height: 40px;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.otterWarmBlack};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightGrey};
  border-radius: 8px;
  outline: none;
  width: 100%;

  ::placeholder {
    color: ${theme.colors.darkeyGrey};
  }

  :hover {
    border-color: ${theme.colors.darkeyGrey};
  }
  :active,
  :focus {
    border-color: ${theme.colors.darkeyGrey};
  }
  :disabled {
    background-color: ${theme.colors.lightGrey};
    pointer-events: none;
  }

  ${(p) => p.invalid && `border-color ${theme.colors.error};`};
`

export const StyledInputError = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  min-height: 16px;
  margin-top: -${theme.spacing.s};
  margin-bottom: ${theme.spacing.s};
  color: ${theme.colors.error};
`
