import  { useEffect, useRef } from 'react';

const RefName = () => {

    const nameRef = useRef();
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} className=' mt-4' type="text" name='name' />
                <br />
                <input className=' mt-4' type="email" defaultValue={'........@gmail.com'} name='email' />
                 <br />
                 <input className='mt-4' type="password"  name="password" id="" />
                <br />
                <br />
                <button class="btn btn-accent">Show Me</button>
            </form>
        </div>
    );
};

export default RefName;