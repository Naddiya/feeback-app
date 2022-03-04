import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeebackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cumque eius perspiciatis tempora quas fuga delectus ullam similique? Neque nemo, numquam eius temporibus eaque placeat fuga nostrum consequatur asperiores maxime.'
        },
        {
            id: 2,
            rating: 8,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cumque eius perspiciatis tempora quas fuga delectus ullam similique? Neque nemo, numquam eius temporibus eaque placeat fuga nostrum consequatur asperiores maxime.'
        },
        {
            id: 3,
            rating: 1,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cumque eius perspiciatis tempora quas fuga delectus ullam similique? Neque nemo, numquam eius temporibus eaque placeat fuga nostrum consequatur asperiores maxime.'
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
            feedbackEdit
        }}>
        {children}
    </FeedbackContext.Provider>;
};

export default FeedbackContext;