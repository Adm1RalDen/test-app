import { PropsWithChildren } from 'react'
import { StyledCommonLayout } from './styles'

function CommonLayout(props: PropsWithChildren) {
  return <StyledCommonLayout>{props.children}</StyledCommonLayout>
}

export default CommonLayout
