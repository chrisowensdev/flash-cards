import {useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';

const Test = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [completedQuestions, setCompletedQuestions] = useState([])
    const [upcomingQuestions, setUpcomingQuestions] = useState([]);
    const [flipped, setFlipped] = useState(false);
    const [playing, setPlaying] = useState(false);

    let random = Math.floor(Math.random() * upcomingQuestions.length);
    console.log('Random Number', random);
    useEffect(() => {
        setUpcomingQuestions([...questions]);
    }, [setUpcomingQuestions, questions]);
    
    console.log(questions);

    const _handleStart = () => {
        setPlaying(true);
        setCurrentQuestion(upcomingQuestions[random]);
    }

    const _handleFlip = () => {
        setFlipped(!flipped);
    }

    console.log("CurrentQuestion", currentQuestion)

    return (
        <>
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <div>
                {!playing ? 
                (<button type="button" onClick={_handleStart}>Start</button>) : 
                (
                <>
                    <p>{currentQuestion.question}</p>
                    <button type="button" onClick={_handleFlip}>See Answer</button>
                </>
                )}
            </div>
            <div>
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
                    <button type="button" onClick={_handleFlip}>See Question</button>
                </>
                )}

            </div>
        
        </ReactCardFlip>
        
            <h1>{completedQuestions.length}</h1>
            <h1>{upcomingQuestions.length}</h1>
        </>
    )
}

export default Test;