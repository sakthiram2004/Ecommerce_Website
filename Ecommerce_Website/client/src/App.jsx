import React from 'react'
import HomePage from './Pages/HomePage'
import {Routes,Route} from 'react-router-dom'
import CartPage from './Pages/CartPage'
import SavedListPage from './Pages/SavedListPage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='cart' element={<CartPage/>}></Route>
        <Route path='savedlist' element={<SavedListPage/>}></Route>
        <Route path='login' element={<LoginPage/>}></Route>
        <Route path='signup' element={<SignUpPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App