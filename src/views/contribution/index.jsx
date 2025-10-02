import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';


import ImageGallery from '../../components/imagegallery';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';
const figure1 = 'https://static.igem.wiki/teams/5822/newassets/images/contribution/figure1.webp';
const figure2 = 'https://static.igem.wiki/teams/5822/newassets/images/contribution/figure2.webp';
const figure3 = 'https://static.igem.wiki/teams/5822/newassets/images/contribution/figure3.webp';
const figure4 = 'https://static.igem.wiki/teams/5822/newassets/images/contribution/figure4.webp';



// 组件定义
const MainContent = () => (
  <>
    {/* 1 */}
    <div id="overview" className="view-content">
      <div className="content-header">
        <div className="h1">Overview</div>
      </div>
      <div className="content-body">
        <p>
          Through <span>synthetic biology approaches</span>, our <span>project</span> has developed an <span>innovative early diagnostic platform</span> for <span>breast cancer</span> that enhances the <span>sensitivity</span> and <span>accuracy</span> of <span>tumor marker detection</span>. We have made <span>significant contributions</span> across <span>multiple dimensions</span> and driven <span>advancements</span> in <span>related technologies</span> and <span>knowledge</span>. Below are the <span>specific contributions</span> of our <span>team</span> in this <span>initiative</span>:
        </p>
      </div>
    </div>

    {/* 2 */}
    <div id="detection-method" className="view-content">
      <div className="content-header">
        <div className="h1">A Highly Sensitive Detection Method for Multiple Targets</div>
      </div>
      <div className="content-body">
        <p>
          To achieve <span>efficient early detection</span> of <span>breast cancer</span>, we developed a <span>multi-target detection platform</span> integrating <span>extracellular vesicle (EV) capture</span>, <span>target protein aptamer recognition</span>, <span>HCR amplification technology</span>, and <span>CRISPR-Cas14 signal amplification mechanisms</span>. The <span>core innovation</span> lies in using <span>CD63 aptamer-functionalized magnetic beads</span> to <span>precisely capture tumor-derived EVs</span> from <span>serum samples</span>, ensuring <span>high-quality target molecules isolation</span> from <span>complex matrices</span>.
        </p>
        <p>
          Through the <span>HCR/RCA amplification system</span>, we <span>amplified target protein signals</span> to enhance <span>detection sensitivity</span>. Additionally, the <span>CRISPR/Cas14 system</span> enabled <span>secondary amplification</span>, allowing <span>precise detection</span> of <span>tumor markers</span> at <span>extremely low concentrations</span>. This <span>multi-target detection approach</span> not only improves <span>diagnostic accuracy</span> for <span>breast cancer</span> but also provides a <span>replicable technical framework</span> for <span>early diagnosis</span> of <span>other diseases</span>.
        </p>
      </div>
    </div>

    {/* 3 */}
    <div id="biological-parts" className="view-content">
      <div className="content-header">
        <div className="h1">Biological Parts</div>
      </div>
      <div className="content-body">
        <p>
          We designed and built a <span>number of key synthetic biology components</span> for use by <span>other researchers</span> and <span>teams</span> in the <span>project</span>. Specifically, but not limited to:
        </p>
        <div className="h3">HCR Amplification Module</div>
        <p>
          We provide <span>standardized components</span> for <span>HCR amplification</span> of <span>complementary strands</span>, enabling the <span>amplification</span> of <span>target signals</span> to <span>detectable levels</span> in <span>breast cancer detection</span>. This <span>module</span> proves particularly <span>valuable</span> in <span>synthetic biology applications</span>, especially in <span>biosensor design</span> where <span>signal amplification</span> is <span>essential</span>.
        </p>
        <div className="h3">Specific Complementary Chains</div>
        <p>
          We have developed <span>complementary chains</span> that <span>bind to target proteins</span> and <span>amplify signals</span> during <span>displacement reactions</span>. These <span>chains</span> are designed with <span>flexibility</span> to be <span>modified for different targets</span>, enabling <span>adaptation</span> to <span>various detection requirements</span>.
        </p>
        <div className="h3">Nuclear Expression of Cas14a Plasmid</div>
        <p>
          To achieve <span>CRISPR-Cas14 signal amplification</span>, we constructed a <span>nuclear expression plasmid</span> for <span>Cas14a</span> and successfully <span>expressed</span> and <span>purified</span> it in <span>Escherichia coli BL21</span>. This <span>plasmid</span> provided an <span>efficient</span> and <span>stable source</span> of <span>Cas14a enzyme</span> for <span>experimental use</span>.
        </p>
        <div className="h3">RCA Amplification Module</div>
        <p>
          We have developed a <span>standardized RCA (Rolling Circle Amplification) component</span> that allows for the <span>efficient amplification</span> of <span>circular DNA sequences</span>, which is <span>crucial</span> for <span>amplifying low-concentration biomarkers</span> in the context of <span>breast cancer detection</span>. This <span>component</span> can be <span>easily integrated</span> into <span>other biosensor designs</span> that require a <span>high-sensitivity amplification system</span>.
        </p>
        <p>
          These <span>components</span> and <span>tools</span> not only <span>enrich the resource base</span> of <span>synthetic biology</span>, but also provide <span>reusable modules</span> for <span>other teams</span>, facilitating <span>technological development</span> in the <span>field</span>. If you want to see our <span>parts</span>, <a href="/wet-lab/parts" className="inline-link">click here</a>.
        </p>
      </div>
    </div>

    {/* 4 */}
    <div id="experimental-protocols" className="view-content">
      <div className="content-header">
        <div className="h1">Experimental Protocols for Basic SynBio Methods</div>
      </div>
      <div className="content-body">
        <p>
          To ensure the <span>repeatability</span> and <span>efficiency</span> of the <span>experiments</span>, our <span>team</span> has written and shared a <span>series of standardized experimental protocols</span> covering the <span>basic methods</span> and <span>techniques</span> of <span>synthetic biology</span>, especially their <span>application</span> in our <span>project</span>. Specifically, they include:
        </p>
        <div className="h3">Extracellular Vesicle Capture and Purification</div>
        <p>
          The <span>efficient capture</span> and <span>purification</span> of <span>extracellular vesicles</span> ensures the <span>isolation</span> of <span>high quality tumor extracellular vesicles</span> from <span>serum samples</span>.
        </p>
        <div className="h3">HCR and RCA Amplification Optimization</div>
        <p>
          <span>Experimental steps</span> for <span>optimization</span> of <span>HCR amplification</span> and <span>RCA amplification techniques</span>, which can <span>amplify the target signal</span> in <span>breast cancer diagnosis</span> to ensure the <span>detectability</span> of <span>low concentration biomarkers</span>.
        </p>
        <div className="h3">CRISPR-Cas14 System Construction</div>
        <p>
          In the process of <span>construction</span> and <span>expression</span> of <span>CRISPR-Cas14 system</span>, we described in detail how to <span>construct the expression system</span> of <span>Cas14a</span> and <span>optimize its expression</span> in the <span>prokaryotic system</span> to ensure the <span>high efficiency</span> of <span>signal amplification</span>.
        </p>
        <div className="h3">RCA Amplification Protocol</div>
        <p>
          Our <span>team</span> has also developed a <span>protocol</span> for <span>RCA-based amplification</span>, which allows the <span>rolling circle amplification</span> of <span>circular DNA</span>. This <span>method</span> is <span>ideal</span> for creating a <span>high-sensitivity detection system</span> by <span>amplifying the target signal</span> for <span>easy detection</span> in the context of <span>biosensing applications</span> like <span>cancer diagnostics</span>.
        </p>
        <p>
          These <span>experimental protocols</span> not only <span>systematize our work</span>, but also provide a <span>reference standard</span> for <span>future synthetic biology experiments</span> to help <span>other research teams</span> do their <span>work more efficiently</span>. If you want to learn about our <span>protocols</span>, <a href="/wet-lab/experiments" className="inline-link">click here</a>.
        </p>
      </div>
    </div>

    {/* 5 */}
    <div id="science-education" className="view-content">
      <div className="content-header">
        <div className="h1">The Impact of Science Education on the Public</div>
      </div>
      <div className="content-body">
        <p>
          Beyond <span>technological innovation</span>, our <span>team</span> has made <span>significant contributions</span> to <span>education</span> and <span>public awareness initiatives</span>. Through organizing <span>lectures</span>, <span>online seminars</span>, and <span>social media campaigns</span>, we educate the <span>public</span> about <span>early breast cancer detection</span> while highlighting the <span>cutting-edge applications</span> of <span>synthetic biology</span> in <span>medicine</span>. Our <span>focus</span> is on emphasizing the <span>critical importance</span> of <span>early detection</span>, particularly its <span>potential</span> to enhance <span>diagnostic sensitivity</span> and <span>reduce misdiagnosis rates</span>. We also underscore how <span>synthetic biology</span> drives <span>technological advancements</span> in <span>cancer screening</span> by developing <span>innovative detection systems</span>.
        </p>
        <ImageGallery
          title="Public Awareness Activities"
          images={[
            {
              src: figure1,
              alt: "Public Awareness Activities",
            },
            {
              src: figure2,
              alt: "Public Awareness Activities",
            },
            {
              src: figure3,
              alt: "Public Awareness Activities",
            },
            {
              src: figure4,
              alt: "Public Awareness Activities",
            }
          ]}
        />


        <p>
          Through these <span>popular science activities</span>, we not only <span>raised public awareness</span> of <span>breast cancer prevention</span>, but also helped them <span>understand the application prospects</span> of <span>synthetic biology</span> in <span>cancer diagnosis</span>, stimulated <span>more people's interest</span> in <span>science</span>, and promoted the <span>recognition</span> of <span>synthetic biology technology</span> in <span>society</span>.
        </p>
      </div>
    </div>

    {/* 6 */}
    <div id="summary" className="view-content">
      <div className="content-header">
        <div className="h1">Summary</div>
      </div>
      <div className="content-body">
        <p>
          Through <span>technological innovation</span>, <span>tool development</span>, <span>standardized experimental protocols</span>, and <span>science education initiatives</span>, our <span>team</span> has driven <span>advancements</span> in <span>early breast cancer detection</span>. While our <span>project</span> remains in the <span>research phase</span>, we have already made <span>significant contributions</span> to <span>future product development</span>, <span>academic studies</span>, and <span>societal applications</span>.
        </p>
        <p>
          By our <span>efforts</span>, <span>synthetic biology</span> will see <span>broader applications</span> in <span>cancer diagnosis</span>, contributing to <span>medical progress</span> and <span>public health improvement</span> in the <span>years to come</span>.
        </p>
      </div>
    </div>
  </>
);

function Contribution() {
  
  const [isLoaded, setIsLoaded] = useState(false);

  // 页面加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 菜单数据
  const menuData = [
    {
      id: 'overview',
      title: 'Overview',
      icon: '🌱'
    },
    {
      id: 'detection-method',
      title: 'Multi-Target Detection Method',
      icon: '🔬'
    },
    {
      id: 'biological-parts',
      title: 'Biological Parts',
      icon: '🧬'
    },
    {
      id: 'experimental-protocols',
      title: 'Experimental Protocols',
      icon: '📋'
    },
    {
      id: 'science-education',
      title: 'Science Education Impact',
      icon: '🎓'
    },
    {
      id: 'summary',
      title: 'Summary',
      icon: '📊'
    }
  ];

  // 滚动到指定位置
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 一级菜单点击
  const handleMainMenuClick = (menuId) => {
    scrollToSection(menuId);
  };

  // 二级菜单点击
  const handleSubMenuClick = (subMenuId) => {
    scrollToSection(subMenuId);
  };

  return (
    <div className={`view ${isLoaded ? 'loaded' : ''}`}>
      {/* 左侧菜单栏 */}
      <div className="view-sidebar">
        {/* Logo区域 */}
        <div className="menu-logo">
          <img src={menuLogo} alt="ZZO-CHINA Logo" />
        </div>

        <nav className="sidebar-nav">
          {menuData.map((menu) => (
            <div key={menu.id} className="menu-item">
              <div
                className="menu-title"
                onClick={() => handleMainMenuClick(menu.id)}
              >
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && (
                <div className="submenu">
                  {menu.subMenus.map((subMenu) => (
                    <div
                      key={subMenu.id}
                      className="submenu-item"
                      onClick={() => handleSubMenuClick(subMenu.id)}
                    >
                      {subMenu.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* 右侧内容区域 */}
      <div className="view-main">
        <div className="main-content">
          {/* 主要内容区域 */}
          <div className="main-content-area">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribution;