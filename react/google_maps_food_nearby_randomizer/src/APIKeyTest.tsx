import React, {Component} from 'react';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

export default class APIKeyTest extends Component {
        render() {
            return (
                <p>Key: {apiKey}</p>
            )
    }
}