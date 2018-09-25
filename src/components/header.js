/* eslint react/prop-types: 0*/
import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                        <li className="active"><a className="navbar-brand" href="/">Restaurants from Zomato</a></li>
                            <li><a href="/">Home</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                        <Link className="restLink" to={`/Category_Collection`}>
                        
                        </Link>
                        </ul>
                    </div>
                </nav>
                <br/><br/><br/>
                <div className="jumbotron">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/64/Zomato_logo_%28white-on-red%29.png" alt="Hero section"/>
                
                <div className=" form-inline">
                <h2>Search for your favourite Restaurants</h2>
                <input type="text" id="city" placeholder="Enter city" onMouseOut={this.props.getdata} onBlur=""/>

                    <input type="text" id="name" placeholder="Restaurant Name" onChange={this.props.getdata} />
                    &nbsp;&nbsp;
                    <button type="submit" className="btn btn-danger"
                        onClick={this.props.gofetch}>Search</button>
                </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Navbar;