import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../../common/Layout';
import Events from '../Events';
import Home from '../Home';
import Profile from '../Profile';

const App = (): JSX.Element => {
    return (
        <Switch>
            <Layout>
                <Route exact={true} path="/" component={Home} />
                <Route path="/course/:id/events" component={Events} />
                <Route path="/profile" component={Profile} />
            </Layout>
        </Switch>
    );
};

export default App;
