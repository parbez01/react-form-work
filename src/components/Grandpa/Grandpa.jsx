
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import { createContext } from 'react';

export  const AssetContext = createContext('gold');

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>

          <AssetContext.Provider value='gold'>
          <section className='flex'>
          <Dad></Dad>
           <Uncle></Uncle>
           <Aunty></Aunty>
          </section>
          </AssetContext.Provider>

        </div>
    );
};

export default Grandpa;