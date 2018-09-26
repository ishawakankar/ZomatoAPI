/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import RestaurantDetail from '../components/RestaurantDetails';
import categoryCollection from '../components/CuisineCategory';
import addCategory from '../components/Category';

const AppRouter = () =>
(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/restaurant-details/:id" component={RestaurantDetail}/>
            <Route path="/add-category/:name" component={addCategory} />

            <Route path="/Category-Collection" component={categoryCollection}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;