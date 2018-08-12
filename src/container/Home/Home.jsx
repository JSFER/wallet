import './Home.css'
import React from 'react'

// components
import Header from '@src/component/Header/Header'
import Footer from '@src/component/Footer/Footer'

// images
import imgCheetah from '@src/images/cheetah.png'
import imgSougou from '@src/images/sougou.png'
import imgSougouHover from '@src/images/sougou_hover.png'
import imgUC from '@src/images/uc.png'
import imgUCHover from '@src/images/uc_hover.png'
import imgGaode from '@src/images/gaode.png'
import imgGaodeHover from '@src/images/gaode_hover.png'
import imgBaidu from '@src/images/baidu.png'
import imgBaiduHover from '@src/images/baidu_hover.png'

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
