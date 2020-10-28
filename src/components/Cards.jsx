import {useState, useEffect} from 'react';

import Card from './Card';

const Cards = ({questions, setQuestions}) => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [completedQuestions, setCompletedQuestions] = useState([]);
    const [upcomingQuestions, setUpcomingQuestions] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [done, setDone] = useState(false);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        setUpcomingQuestions([...questions]);
    }, [setUpcomingQuestions, questions]);

    const upcomingQuestionFunction = (arr) => {
        let random = Math.floor(Math.random() * upcomingQuestions.length);
        setCurrentQuestion(upcomingQuestions[random]);
        upcomingQuestions.splice(random, 1);
        setUpcomingQuestions(upcomingQuestions);
    }

    const handleStart = () => {
        setPlaying(true);
        upcomingQuestionFunction(upcomingQuestions);
    }

    const nextQuestion = () => {
        if (flipped) {
            setFlipped(false)
        }
        if (upcomingQuestions.length > 0) {
        setCompletedQuestions([...completedQuestions, currentQuestion]);
        upcomingQuestionFunction(upcomingQuestions);
        } else {
            setCompletedQuestions([...completedQuestions,currentQuestion]);
            setDone(true);
        }
    }

    return (
        <>
        <Card 
            playing={playing}
            done={done}
            handleStart={handleStart}
            currentQuestion={currentQuestion}
            completedQuestions={completedQuestions}
            flipped={flipped}
            setFlipped={setFlipped}
            />
        {done ? (<button type="button" onClick={e => setQuestions([])}>Start Over</button>) : (<button type="button" onClick={nextQuestion} disabled={!playing}>
                            Next Question
                        </button>)}
                        
            <p>Completed: {completedQuestions.length}</p>
            <p>Upcoming: {upcomingQuestions.length}</p>
        </>
    )
}

export default Cards;