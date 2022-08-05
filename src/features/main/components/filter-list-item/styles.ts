import styled from 'styled-components'
import theme from 'theme_'

export const FitlerListItemContainer = styled.li`
  padding: ${theme.spacing.base};
  font-size: 16px;
  border: 1px solid ${theme.colors.black};
  border-radius: 4px;
  margin-bottom: ${theme.spacing.xs};
  &:hover {
    background: ${theme.colors.otterWarmBlack};
    color: ${theme.colors.white};
    cursor: pointer;
  }
`
