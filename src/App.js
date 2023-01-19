import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullNavbar from './Components/FullNavbar/FullNavbar';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <FullNavbar></FullNavbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
