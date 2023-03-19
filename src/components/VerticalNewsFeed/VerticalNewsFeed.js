import React from 'react';
import { FaWindowClose } from "react-icons/fa";

const VerticalNewsFeed = ({setHorizontalNews, newData}) => {
    return (
        <label key={newData._id} onClick={()=>setHorizontalNews(newData)} htmlFor="my-modal-news" className="cursor-pointer relative">
            <div className="bg-base-200 gap-2 p-4 rounded-md w-[280px] h-[420px]">
                <div className='py-2'>
                    <h1 className="text-xl font-bold mt-2">{newData.title}</h1>
                    <p className="p-1">{newData.description.slice(0, 100)}</p>
                </div>
                <img src={newData.img} className="w-100 rounded-lg shadow-2xl" alt='' />
                <span className='absolute top-2 right-2 cursor-pointer'>
                    <FaWindowClose size={30} />
                </span>
            </div>
        </label>
    );
};

export default VerticalNewsFeed;