import Home from './assets/component/Home';
import Navbar from './assets/component/Navbar';
import '../src/index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './assets/component/Create';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/create' element={<Create/>}  />
     
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
