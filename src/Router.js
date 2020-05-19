import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ImageView from './components/ImageView/ImageView';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Weather from './components/Weather/Weather';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/image/:id' component={ImageView} />
                <Route path='/News' component={News} />
                <Route path='/Weather' component={Weather} />
            </Switch>
        </BrowserRouter>
    )
}


export default Router;