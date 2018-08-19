import './AdvHost.css'
import React from 'react'

// components
import Header from '@src/component/Header/Header'
import Footer from '@src/component/Footer/Footer'

export default class AdvHost extends React.PureComponent{
    render(){
        return (
            <div id="AdvHost">
                <Header />
                <div className="g-page">
                    <div className="banner"></div>
                </div>
                <Footer />
            </div>
        )
    }
}
