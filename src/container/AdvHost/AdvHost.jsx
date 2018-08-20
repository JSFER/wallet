import './AdvHost.css'
import React from 'react'

// components
import Header from '@src/component/Header/Header'
import Footer from '@src/component/Footer/Footer'

// images
import imgLeft1 from '@src/images/left1.png'
import imgLeft2 from '@src/images/left2.png'
import imgRight1 from '@src/images/right1.png'
import imgRight2 from '@src/images/right2.png'

export default class AdvHost extends React.PureComponent{
    render(){
        return (
            <div id="AdvHost">
                <Header />
                <div className="g-page">
                    <div className="banner"></div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td width="50%">
                                    <img src={imgLeft1} />
                                </td>
                                <td width="50%">
                                    <div className="title">1 - 媒体资源优质</div>
                                    <div className="text">量子传媒广告平台拥有大量国内外优质媒体资源；覆盖国内70%以上的移动终端用户，日均曝光量超亿、 日均活跃用户达3000>万</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="title">2 - 广告形式丰富</div>
                                    <div className="text">量子传媒支持推荐墙、积分墙、插屏、视频等多种丰富的广告形式，为广告主量身定制最优推广方案，选择最合理推广形式。</div>
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
                                    <div className="title">3 - 推广精准高效</div>
                                    <div className="text">量子传媒广告平台通过对于行业的深度的解读，利用先进的数据挖掘算法，让广告主根据设备型号特征、移动运营商特征、媒体分类特征以及手机操作偏好特性进行有选择、有效率的投放。</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="title">4 - 专业评估分析</div>
                                    <div className="text">严格控制渠道质量，使流量真实有效，优化推广行为，让广告主感到物超所值。</div>
                                </td>
                                <td>
                                    <img src={imgRight2} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        )
    }
}
