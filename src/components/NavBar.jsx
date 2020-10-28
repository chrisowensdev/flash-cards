import { useState } from 'react';
import { users } from '../data/data';
import styled from 'styled-components';

const NavBarStyled = styled.div`
    height: 100px;
    background-color: #112D32;
    position: relative;
`;

const LogButton = styled.button`
    font-family: 'Roboto', sans-serif;
    width: 100px;
    background-color: #fff;
    padding: 8px;
    position: absolute;
    right: 12px;
    top: 18px;
    border: none;
    border-radius: 4px;

    &:active {
        outline: none;
    }
`;

const LoginModal = styled.div`
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

const LoginForm = styled.form`
    height: 300px;
    width: 400px;
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
`;

const LoginHeader = styled.h2`
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

const Close = styled.button`
    font-size: 18px;
    color: white;
    position: absolute;
    right: 5px;
    top: 5px;
    border: none;
    background-color: #112D32;
`;

const NavTitle = styled.div`
    font-size: 24px;
    color: #fff;
    padding: 20px;

    @media (max-width: 768px) {
        text-align: left;
    }
`;

const NavBar = props => {
    const { user, setUser, isLoggedIn, setIsLoggedIn } = props;

    const [loginFormHidden, setLoginFormHidden] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const _loginButton = () => {
        setLoginFormHidden(false);
    }

    const _logoutButton = () => {
        setLoginFormHidden(true)
        setIsLoggedIn(false);
        setUser({});
    }

    const _handleUsername = input => {
        setUsername(input);

    }

    const _handlePassword = input => {
        setPassword(input);
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        let user = users.find(user => (
            user.username === username && user.password === password ? user : null
        ))
        setUsername('');
        setPassword('');
        setUser(user);
        setIsLoggedIn(true);
    }

    const _closeClick = () => {
        setLoginFormHidden(true);
        setIsLoggedIn(false);
    }


    return (
        <NavBarStyled> 
            <NavTitle>Flash Cards</NavTitle>
        {!!isLoggedIn && user ? (<LogButton onClick={e => _logoutButton()}>Logout {!!user ? user.name: null}</LogButton>) : 
        (!!loginFormHidden ? <LogButton onClick={e => _loginButton()}>Login</LogButton> : (
            <LoginModal>
            <LoginForm onSubmit={e => _handleSubmit(e)}>
                <Close onClick={e => _closeClick()}>X</Close>
                <LoginHeader>Login</LoginHeader>
                <Input type="text" name="username" onChange={e => _handleUsername(e.target.value)}placeholder="Username" value={username}/>
                <Input type="password" name="password" onChange={e => _handlePassword(e.target.value)}placeholder="Password" value={password}/>
                <Button type="submit" data-testid="sendButton" >Login</Button>
            </LoginForm>

            </LoginModal>
        )

        )}
        
        </NavBarStyled>
    )
}

export default NavBar;