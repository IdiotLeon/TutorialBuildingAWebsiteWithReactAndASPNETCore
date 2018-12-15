import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => (<h1>Home Pagez</h1>)} />
                    <Route exact path="/route1" render={() => (<h1>This is Route1x</h1>)} />
                    <Route exact path="/route2" render={() => (<h1>This is Route2x</h1>)} />
                    <Route render={() => (<h1>Route Not Foundx</h1>)} />
                </Switch>
            </div>
        );
    }
}