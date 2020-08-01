import React from 'react';
import { useState } from 'react';

export default function Form() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handlePassWord(event) {
        setPassWord(event.target.value);
    }

    function handleLogin(event) {
        console.log(userName + passWord)
    }

    const userDetails = <div className="container">
        <div>
            <input type="text" value={userName} onChange={handleUserName} placeholder="userName/ email" />
        </div>
        <div>
            <input type="password" value={passWord} onChange={handlePassWord} placeholder="password" />
        </div>
        <div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    </div>

    return (userDetails);

}