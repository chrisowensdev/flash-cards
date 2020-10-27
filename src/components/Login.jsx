import {useState} from 'react';

const Login = ({onSend}) => {
    const [inputText, setInputText] = useState("");

    const _handleChange = text => {
        setInputText(text);
    }

    const _handleClick = () => {
        onSend(inputText);
        setInputText('');
    }

    return (
        <div>
            <input type="text" data-testid="messageText" value={inputText} onChange={(e) => _handleChange(e.target.value)}/>
            <button type="button" data-testid="sendButton" onClick={_handleClick}>Send</button>
        </div>
    )

}

export default Login;