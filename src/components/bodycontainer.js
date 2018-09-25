/* eslint react/prop-types: 0*/
import React from 'react';
import CardData from './cards';

class DisplayCards extends React.Component {
    
    render() {
        if(this.props.data.restaurants) {
        return (
            <div className="flex">
            {this.props.data.restaurants.map(function (item)
            {
                return (<CardData key={item.restaurant.id} 
                                  card={item}></CardData>);
            })}
            </div>
        );
    }
    else{return null}
}
}

export default DisplayCards;