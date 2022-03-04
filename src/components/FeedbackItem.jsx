import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button
                onClick={() => deleteFeedback(item.id)}
                className="close">
                <FaTimes color='puple' />
            </button>
            <button
                className="edit"
                onClick={() => editFeedback(item)}
            >
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.protoTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;