import './Footer.css'
import React from 'react'

export default class Footer extends React.PureComponent {
    render() {
        return (
            <div id="Footer">
                <div className="profile">
                    <p>渠道媒体合作</p>
                    <p>QQ:52785366</p>
                    <p>手机：15026895482</p>
                    <p>邮箱：cyc@lzqianbao.com</p>
                </div>
                <div className="support">技术支持：云企搜 | 手机版 | 管理登录</div>
            </div>
        )
    }
}
