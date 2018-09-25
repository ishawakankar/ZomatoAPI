/* eslint react/prop-types: 0*/
/*global fetch: true*/
/*global document: true*/
import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './header';
import DisplayCards from './bodycontainer';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import Footer from './footer';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', data: [], cityids: [] };
    this.zomatofetch = this.zomatofetch.bind(this);
    this.ipfield = this.ipfield.bind(this);
  }

  zomatofetch (evt) {
    evt.preventDefault();
    let query;
    if (this.state.value.name !== '' && this.state.value.city !== '') {
      query = this.state.value.city;
      //console.log('both true');
      fetch(`https://developers.zomato.com/api/v2.1/cities?q=${query}`, {
        headers: {
          "user-key": ""
        }
      })
        .then(response => {
          response.json().then(myJson => {
            this.setState({ cityids: myJson.location_suggestions });
            //console.log(this.state.cityids);

            var city1 = this.state.cityids.map(function (item) {
              var tem4 = {
                id: item.id
              }
              return tem4;
            })
            console.log(city1);
            var query1 = this.state.value.name;
            //console.log(this.state.value.name);

            fetch(`https://developers.zomato.com/api/v2.1/search?q=${query1}`, {
              headers: {
                "user-key": " "
              }
            })
              .then(response1 => {
                response1.json().then(myJson1 => {
                  //console.log('entered fetch res');
                  //console.log(myJson1);

                  this.setState({ data: myJson1 });
                  //console.log(this.state.data);

                  var temp5 = this.state.data.restaurants.map(function (element) {
                    var temp6 = {
                      id: element.restaurant.location.city_id
                    }
                    //console.log('entered map');
                    return temp6;
                  })
                  console.log(temp5);
                });
              }
              )
          });
        })
      //console.log(this.state.cityids);
    }

    else if (this.state.value.name !== '') {
      query = this.state.value.name;
      //console.log('one true');
      fetch(`https://developers.zomato.com/api/v2.1/search?q=${query}`, {
        headers: {
          "user-key": ""
        }
      })
        .then(response => {
          response.json().then(myJson => {
            //console.log(myJson);
            this.setState({ data: myJson });
            //console.log(test); 
            //console.log(this.state.data);
          });
        }
        )
    }

    else if (this.state.value.city !== '') {
      if (this.state.value !== undefined && this.state.value !== null) {
        query = this.state.value.city;
        //console.log('two true');
        fetch(`https://developers.zomato.com/api/v2.1/cities?q=${query}`, {
          headers: {
            "user-key": ""
          }
        })
          .then(response => {
            response.json().then(myJson => {
              this.setState({ cityids: myJson });
              //console.log(this.state.cityids);
            });
          })

      }
    }

  }


  ipfield () {
    var check = {
      name: document.getElementById("name").value,
      city: document.getElementById("city").value,
    }
    // this.state = { value: check };
    this.setState({ value: check });
    //console.log(check);
  }



  render() {
    return (
      <div>
        <Navbar gofetch={this.zomatofetch} getdata={this.ipfield} />
        <DisplayCards data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default Home;
//ReactDOM.render(<Home />, window.document.getElementById("app"));