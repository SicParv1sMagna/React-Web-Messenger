import React from 'react';
import '../Style.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className = "inputField">
            <input className = "input"
            placeholder = "Type a message..."
            value = {message}
            onChange = {(e) => setMessage(e.target.value)}
            onKeyPress = {(e) => e.key === 'Enter' ? sendMessage(e) : null}/>
            <button className = "sendMessage" onClick = {(e) => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input;