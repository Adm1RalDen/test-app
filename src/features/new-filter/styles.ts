import styled from 'styled-components'
import theme from 'theme_'

export const NewFilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Body = styled.div`
  padding: ${theme.spacing.base};
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
`
