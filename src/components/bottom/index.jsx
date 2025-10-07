import React from 'react';
import './index.css';
import { YoutubeOutlined, WechatOutlined } from '@ant-design/icons';
const Bottom = () => {
    return (
        <div className="partners-scroll" style={{marginBottom:'20px',marginLeft:'25px'}}>
            <div className="partners-track">
                {/* 所有图标必须完全复制两次 */}
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/cdtm.webp" alt="Partner 1" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/hnscxcyjyjd.webp" alt="Partner 2" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/jjyxy.webp" alt="Partner 3" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdx.webp" alt="Partner 4" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdw.webp" alt="Partner 5" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdy.webp" alt="Partner 6" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <a className="social-link wechat" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk3NTEzNjU4MQ==" target="_blank" rel="noreferrer" aria-label="WeChat" title="WeChat">
                        <WechatOutlined style={{ fontSize: '50px' }} />
                    </a>
                </div>
                <div className="partner-item">
                    <a className="social-link youtube" href="https://youtube.com/@igemofzzu?si=zfx5budT1HFtjndj" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
                        <YoutubeOutlined style={{ fontSize: '50px' }} />
                    </a>
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/igem.webp" alt="Partner 6" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/youtube.webp" alt="Partner 6" className="partner-logo" />
                </div>

                {/* 完全相同的第二组 */}
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/cdtm.webp" alt="Partner 1" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/hnscxcyjyjd.webp" alt="Partner 2" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/jjyxy.webp" alt="Partner 3" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdx.webp" alt="Partner 4" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdw.webp" alt="Partner 5" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdy.webp" alt="Partner 6" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <a className="social-link wechat" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk3NTEzNjU4MQ==" target="_blank" rel="noreferrer" aria-label="WeChat" title="WeChat">
                        <WechatOutlined style={{ fontSize: '50px' }} />
                    </a>
                </div>
                <div className="partner-item">
                    <a className="social-link youtube" href="https://youtube.com/@igemofzzu?si=zfx5budT1HFtjndj" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
                        <YoutubeOutlined style={{ fontSize: '50px' }} />
                    </a>
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/igem.webp" alt="Partner 6" className="partner-logo" />
                </div>
                <div className="partner-item">
                    <img src="https://static.igem.wiki/teams/5822/newassets/home/youtube.webp" alt="Partner 6" className="partner-logo" />
                </div>
            </div>

            <div className="contact-row">
                <div className="address-info">
                    <span className="icon">📍</span>
                    <a href="https://maps.google.com/?q=No. 100 Science Avenue, Zhengzhou City, Henan Province">
                        Address: No. 100 Science Avenue, Zhengzhou City, Henan Province<br />
                        Postcode: 450001
                    </a>
                </div>
                <div className="email-info">
                    <span className="icon">✉️</span>
                    <a href="mailto:jychuangxin@zzu.edu.cn">
                        Email: jychuangxin@zzu.edu.cn
                    </a>
                </div>
            </div>

            <div className="contact-row">
                <div className="address-info">
                    <span className="icon">💻</span>
                    <a href="https://gitlab.igem.org/2025/zzu-china" style={{ color: '#333333' }}>
                        The repository used to create this website is available at gitlab.igem.org/2025/zzu-china.
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Bottom;