import { useState } from 'react';
import SetCategory from './SetCategory';
import Card from './Cards';

const Home = ({isLoggedIn}) => {
    const [questions, setQuestions] = useState([]);

    return (
        <>
        {questions.length === 0 ? (
            <SetCategory setQuestions={setQuestions} isLoggedIn={isLoggedIn}/>
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