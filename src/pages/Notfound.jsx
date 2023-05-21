import React from 'react';
import { FaSadTear } from "react-icons/fa";

const Notfound = () => {
    return (
        <div className='border-2 border-red-500'>
             <div className='text-6xl grid justify-items-center mt-40'>
                 <FaSadTear className='text-orange-400'></FaSadTear>
             </div>
            <div className=''>
            <h1 className=' text-center text-4xl font-bold text-red-700'>404 Not found</h1>
            </div>
           
            
        </div>
    );
};

export default Notfound;