import './Header.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
const imgLogo = '//pdxzogn6s.bkt.clouddn.com/logo.png'

class Header extends React.Component {
    isActive(match, location) {
        if (match) {
            return match.url === location.pathname
        }
    }
    render() {
        return (
            <div id="Header">
                <div className="logo">
                    <img src={imgLogo} />
                </div>
                <div className="nav-bar">
                    <div className="tab">
                        <NavLink isActive={this.isActive} to="/">首页</NavLink>
                    </div>
                    <div className="tab">
                        <NavLink isActive={this.isActive} to="/advhost">广告主</NavLink>
                    </div>
                    <div className="tab">
                        <NavLink isActive={this.isActive} to="/websitehost">网站主</NavLink>
                    </div>
                    <div className="tab">
                        <NavLink isActive={this.isActive} to="/about/nav1">关于我们</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
