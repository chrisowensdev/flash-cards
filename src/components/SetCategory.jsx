import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Konami from 'react-konami-code';
import { Link } from 'react-router-dom';

import Welcome from './Welcome';

const Button = styled.button`
    width: 100px;
    margin: 20px;
    padding: 10px 5px;
    background-color: #112D32;
    color: white;
    border: none;
    cursor: pointer;
`;

const HalloweenButton = styled.button`
    background-color: #000;
    color: orange;
`;

const SetCategory = props => {
    const [categoriesArray, setCategoriesArray] = useState([]);

    const { setQuestions, isLoggedIn } = props;

    useEffect(() => {
    (async function(){
        const response = await fetch(`${process.env.REACT_APP_API}/api/categories`);
        const categories = await response.json();
        setCategoriesArray(categories)
    })();
    }, [setCategoriesArray]);

    

    const _handleClick = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/cards/category/${id}`);
        const questionArray = await response.json();
        setQuestions(questionArray);
    }

    return (
        <>
        <Welcome />
        <h3>Select Category</h3>
        {categoriesArray.map(category => {
            return (
            <div key={category._id}>
            {category._id !== '5f99a204d2c09f182dbc7612' ? (<Button type="button" onClick={e => _handleClick(category._id)}>{category.title}</Button>) : null}


            </div>)
        })}
        <Konami>
            <HalloweenButton type="button" onClick={e =>_handleClick('5f99a204d2c09f182dbc7612')}>Halloween</HalloweenButton>
        </Konami>
        {!!isLoggedIn ? (<Link to="/addcard">Add Card</Link>) : ("")}
        
        
        </>
    )
}

export default SetCategory;
