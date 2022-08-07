import Select from 'react-select'
import styled from 'styled-components'

import theme from 'theme_'

export const StyledSelectLabelWrapper = styled.div`
  position: relative;
`

export const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.darkeyGrey};
  position: absolute;
  transition: all 0.3s ease;
  top: -18px;
  left: 16px;
`

export const StyledSelect = styled(Select)`
  .select__indicator-separator {
    display: none;
  }

  .select__dropdown-indicator {
    color: ${theme.colors.darkeyGrey};
  }

  .select__menu {
    border: none;
    border-radius: 0;
    opacity: 1;
    will-change: tranform;
    transform-origin: top;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    margin-top: 0;

    .select__menu-list {
      padding: 0;
    }
    .select__option {
      color: ${theme.colors.otterWarmBlack};
      transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      :hover {
        background-color: ${theme.colors.lightGrey};
      }
    }

    .select__option--is-focused {
      background-color: ${theme.colors.lightGrey} !important;
    }

    .select__option--is-selected,
    .select__option--is-focused {
      background-color: transparent;
    }
  }

  .select__control--is-focused {
    border-color: ${theme.colors.darkeyGrey};
  }

  .select__control {
    height: 40px;
    background: ${theme.colors.white};
    cursor: pointer;
    border: 1px solid ${theme.colors.pelicanGrey};
    border-radius: 8px;

    :hover {
      border-color: ${theme.colors.darkeyGrey};
    }

    .select__single-value {
      color: ${theme.colors.otterWarmBlack};
    }

    .select__placeholder {
      color: ${theme.colors.darkeyGrey};
    }
  }
`
