import React, { useState } from 'react';

const StateFulForm = () => {

    const [name,setName] = useState('nishat');
    const [password,setPassword] = useState(null)
    const [error,setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length <6){
            setError('password must be need 6 char or more')
        }else{
            setError('')
            console.log(name,password)
        }
        
    }

    const handleNameChange = e =>{
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handlePasswordChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }


    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input 
                onChange={handleNameChange}
                className='border-4 mt-4' value={name} type="text" name='name' />
                <br />
                <input className='border-4 mt-4' type="text" name='email' />
                 <br />
                 <input onChange={handlePasswordChange} className='border-4 mt-4' type="password" name="phone" id="" required />
                <br />
                <button class="btn btn-accent">Show Me</button>

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;