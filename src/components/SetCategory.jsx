import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Konami from 'react-konami-code';

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

    const { setQuestions } = props;

    useEffect(() => {
    (async function(){
        const response = await fetch('http://localhost:3333/api/categories');
        const categories = await response.json();
        setCategoriesArray(categories)
    })();
    }, [setCategoriesArray]);

    

    const _handleClick = async (id) => {
        const response = await fetch(`http://localhost:3333/api/cards/category/${id}`);
        const questionArray = await response.json();
        setQuestions(questionArray);
    }

    return (
        <>
        <Welcome />
        <h3>Select Category</h3>
        {categoriesArray.map(category => {
            return (
            <>
            {category._id !== '5f99a204d2c09f182dbc7612' ? (<Button type="button" onClick={e => _handleClick(category._id)}>{category.title}</Button>) : null}


            </>)
        })}
        <Konami>
            <HalloweenButton type="button" onClick={e =>_handleClick('5f99a204d2c09f182dbc7612')}>Halloween</HalloweenButton>
        </Konami>

        
        </>
    )
}

export default SetCategory;
