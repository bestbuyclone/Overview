import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            included: [
                'Samsung 65" Class - LED - NU6900 Series - 2160p - Smart - 4K UHD TV with HDR',
                'Samsung TM1240A remote control',
                'Stand'],
            rating: ''
        }
        this.changeRating = this.changeRating.bind(this);
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Overview</h1>
                <div>
                    <h3>What's Included</h3>
                    <hr />
                    <ul>
                        {this.state.included.map((items, i) => {
                            return (
                                <li key={i}>{items}</li>
                            )
                        })}
                    </ul>

                    <hr />
                    <StarRatings
                        rating={4.403}
                        starDimension="20px"
                        starSpacing="4px"
                        starRatedColor="yellow"
                    />
                </div>
            </div>
        )
    }
}

export default App;