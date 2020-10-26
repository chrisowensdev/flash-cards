import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Cards';

import data from './data/data';

function App() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(data);
        console.log(data);
    }, [setQuestions]);

    return (
        <div className='App'>
            <Card questions={questions} />
        </div>
    );
}

export default App;
