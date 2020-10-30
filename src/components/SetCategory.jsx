import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Konami from 'react-konami-code';
import { Link } from 'react-router-dom';

import Welcome from './Welcome';

const Button = styled.button`
    background-color: #112D32;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    letter-spacing: .4px;
    margin: 20px;
    padding: 10px 5px;
    width: 100px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 500px;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const HalloweenButton = styled.button`
    background-color: #000;
    border: none;
    border-radius: 4px;
    color: orange;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    letter-spacing: .4px;
    margin: 20px;
    padding: 10px 5px;
    width: 100px;
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
        <ButtonContainer>
            {categoriesArray.map(category => {
                return (
                    <div key={category._id}>
                        {category._id !== '5f99a204d2c09f182dbc7612' ? (<Button type="button" onClick={e => _handleClick(category._id)}>{category.title}</Button>) : null}
                    </div>)
                })
            }
        </ButtonContainer>

        <Konami>
            <HalloweenButton type="button" onClick={e =>_handleClick('5f99a204d2c09f182dbc7612')}>
                Halloween
            </HalloweenButton>
        </Konami>
        
        {!!isLoggedIn ? (<Link to="/addcard">Add Card</Link>) : ("")}
        
        
        </>
    )
}

export default SetCategory;
