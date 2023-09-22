import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
           <h1>Auntyy</h1> 
           <section className='flex'>
            <Cousin name={'Nishat'}></Cousin>
            <Cousin name={'Sumaiya'}></Cousin>
           </section>
        </div>
    );
};

export default Aunty;