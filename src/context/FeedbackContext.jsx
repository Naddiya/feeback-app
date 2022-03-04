import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeebackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            id: 2,
            rating: 8,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            id: 3,
            rating: 1,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sur you want to delete ?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        );
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });
    };

    return <FeedbackContext.Provider
        value={{
            feedback,
            addFeedback,
            deleteFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>;
};

export default FeedbackContext;