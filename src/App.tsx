//
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
//
import HomePage from './pages/HomePage'
import DataPage from './pages/DataPage'
import Navbar from './components/Navbar'
//
import { Provider } from 'react-redux';
import { store } from './redux/store';
//
import AuthChecker from './auth/AuthChecker';


function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<HomePage />}>Home</Route>
          <Route path={'/data'} element={<AuthChecker><DataPage /></AuthChecker>}
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
