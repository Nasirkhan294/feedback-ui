import { useState, createContext } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';



const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'This is feedback item 1',
        },
        {
            id: 2,
            rating: 9,
            text: 'This is feedback item 2',
        },
        {
            id: 3,
            rating: 8,
            text: 'This is feedback item 3',
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }
    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id
            ? { ...item, ...updItem }
            : item)
        )
    }
    // feedback to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
        <FeedbackContext.Provider
            value={
                {
                    feedback,
                    feedbackEdit,
                    addFeedback,
                    deleteFeedback,
                    editFeedback,
                    updateFeedback
                }
            }
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
