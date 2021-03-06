import {useState} from 'react';
import styled from 'styled-components';

const AddCategoryModal = styled.div`
background-color: rgba(0,0,0,0.6);
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 10;
`;

const AddCategoryForm = styled.form`
height: 300px;
width: 350px;
background-color: #112D32;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`;

const Input = styled.input`
display: block;
margin: 10px auto;
width: 200px;
`;

const AddCategoryHeader = styled.h2`
color: #fff;
`;

const Button = styled.button`
width: 100px;
margin: 20px;
padding: 10px 5px;
background-color: #112D32;
color: white;
border: none;
cursor: pointer;
border: 3px solid #fff;
`;

const Close = styled.div`
cursor: pointer;
font-size: 18px;
color: white;
position: absolute;
right: 10px;
top: 5px;
border: none;
background-color: #112D32;
`;



const AddCategory = ({setShowAddCategory, setCategoriesArray, categoryArray}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const _handleTitle = input => {
        setTitle(input);
    }

    const _handleDescription = input => {
        setDescription(input);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            title,
            description
        };

        const response = await fetch(`${process.env.REACT_APP_API}/api/categories`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(data)
        })
        const resdata = await response.json();
        console.log(resdata);
        setCategoriesArray([...categoryArray, resdata])
        setShowAddCategory(false)
    }
    
    const _closeClick = () => {
        setShowAddCategory(false);
    }

    return (
        <AddCategoryModal>
            <AddCategoryForm onSubmit={e => _handleSubmit(e)}>
                <Close onClick={e => _closeClick()}>X</Close>
                <AddCategoryHeader>Create Category</AddCategoryHeader>

                <Input type="text" name="title" onChange={e => _handleTitle(e.target.value)}placeholder="Title" value={title} autoComplete="off"/>

                <Input type="text" name="description" onChange={e => _handleDescription(e.target.value)}placeholder="Description" value={description}/>

                <Button type="submit">Add</Button>
            </AddCategoryForm>
        </AddCategoryModal>
    )
}

export default AddCategory;