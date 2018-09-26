/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import CardData from './Cards';

class DisplayCards extends React.Component {
    
    render() {
        if(this.props.data.restaurants) {
        return (
            <div className="flex">
            {this.props.data.restaurants.map(function (restaurantItems)
            {
                return (<CardData key={restaurantItems.restaurant.id} 
                                  card={restaurantItems}></CardData>);
            })}
            </div>
        );
    }
    else{return null}
}
}

export default DisplayCards;