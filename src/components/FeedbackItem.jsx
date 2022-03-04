import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

const FeedbackItem = ({ item }) => {
    const { deleteFeedback } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button
                onClick={() => deleteFeedback(item.id)}
                className="close">
                <FaTimes color='puple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.protoTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;