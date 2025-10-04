import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';

const developmentFigure = 'https://static.igem.wiki/teams/5822/newassets/development/development.webp';

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
          <span>Development</span> of our <span>EXOCRISPR platform</span> represents a <span>comprehensive approach</span> to <span>breast cancer early detection</span>, combining <span>cutting-edge CRISPR technology</span> with <span>lateral flow assay (LFA)</span> systems to create a <span>rapid</span>, <span>sensitive</span>, and <span>accessible diagnostic tool</span>. Our development strategy focuses on two main detection systems: a <span>qualitative detection system</span> using <span>CRISPR-LFA technology</span> and a <span>multi-channel detection system</span> integrated with <span>POCT-type PCR instruments</span>.
        </p>
        <p>
          The <span>qualitative detection system</span> leverages the <span>specific binding</span> between <span>aptamers</span> and <span>exosome markers</span>, combined with <span>HCR/RCA signal amplification</span> and <span>CRISPR-Cas14a cleavage</span> to achieve <span>visual detection results</span> within <span>30 minutes</span>. This system addresses the critical need for <span>point-of-care testing</span> in <span>resource-limited settings</span> and provides a <span>cost-effective solution</span> for <span>early breast cancer screening</span>.
        </p>
        <p>
          Our <span>multi-channel detection approach</span> enables <span>parallel detection</span> of <span>multiple biomarkers</span> simultaneously, significantly improving <span>diagnostic accuracy</span> and <span>clinical efficiency</span>. By integrating with <span>portable PCR instruments</span>, we can deliver <span>laboratory-quality results</span> in <span>field settings</span>, making <span>advanced diagnostics</span> accessible to <span>underserved populations</span>.
        </p>
      </div>
    </div>

    {/* 2 */}
    <div id="crispr-lfa-system" className="view-content">
      <div className="content-header">
        <div className="h1">Construction of CRISPR-LFA Qualitative Detection System</div>
      </div>
      <div className="content-body">
        <p>
          Next, we plan to develop a <span>qualitative detection system</span>. Combining the <span>biological characteristics</span> of <span>breast cancer exosomes</span> and the <span>characteristics of clinical samples</span>, the <span>preliminary exploration ideas</span> are as follows:
        </p>
      </div>

      {/* Background Subsection */}
      <section id="lfa-background" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Background</div>
          </div>
          <div className="content-body">
            <p>
              In the field of <span>medical testing</span>, <span>LFA</span> is the abbreviation of <span>Lateral Flow Assay</span>, which is commonly known as <span>lateral flow immunochromatographic assay</span> in Chinese. It is a <span>rapid detection method</span> based on <span>immunochromatographic technology</span>. <span>LFA</span> utilizes the <span>specific binding reaction</span> between <span>antigens</span> and <span>antibodies</span>, combined with <span>chromatographic technology</span> to achieve "<span>rapid detection + visual results</span>". Its <span>core process</span> can be simplified into <span>3 steps</span>:
            </p>
            <div className="h3">Sample Loading</div>
            <p>
              Add the <span>sample to be tested</span> (such as <span>blood</span>, <span>urine</span>, <span>saliva</span>, <span>throat swab extract</span>, etc.) onto the "<span>sample pad</span>" of the <span>test strip</span>;
            </p>
            <div className="h3">Chromatographic Reaction</div>
            <p>
              Driven by <span>capillary action</span>, the <span>sample flows</span> along the <span>test strip</span> (composed of <span>sample pad</span>, <span>conjugate pad</span>, <span>reaction membrane</span>, and <span>absorbent pad</span>) to the <span>other end</span>;
            </p>
            <div className="h3">Result Display</div>
            <p>
              During the <span>flow process</span>, the <span>target substance</span> in the <span>sample</span> first binds to the "<span>labeled antibody</span>" on the "<span>conjugate pad</span>" to form a "<span>target substance-labeled antibody complex</span>"; the <span>complex</span> continues to flow to the <span>reaction membrane</span>, where it is <span>specifically captured</span> by the <span>pre-immobilized</span> "<span>capture antibody</span>" on the <span>membrane</span>, forming a <span>visible band</span> (e.g., <span>red</span>, <span>purple</span>) at the "<span>Test Line (T Line)</span>"; the <span>unbound labeled antibodies</span> continue to flow to the "<span>Control Line (C Line)</span>" and bind to the <span>immobilized antibodies</span> on the <span>C Line</span> to form a <span>band</span>. The appearance of the <span>C Line</span> indicates that the <span>detection process</span> is <span>valid</span>; the appearance of the <span>T Line</span> indicates the <span>presence</span> of the <span>target substance</span> in the <span>sample</span> (<span>positive</span>); the <span>absence</span> of the <span>T Line</span> indicates <span>negative</span>.
            </p>
            <div className="figure-container">
              <img src={developmentFigure} alt="Development Figure" className="figure-image" />
            </div>

          </div>
        </div>
      </section>

      {/* Scheme Subsection */}
      <section id="lfa-scheme" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Scheme</div>
          </div>
          <div className="content-body">
            <p>
              Through a <span>tandem system</span> of "<span>CD63 aptamer-modified magnetic bead capture</span> → <span>displacement reaction signal conversion</span> → <span>HCR/RCA dual amplification</span> → <span>CRISPR-Cas cleavage activation</span> → <span>lateral flow assay (LFA) color development</span>", we will <span>qualitatively detect</span> <span>breast cancer exosomes</span> in <span>samples</span> (<span>target markers</span>: the <span>four marker proteins</span> selected in this <span>project</span>). This <span>system</span> can be used for <span>auxiliary diagnosis</span> of <span>breast cancer</span> and provide a <span>faster</span>, <span>more efficient</span>, <span>sensitive</span>, and <span>low-cost qualitative detection method</span> for the <span>prevention</span>, <span>treatment</span>, and <span>early screening</span> of <span>breast cancer</span>.
            </p>
            <p>
              In the <span>early stage</span>, to improve <span>detection sensitivity</span> and <span>efficiency</span>, we designed <span>magnetic beads</span> modified with <span>CD63</span> (a <span>specific marker protein</span> on <span>exosomes</span>) <span>aptamers</span> to <span>efficiently enrich</span> and <span>capture exosomes</span> in <span>samples</span>. After <span>magnetic separation</span> to remove the <span>magnetic beads</span>, the <span>supernatant</span> contains the <span>released complementary strands</span>—these <span>complementary strands</span> serve as "<span>signal trigger molecules</span>" and can directly initiate the <span>subsequent HCR/RCA signal amplification process</span>, realizing "<span>target presence → signal molecule release</span>".
            </p>
            <p>
              Meanwhile, to solve the problem of <span>weak signals</span> from <span>low-abundance targets</span>, we constructed a "<span>Hybrid Chain Reaction (HCR)/Rolling Circle Amplification (RCA)</span>" <span>signal amplification system</span> and used <span>prokaryotically expressed Cas14a protein</span> to build a <span>quantitative detection system</span>. The <span>core principle</span> relies on the "<span>target activation-trans cleavage</span>" property of <span>Cas14a</span>. Next, we plan to combine <span>CRISPR</span> with <span>LFA</span> to construct a <span>qualitative detection system</span>. The "<span>product</span>" of the <span>CRISPR reaction</span> is the "<span>detection target</span>" of <span>LFA</span>; therefore, we will drop the <span>CRISPR reaction solution</span> onto the <span>LFA test strip</span>. Through <span>chromatographic action</span>, we can observe the <span>color development</span> of the <span>Test Line (T Line)</span> and <span>Control Line (C Line)</span> to conduct <span>qualitative auxiliary diagnosis</span> of <span>breast cancer</span>.
            </p>
            <p>
              The <span>judgment criteria</span> are as follows:
            </p>
            <div className="table-container">
            <table>
                <thead>
                  <tr>
                    <th>Color Development of Test Strip</th>
                    <th>Test Result</th>
                    <th>Core Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Both T Line and C Line develop color</td>
                    <td>Positive (+)</td>
                    <td>Breast cancer-related proteins in the sample are highly expressed</td>
                  </tr>
                  <tr>
                    <td>T Line does not develop color, while C Line develops color</td>
                    <td>Negative (-)</td>
                    <td>Breast cancer-related proteins in the sample are normally expressed</td>
                  </tr>
                  <tr>
                    <td>Neither T Line nor C Line develops color</td>
                    <td>Invalid Test</td>
                    <td>The test strip is invalid or the reaction steps are abnormal; retesting is required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* 3 */}
    <div id="multi-channel-detection" className="view-content">
      <div className="content-header">
        <div className="h1">Realization of Multi-Channel Detection by Combining with POCT-Type PCR Instrument</div>
      </div>
      <div className="content-body">
        <p>
          <span>POCT (Point-of-Care Testing)</span> refers to <span>on-site immediate testing</span>. By combining with the <span>existing "capture-amplification-detection" process</span> in the <span>project</span>, it solves the <span>problem</span> that <span>traditional exosome detection</span> relies on <span>laboratory equipment</span> and is <span>difficult to be implemented</span> at the <span>grassroots level</span>. It can also realize "<span>parallel detection of multiple samples</span>", which better meets the <span>needs</span> of <span>clinical combined diagnosis</span> and <span>efficient screening</span>. Currently, it has been <span>widely used</span> in <span>multiple fields</span> such as <span>myocardial infarction</span>, <span>infectious diseases</span>, and <span>tumor screening</span>.
        </p>
        <p>
          After the <span>implementation</span> of the <span>LFA test strip qualitative detection plan</span>, we plan to combine the <span>core process</span> of "<span>CD63 aptamer-modified magnetic bead capture</span> → <span>displacement reaction</span> → <span>HCR/RCA amplification</span> → <span>CRISPR/Cas14a detection</span>" with a <span>kit-type handheld PCR instrument</span> to achieve <span>portable</span>, <span>simple</span>, and <span>rapid multi-channel detection</span>. The <span>specific combination method</span> is as follows:
        </p>
      </div>

      {/* POCT Cartridge Subsection */}
      <section id="poct-cartridge" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">In the POCT Cartridge</div>
          </div>
          <div className="content-body">
            <div className="h3">Sample Zone</div>
            <p>
              Pre-encapsulates <span>magnetic beads</span> modified with <span>multiple aptamers</span> targeting <span>CD63</span> and <span>specific markers</span> of <span>breast cancer exosomes</span> to <span>simultaneously capture multi-target exosomes</span>;
            </p>
            <div className="h3">Displacement Reaction Stage</div>
            <p>
              Pre-encapsulates <span>target-specific complementary strands</span> along with the <span>magnetic beads</span>, so that <span>complementary strands</span> are <span>released into the supernatant</span> <span>simultaneously</span> after <span>binding</span>;
            </p>
            <div className="h3">Amplification Zone</div>
            <p>
              Stores <span>HCR hairpin pairs</span> and <span>RCA circular probes</span> corresponding to the <span>targets</span> in a <span>zone-wise lyophilized form</span>, enabling <span>simultaneous initiation</span> of <span>dual amplification</span> at <span>room temperature</span>;
            </p>
            <div className="h3">Detection Zone</div>
            <p>
              Equips <span>multiple sets of independent channels</span>, pre-encapsulating <span>Cas14a-crRNA complexes</span> corresponding to the <span>targets</span>, so that <span>multi-target detection results</span> can be <span>obtained at one time</span> through <span>multi-channels</span>, realizing <span>multi-channel</span>, <span>rapid</span>, and <span>convenient detection</span>.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 4 */}
    <div id="technical-advantages" className="view-content">
      <div className="content-header">
        <div className="h1">Technical Advantages and Innovation</div>
      </div>
      <div className="content-body">
        <p>
          Our <span>development approach</span> combines <span>multiple cutting-edge technologies</span> to create a <span>comprehensive diagnostic platform</span> that addresses the <span>current limitations</span> in <span>breast cancer early detection</span>. The <span>integration</span> of <span>CRISPR technology</span> with <span>lateral flow assays</span> and <span>POCT instruments</span> represents a <span>significant advancement</span> in <span>point-of-care diagnostics</span>.
        </p>
        <p>
          The <span>qualitative detection system</span> provides <span>immediate visual results</span> without requiring <span>specialized equipment</span>, making it <span>ideal</span> for <span>resource-limited settings</span> and <span>community health programs</span>. The <span>multi-channel detection approach</span> enables <span>simultaneous analysis</span> of <span>multiple biomarkers</span>, significantly improving <span>diagnostic accuracy</span> and <span>clinical efficiency</span>.
        </p>
        <p>
          By combining <span>magnetic bead capture</span>, <span>signal amplification</span>, and <span>CRISPR-based detection</span>, our platform achieves <span>high sensitivity</span> and <span>specificity</span> while maintaining <span>simplicity</span> and <span>cost-effectiveness</span>. This <span>innovative approach</span> has the potential to <span>revolutionize</span> <span>breast cancer screening</span> and make <span>early detection</span> accessible to <span>populations worldwide</span>.
        </p>
      </div>
    </div>

    {/* 5 */}
    <div id="future-development" className="view-content">
      <div className="content-header">
        <div className="h1">Future Development Plans</div>
      </div>
      <div className="content-body">
        <p>
          Looking ahead, we plan to <span>expand our development efforts</span> to include <span>additional cancer types</span> and <span>biomarkers</span>, creating a <span>comprehensive diagnostic platform</span> that can be adapted for <span>various clinical applications</span>. Our <span>long-term vision</span> includes the <span>development</span> of <span>personalized medicine approaches</span> that can provide <span>tailored treatment recommendations</span> based on <span>individual biomarker profiles</span>.
        </p>
        <p>
          We also plan to <span>integrate artificial intelligence</span> and <span>machine learning algorithms</span> into our <span>detection systems</span> to improve <span>diagnostic accuracy</span> and <span>predictive capabilities</span>. This will enable <span>real-time data analysis</span> and <span>automated result interpretation</span>, further enhancing the <span>clinical utility</span> of our platform.
        </p>
        <p>
          Through <span>continued research</span> and <span>development</span>, we aim to create a <span>next-generation diagnostic platform</span> that combines <span>cutting-edge technology</span> with <span>clinical practicality</span>, ultimately improving <span>patient outcomes</span> and <span>advancing the field</span> of <span>cancer diagnostics</span>.
        </p>
      </div>
    </div>
  </>
);

function Development() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMenu, setActiveMenu] = useState('overview');
  const [activeSubMenu, setActiveSubMenu] = useState(null);

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
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'crispr-lfa-system',
      title: 'CRISPR-LFA Qualitative Detection System',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'lfa-background', title: 'Background', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'lfa-scheme', title: 'Scheme', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'multi-channel-detection',
      title: 'Multi-Channel Detection with POCT',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'poct-cartridge', title: 'POCT Cartridge Design', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'technical-advantages',
      title: 'Technical Advantages',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'future-development',
      title: 'Future Development Plans',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    }
  ];

  // 滚动到指定位置
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
    }
  };

  // 一级菜单点击
  const handleMainMenuClick = (menuId) => {
    scrollToSection(menuId);
    setActiveMenu(menuId);
  };

  // 二级菜单点击
  const handleSubMenuClick = (menuId, subMenuId) => {
    scrollToSection(subMenuId);
    setActiveSubMenu(subMenuId);
    setActiveMenu(menuId);
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
                <img className='menu-icon' src={menu.icon}  /> 
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && (
                <div className="submenu">
                  {menu.subMenus.map((subMenu) => (
                    <div
                      key={subMenu.id}
                      className="submenu-item"
                      onClick={() => handleSubMenuClick(menu.id, subMenu.id)}
                    >
                      <img className='menu-icon' src={subMenu.icon}  /> 
                      <span className="submenu-text">{subMenu.title}</span>
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

export default Development;