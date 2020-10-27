import { useState } from 'react';
import './App.css';
import Card from './components/Cards';
import SetCategory from './components/SetCategory';

function App() {
    const [questions, setQuestions] = useState([]);
    console.log('questions', questions);
    return (
        <div className='App'>
            {questions.length === 0 ? (
                <SetCategory setQuestions={setQuestions} />
            ) : (
                <Card questions={questions} setQuestions={setQuestions} />
            )}
        </div>
    );
}

export default App;
