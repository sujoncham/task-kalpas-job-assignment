import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-white p-3 border-2 shadow-xl rounded-md'>
            <h1 className='text-center text-xl font-bold'>Have a Feedback?</h1>
            <div className='flex justify-center items-center p-3'>
                
                
                    <label htmlFor="my-modal-listen" className="btn btn-primary">We are listening</label>

                    
                    <input type="checkbox" id="my-modal-listen" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-listen" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Feedback;