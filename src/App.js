import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Posts from './components/Posts';

import feedbackData from "./data/feedbackData";

function App() {
    const [feedback, setFeedback] = useState(feedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sur you want to delete ?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList
                                feedback={feedback}
                                handleDelete={deleteFeedback} />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/post/*' element={<Posts />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    );
}

export default App;