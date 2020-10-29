import styled from 'styled-components';

const SummaryList = styled.li`
    text-align: left;
    margin-right: 10px;
`;

const Complete = props => {
    const { questions } = props;
    return (
        <>
        <h1>Summary</h1>
        <ul>
            {questions.map((ques, index) => {
                return (<SummaryList key={index}>{ques.question}</SummaryList>)
            })}
        </ul>
        </>
    )
}

export default Complete;