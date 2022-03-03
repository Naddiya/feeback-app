import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';


const FeedbackForm = ({ handleAdd }) => {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        const text = e.target.value;

        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedBack = {
                text,
                rating
            };
            handleAdd(newFeedBack);
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your services with us ?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a review"
                        onChange={handleTextChange}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;