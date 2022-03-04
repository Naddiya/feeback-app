import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeebackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is from context',
            rating: 10
        }
    ]);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sur you want to delete ?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    return <FeedbackContext.Provider
        value={{
            feedback, 
            addFeedback, 
            deleteFeedback
        }}>
        {children}
    </FeedbackContext.Provider>;
};

export default FeedbackContext;