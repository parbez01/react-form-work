import React from 'react';

const SimpleForm = () => {
   
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border-4 mt-4' type="text" name='name' />
                <br />
                <input className='border-4 mt-4' type="text" name='email' />
                 <br />
                 <input className='border-4 mt-4' type="text" name="phone" id="" />
                <br />
                <button class="btn btn-accent">Show Me</button>
            </form>
        </div>
    );
};

export default SimpleForm;