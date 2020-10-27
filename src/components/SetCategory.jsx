import { javascriptQuestions, randomQuestions } from '../data/data';
import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
    margin: 20px;
    padding: 10px 5px;
    background-color: #112D32;
    color: white;
    border: none;
    cursor: pointer;
`;

const SetCategory = props => {
    const { setQuestions } = props;

    const _handleClick = (arr) => {
        setQuestions(arr);
    }

    return (
        <>
        <h1>Select Category</h1>
        <Button type="button" onClick={e => _handleClick(javascriptQuestions)}>Javascript</Button>
        <Button type="button" onClick={e => _handleClick(randomQuestions)}>Random</Button>
        </>
    )
}

export default SetCategory;