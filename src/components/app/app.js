import React from 'react';
import Header from '../header/';
import  {HomePage, AboutUsPage} from '../pages';
import {Switch, Route} from 'react-router-dom';

import './app.scss';

const App = () => {
    return (
        <main role="main" className="container">
            <Header/>
            <Switch>
				<Route path="/" component={HomePage} exact/>
				<Route path="/about-us" component={AboutUsPage}/>
			</Switch>
        </main>
    )
}

export default App;