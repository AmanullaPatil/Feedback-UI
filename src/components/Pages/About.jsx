import React from 'react'
import Card from '../shared/card'
import { Link } from 'react-router-dom'

function About() {
    return (
        <Card>
            <div>
                <h1>This is about page</h1>
                <p>
                    This is a React App to give feedback to a service or a product
                </p>
                <p>Version 6.01 </p>
                <p>
                    <Link to='/'>Back to Home</Link>
                </p>
            </div>

        </Card>
    )
}

export default About
