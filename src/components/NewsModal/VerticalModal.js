import React from 'react';

const NewsModal = ({horizontalNews}) => {
    const {title, body} = horizontalNews;

    return (
        <div>
            <input type="checkbox" id="my-modal-vertical" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-vertical" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">{body}</p>
                </div>
            </div>
            
        </div>
    );
};

export default NewsModal;