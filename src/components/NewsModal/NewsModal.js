import React from 'react';

const NewsModal = ({horizontalNews}) => {
    const {title, description} = horizontalNews;
    return (
        <div>
            <input type="checkbox" id="my-modal-news" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-news" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">{description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default NewsModal;