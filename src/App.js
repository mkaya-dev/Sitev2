import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Docs from './Pages/Docs';
import Detail from './Pages/Detail';
import Ricky from './Pages/Ricky';
import RickyDetail from './Pages/RickyDetail';
import Galeri from './Pages/Galeri';
import KayıtOl from './Pages/KayıtOl';

 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Docs' element={<Docs/>} />
      <Route path='/Docs/Detail/:_id' element={<Detail/>}  />
      <Route path='/Ricky' element={<Ricky/>} />
      <Route path='/Ricky/RickyDetail/:id' element={<RickyDetail/>} />
      <Route path='/Galeri' element={<Galeri/>} />
      <Route path='/KayıtOl' element={<KayıtOl/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
