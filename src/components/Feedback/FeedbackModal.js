import React from 'react';
import Reader from '../Reader/Reader';
import Feedback from './Feedback';
import './Feedback.css';

const FeedbackModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-listen" className="modal-toggle" />
            <div className="modal">
                <div className="feedback-modal relative">
                    <label htmlFor="my-modal-listen" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-start gap-5'>
                        <div>
                            <Reader />
                            <Feedback />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <form>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="first name" className="input input-bordered w-full max-w-xs" autoComplete='off' />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="last name" className="input input-bordered w-full max-w-xs" autoComplete='off' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label> 
                                    <textarea className="textarea textarea-bordered h-24" placeholder="address"></textarea>
                                </div>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <div className="input-group">
                                        <input type="text" placeholder="Search…" className="input input-bordered" />
                                        <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email Id</span>
                                    </label>
                                    <input type="email" placeholder="email id" className="input input-bordered w-full max-w-xs" autoComplete='off' />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" placeholder="phone number" className="input input-bordered w-full max-w-xs" autoComplete='off' />
                                </div> */}
                                <div className='mt-5'>
                                    <button type='submit' className='btn btn-prinary'>Submit Feedback</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;