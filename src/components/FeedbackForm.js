import { useState } from "react";
import Card from "./shared/Card"
import Button from "./shared/Button";

export default function FeedbackForm() {
    const [text, setText] = useState('');
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

    return (
        <Card>
            <form>
                <h4>How would you rate your service with us?</h4>
                <div className='input-group'>
                    <input
                        type='text'
                        placeholder="write a review..."
                        onChange={handleChange}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>


        </Card>
    )
}
