import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import ROUTES from 'app/routes'
import NavigationButton from 'components/button/navigation-button'
import CommonLayout from 'components/layout'
import { H1 } from 'components/typography'

import NewFilterForm from './new-filter-form'
import { NewFilterContainer } from './styles'

function NewFilter() {
  const navigation = useNavigate()

  const handleClickToNavigationBtn = useCallback(() => {
    navigation(ROUTES.main)
  }, [navigation])

  return (
    <CommonLayout>
      <NewFilterContainer>
        <H1>New Filter</H1>
        <NewFilterForm
          values={null}
          onSubmit={function (values: any) {
            console.log(values)
          }}
        />
        <NavigationButton onClick={handleClickToNavigationBtn}>
          Go to main
        </NavigationButton>
      </NewFilterContainer>
    </CommonLayout>
  )
}

export default NewFilter
