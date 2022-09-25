import React from 'react';
import { FaWindowClose } from "react-icons/fa";

const HorizontalNewsFeedback = ({setHorizontalNews, newData}) => {
    return (
        <label onClick={()=>setHorizontalNews(newData)} htmlFor="my-modal-news"  key={newData.id} className="cursor-pointer">
            <div className="flex justify-between items-center gap-2 my-2">
                <div className="flex justify-start items-center gap-2 bg-white border-2 rounded-md p-1">
                    <img src={newData.img} className="w-24 h-16 rounded-lg shadow-2xl" alt='' />
                    <div className='p-2 text-start'>
                        <h1 className="text-xl font-bold">{newData.title}</h1>
                        <p className="p-1">{newData.description.slice(0, 100)}</p>
                    </div>
                </div>
                <span><FaWindowClose size={40} /></span>
            </div>
        </label>
    );
};

export default HorizontalNewsFeedback;