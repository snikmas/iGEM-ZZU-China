import React, { useState, useEffect } from 'react';
// import './index.css';
// 引入共通样式
import '../../styles/common.css';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';

// Project Description Images
const descriptionFigure2_1 = 'https://static.igem.wiki/teams/5822/newassets/description/descriptionfigure2-1.webp';
const descriptionFigure2_2 = 'https://static.igem.wiki/teams/5822/newassets/description/descriptionfigure2-2.webp';
const descriptionFigure3_1 = 'https://static.igem.wiki/teams/5822/newassets/description/descriptionfigure3-1.webp';
const descriptionFigure3_3 = 'https://static.igem.wiki/teams/5822/newassets/description/figure4.webp';
const descriptionFigure3_3a = 'https://static.igem.wiki/teams/5822/newassets/description/descriptionfigure3-3a.webp';
const descriptionFigure3_4 = 'https://static.igem.wiki/teams/5822/newassets/description/descriptionfigure3-4.webp';
// 组件定义
const MainContent = () => (
  <>
    {/* 1 */}
    <div id="overview" className="view-content">
      <div className="content-header">
        <div className="h1">Introduction</div>
      </div>
      <div className="content-body">
        <p>
          This <span>project</span> focuses on the <span>clinical needs</span> of <span>auxiliary diagnosis</span> of <span>breast cancer</span>, and develops a set of <span>exosome target protein precise detection platform</span> based on <span>synthetic biology</span>. Through the <span>full chain technology integration</span> of <span>"CD63 aptamer magnetic bead capture - substitution reaction signal transformation - HCR/RCA signal amplification - CRISPR/Cas14a fluorescence detection"</span>, the system realizes the <span className='text-strong'>high sensitivity detection</span> of <span>low abundance breast cancer exosome specific target proteins</span> in samples.
        </p>
      </div>
    </div>

    {/* 2 */}
    <div id="background" className="view-content">
      <div className="content-header">
        <div className="h1">Background</div>
      </div>

      {/* Current Situation of Breast Cancer Subsection */}
      <section id="breast-cancer-situation" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Current situation of breast cancer</div>
          </div>
          <div className="content-body">
            <p>
              <span>Breast cancer</span> is the <span>malignant tumor</span> with the <span>highest incidence rate</span> among <span>women</span> in the world. According to the data of the <span>World Health Organization</span>, there will be more than <span>2.9 million new cases</span> worldwide in <span>2022</span> [1]. Despite continuous advances in <span>treatment methods</span>, <span>late diagnosis</span> remains the main cause of <span>high mortality rates</span> - in areas with <span>scarce medical resources</span>, over <span>60% of patients</span> are diagnosed in the <span>late stage</span>, with little hope of cure.
            </p>
            
            <div className="figure-container">
              <div className="figure-item">
              <img src={descriptionFigure2_1} alt="Top 15 Causes of Cancer Death in Women Worldwide in 2022" className="figure-image" />
              <div className="h4">Figure 1. Top 15 Causes of Cancer Death in Women Worldwide in 2022</div>
              </div>
            </div>

            <p>
              There are <span>obvious limitations</span> in <span>traditional diagnostic methods</span>: the <span>diagnostic performance</span> of <span>breast ultrasound</span> is greatly affected by the <span>pathological classification</span> of <span>breast cancer</span>, and it also requires a <span>high professional quality</span> of the <span>examiners</span>. It is difficult to obtain <span>accurate contrast images</span> during <span>re examination</span>, and the <span>diagnostic characterization</span> of the <span>lesions</span> is often not as good as the <span>reproducibility</span> of <span>mammography</span> [2]. <span>Mammography</span> can not distinguish <span>small lesions</span> of <span>dense breast</span> and <span>breast cancer</span>, which is easy to <span>miss diagnosis</span>. In addition, it will also bring <span>radiation</span> and <span>over diagnosis hazards</span> to the <span>examiners</span>. The estimated range of <span>over diagnosis</span> is <span>0% to 40% − 50%</span> [3]. <span>MRI</span> has the disadvantages of <span>high examination cost</span>, <span>complex operation</span>, and <span>high false positives</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Tumors and Exosomes Subsection */}
      <section id="tumors-exosomes" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Tumors and Exosomes</div>
          </div>
          <div className="content-body">
            <p>
              <span>Tumor</span> and <span>extracellular vesicles</span> are <span>30-150 nm extracellular vesicles</span> secreted by <span>almost all cells</span> and have become <span>ideal liquid biopsy markers</span> [4]. These <span>vesicles</span> encapsulate <span>tumor specific proteins</span>, <span>nucleic acids</span>, and <span>lipids</span>, which can reflect the <span>physiological state</span> of the <span>source cells</span>. In <span>breast cancer</span>, the <span>exosomes</span> carry <span>ErbB2</span>, <span>CD274 (PD-L1)</span>, <span>EPCAM</span>, <span>MMP9</span> and other <span>key markers</span>, which are closely related to <span>tumor occurrence</span>, <span>development</span> and <span>immune escape</span> [5]. However, the <span>abundance</span> of <span>extracellular vesicles</span> in <span>clinical samples</span> is <span>extremely low</span> (usually only <span>10-10 particles/μL</span> in serum), and <span>matrix interference</span> is <span>complex</span>, posing a <span>huge challenge</span> for <span>high-sensitivity detection</span>.
            </p>

            <div className="figure-container">
              <div className="figure-item">
              <img src={descriptionFigure2_2} alt="Extracellular vesicles (EVs) as liquid biopsy tools and therapeutic vehicles in BC" className="figure-image" />
              <div className="h4">Figure 2. Extracellular vesicles (EVs) as liquid biopsy tools and therapeutic vehicles in BC[6]</div>
            </div></div>
          </div>
        </div>
      </section>

      {/* Inspiration Subsection */}
      <section id="inspiration" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Inspiration</div>
          </div>
          <div className="content-body">
            <p>
              The birth of the <span>project</span> originated from the <span>cross thinking</span> of <span>clinical pain points</span> and <span>technological possibilities</span>. On the one hand, the <span>global incidence rate</span> of <span>breast cancer</span> remains <span>high</span> (<span>2.3 million new female breast cancer cases</span> will be found in <span>2022</span>). <span>Early screening</span> is crucial to improve the <span>prognosis</span>, but <span>traditional screening methods</span> (such as <span>breast molybdenum target</span>) have shortcomings such as <span>radiation</span> and <span>limited sensitivity</span> to <span>dense breast</span>; Although <span>extracellular vesicle detection</span> in <span>liquid biopsy</span> has <span>non-invasive advantages</span>, it has long been difficult to <span>widely apply</span> at the <span>grassroots level</span> due to <span>low abundance</span> of <span>target proteins</span>, <span>difficulty in enrichment</span> and <span>signal amplification</span>. On the other hand, the progress of <span>synthetic biology</span> in the field of <span>molecular diagnostics</span> has brought <span>inspiration</span> - the <span>high specificity recognition ability</span> of <span className='text-strong'>CRISPR/Cas system</span> and the <span>signal enhancement potential</span> of <span className='text-strong'>nucleic acid cascade amplification</span> (such as <span>HCR</span>, <span>RCA</span>) provide <span>technological breakthroughs</span> for solving the problem of <span className='text-strong'>"low abundance target detection"</span>.
            </p>
            <p>
              In our <span className='text-strong'>cooperation and communication with clinical doctors</span>, we further clarified that <span>extracellular vesicle testing</span> cannot replace <span>pathological diagnosis</span>, but can assist in improving <span>early screening</span> and <span>monitoring efficiency</span>. By quantifying the level of <span>extracellular vesicle target proteins</span>, we can provide <span>reference</span> for whether further <span>pathological biopsy</span> is needed. It can also assist in evaluating the <span>trend of therapeutic efficacy</span> through the <span>dynamic changes</span> of <span>extracellular vesicle target proteins</span> before and after <span>treatment</span>. This prompted us to take the <span>"highly sensitive capture and detection of exosome target proteins"</span> as the <span>core goal</span>, combined with <span>synthetic biological tools</span>, and finally form the <span>technical route</span> of <span>"target capture signal cascade amplification CRISPR quantification"</span>, aiming to provide <span>more efficient molecular level auxiliary support</span> for the <span>diagnosis and treatment</span> of <span>breast cancer</span>.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 3 */}
    <div id="our-solution" className="view-content">
      <div className="content-header">
        <div className="h1">Our Solution</div>
      </div>

      {/* Magnetic Bead Method Subsection */}
      <section id="magnetic-bead-method" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Magnetic bead method for capturing extracellular vesicles</div>
          </div>
          <div className="content-body">
            <p>
              When detecting samples containing <span>extracellular vesicles</span>, it is often encountered that the <span>low content</span> of <span>extracellular vesicles</span> affects the <span>detection efficiency</span>. Therefore, we designed <span>CD63</span> (a <span>specific marker protein</span> on <span>extracellular vesicles</span>) <span>adapter modified magnetic beads</span> to <span>enrich</span> and <span>capture</span> <span>extracellular vesicles</span> in the sample. The <span>operation process</span> is shown in the following figure.
            </p>

            <div className="figure-container">
            <div className="figure-item">
              <img src={descriptionFigure3_1} alt="Schematic diagram of magnetic bead method for capturing extracellular vesicles" className="figure-image" />
              <div className="h4">Figure 3. Schematic diagram of magnetic bead method for capturing extracellular vesicles</div>
            </div></div>
          </div>
        </div>
      </section>

      {/* Substitution Reaction Subsection */}
      <section id="substitution-reaction" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Substitution reaction</div>
          </div>
          <div className="content-body">
            <p>
              The <span>substitution reaction</span> is the link between <span>"extracellular vesicle capture"</span> and <span>"signal amplification"</span>. Due to the <span>stronger affinity</span> between <span>target proteins</span> and <span>aptamers</span> on <span>exosomes</span> compared to <span>complementary chains</span> and <span>aptamers</span>, <span>target proteins</span> can compete to <span>replace complementary chains</span>; After the <span>reaction equilibrium</span> (room temperature incubation), the <span>magnetic beads</span> are removed by <span>magnetic separation</span>, and the <span>supernatant</span> contains the <span>released complementary chain</span> - this <span>complementary chain</span> serves as a <span>"signal trigger molecule"</span>, which can directly initiate the subsequent <span>HCR/RCA signal amplification process</span>, achieving <span>precise conversion</span> from <span className='text-strong'>"target presence → signal molecule release"</span>.
            </p>
          </div>
        </div>
      </section>

      {/* HCR/RCA Signal Amplification Subsection */}
      <section id="hcr-rca-amplification" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">HCR/RCA signal amplification</div>
          </div>
          <div className="content-body">
            <p>
              To address the issue of <span>weak low abundance signals</span>, we constructed a <span>"Hybrid Chain Reaction (HCR)/Rolling Loop Amplification (RCA)"</span> <span>signal amplification system</span>:
            </p>
            <p>
              <span className='text-strong'>HCR amplification</span>: The <span>complementary strand</span> released in the previous step is the <span>"trigger strand"</span>, which reacts with the pre designed <span>hairpin probes H1</span> and <span>H2</span> - the <span>trigger strand</span> breaks the <span>stem structure</span> of <span>H1</span>, and the <span>exposed H1 single strand</span> binds to <span>H2</span> and breaks its <span>stem</span> (with <span>complementary fragments</span> of <span>crRNA</span> on its <span>hairpin</span>), ultimately forming a <span>long DNA polymer</span> and <span>amplifying the fluorescence signal</span>;
            </p>

            <div className="figure-container"><div className="figure-item">
              <img src={descriptionFigure3_3} alt="HCR reaction principle diagram" className="figure-image" />
              <div className="h4">Figure 4. HCR reaction principle diagram</div>
              </div></div>

            <p>
              <span className='text-strong'>RCA amplification</span>: Design <span>circular probes</span> and <span>DNA polymerases</span> for <span>substitution reaction products</span>, initiate <span>rolling ring amplification reaction</span>, generate a <span>large number of DNA fragments</span> containing <span>repetitive sequences</span>, and further <span>enhance the signal</span>, which can effectively <span>capture low abundance target signals</span>.
            </p>
            <div className="figure-container"><div className="figure-item">
              <img src={descriptionFigure3_3a} alt="RCA reaction principle diagram" className="figure-image" />
              <div className="h4">Figure 5. RCA reaction principle diagram</div>
            </div></div>
          </div>
        </div>
      </section>

      {/* CRISPR/Cas Molecular Detection System Subsection */}
      <section id="crispr-cas-detection" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">CRISPR/Cas molecular detection system</div>
          </div>
          <div className="content-body">
            <p>
              We used the <span>Cas14a protein</span> expressed in <span>prokaryotic cells</span> to construct a <span>detection system</span>, based on the <span>core principle</span> of <span>Cas14a's "target activation trans cleavage"</span> characteristic: ① The <span>repeated sequence</span> in the <span>signal amplification product</span> serves as a <span>specific target</span> for <span>Cas14a crRNA complex</span>, which activates the <span>non-specific nuclease activity</span> of <span>Cas14a</span> after binding; ② <span>Activated Cas14a</span> efficiently cleaves the <span>fluorescence quenching probe</span> (<span>FAM-BHQ1 labeled</span>) in the system, releasing a <span>fluorescence signal</span>;
            </p>

            <div className="figure-container">
            <div className="figure-item">
              <img src={descriptionFigure3_4} alt="CRISPR/Cas molecular detection principle diagram" className="figure-image" />
              <div className="h4">Figure 6. CRISPR/Cas molecular detection principle diagram</div>
            </div></div>
          </div>
        </div>
      </section>
    </div>

    {/* 4 */}
    <div id="future-applications" className="view-content">
      <div className="content-header">
        <div className="h1">Future Applications</div>
      </div>
      <div className="content-body">
        <p>
          In the future, the <span>system</span> can assist in <span>multiple scenarios</span> of <span>breast cancer diagnosis and treatment</span>: it can not only integrate <span>physical examination</span>, but also judge whether further <span>pathological biopsy</span> is needed for the <span>initial screening</span> of <span>doubtful samples</span>; It can also <span>dynamically monitor</span> the <span>target protein levels</span> of <span>postoperative patients</span> to assist in evaluating <span>efficacy</span> and <span>recurrence risk</span>; Due to its <span className='text-strong'>low cost</span> and <span className='text-strong'>easy operation</span>, it is suitable for <span>primary healthcare</span> and helps to <span>preliminarily screen</span> <span>high-risk populations</span>.
        </p>
      </div>
    </div>

    {/* 5 */}
    <div id="project-innovation" className="view-content">
      <div className="content-header">
        <div className="h1">Project Innovation</div>
      </div>
      <div className="content-body">
        <p>
          This <span>project</span> focuses on <span>practicality</span> and <span>demand innovation</span>: technically, it solves the problem of <span>low abundance detection</span> of <span>extracellular vesicle target proteins</span> through the <span>entire chain</span> of <span>"magnetic bead capture signal amplification CRISPR detection"</span>; Positioned as an <span>auxiliary tool</span> for <span>pathological diagnosis</span>, it is closely related to <span>clinical practice</span>;  spaciously <span className='text-strong'>Practically control costs simplify processes</span>, and <span className='text-strong'>balance detection performance</span> with <span>grassroots promotion</span>.
        </p>
      </div>
    </div>

    {/* 6 */}
    <div id="reference" className="view-content">
      <div className="content-header">
        <div className="h1">Reference</div>
      </div>
      <div className="content-body">
        <p>
          [1] Sung H, Ferlay J, Laversanne M, Soerjomataram I, Jemal A, Bray F. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. CA Cancer J Clin. 2024;74(2):102–133. doi:10.3322/caac.21834.https://acsjournals.onlinelibrary.wiley.com/doi/full/10.3322/caac.21834
        </p>
        <p>
          [2] WANG WH. Clinical study of different imaging examinations for the measurement of breast cancer tumor size[D]. Hangzhou: Master's Thesis of Zhejiang University, 2016 (in Chinese).
        </p>
        <p>
          [3] HEIINAVAARA S, SARKEALA T, ANTTILA A. Overdiagnosis due to breast cancer screening: updated estimates of the Helsinki service study in Finland. British Journal of Cancer, 2014, 111(7): 1463-1468.
        </p>
        <p>
          [4] Yu, D., Li, Y., Wang, M. et al. Exosomes as a new frontier of cancer liquid biopsy. Mol Cancer 21, 56 (2022). https://doi.org/10.1186/s12943-022-01509-9
        </p>
        <p>
          [5]Song SF, Zhang XW, Chen S, Shu Y, Yu YL, Wang JH. CRISPR-based dual-aptamer proximity ligation coupled hybridization chain reaction for precise detection of tumor extracellular vesicles and cancer diagnosis. Talanta. 2024;280:126780. doi:10.1016/j.talanta.2024.126780
        </p>
        <p>
          [6] Galardi A, Fogazzi V, Tottone C, et al. "Small extracellular vesicles: messengers at the service of breast cancer agenda in the primary and distant microenvironments". J Exp Clin Cancer Res. 2025;44(1):216. Published 2025 Jul 21. doi:10.1186/s13046-025-03471-y
        </p>
      </div>
    </div>
  </>
);

function ProjectDescription() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState('overview');
  const [activeSubMenuId, setActiveSubMenuId] = useState(null);
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
      title: 'Introduction',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'background',
      title: 'Background',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'breast-cancer-situation', title: 'Current situation of breast cancer', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'tumors-exosomes', title: 'Tumors and Exosomes', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'inspiration', title: 'Inspiration', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'our-solution',
      title: 'Our Solution',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'magnetic-bead-method', title: 'Magnetic bead method for capturing extracellular vesicles', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'substitution-reaction', title: 'Substitution reaction', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'hcr-rca-amplification', title: 'HCR/RCA signal amplification', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'crispr-cas-detection', title: 'CRISPR/Cas molecular detection system', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'future-applications',
      title: 'Future Applications',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'project-innovation',
      title: 'Project Innovation',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'reference',
      title: 'Reference',
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
    setActiveMenuId(menuId);
  };

  // 二级菜单点击
  const handleSubMenuClick = (menuId, subMenuId) => {
    scrollToSection(subMenuId);
    setActiveSubMenuId(subMenuId);
    setActiveMenuId(menuId);
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
                      <img className='menu-icon' src={subMenu.icon} />
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

export default ProjectDescription;