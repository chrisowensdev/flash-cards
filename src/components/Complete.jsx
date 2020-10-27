const Complete = props => {
    const { questions } = props;
    return (
        <>
        <h1>Summary</h1>
        <ul>
            {questions.map(ques => {
                return (<li key={ques.id}>{ques.question}</li>)
            })}
        </ul>
        </>
    )
}

export default Complete;