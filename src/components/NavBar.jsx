import { useState } from 'react';
import { users } from '../data/data';
import styled from 'styled-components';
import logo from '../images/logo.png';

const NavBarStyled = styled.div`
    background-color: #112D32;
    height: 100px;
    position: relative;
`;

const LogButton = styled.button`
    background-color: #112D32;
    border: 2px solid #fff;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    letter-spacing: 1px;
    padding: 8px;
    position: absolute;
    right: 12px;
    text-transform: uppercase;
    top: 18px;
    width: 100px;
    
    &:active {
        outline: none;
    }
    &:hover {
        background-color: #e6e7e8;
        color: #112D32;
    }
`;

const LoginModal = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
`;

const LoginForm = styled.form`
    align-items: center;
    background-color: #112D32;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    position: relative;
    width: 300px;
`;

const Input = styled.input`
    display: block;
    margin: 10px auto;
`;

const LoginHeader = styled.h2`
    color: #fff;
`;

const Button = styled.button`
    background-color: #112D32;
    border: 3px solid #fff;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    margin: 20px;
    padding: 10px 5px;
    width: 100px;
`;

const Close = styled.div`
    background-color: #112D32;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    position: absolute;
    right: 10px;
    top: 5px;
`;

const Image = styled.img`
    height: 100px;

    @media (max-width: 768px) {
        float: left ;
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
            <Image src={logo} alt="logo"/> 
            {/* <NavTitle>Flash Cards</NavTitle> */}
        {!!isLoggedIn && user ? (<LogButton onClick={e => _logoutButton()}>Logout {!!user ? user.name: null}</LogButton>) : 
        (!!loginFormHidden ? <LogButton onClick={e => _loginButton()}>Login</LogButton> : (
            <LoginModal>
            <LoginForm onSubmit={e => _handleSubmit(e)}>
                <Close onClick={e => _closeClick()}>X</Close>
                <LoginHeader>Login</LoginHeader>
                <Input type="text" name="username" onChange={e => _handleUsername(e.target.value)}placeholder="Username" data-testid="messageText" value={username} autoComplete="off"/>
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