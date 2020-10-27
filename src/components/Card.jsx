import {useState} from 'react';
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

const Card = props => {
    const { playing, done, handleStart, currentQuestion, completedQuestions } = props;
    const [flipped, setFlipped] = useState(false);

    const _handleFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <StyledCard>
                {!playing ? 
                (<StartButton type="button" onClick={handleStart}>Start</StartButton>) : 
                (
                <>
                    {!!currentQuestion && !done ? (<p>{currentQuestion.question}</p>) : (<Complete questions={completedQuestions}/>)}
                    {done ? ("") : (<CardButton type="button" onClick={_handleFlip}>See Answer</CardButton>)}
                    
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
    )
}

export default Card;