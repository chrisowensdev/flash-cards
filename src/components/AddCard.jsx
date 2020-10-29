import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AddCategory from './AddCategory';

const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    select {
        width: 200px;
        margin: 0 auto;
        padding: 5px;
        border-radius: 5px;
    }

    @media (max-width: 420px) {
        width: 80%;
    }
`;
const Input = styled.input`
    margin: 10px;
    padding: 5px;
    border-radius: 4px;
`;

const Button = styled.button`
    width: 100px;
    margin: 20px;
    padding: 10px 5px;
    background-color: #112D32;
    color: white;
    border: none;
    cursor: pointer;
    margin: 10px auto;
`;

const AddCategoryButton = styled.div`
    background-color: #88BDBC;
    width: 100px;
    margin: 5px auto;
    border: none;
    cursor: pointer;
    color: #FFF;

    :hover {
        outline: none;
        border: none;
    }
`;

const AddCard = ({isLoggedIn}) => {
    const [categoryArray, setCategoriesArray] = useState([])
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [category, setCategory] = useState('');
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [addedCard, setAddedCard] = useState([]);

    useEffect(() => {
        (async function(){
            const response = await fetch(`${process.env.REACT_APP_API}/api/categories`);
            const categories = await response.json();
            setCategoriesArray(categories)
            setCategory(categories[0]._id);
        })();
        }, [setCategoriesArray]);

    const _handleTitle = input => {
        setTitle(input);
    }

    const _handleQuestion = input =>{
        setQuestion(input);
    }

    const _handleAnswer = input => {
        setAnswer(input)
    }

    const _handleCategory = (e) => {
        setCategory(e.target.value);
    }
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            title,
            question,
            answer,
            category
        };

        const response = await fetch(`${process.env.REACT_APP_API}/api/cards`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(data)
        })
        const resdata = await response.json();
        setAddedCard([...addedCard, resdata]);
    }

    const addCatButton = () => {
        setShowAddCategory(true);
    }

    return (
        
        <>
        {!!isLoggedIn ? (
            <>
        <Form onSubmit={e => _handleSubmit(e)}>
        <Input type="text" onChange={e => _handleTitle(e.target.value)} name="title" placeholder="Title" autoComplete="off"/>
        <Input type="text" onChange={e => _handleQuestion(e.target.value)} name="question" placeholder="Question" autoComplete="off"/>
        <Input type="text" onChange={e => _handleAnswer(e.target.value)} name="answer" placeholder="Answer" autoComplete="off"/>
        <select name="categories" id="" onChange={e => _handleCategory(e)}>
            {categoryArray.map(category => (
                <option value={category._id} key={category._id}>{category.title}</option>
            ))}
        </select>
        <AddCategoryButton onClick={e => addCatButton(e)}>Add Category</AddCategoryButton>
        <Button type="submit">Add Card</Button>
        </Form>
        <Link to="/">Go Back</Link>
        {!showAddCategory ? "" : (<AddCategory setShowAddCategory={setShowAddCategory} setCategoriesArray={setCategoriesArray} categoryArray={categoryArray}/>)}

        {!!addedCard ? (addedCard.map(card => <p key={card._id}>Added: {card.title}</p>)) : ("")}
        </>
        ) : (
        <>
        <h1>Please Login</h1>
        <Link to="/">Go Back</Link>
        </>
        )}
        
        </>
    )
}

export default AddCard