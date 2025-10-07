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

const table1 = [
  {
    number: 'BBa_2565U1T9',
    name: 'pET-6xHis/Cas14a',
    type: 'Plasmid',
    length: '7386bp',
    description:
      'The plasmid-encoded Cas14a enzyme was produced in E. coli Under IPTG induction, and purified Cas14a was obtained by using NTA-Ni agarose beads',
    url: 'https://registry.igem.org/parts/bba-2565u1t9',
  },
]
const table2 = [
  {
    number: 'BBa_25SLS2LC',
    name: 'Complementary Strand 1 of PD-L1 Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '50bp',
    description:
      'The complementary strand of this aptamer can bind to the corresponding PD-L1 aptamer and be specifically replaced by the target protein PD-L1. Under the enrichment effect of magnetic beads, the reaction signal is amplified. After being replaced, it can be recognized by crRNA, activating the trans - cleavage activity of the Cas14a enzyme and triggering the CRISPR reaction, thereby achieving highly sensitive and specific detection of the biomarker.',
    url: 'https://registry.igem.org/parts/bba-25sls2lc',
  },
  {
    number: 'BBa_25LW4TKU',
    name: 'Complementary Strand 2 of PD-L1 Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '47',
    description:
      'The complementary strand of this aptamer can bind to the corresponding PD-L1 aptamer and be specifically replaced by the target protein PD-L1. Under the enrichment effect of magnetic beads, the reaction signal is amplified. After being replaced, it can be recognized by crRNA, activating the trans - cleavage activity of the Cas14a enzyme and triggering the CRISPR reaction, thereby achieving highly sensitive and specific detection of the biomarker.',
    url: 'https://registry.igem.org/parts/bba-25sls2lc',
  },
  {
    number: 'BBa_25K7QOR7',
    name: 'Complementary Strand 1 of MMP-9 Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '45',
    description:
      'This DNA strand is the complementary sequence to the MMP-9 aptamer. It maintains a hybridized state with the aptamer until MMP-9 binding occurs. Upon target recognition, the aptamer undergoes structural rearrangement that displaces this complementary strand. The released strand hybridizes with crRNA, activating the CRISPR/Cas12a nuclease, which then cleaves a fluorescent reporter probe, generating a measurable fluorescence signal.',
    url: 'https://registry.igem.org/parts/bba-25k7qor7',
  },
  {
    number: 'BBa_25BXVJM5',
    name: 'Complementary Strand 2 of MMP-9 Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '45',
    description:
      'This DNA strand serves as an alternative complementary sequence for the MMP-9 aptamer. It is displaced upon aptamer-target binding and subsequently hybridizes with crRNA to activate the CRISPR/Cas12a system. The activated Cas12a enzyme cleaves a fluorescent reporter probe, producing a fluorescence readout for target detection.',
    url: 'https://registry.igem.org/parts/bba-25bxvjm5',
  },
  {
    number: 'BBa_25F6X5I9',
    name: 'Complementary Strand 1 of HER2 Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '43',
    description:
      'This DNA strand is designed as the complementary sequence to the HER2 aptamer. It forms a stable duplex with the aptamer under initial conditions. Upon binding of the HER2 protein, the aptamer undergoes a conformational change, resulting in the displacement of this complementary strand. The released strand contains a universal region complementary to the crRNA, which hybridizes with the crRNA recognition sequence and activates the CRISPR/Cas12a system. Once activated, Cas12a cleaves fluorescent reporter probes, generating a detectable signal for molecular diagnostics.',
    url: 'https://registry.igem.org/parts/bba-25f6x5i9',
  },
  {
    number: 'BBa_25H6PVML',
    name: 'Complementary Strand 2 of HER2 Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '42',
    description:
      'This DNA strand serves as an alternative complementary sequence to the HER2 aptamer, enabling flexible duplex formation and efficient strand displacement. Upon HER2 binding, the aptamer structural rearrangement releases this complementary strand, which subsequently hybridizes with crRNA to activate the CRISPR/Cas12a system. The activated Cas12a cleaves a fluorescent reporter probe, providing a measurable fluorescence output for HER2 detection.',
    url: 'https://registry.igem.org/parts/bba-25h6pvml',
  },
  {
    number:'BBa_25ZTSIDP',
    name: 'Complementary Strand 1 of EpCAM Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '45',
    description:
      'This DNA strand is the complementary sequence to the EpCAM aptamer. In the absence of the target, it hybridizes with the aptamer to form a stable duplex. Upon EpCAM binding, the aptamer undergoes conformational rearrangement, leading to displacement of the complementary strand. The released strand hybridizes with crRNA and activates the CRISPR/Cas12a system. Activated Cas12a cleaves a fluorescent reporter, producing a detectable signal that indicates the presence of EpCAM.',
    url: 'https://registry.igem.org/parts/bba-25ztsidp',
  },
  {
    number: 'BBa_25RUKTIR',
    name: 'Complementary Strand 2 of EpCAM Aptamer',
    type: 'Oligo [SO:0000696]',
    length: '47',
    description:
      'This DNA strand acts as an auxiliary complementary sequence to the EpCAM aptamer, designed to enhance detection performance and signal strength. Upon EpCAM recognition, the aptamer releases this complementary strand, which hybridizes with the crRNA region to activate the CRISPR/Cas12a nuclease. The activated enzyme cleaves fluorescent reporter probes, leading to measurable fluorescence output for target detection.',
    url: 'https://registry.igem.org/parts/bba-25ruktir',
  }
]

const table3 = [
  {
    number: 'BBa_25KRE2VE',
    name: 'TH-1 chain in HCR reaction',
    type: 'Oligo [SO:0000696]',
    length: '49bp',
    description:
      'When the trigger chain is added to the system, the hair clip of TH-1 will be opened and straightened, then the TH-2 chain will be opened and straightened, and finally the TH-1 chain will be opened and straightened. This process alternates, and the complementary sequence of crRNA on the TH-2 stem loop can activate the CRISPR system, completing the mission of signal amplification and molecular detection.',
    url: 'https://registry.igem.org/parts/bba-25kre2ve',
  },
  {
    number:'BBa_25SUBAEZ',
    name:'TH-2 chain in HCR reaction',
    type: 'Oligo [SO:0000696]',
    length: '49bp',
    description:
      'When the trigger chain is added to the system, the hair clip of TH-1 will be opened and straightened, then the TH-2 chain will be opened and straightened, and finally the TH-1 chain will be opened and straightened. This process alternates, and the complementary sequence of crRNA on the TH-2 stem loop can activate the CRISPR system, completing the mission of signal amplification and molecular detection.',
    url: 'https://registry.igem.org/parts/bba-25subaez',
  },
  {
    number:'BBa_25O7V5TM',
    name:'Trigger chain in HCR reaction',
    type: 'Oligo [SO:0000696]',
    length: '24bp',
    description:
      'When added to the HCR reaction system, it can be straightened by complementary base pairing with TH-1, and then straightened by complementary base pairing with TH-2. The ultra long chain formed after the above process can effectively react with CRISPR.',
    url: 'https://registry.igem.org/parts/bba-25o7v5tm',
  },
  {
    number: 'BBa_251OMBAA',
    name:'Trigger‘ chain in HCR’ reaction',
    type:'Oligo [SO:0000696]',
    length:'26bp',
    description:
      "Trigger 'can cascade with TH-1', TH-2 'to open the hairpin structure of TH-1' and TH-2 '. After the TH-2 'stem loop is opened, its complementary segment to crRNA is fully exposed, thereby efficiently activating the CRISPR/Cas molecular detection system and achieving molecular detection function.",
      url:'https://registry.igem.org/parts/bba-251ombaa'
  },
  {
    number:'BBa_25S495YW',
    name:'TH-1‘ chain in HCR’ reaction',
    type:'Oligo [SO:0000696]',
    length:'48bp',
    description:
      "TH-1' has a stable stem-loop hairpin structure, and its loop region can specifically bind to Trigger'. When Trigger' binds to it, the hairpin structure of TH-1' is opened, exposing a sequence fragment complementary to TH-2'. This further interacts with TH-2' through base pairing, initiating a cascade reaction and providing a key trigger signal for the subsequent structural unlocking of TH-2'.",
    url:'https://registry.igem.org/parts/bba-25s495yw',
  },
  {
    number:'BBa_251YUR18',
    name:'TH-2‘ chain in HCR’ reaction',
    type:'Oligo [SO:0000696]',
    length:'48bp',
    description:
      "TH-2' has a stem-loop hairpin structure, and part of its sequence can bind to the complementary fragment exposed after TH-1' is opened. Under the action of TH-1', the hairpin structure of TH-2' is unfolded, and the crRNA-complementary sequence previously hidden in the stem region is fully exposed. This sequence can specifically pair with crRNA in the CRISPR/Cas molecular detection system, thereby activating the molecular detection system and achieving efficient detection of target molecules.",
    url:'https://registry.igem.org/parts/bba-251yur18',
  }
]

const table4 = [
  {
    number:'BBa_25BFVL4J',
    name:'RCA Padlock Probe (Locking Strand)',
    type:'Oligo [SO:0000696]',
    length:'25bp',
    description:
      'This padlock probe is the linear precursor for circular template formation in the RCA module. It carries two terminal arms complementary to adjacent regions of the target, enabling highly specific dual-end hybridization. Upon perfect alignment, ligase seals the ends to generate a covalently closed circle. By converting target recognition into circle formation, the padlock ensures molecular specificity and low background, and it gates downstream amplification only when the target is present. The resulting circle is designed to drive RCA and expose repeated sequence motifs required for CRISPR activation in the next stage.',
    url:'https://registry.igem.org/parts/bba-25bfvl4j',
  },
  {
    number:'BBa_25BFVL4K',
    name:'RCA Circular Template (Cyclized Strand with tri-crRNA motifs)',
    type:'Oligo [SO:0000696]',
    length:'90bp',
    description:
      'The circular template is produced from the padlock probe after ligation and contains three tandem crRNA recognition segments engineered within the circle. During phi29-mediated Rolling Circle Amplification, long single-stranded concatemers are generated that include high-copy repeats complementary to the crRNA. These repeats efficiently hybridize with crRNA and robustly activate the CRISPR/Cas nuclease , which then performs collateral cleavage of fluorescent reporters to produce a strong signal. This architecture couples RCA amplification with CRISPR activation in a single workflow, delivering high sensitivity, high signal-to-noise ratio, and stringent target specificity.',
    url:'https://registry.igem.org/parts/bba-25zx5n7t',
  }
]


function table(values) {
  return (
    <div className="table-scroll" style={{ margin: '20px 0' }}>
      <table className="parts-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>网址</th>
          </tr>
        </thead>
        <tbody>
          {values.map((p) => (
            <tr key={p.number}>
              <td>
                {p.number}
              </td>
              <td>{p.name}</td>
              <td>{p.type}</td>
              <td>{p.length}</td>
              <td>{p.description}</td>
              <td>
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}


const PartsTable = () => {
  return (
    <div>
      <div id="parts-list" className="parts-table-container">
        <div className="content-header">
          <div className="h1">Parts Overview</div>
        </div>
        <p>&nbsp;&nbsp;To realize our CRISPR-based molecular detection platform, we designed and constructed a series of functional genetic parts. These parts span plasmid modules, aptamer complementary strands, HCR amplification modules, and RCA amplification modules, each serving a unique role in recognition, amplification, or signal readout. Together, they form a highly sensitive and specific detection system.</p>
        {/* table 1 */}
        <div className="">
          <h2>Plasmid Module</h2>
          <p>&nbsp;&nbsp;To ensure efficient expression and purification of Cas proteins, we constructed plasmids carrying CRISPR/Cas components. Upon IPTG induction, Cas proteins were expressed in E. coli and purified via Ni–NTA agarose chromatography, providing the enzymatic foundation for probe cleavage and fluorescent signal generation.</p>
          {table(table1)}
        </div>
        {/* table2 */}
        <div className="">
          <h2>Aptamer Complementary Strands</h2>
          <p>&nbsp;&nbsp;The aptamer complementary strands (CS) are the core recognition and activation components. Each strand is composed of two segments: one complementary to the aptamer sequence and another complementary to the crRNA sequence.</p>
          <p>When the target protein binds to the aptamer, the complementary strand is displaced and released, hybridizes with crRNA, and activates the CRISPR/Cas system to generate a fluorescent signal.</p>
          {table(table2)}
        </div>
        {/* table3 */}
        <div className="">
          <h2>HCR Module</h2>
          <p>&nbsp;&nbsp;The Hybridization Chain Reaction (HCR) module functions as a signal amplification system. Initiated by a trigger strand, two hairpin probes (TH-1 and TH-2) open sequentially through toehold-mediated strand displacement, forming long nicked double-stranded DNA polymers. These polymers expose multiple crRNA complementary sites, activating the CRISPR system for amplified signal output.</p>
          {table(table3)}
        </div>

        {/* table4 */}
        <div className="">
          <h2>RCA Module</h2>
          <p>&nbsp;&nbsp;The Rolling Circle Amplification (RCA) module further amplifies signals through continuous primer extension, generating long tandem repeats of DNA sequences that contain crRNA complementary regions. These repeated motifs robustly activate CRISPR/Cas systems, significantly enhancing.</p>
          {table(table4)}
        </div>
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
                <img className='menu-icon' src={menu.icon} />
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