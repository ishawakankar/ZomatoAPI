/* eslint react/prop-types: 0*/ 
/*global fetch: true*/

import React from 'react';

const apiKey = '';

class RestaurantDetail extends React.Component {

    constructor(props) {

        super(props);

        this.state = { restaurantDetails: {}};

    }

    componentDidMount ()  { 
        
        const restaurantId = this.props.match.params.id; 

var url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}`;

        fetch(url, {

            method: 'GET',

            headers: {

                'Accept': 'application/json',

                'user-key': apiKey,

            }

        })
            .then(response => response.json())

            .then(restaurantDetails => {
                this.setState(() => ({ restaurantDetails }));

            });

    }

    render() {

        if (!this.state.restaurantDetails) {

            return (<div> Loading .... </div>);

        }
        else {

            const resDetails = this.state.restaurantDetails; 

            return (

                <div>
                    <div className="card">
                        <img className="card-img-top" src={resDetails.thumb}
                         alt="Imge not found" />
                        <div className="card-body">
                            <h3 className="card-title">{resDetails.name}</h3>

                        </div>
                        <a href={resDetails.url} role="button"
                         className="btn btn-danger">Visit Zomato website to order</a>
                    </div>

                </div>

            );

        }

    }

}

export default RestaurantDetail;
