
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
          Ensuring <strong>safety</strong> is a <strong>key part</strong> of our <strong>project</strong>. In our <strong>team</strong>, we take <strong>responsibility</strong> for protecting <strong>ourselves</strong>, the <strong>public</strong>, and the <strong>environment</strong>. We follow <strong>iGEM's safety policies</strong> and work closely with <strong>instructors</strong> and <strong>university experts</strong>. In this section, we will outline the <strong>identified risks</strong>, our <strong>approach</strong> to managing them, and the <strong>precautions</strong> we have implemented to ensure <strong>safe</strong> and <strong>responsible research practices</strong>.
        </p>
      </div>
    </div>

    {/* 2 */}
    <div id="identification-risks" className="view-content">
      <div className="content-header">
        <div className="h1">Identification of Risks</div>
      </div>
      <div className="content-body">
        <p>
          Our project involves wet lab experiments using bacteria, human cell lines, DNA amplification, and laboratory equipment such as UV transilluminators. The main risks in our project are summarized below and categorized by source to help us manage them effectively.
        </p>
      </div>

      {/* E. coli Subsection */}
      <section id="ecoli" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Exposure to recombinant E. coli strains</div>
          </div>
          <div className="content-body">
            <p>
              We use <strong>BL21 (DE3)</strong> and <strong>DH5α</strong> E. coli strains for cloning and protein expression. These strains are classified as <strong>Biosafety Level 1 (BSL-1)</strong> and are therefore considered safe to work with under standard lab conditions. However, accidental exposure (e.g., through skin contact, aerosols, or splash) could result in <strong>minor skin or eye irritation</strong>, <strong>microbial contamination</strong>, <strong>inappropriate handling</strong> of <strong>biological materials</strong> and <strong>ethical issues.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Human Cell Lines Subsection */}
      <section id="human-cell-lines" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Handling human breast cell lines</div>
          </div>
          <div className="content-body">
            <p>
              The <strong>cell lines SKBR3</strong> and <strong>MCF10A</strong> used in our experiments are non-pathogenic. These cell lines were used to generate <strong>extracellular vesicles (EVs)</strong>, which were then processed for their protein components. During experiments, we use <strong>pipetting tools</strong>, <strong>culture flasks/tubes</strong>, and <strong>benchtop centrifuges</strong>. We store cell lines in <strong>cryovials</strong> and <strong>-80°C freezers</strong>, and we follow our institution’s guidelines for the management of human cell-based materials. Risks associated with cell lines include <strong>biological contamination</strong>, <strong>mix-ups</strong> between cell lines, or <strong>lab waste management</strong> issues.
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
              Our <strong>EV detection</strong> relies on <strong>aptamer-based recognition</strong> and <strong>streptavidin–biotin magnetic beads</strong>. Both processes are considered <strong>low-risk</strong>. However, we follow general safety measures: avoiding aerosol formation, wearing <strong>gloves</strong> and <strong>protective coats</strong>, using <strong>clean benches</strong> to prevent contamination, and ensuring all equipment is maintained regularly. For aptamers, there is no genetic modification involved. Overall, the risks are <strong>low</strong> and manageable, though not zero—so we continue to monitor for any <strong>minor chemical</strong> or <strong>physical risks</strong> in the lab.
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
              The project uses <strong>reagents</strong> for <strong>HCR</strong>, <strong>RCA</strong>, and <strong>protein detection</strong>. We wear <strong>gloves</strong> and <strong>lab coats</strong> and work under <strong>ventilated areas</strong> (e.g., fume hood) where necessary. Reagents are handled with <strong>careful pipetting</strong> to avoid spills, and all chemical hazards are managed under our university’s safety rules. Although the buffers are generally <strong>non-toxic</strong>, accidents can happen if they contact <strong>skin</strong>, <strong>eyes</strong>, or are <strong>inhaled</strong> in powdered form.
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
              For <strong>gel electrophoresis</strong> and <strong>UV visualization</strong>, we always wear <strong>protective goggles</strong> and ensure that <strong>the power is switched off</strong> before handling the gel tray or buffer. This helps prevent <strong>electrical hazards</strong> and <strong>UV exposure</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CRISPR Subsection */}
      <section id="crispr" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">CRISPR-Cas14a-based detection system</div>
          </div>
          <div className="content-body">
            <p>
              The <strong>Cas14a enzyme</strong> and <strong>crRNAs</strong> we use are <strong>cell-free</strong> and perform <strong>in vitro detection</strong>. There is <strong>no genetic modification of living organisms</strong> in our detection process. We handle enzyme stocks using <strong>cold chain</strong> practices, avoiding repeated freeze-thaw cycles to maintain integrity.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 3 */}
    <div id="management-risks" className="view-content">
      <div className="content-header">
        <div className="h1">Management of Risks</div>
      </div>
      <div className="content-body">
        <p>
          We adopt a layered approach to risk management: obtaining guidance from experts, complying with regulations and iGEM policies, training team members, working in appropriate lab spaces, and carefully handling and disposing of lab materials to prevent any unintended release or harm.
        </p>
      </div>

      {/* Expert Support Subsection */}
      <section id="expert-support" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Expert Support</div>
          </div>
          <div className="content-body">
            <p>
              All <strong>laboratory work</strong> is conducted under the <strong>supervision</strong> and <strong>approval</strong> of biosafety officers and experienced mentors. Our protocols are reviewed before experiments begin, and any procedural changes are documented and re-approved for compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Subsection */}
      <section id="compliance" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Compliance with Regulations and Guidelines</div>
          </div>
          <div className="content-body">
            <p>
              We <strong>strictly adhere</strong> to <strong>local laws</strong> and <strong>international standards</strong>, including <strong>iGEM Safety Policies</strong>. We also ensure compliance with <strong>institutional</strong> and <strong>iGEM safety requirements</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Safety Subsection */}
      <section id="lab-safety" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Lab Safety and Training</div>
          </div>
          <div className="content-body">
            <p>
              All team members have completed <strong>comprehensive safety training</strong> covering <strong>biosafety</strong>, <strong>chemical safety</strong>, and <strong>emergency response</strong>. Training records are kept and verified before lab access is granted.
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated Spaces Subsection */}
      <section id="dedicated-spaces" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Dedicated Lab Spaces and Equipment</div>
          </div>
          <div className="content-body">
            <p>
              Work with <strong>cell lines</strong> and <strong>recombinant DNA</strong> is performed in <strong>designated areas</strong> to avoid cross-contamination. We use separate spaces for bacterial culture and mammalian cell handling, and we sterilize benches and tools before and after use.
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
              Biological waste is <strong>autoclaved prior to disposal</strong>, and <strong>chemical waste</strong> is <strong>collected separately</strong> in labeled containers following environmental safety guidelines. Sharps are discarded in the proper containers to prevent injuries.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Reduction Subsection */}
      <section id="risk-reduction" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Risk Reduction by Experimental Design</div>
          </div>
          <div className="content-body">
            <p>
              We design our experiments to <strong>minimize risk exposure</strong>, use <strong>small reaction volumes</strong>, and <strong>avoid using pathogenic strains or toxins</strong>. All procedures are pre-planned to reduce handling of hazardous materials and to ensure traceability of materials.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 4 */}
    <div id="human-practices" className="view-content">
      <div className="content-header">
        <div className="h1">Responsibility in Human Practices</div>
      </div>
      <div className="content-body">
        <p>
          Our Human Practices approach focuses on ethics, respect, and transparency. We engage with experts and the public in ways that promote understanding without making medical claims or causing distress to vulnerable communities.
        </p>
      </div>

      {/* Avoiding Direct Engagement Subsection */}
      <section id="avoid-direct-engagement" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Avoiding Direct Engagement with Vulnerable Individuals</div>
          </div>
          <div className="content-body">
            <p>
              Out of respect for the <strong>emotional well-being of cancer patients</strong>, we <strong>deliberately chose not to engage directly</strong> with vulnerable groups. Instead, we focus on educational outreach and professional consultations to shape our project responsibly.
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
              We communicated with <strong>oncologists</strong>, <strong>researchers</strong>, and <strong>ethics professionals</strong> to ensure our project aligns with ethical and societal expectations. Their feedback helped us define safe and meaningful directions for our work.
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
              We obtained <strong>explicit consent</strong> before sharing or publishing any part of our discussions. All outreach materials <strong>avoid medical claims</strong> and emphasize that our work is <strong>research-based</strong>, not diagnostic.
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
              Public engagement focuses on <strong>scientific education</strong> and <strong>raising awareness</strong>, ensuring information is <strong>accurate</strong>, <strong>accessible</strong>, and <strong>respectful</strong>. We present our materials in clear language and avoid overstating the capabilities of our research.
            </p>
          </div>
        </div>
      </section>

      <div className="safety-figure">
        <img src={safetyFigure1} alt="safety figure" />
      </div>
    </div>
  </>
);

// 侧边菜单项
const menuItems = [
  {
    id: 'overview',
    icon: menuLogo,
    title: 'Overview',
  },
  {
    id: 'identification-risks',
    icon: menuLogo,
    title: 'Identification of Risks',
    subMenus: [
      { id: 'ecoli', icon: menuLogo, title: 'Exposure to recombinant E. coli strains' },
      { id: 'human-cell-lines', icon: menuLogo, title: 'Handling human breast cell lines' },
      { id: 'magnetic-beads', icon: menuLogo, title: 'Use of magnetic beads and aptamers' },
      { id: 'chemical-reagents', icon: menuLogo, title: 'Chemical reagents for DNA amplification' },
      { id: 'uv-equipment', icon: menuLogo, title: 'UV and electrophoresis equipment' },
      { id: 'crispr', icon: menuLogo, title: 'CRISPR-Cas14a-based detection system' },
    ],
  },
  {
    id: 'management-risks',
    icon: menuLogo,
    title: 'Management of Risks',
    subMenus: [
      { id: 'expert-support', icon: menuLogo, title: 'Expert Support' },
      { id: 'compliance', icon: menuLogo, title: 'Compliance with Regulations and Guidelines' },
      { id: 'lab-safety', icon: menuLogo, title: 'Lab Safety and Training' },
      { id: 'dedicated-spaces', icon: menuLogo, title: 'Dedicated Lab Spaces and Equipment' },
      { id: 'waste-management', icon: menuLogo, title: 'Waste Management and Containment' },
      { id: 'risk-reduction', icon: menuLogo, title: 'Risk Reduction by Experimental Design' },
    ],
  },
  {
    id: 'human-practices',
    icon: menuLogo,
    title: 'Responsibility in Human Practices',
    subMenus: [
      { id: 'avoid-direct-engagement', icon: menuLogo, title: 'Avoiding Direct Engagement with Vulnerable Individuals' },
      { id: 'consultation-experts', icon: menuLogo, title: 'Consultation with Experts' },
      { id: 'informed-consent', icon: menuLogo, title: 'Informed Consent and Transparency' },
      { id: 'ethical-outreach', icon: menuLogo, title: 'Ethical Outreach and Communication' },
    ],
  },
];

// 主组件
function WetLabSafety() {
  const [activeMenu, setActiveMenu] = useState(menuItems[0].id);
  const [expandedMenus, setExpandedMenus] = useState({});

  // 切换菜单展开
  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  // 滚动到对应锚点
  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    const el = document.getElementById(menuId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 子菜单点击
  const handleSubMenuClick = (menuId, subMenuId) => {
    setActiveMenu(subMenuId);
    const el = document.getElementById(subMenuId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setExpandedMenus((prev) => ({ ...prev, [menuId]: true }));
  };

  // 监听滚动高亮
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeMenu;
      const sections = document.querySelectorAll('.view-content');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSection = section.id;
        }
      });
      setActiveMenu(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMenu]);

  return (
    <div className="wiki-grid">
      {/* 左侧菜单 */}
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <img src={menuLogo} className="menu-logo" alt="menu logo" />
            <div className="menu-title">Safety</div>
          </div>

          <div className="menu-scroll">
            {/* 顶级菜单 */}
            {menuItems.map((menu) => (
              <div
                key={menu.id}
                className={`menu-item ${activeMenu === menu.id ? 'active' : ''} ${expandedMenus[menu.id] ? 'expanded' : ''}`}
                onClick={() => {
                  toggleMenu(menu.id);
                  handleMenuClick(menu.id);
                }}
              >
                <img className="menu-icon" src={menu.icon}   />
                <span className="menu-text">{menu.title}</span>
              </div>
            ))}

            {/* 子菜单 */}
            {menuItems.map((menu) =>
              menu.subMenus && (
                <div key={menu.id} className={`submenu-wrapper ${expandedMenus[menu.id] ? 'show' : ''}`}>
                  <div className="submenu">
                    {menu.subMenus.map((subMenu) => (
                      <div
                        key={subMenu.id}
                        className={`submenu-item ${activeMenu === subMenu.id ? 'active' : ''}`}
                        onClick={() => handleSubMenuClick(menu.id,subMenu.id)}
                      >
                        <img className="menu-icon" src={subMenu.icon}   />
                        <span className="menu-text">{subMenu.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}

            {/* 下载 PDF */}
            <a className="download-btn" href={safetyPdf} target="_blank" rel="noreferrer">
              Download Safety PDF
            </a>
          </div>
        </div>
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