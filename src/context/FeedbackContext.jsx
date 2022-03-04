import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeebackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    };

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
            updateFeedback,
            isLoading
        }}>
        {children}
    </FeedbackContext.Provider>;
};

export default FeedbackContext;