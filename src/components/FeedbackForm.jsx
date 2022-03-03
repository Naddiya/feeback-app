import { useState } from 'react';
import Card from './shared/Card';


const FeedbackForm = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <Card>
            <h2>How would you rate your services with us ?</h2>
            {/* @todo - rating select component */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Write a review"
                    onChange={handleTextChange}
                />
                <button type="submit">Send</button>
            </div>
        </Card>
    );
};

export default FeedbackForm;