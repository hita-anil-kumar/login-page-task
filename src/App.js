import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Main page</h3>
        <Router>
          <Routes>
            <Route path="/" exact>
               <Login/>
            </Route>
            <Route path="/Register" exact>
              <Register/>
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
