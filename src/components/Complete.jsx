const Complete = props => {
    const { questions } = props;
    return (
        <>
        <h1>Done</h1>
        <ul>
            {questions.map(ques => {
                return (<li key={ques.id}>{ques.question}</li>)
            })}
        </ul>
        </>
    )
}

export default Complete;