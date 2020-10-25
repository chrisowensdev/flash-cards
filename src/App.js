import { useState, useEffect } from 'react';
import './App.css';
import Test from './components/Test';

import data from './data/data';

function App() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(data);
        console.log(data);
    }, [setQuestions]);

    return (
        <div className='App'>
            <Test questions={questions} />
        </div>
    );
}

export default App;
