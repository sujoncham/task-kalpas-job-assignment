import React from 'react';

const Reader = () => {
    return (
        <div className='bg-white border-2 rounded-md'>
            <div className='shadow-xl flex justify-start items-start rounded-md gap-3 p-3'>
                <img src="https://placeimg.com/260/400/arch" className="w-12 h-12 rounded-full shadow-2xl" alt='' />
                <div className='p-0'>
                    <h1 className="text-xl font-bold">Hi, Reader!</h1>
                    <p className="p-0">Provident cupiditate voluptatem nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Reader;