import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login( { setIsAuth } ){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = { name, password};
        console.log(auth);
        try{
        const res = await fetch('http://ec2-52-205-56-216.compute-1.amazonaws.com:8080/auth', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(auth)
        })

        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if(data){
            setIsAuth(true);
            navigate('/pantry');
        }
        console.log(data);
        }catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <main className="main">
            <div className="content"> 
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Username:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;