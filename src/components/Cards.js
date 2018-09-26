/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */


import React from 'react';
import {Link} from 'react-router-dom';

class CardData extends React.Component {

  render() {
    return(
      
      <div className="card">
        <img className="card-img-top" 
             src={this.props.card.restaurant.thumb} alt="Imge not found" />
        <div className="card-body">
        <h3 className="card-title">{this.props.card.restaurant.name}</h3><br/>
          <h4 className="card-text"><b> Address:</b></h4>
            <p>
              {this.props.card.restaurant.location.address}
              <br/><br/><b>Cuisine: </b>{this.props.card.restaurant.cuisines}
              <br/><br/><b>Average Cost for two: </b>
              Rs.{this.props.card.restaurant.average_cost_for_two}
            </p>
        </div>
        <hr />
        <div className="buttonbg">
        <Link className="restlink" 
              to={`restaurant-details/${this.props.card.restaurant.id}`}>
          <button type="button" className="btn btn-danger btn-set">Click to order</button> 
        </Link>
        
            
        <br />
        <Link className="restlink" 
              to={`add-category/${this.props.card.restaurant.name}`}>
          <button type="button" className="btn btn-danger btn-set">Add to category</button> 
        </Link>
        </div>
      </div>
      
  );
    }
}

export default CardData;