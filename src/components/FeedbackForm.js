import { useState } from "react";
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from '../components/RatingSelect'

export default function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters.')
        }
        else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)

            setText(' ')
        }

    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h4>How would you rate your service with us?</h4>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        type='text'
                        placeholder="write a review..."
                        onChange={handleChange}
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>


        </Card>
    )
}
