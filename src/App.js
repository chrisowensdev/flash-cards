import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
    return (
        <div className='App'>
            <Router>
                <NavBar />
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            </Router>
        </div>
    );
}

export default App;
