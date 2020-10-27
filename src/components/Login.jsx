import {useState} from 'react';
import styled from 'styled-components';

const LoginForm = styled.div`
    width: 300px;
    margin: 0 auto;
`;

const Input = styled.input`
    display: block;
    margin: 10px auto;
`;

const Login = ({onSend}) => {
    const [inputText, setInputText] = useState("");
    const [password, setPassword] = useState("");

    const _handleUsername = text => {
        setInputText(text);
    }

    const _handlePassword = input => {
        setPassword(input);
    }

    const _handleClick = () => {
        onSend(inputText);
        setInputText('');
    }

    return (
        <LoginForm>
            <Input type="text" data-testid="messageText" value={inputText} onChange={(e) => _handleUsername(e.target.value)} placeholder="Username"/>
            <Input type="password" data-testid="password" value={password} onChange={(e) => _handlePassword(e.target.value)} placeholder="Password"/>
            <button type="button" data-testid="sendButton" onClick={_handleClick}>Send</button>
        </LoginForm>
    )

}

export default Login;