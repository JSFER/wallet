import './WebsiteHost.css'
import React from 'react'

// components
import Header from '@src/component/Header/Header'
import Footer from '@src/component/Footer/Footer'

// images
const imgLeft1 = '//pdxzogn6s.bkt.clouddn.com/left31.png'
const imgLeft2 = '//pdxzogn6s.bkt.clouddn.com/left32.png'
const imgRight1 = '//pdxzogn6s.bkt.clouddn.com/right31.png'
const imgRight2 = '//pdxzogn6s.bkt.clouddn.com/right32.png'

export default class WebsiteHost extends React.PureComponent {
    render() {
        return (
            <div id="WebsiteHost">
                <Header />
                <div className="g-page">
                    <div className="banner" />
                    <table className="table">
                        <tbody>
                            <tr>
                                <td width="50%">
                                    <img src={imgLeft1} />
                                </td>
                                <td width="50%">
                                    <div className="text">
                                        <span className="title">1 - 广告资源丰富</span>
                                        <p>
                                        量子传媒与大量优质广告主合作，保证广告填充率。
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="text">
                                        <span className="title">2 - 广告品类丰富</span>
                                        <p>
                                        涵盖游戏、电商、应用等各大主流广告。
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <img src={imgRight1} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={imgLeft2} />
                                </td>
                                <td>
                                    <div className="text">
                                        <span className="title">3 - 广告形式多样</span>
                                        <p>
                                        量子传媒支持推荐墙、积分墙、插屏、视频等多种广告形式。精准投放，保证广告内容与媒体属性匹配度，既能与应用形成一致的用户验，又能提高开发者的广告收入。
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="text">
                                        <span className="title">4 - 高收益、快结算</span>
                                        <p>量子传媒提供CPM、CPA、CPC等多种灵活结算方式，致力于让开发者利益最大化，对于优质媒体给予额外奖励，保证开发者稳定收入。实时展现广告收益，保证开发者的利益最大化，按时结算。</p>
                                    </div>
                                </td>
                                <td>
                                    <img src={imgRight2} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="banner-bottom">
                    <div className="img"></div>
                </div>
                <Footer />
            </div>
        )
    }
}
