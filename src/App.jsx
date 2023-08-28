import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login/Login'
import UserList from './pages/UserList/UserList'
import UserDetail from './pages/UserDetail/UserDetail'
import Error404 from './pages/404'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/users/:id' element={<UserDetail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
