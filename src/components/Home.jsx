import { useState } from 'react';
import SetCategory from './SetCategory';
import Card from './Cards';

const Home = props => {
    const [questions, setQuestions] = useState([]);

    return (
        <>
        {questions.length === 0 ? (
            <SetCategory setQuestions={setQuestions} />
        ) : (
            <Card
                questions={questions}
                setQuestions={setQuestions}
            />
        )}
        </>
    )
}

export default Home;