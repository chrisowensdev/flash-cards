import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='App'>
            <Router>
                <NavBar
                    user={user}
                    setUser={setUser}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                />
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
            </Router>
        </div>
    );
}

export default App;
