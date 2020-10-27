import {useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

import Complete from './Complete';

const StartButton = styled.button`
    cursor: pointer;
    border: none;
    padding: 10px;
    width: 100px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    letter-spacing: 1.5px;
    border-radius: 4px;
`;

const StyledCard = styled.div`
    border-radius: 4px;
    background-color: #254e58;
    color: #EDF5E1;
    max-width: 400px;
    height: 500px;
    margin: 20px auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

const CardButton = styled.button`
    position: absolute;
    bottom: 10px;
    margin: auto;
    padding: 5px;
`;

const DetailList = styled.li`
    text-align: left;
    margin: 10px;
`;

const Cards = ({questions, setQuestions}) => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [completedQuestions, setCompletedQuestions] = useState([])
    const [upcomingQuestions, setUpcomingQuestions] = useState([]);
    const [flipped, setFlipped] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [done, setDone] = useState(false);



    useEffect(() => {
        setUpcomingQuestions([...questions]);
    }, [setUpcomingQuestions, questions]);

    const upcomingQuestionFunction = (arr) => {
        let random = Math.floor(Math.random() * upcomingQuestions.length);
        setCurrentQuestion(upcomingQuestions[random]);
        upcomingQuestions.splice(random, 1);
        setUpcomingQuestions(upcomingQuestions);
    }

    const _handleStart = () => {
        setPlaying(true);
        upcomingQuestionFunction(upcomingQuestions);
    }


    const _handleFlip = () => {
        setFlipped(!flipped);
    }

    const nextQuestion = () => {
        if (upcomingQuestions.length > 0) {
        setCompletedQuestions([...completedQuestions, currentQuestion]);
        upcomingQuestionFunction(upcomingQuestions);
        } else {
            setCompletedQuestions([...completedQuestions,currentQuestion]);
            setDone(true);
        }
    }

    //console.log('current', currentQuestion);
    //console.log('upcoming', upcomingQuestions);
    //console.log('complete',completedQuestions);


    return (
        <>
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <StyledCard>
                {!playing ? 
                (<StartButton type="button" onClick={_handleStart}>Start</StartButton>) : 
                (
                <>
                    {!!currentQuestion && !done ? (<p>{currentQuestion.question}</p>) : (<Complete questions={completedQuestions}/>)}
                    <CardButton type="button" onClick={_handleFlip} disabled={done}>See Answer</CardButton>
                </>
                )}
            </StyledCard>
            <StyledCard>
                {!playing ? ("Start the game") : 
                (
                <>
                    {!!currentQuestion ? (<p>{currentQuestion.answer.summary}</p>) : (<p>No more answers</p>)}
                    {!!currentQuestion ? 
                    (   <ul>
                        {currentQuestion.answer.detail.map((list, index) => {
                            return (
                                <DetailList key={index}>{list}</DetailList>
                            )
                        })}
                        </ul>
                    ) : ("")}
                    <CardButton type="button" onClick={_handleFlip}>See Question</CardButton>
                </>
                )}

            </StyledCard>
        
        </ReactCardFlip>
        {done ? (<button type="button" onClick={e => setQuestions([])}>Start Over</button>) : (<button type="button" onClick={nextQuestion} disabled={!playing}>
                            Next Question
                        </button>)}
                        
            <p>Completed: {completedQuestions.length}</p>
            <p>Upcoming: {upcomingQuestions.length}</p>
        </>
    )
}

export default Cards;