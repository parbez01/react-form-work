import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
           <section className='flex'>
           <Cousin name={'rafsan'}></Cousin>
           <Cousin name ={'sohana'}></Cousin>
           </section>
        </div>
    );
};

export default Uncle;