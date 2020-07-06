import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import Navbar from './Components/Navbar';

function Routes(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/product/:id" component={ProductItem} />
                    <Route exact path="*" component={()=> <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;