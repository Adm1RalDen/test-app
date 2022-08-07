import styled from 'styled-components'
import theme from 'theme_'

export const FitlerListItemContainer = styled.li`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.base};
  font-size: 16px;
  border-radius: 4px;
  margin-bottom: ${theme.spacing.xs};

  &:hover {
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    cursor: pointer;
  }
`
