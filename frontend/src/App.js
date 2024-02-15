
import { Routes, Route } from "react-router-dom"

import Home from './components/home'
import Login from './components/login';
import Signup from './components/signup'
// import Profile from './components/profile'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="login" element={ <Login/> } />
        {/* <Route path="profile" element={ <Profile/> } /> */}

      </Routes>
      </header>
    </div>
  );
}

export default App;
