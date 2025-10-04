import React, { useState } from 'react';
import './index.css';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';
const parts = [
  {
    number: 'BBa_25ZQHX62',
    name: 'EpCAM aptamer complementary strand',
    type: 'DNA (Deprecated)',
    length: '45bp',
    description:
      'EpCAM aptamer complementary strand function as regulatory controls that bind to EpCAM aptamers through base pairing, blocking their interaction with target EpCAM proteins. This mechanism enables controlled aptamer release, reduces background signals in biosensing applications, and allows for programmable on-off switching in detection systems. The complementary strands can be displaced by target cells or specific conditions, restoring aptamer functionality for cell targeting and diagnostic purposes.',
    url: 'https://registry.igem.org/parts/bba-25zqhx62',
  },
  {
    number: 'BBa_2565U1T9',
    name: 'pET-6xHis/Cas14a',
    type: 'Plasmid',
    length: '7386bp',
    description:
      'The plasmid-encoded Cas14a enzyme was produced in E. coli Under IPTG induction, and purified Cas14a was obtained by using NTA-Ni agarose beads',
    url: 'https://registry.igem.org/parts/bba-2565u1t9',
  },
  {
    number: 'BBa_25KRE2VE',
    name: 'TH-1 chain in HCR reaction',
    type: 'Oligo [SO:0000696]',
    length: '49bp',
    description:
      "When the trigger chain is added to the system, the hair clip of TH-1 will be opened and straightened, then the TH-2 chain will be opened and straightened, and finally the TH-1 chain will be opened and straightened. This process alternates, and the complementary sequence of crRNA on the TH-2 stem loop can activate the CRISPR system, completing the mission of signal amplification and molecular detection",
    url: 'https://registry.igem.org/parts/bba-25kre2ve',
  },
  {
    number: 'BBa_25SUBAEZ',
    name: 'TH-2 chain in HCR reaction',
    type: 'Oligo [SO:0000696]',
    length: '49bp',
    description:
      'When the trigger chain is added to the system, the hair clip of TH-1 will be opened and straightened, then the TH-2 chain will be opened and straightened, and finally the TH-1 chain will be opened and straightened. This process alternates, and the complementary sequence of crRNA on the TH-2 stem loop can activate the CRISPR system, completing the mission of signal amplification and molecular detection.',
    url: 'https://registry.igem.org/parts/bba-25subaez',
  },
  {
    number: 'BBa_25O7V5TM',
    name: 'Trigger chain in HCR reaction',
    type: 'Oligo [SO:0000696]',
    length: '24bp',
    description:
      'When added to the HCR reaction system, it can be straightened by complementary base pairing with TH-1, and then straightened by complementary base pairing with TH-2. The ultra long chain formed after the above process can effectively react with CRISPR.',
    url: 'https://registry.igem.org/parts/bba-25o7v5tm',
  },
  {
    number: 'BBa_251OMBAA',
    name: "Trigger‘ chain in HCR’ reaction",
    type: 'Oligo [SO:0000696]',
    length: '26bp',
    description:
      "Trigger 'can cascade with TH-1', TH-2 'to open the hairpin structure of TH-1' and TH-2 '. After the TH-2 'stem loop is opened, its complementary segment to crRNA is fully exposed, thereby efficiently activating the CRISPR/Cas molecular detection system and achieving molecular detection function.",
    url: 'https://registry.igem.org/parts/bba-251ombaa',
  },
  {
    number: 'BBa_25S495YW',
    name: "TH-1‘ chain in HCR’ reaction",
    type: 'Oligo [SO:0000696]',
    length: '48bp',
    description:
      "TH-1' has a stable stem-loop hairpin structure, and its loop region can specifically bind to Trigger'. When Trigger' binds to it, the hairpin structure of TH-1' is opened, exposing a sequence fragment complementary to TH-2'. This further interacts with TH-2' through base pairing, initiating a cascade reaction and providing a key trigger signal for the subsequent structural unlocking of TH-2'.",
    url: 'https://registry.igem.org/parts/bba-25s495yw',
  },
  {
    number: 'BBa_251YUR18',
    name: "TH-2‘ chain in HCR’ reaction",
    type: 'Oligo [SO:0000696]',
    length: '48bp',
    description:
      "TH-2' has a stem-loop hairpin structure, and part of its sequence can bind to the complementary fragment exposed after TH-1' is opened. Under the action of TH-1', the hairpin structure of TH-2' is unfolded, and the crRNA-complementary sequence previously hidden in the stem region is fully exposed. This sequence can specifically pair with crRNA in the CRISPR/Cas molecular detection system, thereby activating the molecular detection system and achieving efficient detection of target molecules.",
    url: 'https://registry.igem.org/parts/bba-251yur18',
  },
  {
    number: 'BBa_25LW4TKU',
    name: 'PDL1 aptamer complementary strand 1',
    type: 'Oligo [SO:0000696]',
    length: '50bp',
    description:
      'The complementary strand of this aptamer can bind to the corresponding PDL1 aptamer and be specifically replaced by the target protein PDL1. Under the enrichment effect of magnetic beads, the reaction signal is amplified. After being replaced, it can be recognized by crRNA, activating the trans - cleavage activity of the Cas14a enzyme and triggering the CRISPR reaction, thereby achieving highly sensitive and specific detection of the biomarker.',
    url: 'https://registry.igem.org/parts/bba-25lw4tku',
  },
];



const PartsTable = () => {
  return (
    <div id="parts-list" className="parts-table-container">
      <div className="content-header">
        <div className="h1">Parts List</div>
      </div>
      <div className="table-scroll">
        <table className="parts-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Type</th>
              <th>Length</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((p) => (
              <tr key={p.number}>
                <td>
                  <a href={p.url} target="_blank" rel="noreferrer">
                    {p.number}
                  </a>
                </td>
                <td>{p.name}</td>
                <td>{p.type}</td>
                <td>{p.length}</td>
                <td>{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Part() {
  const [activeMenuId, setActiveMenuId] = useState('parts-list');
  const [activeSubMenuId, setActiveSubMenuId] = useState(null);
    // 菜单数据
    const menuData = [
      {
        id: 'parts-list',
        title: 'Parts List',
        icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
      },
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
    <div className="view loaded">

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



      <div className="view-main">
        <div className="main-content">
          <div className="main-content-area">
            <PartsTable />
          </div>
        </div>
      </div>
    </div>
  );
}



export default Part;