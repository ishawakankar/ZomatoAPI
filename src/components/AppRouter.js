/* eslint react/prop-types: 0*/
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import RestaurantDetail from '../components/restaurantDetails';
import categoryCollection from '../components/CategoryCollection';
import addCategory from '../components/addCategory';

const AppRouter = () =>
{
    <BrowserRouter>
    <div>
        <switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/restaurant_details/:id" component={RestaurantDetail}/>
            <Route path="/add_category/:name" component={addCategory}/>
            <Route path="/Category_Collection" component={categoryCollection}/>
            </switch></div></BrowserRouter>
}

export default AppRouter;