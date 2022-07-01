import './App.css';
import SearchPage from './Component/SearchPage/SearchPage';
import SignUpandLogin from './Component/signUpandLogin/signUpandLogin'
import ShowProductPage from './Component/MainPage/ShowProductPage'
import DetailPage  from './Component/DetailPage/DetailPage';
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchPage/>}/>
        <Route path='/SignUpOrLogIn' element={<SignUpandLogin/>}/>
        <Route path='/ShowProducts' element={<ShowProductPage/>}/>
        <Route path='/ShowProducts/detail' element={<DetailPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

