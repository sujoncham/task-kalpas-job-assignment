import React from 'react';
import { FaWindowClose } from "react-icons/fa";

const VerticalNewsFeed = ({setHorizontalNews, newData}) => {
    return (
        <label key={newData.id} onClick={()=>setHorizontalNews(newData)} htmlFor="my-modal-news" className="cursor-pointer h-[320px] relative">
            <div className="bg-base-200 gap-2 p-4 rounded-md w-64">
                <div className='py-2'>
                    <h1 className="text-xl font-bold">{newData.title}</h1>
                    <p className="p-1">{newData.description.slice(0, 100)}</p>
                </div>
                <img src={newData.img} className="w-100 rounded-lg shadow-2xl" alt='' />
                <span className='absolute top-2 right-2 cursor-pointer'>
                    <FaWindowClose size={40} />
                </span>
            </div>
        </label>
    );
};

export default VerticalNewsFeed;