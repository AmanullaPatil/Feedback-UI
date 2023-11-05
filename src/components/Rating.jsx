import React from 'react'
import { useState } from 'react'

function Rating({ select }) {
    const [selected, setSelected] = useState(10);
    const handleChange = (e) => {
        setSelected(+e.target.value)
        select(+e.target.value);
    }

    return (

        <ul className='rating'>
            <li>
                <input type="radio" id='num1' checked={selected == 1} value="1" name='rating' onChange={handleChange} />
                <label htmlFor="num1" >1</label>

            </li>
            <li>
                <input type="radio" id='num2' checked={selected == 2} value="2" name='rating' onChange={handleChange} />
                <label htmlFor="num2" >2</label>

            </li>
            <li>
                <input type="radio" id='num3' checked={selected == 3} value="3" name='rating' onChange={handleChange} />
                <label htmlFor="num3" >3</label>
            </li>
            <li>
                <input type="radio" id='num4' checked={selected == 4} value="4" name='rating' onChange={handleChange} />
                <label htmlFor="num4" >4</label>
            </li>
            <li>
                <input type="radio" id='num5' checked={selected == 5} value="5" name='rating' onChange={handleChange} />
                <label htmlFor="num5" >5</label>
            </li>
            <li>
                <input type="radio" id='num6' checked={selected == 6} value="6" name='rating' onChange={handleChange} />
                <label htmlFor="num6" >6</label>
            </li>
            <li>
                <input type="radio" id='num7' checked={selected == 7} value="7" name='rating' onChange={handleChange} />
                <label htmlFor="num7" >7</label>
            </li>
            <li>
                <input type="radio" id='num8' checked={selected == 8} value="8" name='rating' onChange={handleChange} />
                <label htmlFor="num8" >8</label>
            </li>
            <li>
                <input type="radio" id='num9' checked={selected == 9} value="9" name='rating' onChange={handleChange} />
                <label htmlFor="num9" >9</label>
            </li>
            <li>
                <input type="radio" id='num10' checked={selected == 10} value="10" name='rating' onChange={handleChange} />
                <label htmlFor="num10" >10</label>
            </li>

        </ul>


    )
}

export default Rating
