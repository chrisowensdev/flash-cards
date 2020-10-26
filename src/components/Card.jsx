import {useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

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
    width: 400px;
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

const Card = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [completedQuestions, setCompletedQuestions] = useState([])
    const [upcomingQuestions, setUpcomingQuestions] = useState([]);
    const [flipped, setFlipped] = useState(false);
    const [playing, setPlaying] = useState(false);

    let random;
    useEffect(() => {
        setUpcomingQuestions([...questions]);
    }, [setUpcomingQuestions, questions]);

    const _handleStart = () => {
        setPlaying(true);
        random = Math.floor(Math.random() * upcomingQuestions.length);
        setCurrentQuestion(upcomingQuestions[random]);
        upcomingQuestions.splice(random, 1)
        setUpcomingQuestions(upcomingQuestions);
    }

    const _handleFlip = () => {
        setFlipped(!flipped);
    }

    const nextQuestion = () => {
        setCompletedQuestions([...completedQuestions, currentQuestion]);
        upcomingQuestions.splice(random, 1);
        setUpcomingQuestions([...upcomingQuestions]);
    }

    console.log('current', currentQuestion);
    console.log('upcoming', upcomingQuestions);
    console.log('complete',completedQuestions);


    return (
        <>
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <StyledCard>
                {!playing ? 
                (<StartButton type="button" onClick={_handleStart}>Start</StartButton>) : 
                (
                <>
                    <p>{currentQuestion.question}</p>
                    <CardButton type="button" onClick={_handleFlip}>See Answer</CardButton>
                </>
                )}
            </StyledCard>
            <StyledCard>
                {!playing ? ("Start the game") : 
                (
                <>
                    <p>{currentQuestion.answer.summary}</p>
                    {currentQuestion.answer.detail.length > 0 ? 
                    (
                        currentQuestion.answer.detail.map((list, index) => {
                            return (
                                <li key={index}>{list}</li>
                            )
                        })
                    ) : ("")}
                    <CardButton type="button" onClick={_handleFlip}>See Question</CardButton>
                </>
                )}

            </StyledCard>
        
        </ReactCardFlip>
                        <button type="button" onClick={nextQuestion}>
                            Next Question
                        </button>
            <h1>{completedQuestions.length}</h1>
            <h1>{upcomingQuestions.length}</h1>
        </>
    )
}

export default Card;