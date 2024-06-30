import './App.css';
import NavBar from './navBar';
import Login from './login'
import Pantry from './pantry'
import Add from './add';
import ProtectedRoute from './protectedRoute';
import Cart from './cart';
import AddCart from './addCart';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [data, setData] = useState();
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
    <div className="App">
      <NavBar isAuth={isAuth} />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Login setIsAuth={setIsAuth}/>}></Route>
            <Route path="/pantry" element={
              <ProtectedRoute isAuth={isAuth}>
                  <div><Pantry data={data} setData={setData} />
                  < Add setData={setData}/></div>
                  </ProtectedRoute>}>
            </Route>
            <Route path="/cart" element={
              <ProtectedRoute isAuth={isAuth}>
                  <div><Cart data={data} setData={setData} />
                  < AddCart setData={setData}/></div>
                  </ProtectedRoute>}>
            </Route>
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;

