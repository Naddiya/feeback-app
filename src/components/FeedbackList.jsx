import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.lenght === 0) {
        return <p>No Feedback Item</p>;
    }

    return (
        <div className='feeback-list'>
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default FeedbackList;