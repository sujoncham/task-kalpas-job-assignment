import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-white p-3 border-2 shadow-xl rounded-md'>
            <h1 className='text-center text-xl font-bold'>Have a Feedback?</h1>
            <div className='flex justify-center items-center p-3'>
                <label htmlFor="my-modal-listen" className="btn btn-primary">We are listening</label>
            </div>
        </div>
    );
};

export default Feedback;