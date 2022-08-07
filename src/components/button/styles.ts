import styled from 'styled-components'
import theme from 'theme_'

export const StyledButton = styled.button`
  padding: ${theme.spacing.base};
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.buttonText};
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: fit-content;
  outline: none;
  user-select: none;
  white-space: nowrap;
  border-radius: 5px;

  :hover {
    box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
  }

  :disabled {
    pointer-events: none;
  }
`
