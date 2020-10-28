import {useState, useEffect} from 'react';

const AddCard = props => {
    const [categoryArray, setCategoriesArray] = useState([])
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        (async function(){
            const response = await fetch('http://localhost:3333/api/categories');
            const categories = await response.json();
            setCategoriesArray(categories)
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
    }

    return (
        
        <>
        <form onSubmit={e => _handleSubmit(e)}>
        <input type="text" onChange={e => _handleTitle(e.target.value)} name="title" placeholder="Title"/>
        <input type="text" onChange={e => _handleQuestion(e.target.value)} name="question" placeholder="Question"/>
        <input type="text" onChange={e => _handleAnswer(e.target.value)} name="answer" placeholder="Answer"/>
        <select name="categories" id="" onChange={e => _handleCategory(e)}>
            {categoryArray.map(category => (
                <option value={category._id}>{category.title}</option>
            ))}
        </select>
        <button type="submit">Add Card</button>
        </form>
        </>
    )
}

export default AddCard