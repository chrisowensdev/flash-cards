import { useState } from 'react';
import './App.css';
import Card from './components/Cards';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SetCategory from './components/SetCategory';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
    const [questions, setQuestions] = useState([]);
    console.log('questions', questions);
    return (
        <div className='App'>
            <Router>
                <NavBar />
                <Route exact path='/'>
                    {questions.length === 0 ? (
                        <SetCategory setQuestions={setQuestions} />
                    ) : (
                        <Card
                            questions={questions}
                            setQuestions={setQuestions}
                        />
                    )}
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            </Router>
        </div>
    );
}

export default App;
