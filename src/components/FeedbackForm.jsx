import React, { useState } from 'react'
import Card from './shared/card';
import Button from './shared/Button';
import Rating from './Rating';

function FeedbackForm({ handleAdd }) {
    const [txt, setTxt] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10);

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(txt)

        if (txt.trim().length > 10) {
            const newFeedback = {
                txt,
                rating
            }
            handleAdd(newFeedback)
            setTxt('');
        }
    }

    const handleChange = (e) => {
        if (txt === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if
            (txt != '' && txt.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('There should be atleast 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setTxt(e.target.value)


    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you like to rate our services? </h2>
                <Rating select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input onChange={handleChange} value={txt} placeholder='write your review here' />
                    <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && (<div className='message'>{message}</div>)}
            </form>
        </Card>

    )
}

export default FeedbackForm;
