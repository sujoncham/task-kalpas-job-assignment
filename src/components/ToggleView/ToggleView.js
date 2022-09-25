import React from 'react';
import { FaGripHorizontal, FaList } from "react-icons/fa";

const ToggleView = ({handleHorizontal, handleVertical}) => {
    return (
        <div className='bg-white p-3 border-2 my-3 shadow-xl rounded-md'>
            <h1 className='text-center text-xl font-bold'>View Toggle</h1>
            <div className="flex justify-evenly items-center">    
                <div onClick={handleHorizontal} className='w-28 h-22 border-2 p-2 flex justify-center items-center cursor-pointer'>
                    <FaGripHorizontal size={40} />
                </div>
                <div onClick={handleVertical} className='w-28 h-22 border-2 p-2 flex justify-center items-center cursor-pointer'>
                    <FaList size={40} />
                </div>
            </div>
        </div>
    );
};

export default ToggleView;