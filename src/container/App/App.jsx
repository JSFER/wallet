import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import Home from '@src/container/Home/Home'
import AdvHost from '@src/container/AdvHost/AdvHost'
import WebsiteHost from '@src/container/WebsiteHost/WebsiteHost'
import About from '@src/container/About/About'

class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <div id="App">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/advhost" component={AdvHost} />
                    <Route exact path="/websitehost" component={WebsiteHost} />
                    <Route exact path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default App
