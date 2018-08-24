import './About.css'
import React from 'react'
import { Route, withRouter } from 'react-router-dom'

// components
import Header from '@src/component/Header/Header'
import Footer from '@src/component/Footer/Footer'

// images
const imgNav1 = '//pdxzogn6s.bkt.clouddn.com/contactUs.png'
const imgNav2 = '//pdxzogn6s.bkt.clouddn.com/nav2.jpg'
const imgNav3 = '//pdxzogn6s.bkt.clouddn.com/nav3.jpg'

@withRouter
export default class About extends React.PureComponent {
    renderNav1 = () => {
        return (
            <div>
                <img src={imgNav1} />
                <div className="text">
                    <p>联系我们公司地址：上海市徐汇区中山南二路107号美奂大厦5F</p>
                    <p>合作邮箱：cyc@lzqianbao.com</p>
                </div>
            </div>
        )
    }
    renderNav2 = () => {
        return (
            <div>
                <img src={imgNav2} />
                <div className="text">
                    量子传媒隶属于上海橙青信息科技有限公司，是中国领先的移动营销服务提供商，致力于为全球广告客户提供基于移动互联网的效果广告及整合营销服务，打造中国最大的智能移动广告联播网络.量子传媒具有丰富的移动营销经验,以丰富.精准.多样等先进广告服务技术提供专业优质的广告服务,打造中国最大的智能移动广告联播网络.
                </div>
            </div>
        )
    }
    renderNav3 = () => {
        return (
            <div>
                <img src={imgNav3} />
                <div className="text">
                    量子传媒广告覆盖面广，针对性强，按效果付费。在全国范围已覆盖超过90%智能手机用户，每日超过300万次广告点击，日推广应用安装超过30万次。多维度的定向投放，可按照客户定义的实际效果计费，让每一分的投入明明白白，让广告推广更有效更省钱。量子传媒充足的广告资源，多样的广告模式，稳定的服务器支持保证了开发者的高额收入。实时的数据统计，快速的周结算周期，全心全意的服务，保障了开发者的合作动力。
                </div>
            </div>
        )
    }
    switchHandler = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (
            <div id="About">
                <Header />
                <div className="g-page">
                    <div className="banner" />
                    <div className="buttons">
                        <div className="btn" onClick={this.switchHandler.bind(this, 'nav1')}>联系我们</div>
                        <div className="btn" onClick={this.switchHandler.bind(this, 'nav2')} >关于我们</div>
                        <div className="btn" onClick={this.switchHandler.bind(this, 'nav3')}>合作优势</div>
                    </div>
                    <div className="nav">
                        <Route path="/about/nav1" render={this.renderNav1} />
                        <Route path="/about/nav2" render={this.renderNav2} />
                        <Route path="/about/nav3" render={this.renderNav3} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
