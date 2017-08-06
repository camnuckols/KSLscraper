import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Navbar from './components/Navbar';

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            data: null
        };
    }
    render() {
        return (
            <div>
                <Navbar />

            </div>
        );
    }
}

ReactDOM.render( ( 
<Router history={ browserHistory }>
    <Route path="/" component={ App }/>
    <Route path="/login" component={ Navbar }/>
</Router>
), document.getElementById( 'scraper' ) );

