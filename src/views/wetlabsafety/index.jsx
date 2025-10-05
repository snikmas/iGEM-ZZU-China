import React, { useState, useEffect } from 'react';
// import './index.css';
// 引入共通样式
import '../../styles/common.css';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';
const safetyPdf = 'https://static.igem.wiki/teams/5822/newassets/files/safetypdf.pdf';
const safetyFigure1 = 'https://static.igem.wiki/teams/5822/newassets/safety/safety.webp';

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
          Ensuring <span>safety</span> is a <span>key part</span> of our <span>project</span>. In our <span>team</span>, we take <span>responsibility</span> for protecting <span>ourselves</span>, the <span>public</span>, and the <span>environment</span>. We follow <span>iGEM's safety policies</span> and work closely with <span>instructors</span> and <span>university experts</span>. In this section, we will outline the <span>identified risks</span>, our <span>approach</span> to managing them, and the <span>precautions</span> we have implemented to ensure <span>safe</span> and <span>responsible research practices</span>.
        </p>
      </div>
    </div>

    {/* 2 */}
    <div id="identification-risks" className="view-content">
      <div className="content-header">
        <div className="h1">Identification of Risks</div>
      </div>

      {/* Risk Identification Subsection */}
      <section id="risk-overview" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Risk Overview</div>
          </div>
          <div className="content-body">
            <p>
              Our <span>project</span> aims to build a <span>synthetic biology-based platform</span> for <span>early breast cancer detection</span> using <span>engineered bacteria</span>, <span>DNA tools</span>, and <span>human cell lines</span>. The <span>potential risks</span> we identified include:
            </p>
          </div>
        </div>
      </section>

      {/* E. coli Exposure Subsection */}
      <section id="exposure-e-coli" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Exposure to recombinant E. coli strains</div>
          </div>
          <div className="content-body">
            <p>
              We use <span>E. coli DH5α</span> and <span>BL21 (DE3)</span> to express and purify <span>Cas14a protein</span>. Although these are <span>Biosafety Level 1 strains</span> and <span>non-pathogenic</span>, accidental exposure could cause <span>minor skin</span> or <span>eye irritation</span> or lead to <span>environmental contamination</span> if not handled properly.
            </p>
          </div>
        </div>
      </section>

      {/* Cell Lines Handling Subsection */}
      <section id="handling-cell-lines" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Handling human breast cell lines</div>
          </div>
          <div className="content-body">
            <p>
              The <span>cell lines SKBR3</span> and <span>MCF10A</span> are commonly used in <span>cancer research</span>. While they pose <span>minimal biosafety risk</span>, poor <span>aseptic techniques</span> could result in <span>microbial contamination</span>, <span>cross-contamination</span> between cell lines, or <span>lab waste management</span> issues.
            </p>
          </div>
        </div>
      </section>

      {/* Magnetic Beads Subsection */}
      <section id="magnetic-beads" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Use of magnetic beads and aptamers</div>
          </div>
          <div className="content-body">
            <p>
              Our <span>EV detection</span> relies on <span>aptamer-functionalized magnetic beads</span>. Accidental <span>spillage</span>, <span>inhalation</span> of dried particles, or <span>improper disposal</span> could pose <span>minor chemical</span> or <span>physical risks</span> in the lab.
            </p>
          </div>
        </div>
      </section>

      {/* Chemical Reagents Subsection */}
      <section id="chemical-reagents" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Chemical reagents for DNA amplification</div>
          </div>
          <div className="content-body">
            <p>
              The project uses <span>reagents</span> for <span>HCR</span> and <span>RCA reactions</span>, such as <span>polymerases</span>, <span>primers</span>, and <span>buffers</span>. Some of these <span>chemicals</span> can be <span>irritating</span> or <span>harmful</span> if they come into contact with the <span>skin</span>, <span>eyes</span>, or are <span>inhaled</span> in powdered form.
            </p>
          </div>
        </div>
      </section>

      {/* UV Equipment Subsection */}
      <section id="uv-equipment" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">UV and electrophoresis equipment</div>
          </div>
          <div className="content-body">
            <p>
              <span>Gel electrophoresis</span> and <span>UV transilluminators</span> are used during <span>nucleic acid analysis</span>. There is a risk of <span>UV exposure</span> or <span>electrical shock</span> if the equipment is mishandled.
            </p>
          </div>
        </div>
      </section>

      {/* CRISPR System Subsection */}
      <section id="crispr-system" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">CRISPR-Cas14a-based detection system</div>
          </div>
          <div className="content-body">
            <p>
              <span>Cas14a</span> targets only <span>single-stranded DNA</span> and does not <span>edit genomes</span>, which lowers <span>biosafety risk</span>. However, <span>incorrect handling</span> of the system or <span>guide RNA</span> could result in <span>unintended ssDNA cleavage</span> in test systems.
            </p>
          </div>
        </div>
      </section>


      <div className="figure-container">
        <div className="figure-item">
        <img src={safetyFigure1} alt="Team-to-Team Technical Exchange" className="figure-image" />
        <div className="h4">Figure1：Lab Safety</div></div>
      </div>
    </div>

    {/* 3 */}
    <div id="management-risks" className="view-content">
      <div className="content-header">
        <div className="h1">Management of Risks</div>
      </div>

      {/* Risk Management Overview Subsection */}
      <section id="management-overview" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Risk Management Overview</div>
          </div>
          <div className="content-body">
            <p>
              We have implemented several <span>measures</span> to effectively manage the <span>risks</span> associated with our <span>project</span>:
            </p>
          </div>
        </div>
      </section>

      {/* Expert Support Subsection */}
      <section id="expert-support" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Expert Support</div>
          </div>
          <div className="content-body">
            <p>
              We closely collaborate with <span>institutional biosafety officers</span> and <span>experienced professors</span> in relevant fields. All <span>laboratory work</span>, including experiments involving <span>E. coli strains</span> and <span>tumor cell lines</span>, is conducted under the <span>supervision</span> and <span>approval</span> of <span>biosafety officers</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Subsection */}
      <section id="compliance-regulations" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Compliance with Regulations and Guidelines</div>
          </div>
          <div className="content-body">
            <p>
              Our work follows the <span>biosafety</span> and <span>biosecurity protocols</span> established by our <span>institution</span>. We strictly adhere to <span>local laws</span> and <span>international standards</span>, including the <span>iGEM Safety Policies</span>, to ensure the <span>responsible handling</span> of <span>biological materials</span> and <span>chemicals</span>. All <span>cell lines</span> used (including <span>E. coli</span> and <span>tumor cell lines</span>) have undergone <span>STR profiling</span> and <span>mycoplasma testing</span> to ensure <span>identity verification</span> and <span>contamination-free status</span>. <span>Certificates of Analysis</span> are provided in Appendix.
            </p>
            
            {/* PDF插入位置 */}
            <div className="figure-container">
                <object
                  data={safetyPdf}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  aria-label="Safety PDF Document"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Lab Safety Training Subsection */}
      <section id="lab-safety-training" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Lab Safety and Training</div>
          </div>
          <div className="content-body">
            <p>
              All <span>team members</span> have completed <span>comprehensive safety training</span>. This includes <span>lab access rules</span>, use of <span>personal protective equipment (PPE)</span>, <span>aseptic techniques</span>, and <span>emergency response procedures</span>. Special care is taken when working with <span>toxic chemicals</span> and <span>cell cultures</span>, with <span>full PPE</span> and <span>designated lab areas</span> in use at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Spaces Subsection */}
      <section id="dedicated-lab-spaces" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Dedicated Lab Spaces and Equipment</div>
          </div>
          <div className="content-body">
            <p>
              We utilize <span>biosafety cabinets</span>, <span>chemical fume hoods</span>, and <span>specialized instruments</span> such as <span>HPLC</span> and <span>spectrophotometers</span>. Only <span>trained personnel</span> are permitted to <span>operate equipment</span> and perform <span>high-risk procedures</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Waste Management Subsection */}
      <section id="waste-management" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Waste Management and Containment</div>
          </div>
          <div className="content-body">
            <p>
              <span>Biological waste</span> is <span>autoclaved</span> prior to disposal. <span>Chemical waste</span> is collected and disposed of in accordance with <span>institutional protocols</span>. <span>Experimental procedures</span> are designed to minimize the use of <span>hazardous materials</span>, and <span>contaminated waste</span> is treated according to <span>strict safety standards</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Reduction Subsection */}
      <section id="risk-reduction-design" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Risk Reduction by Experimental Design</div>
          </div>
          <div className="content-body">
            <p>
              The quantities of <span>chemicals</span> and <span>biological agents</span> used are minimized whenever possible. All work involving <span>tumor cell lines</span> is performed in <span>separate</span>, <span>controlled environments</span> to prevent <span>contamination</span> and <span>exposure</span>.
            </p>
            <p>
              These practices ensure that all <span>potential risks</span> are <span>responsibly managed</span> and that our <span>project</span> remains in <span>full compliance</span> with <span>institutional</span> and <span>iGEM safety requirements</span>.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 4 */}
    <div id="responsibility-human-practices" className="view-content">
      <div className="content-header">
        <div className="h1">Responsibility in Human Practices</div>
      </div>

      {/* Avoiding Vulnerable Individuals Subsection */}
      <section id="avoiding-vulnerable" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Avoiding Direct Engagement with Vulnerable Individuals</div>
          </div>
          <div className="content-body">
            <p>
              Out of respect for the <span>emotional well-being</span> of <span>cancer patients</span>, we deliberately chose not to engage directly with them during our <span>project</span>. As <span>undergraduate students</span> without <span>clinical training</span> or <span>counseling expertise</span>, we recognized the <span>potential harm</span> that could arise from <span>unintentional emotional distress</span> or <span>false reassurance</span>. Instead, we focused on gathering <span>insights</span> through <span>professionals</span> who work closely with <span>patients</span>, such as <span>oncology counselors</span> and <span>medical practitioners</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation with Experts Subsection */}
      <section id="consultation-experts" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Consultation with Experts</div>
          </div>
          <div className="content-body">
            <p>
              We prioritized <span>consultations</span> with <span>professionals</span> experienced in <span>patient care</span> and <span>medical ethics</span>. These individuals provided <span>valuable perspectives</span> on <span>patient needs</span>, <span>safety concerns</span>, and the <span>societal implications</span> of our <span>research</span>. Their <span>guidance</span> helped shape our <span>project</span> in a way that aligns with <span>real-world clinical</span> and <span>ethical standards</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Informed Consent Subsection */}
      <section id="informed-consent" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Informed Consent and Transparency</div>
          </div>
          <div className="content-body">
            <p>
              All individuals we interviewed for <span>Human Practices</span> were informed of the <span>purpose</span>, <span>scope</span>, and <span>potential use</span> of their <span>contributions</span>. We obtained <span>explicit consent</span> before sharing or publishing any part of our <span>discussions</span>. This ensured that our <span>communications</span> were <span>transparent</span>, <span>ethical</span>, and <span>respectful</span> of <span>participants' autonomy</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Outreach Subsection */}
      <section id="ethical-outreach" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Ethical Outreach and Communication</div>
          </div>
          <div className="content-body">
            <p>
              Throughout our <span>outreach activities</span>, we maintained a <span>strong commitment</span> to <span>ethical standards</span>. We carefully reviewed the <span>language</span> and <span>tone</span> used in our <span>presentations</span>, <span>wiki content</span>, and <span>promotional materials</span> to ensure they were <span>scientifically accurate</span>, <span>respectful</span>, and free from <span>sensationalism</span>. Our goal was to <span>educate</span> and <span>inform</span> without <span>overpromising</span> the impact of <span>synthetic biology</span> or our <span>project</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
);

function WetLabSafety() {
  
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
      id: 'identification-risks',
      title: 'Identification of Risks',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'exposure-e-coli', title: 'Exposure to recombinant E. coli strains',icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'handling-cell-lines', title: 'Handling human breast cell lines' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'magnetic-beads', title: 'Use of magnetic beads and aptamers',icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'chemical-reagents', title: 'Chemical reagents for DNA amplification',icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'uv-equipment', title: 'UV and electrophoresis equipment',icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'crispr-system', title: 'CRISPR-Cas14a-based detection system',icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'management-risks',
      title: 'Management of Risks',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'expert-support', title: 'Expert Support' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'compliance-regulations', title: 'Compliance with Regulations and Guidelines' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'lab-safety-training', title: 'Lab Safety and Training' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'dedicated-lab-spaces', title: 'Dedicated Lab Spaces and Equipment' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'waste-management', title: 'Waste Management and Containment' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'risk-reduction-design', title: 'Risk Reduction by Experimental Design' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'}
      ]
    },
    {
      id: 'responsibility-human-practices',
      title: 'Responsibility in Human Practices',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'avoiding-vulnerable', title: 'Avoiding Direct Engagement with Vulnerable Individuals' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'consultation-experts', title: 'Consultation with Experts' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'informed-consent', title: 'Informed Consent and Transparency' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'},
        { id: 'ethical-outreach', title: 'Ethical Outreach and Communication' ,icon:'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'}
      ]
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
  const handleSubMenuClick = (menuId,subMenuId) => {
    scrollToSection(subMenuId);
    setActiveMenu(menuId);
    setActiveSubMenu(subMenuId);
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
                <img className="menu-icon" src={menu.icon}   />
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && (
                <div className="submenu">
                  {menu.subMenus.map((subMenu) => (
                    <div
                      key={subMenu.id}
                      className="submenu-item"
                      onClick={() => handleSubMenuClick(menu.id,subMenu.id)}
                    >
                      <img className="menu-icon" src={subMenu.icon}   />
                      <span className="menu-text">{subMenu.title}</span>
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

export default WetLabSafety;