import { Routes, Route } from 'react-router-dom'

import Main from 'features/main'
import NewFilter from 'features/new-filter'
import EditFilter from 'features/edit-filter'

import routes from 'app/routes'

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.newFilter} element={<NewFilter />} />
      <Route path={routes.editFilter} element={<EditFilter />} />
    </Routes>
  )
}

export default App
