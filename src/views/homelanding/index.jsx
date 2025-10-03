import React, { useEffect, useMemo, useRef, useState } from 'react';
// 在文件顶部添加导入
import { useNavigate } from 'react-router-dom';
import './index.css';
import { YoutubeOutlined } from '@ant-design/icons';

const logo = 'https://static.igem.wiki/teams/5822/newassets/headerlogo/headerlogo.webp';
const section2bg = 'https://static.igem.wiki/teams/5822/newassets/home/2bg.webp';
const section3pic = 'https://static.igem.wiki/teams/5822/newassets/home/3bg.webp';
const littlemonster = 'https://static.igem.wiki/teams/5822/newassets/home/cancer-cell.webp';
const section5pic = 'https://static.igem.wiki/teams/5822/newassets/home/capture.webp';
const section6pic = 'https://static.igem.wiki/teams/5822/newassets/home/crispr.webp';
const section8pic = 'https://static.igem.wiki/teams/5822/newassets/home/fi.webp';
const section9pic = 'https://static.igem.wiki/teams/5822/newassets/home/card.webp';
const section11pic1 = 'https://static.igem.wiki/teams/5822/newassets/home/project.webp';
const section11pic2 = 'https://static.igem.wiki/teams/5822/newassets/home/wet-lab.webp';
const section11pic3 = 'https://static.igem.wiki/teams/5822/newassets/home/dry-lab.webp';
const section11pic4 = 'https://static.igem.wiki/teams/5822/newassets/home/education.webp';
const section11pic5 = 'https://static.igem.wiki/teams/5822/newassets/home/human-practice.webp';

function useCountUp(target, startWhenVisible) {
  const [value, setValue] = useState(0);

  // Reset to 0 whenever it is no longer visible
  useEffect(() => {
    if (!startWhenVisible) {
      setValue(0);
    }
  }, [startWhenVisible]);

  // Start animation when becoming visible
  useEffect(() => {
    if (!startWhenVisible) return;
    const durationMs = 1800;
    const start = performance.now();
    let raf = 0;
    const step = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, startWhenVisible]);

  return value;
}

function HomeLanding() {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  // Observe stats section for count-up: enter when partially visible, reset when leaving
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setStatsInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: [0.25],
        rootMargin: '0px',
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const valLeadA = useCountUp(1, statsInView);
  const valLeadB = useCountUp(20, statsInView);
  const valA = useCountUp(3200000, statsInView);
  const valB = useCountUp(1100000, statsInView);

  // Build particles once
  const particles = useMemo(() => new Array(24).fill(0), []);



  const navigate = useNavigate();

  // 处理探索项目的点击事件
  const handleExploreClick = (route) => {
    navigate(route);
  };


  return (
    <div ref={containerRef} className="homelanding">
      {/* Section 1 - Hero convergence */}
      <section className="hl-section hero">
        <div className='hero-content'>
          <img className="hero-logo" src={logo} alt="HerScan Logo" />
          <div className="hero-title">
            <div className='hero-title-row'>
              <h1 className='hero-title-her'>Her</h1><h1 className='hero-title-scan'>Scan</h1>
            </div>

            <p>Spot it early, stop it strong!</p>
          </div>
        </div>
        <div className="hero-bg" />
        <div className="particles">
          {particles.map((_, i) => (
            <div key={i} className={`particle p${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Section 2 - Narrative with gentle animations */}
      <section className="hl-section narrative">
        <div className="narrative-bg">
          <img src={section2bg} alt="Breast Cancer Statistics" className="narrative-image" />
        </div>
        <div className="narrative-content">
          <h2 className="fade-in narrative-title">Breast Cancer</h2>
          <blockquote className="fade-in delay1 hl-quote">
            <span className="quote-mark">"</span>
            Every minute, <span className="hl-underline hl-purple">Four</span> women are diagnosed with <span className="hl-underline hl-pink">Breast Cancer</span> worldwide
            and <span className="hl-underline hl-purple">One</span> woman dies from the disease, and these statistics are <span className="hl-underline hl-purple">Worsening</span>.
            <span className="quote-mark">"</span>
          </blockquote>
          <p className="fade-in delay2 hl-quote-author">—— IARC scientist Dr Joanne Kim</p>
        </div>
      </section>

      {/* Section 3 - Stats with counters */}
      <section ref={statsRef} className="hl-section stats">
        <div className="stats-bg">
          <img src={section3pic} alt="Breast Cancer Statistics" className="stats-image" />
        </div>
        <div className="stats-content">
          <div className="stats-lead fade-in">
            <span className="hl-underline hl-purple">
              {valLeadA} in {valLeadB}
            </span> women worldwide is diagnosed with
            <br />
            <span className="hl-underline hl-pink"> Breast Cancer</span> in their lifetime,
            <br />
            leading to:
          </div>
          <div className="stats-inner">
            <div className="stat fade-in delay1">
              <div className="num hl-underline hl-purple">{valA.toLocaleString()}</div>
              <div className="label">new cases</div>
              <div className="sub">a year</div>
            </div>
            <div className="stat fade-in delay2">
              <div className="num hl-underline hl-purple">{valB.toLocaleString()}</div>
              <div className="label">related deaths</div>
              <div className="sub">By 2050</div>
            </div>
          </div>
        </div>
        {/* 小细菌图装饰元素 */}
        <div className="monster-decorations">
          <img src={littlemonster} alt="Cancer Monster" className="monster monster-1" />
          <img src={littlemonster} alt="Cancer Monster" className="monster monster-2" />
          <img src={littlemonster} alt="Cancer Monster" className="monster monster-3" />
        </div>
      </section>

      {/* Section 4 - Challenges and solution intro */}
      <section className="hl-section challenge">
        <div className="challenge-inner">
          <div className="pill fade-in">However</div>
          <h3 className="fade-in delay1 challenge-title">
            Traditional breast cancer tests face challenges of
            <span className="hl-underline hl-purple"> invasiveness</span>,
            <span className="hl-underline hl-purple"> high cost</span>, and
            <span className="hl-underline hl-purple"> limited reach</span>,
            hindering early diagnosis
          </h3>
          <div className="so-line fade-in delay2">So</div>
          <div className="fade-in delay2">
            <span className="developed">We developed</span>
            <div className="big-brand">
              <span className="her">Her</span><span className="scan">Scan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Vision statement */}
      <section className="hl-section vision">
        <div className="vision-inner">
          <p className="vision-lead fade-in">
            We use minimally invasive sampling and synthetic biology to enable
            <br />
            <span className="hl-underline hl-pink"> Early Breast Cancer Detection</span>
            <br />
            and lower the global disease burden.
          </p>
          <div className="vision-flow fade-in delay1">
            <span className="flow-item">Capture exosomes</span>
            <span className="flow-arrow">→</span>
            <span className="flow-item">Amplify signals</span>
            <span className="flow-arrow">→</span>
            <span className="flow-item">Detection</span>
          </div>
        </div>
      </section>

      {/* Section 6 - Capture */}
      <section className="hl-section capture">
        <div className="container">
          <div className="text">
            <h3 className="fade-in capture-title">CD63 aptamer–magnetic beads</h3>
            <ul className="fade-in delay1">
              <li>Specifically capture exosomes</li>
              <li>Magnetic separation removes impurities, enriching target proteins</li>
            </ul>
            <div className="fade-in delay2 capture-tags">EpCAM, HER-2, MMP-9, PD-L1</div>
          </div>
          <div className="media fade-in delay1">
            <div className="capture-media">
              <img src={section5pic} alt="CD63 aptamer–magnetic beads capture exosomes" className="capture-media-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Amplify */}
      <section className="hl-section amplify">
        <div className="container">
          <div className="media fade-in">
            <div className="capture-media">
              <img src={section6pic} alt="CD63 aptamer–magnetic beads capture exosomes" className="capture-media-image" />
            </div>
          </div>
          <div className="text">
            <p className="fade-in amplify-copy">
              After releasing strands trigger and dual amplification with
            </p>
            <div className="fade-in delay1 badge-line">
              <span className="badge badge-1">CRISPR/Cas12 HCR</span>
              <span className="badge badge-2">CRISPR/Cas14a RCA</span>
            </div>
            <p className="fade-in delay2 amplify-copy">
              Signal strength increases, enabling detection of low-abundance biomarkers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - Quantify */}
      <section className="hl-section quantify">
        <div className="container">
          <div className="text">
            <h3 className="fade-in hl-underline hl-purple">After CRISPR amplification</h3>
            <p className="fade-in delay1">
              <span className="hl-underline hl-pink">the fluorescence signal</span> is quantified by a portable machine,
              providing accurate and sensitive readouts for
              <span className="hl-underline hl-pink">early breast cancer screening</span>.
            </p>
          </div>
          <div className="media fade-in delay1">
            <div className="capture-media">
              <img src={section8pic} alt="CD63 aptamer–magnetic beads capture exosomes" className="capture-media-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 - Card */}
      <section className="hl-section card-sec">
        <div className="container">
          <div className="media fade-in">
            <div className="capture-media">
              <img src={section9pic} alt="CD63 aptamer–magnetic beads capture exosomes" className="capture-media-image" />
            </div>
          </div>
          <div className="text">
            <p className="fade-in card-copy">To enhance accessibility, we are further developing a</p>
            <div className='card-copy-row'>
              <span className="badge hl-underline hl-pink">Quadruple Test Card,</span>
              <br />
              <span className='hl-underline hl-purple'>translates the CRISPR signal into visual results</span>
            </div>
          </div>
        </div>
      </section>


      {/* Section 10 - CTA */}
      <section className="hl-section cta">
        <div className="cta-bg" />
        <div className="cta-bubbles" aria-hidden="true">
          {new Array(7).fill(0).map((_, i) => (
            <span key={i} className={`bubble b${i + 1}`} />
          ))}
        </div>
        <div className="cta-inner">
          <h2 className="cta-title">Interested?</h2>
          <p className="cta-subtitle">Keep browsing for more information!</p>
        </div>
      </section>

      {/* Section 11 - Explore */}
      <section className="hl-section explore">
        <div className="explore-inner">
          <h2 className="explore-title">Explore Our Project</h2>
          <div className="explore-grid">
            <div className="explore-item" onClick={() => handleExploreClick('/project/description')}>
              <div className="icon">
                <img src={section11pic1} alt="Project" className="explore-icon" />
              </div>
              <div className="label pink">Project</div>
            </div>
            <div className="explore-item" onClick={() => handleExploreClick('/wet-lab/experiments')}>
              <div className="icon">
                <img src={section11pic2} alt="Wet Lab" className="explore-icon" />
              </div>
              <div className="label">Wet Lab</div>
            </div>
            <div className="explore-item" onClick={() => handleExploreClick('/dry-lab/model')}>
              <div className="icon">
                <img src={section11pic3} alt="Dry Lab" className="explore-icon" />
              </div>
              <div className="label pink">Dry Lab</div>
            </div>
            <div className="explore-item" onClick={() => handleExploreClick('/education')}>
              <div className="icon">
                <img src={section11pic4} alt="Education" className="explore-icon" />
              </div>
              <div className="label">Education</div>
            </div>
            <div className="explore-item" onClick={() => handleExploreClick('/human-practice/integrated-human-practices')}>
              <div className="icon">
                <img src={section11pic5} alt="Human Practice" className="explore-icon" />
              </div>
              <div className="label pink">Human Practice</div>
            </div>
          </div>
        </div>

        {/* 滚动合作伙伴/赞助商 */}
        <div className="partners-scroll">
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
              <a href="https://gitlab.igem.org/2025/zzu-china"  style={{color: '#333333'}}>
                The repository used to create this website is available at gitlab.igem.org/2025/zzu-china.
              </a>
            </div>
          </div>
          


        </div>

      </section>

      {/* Section 12 - Footer */}
      <section className="hl-section footer-hero">
        <div className='footer-hero-pic'></div>
        <div className='footer-hero-logo'>
          <img src={logo} alt="HerScan Logo" className='footer-hero-logo-img' />
        </div>

        {/* 联系信息 */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p className="contact-text">Contact us on WeChat or YouTube</p>
          <div className="address-info">
            <p>Address: No. 100 Science Avenue, Zhengzhou City, Henan Province</p>
            <p>Postcode: 450001</p>
          </div>
        </div>


        <div className="socials" aria-label="Social links">
          <a className="social-link wechat" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk3NTEzNjU4MQ==" target="_blank" rel="noreferrer" aria-label="WeChat" title="WeChat">
            <img src='https://static.igem.wiki/teams/5822/newassets/images/home/wechat.webp' alt="WeChat" className='social-icon' />
          </a>
          <a className="social-link youtube" href="https://youtube.com/@igemofzzu?si=zfx5budT1HFtjndj" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
            <YoutubeOutlined />
          </a>
        </div>
      </section>

    </div>
  );
}

export default HomeLanding;