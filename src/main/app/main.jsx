/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Archives from 'app/components/pages/Archives';
import Featured from 'app/components/pages/Featured';
import Layout from 'app/components/pages/Layout';
import Settings from 'app/components/pages/Settings';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured} />
            <Route path="archives(/:article)" name="archives" component={Archives} />
            <Route path="settings" name="settings" component={Settings} />
        </Route>
    </Router>,
    document.getElementById('app'));
