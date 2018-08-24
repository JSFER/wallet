import './Home.css'
import React from 'react'

// components
import Header from '@src/component/Header/Header'
import Footer from '@src/component/Footer/Footer'

// images
const imgCheetah = '//pdxzogn6s.bkt.clouddn.com/cheetah.png'
const imgSougou = '//pdxzogn6s.bkt.clouddn.com/sougou.png'
const imgSougouHover = '//pdxzogn6s.bkt.clouddn.com/sougou_hover.png'
const imgUC = '//pdxzogn6s.bkt.clouddn.com/uc.png'
const imgUCHover = '//pdxzogn6s.bkt.clouddn.com/uc_hover.png'
const imgGaode = '//pdxzogn6s.bkt.clouddn.com/gaode.png'
const imgGaodeHover = '//pdxzogn6s.bkt.clouddn.com/gaode_hover.png'
const imgBaidu = '//pdxzogn6s.bkt.clouddn.com/baidu.png'
const imgBaiduHover = '//pdxzogn6s.bkt.clouddn.com/baidu_hover.png'

export default class Home extends React.PureComponent {
    state = {
        hoverIndex: -1
    }
    onMouseEnter = index => {
        return () => {
            this.setState({
                hoverIndex: index
            })
        }
    }
    onMouseLeave = () => {
        this.setState({
            hoverIndex: -1
        })
    }
    render() {
        const { hoverIndex } = this.state

        return (
            <div id="Home">
                <Header />
                <div className="home-banner" />
                <div className="line">
                    <span className="text">经典案例</span>
                </div>
                <div className="banners">
                    <div className="left">
                        <img src={imgCheetah} />
                    </div>
                    <div className="right-box">
                        <div className="box">
                            <img
                                src={hoverIndex === 0 ? imgUCHover : imgUC}
                                onMouseEnter={this.onMouseEnter(0)}
                                onMouseLeave={this.onMouseLeave}
                            />
                        </div>
                        <div className="box">
                            <img
                                src={hoverIndex === 1 ? imgSougouHover : imgSougou}
                                onMouseEnter={this.onMouseEnter(1)}
                                onMouseLeave={this.onMouseLeave}
                            />
                        </div>
                        <div className="box">
                            <img
                                src={hoverIndex === 2 ? imgGaodeHover : imgGaode}
                                onMouseEnter={this.onMouseEnter(2)}
                                onMouseLeave={this.onMouseLeave}
                            />
                        </div>
                        <div className="box">
                            <img
                                src={hoverIndex === 3 ? imgBaiduHover : imgBaidu}
                                onMouseEnter={this.onMouseEnter(3)}
                                onMouseLeave={this.onMouseLeave}
                            />
                        </div>
                    </div>
                </div>
                <div className="line">
                    <span className="text">合作伙伴</span>
                </div>
                <div className="companies"></div>
                <Footer />
            </div>
        )
    }
}
