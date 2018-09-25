import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RestaurantDetail from '../components/restaurantDetails';
import AddCategory from '../components/addCategory';
import App from '../components/App';

const AppRouter = () =>
(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/restaurant_details/:id" component={RestaurantDetail}/>
            <Route path="/add_category/:name" component={AddCategory} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;