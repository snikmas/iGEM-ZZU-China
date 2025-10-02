import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

import menuLogo from 'https://static.igem.wiki/teams/5822/newassets/menulogo.png';


import image1 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/24年10月.png';
import image2 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/24年11月.png';
import image3 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/24年12月.png';
import image4 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年1月.png';
import image5 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年2月.png';
import image6 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年3月.png';
import image7 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年4月.png';
import image8 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年5月.png';
import image9 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年6月.png';
import image10 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年7月.png';
import image11 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年8月.png';
import image12 from 'https://static.igem.wiki/teams/5822/newassets/images/notebook/25年9月.png';

// 组件定义 1
const MainContent = () => (
  <>
    <div id="2024" className="view-content">
      <div className="content-header">
        <div className="h1">2024</div>
      </div>
      <div className="content-body">
        {/* October 2024 */}
        <section id="october-2024" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
              <div className="h2">October</div>
          </div>
          <div className="content-body">
            <p>
                Our team posted <span>recruitment announcements</span> on various <span>social media platforms</span>, receiving <span>enthusiastic applications</span> from nearly a hundred students from the <span>School of Basic Medical Sciences</span>, the <span>First Clinical Medical School</span>, the <span>Fifth Clinical Medical School</span>, the <span>School of Life Sciences</span>, and other colleges. After <span>multiple rounds of interviews</span> and <span>in-depth discussions</span>, we mutually selected over ten members to form an <span>iGEM interest group</span>. Through <span>regular gatherings</span>, we studied the <span>competition rules</span> together, shared <span>research interests</span>, and eventually built a <span>cohesive student team</span>.
            </p>

            <div className="figure-container">
              <img src={image1} alt="2024年10月" className="figure-image" />
            </div>
            </div>
          </div>
        </section>

        {/* November 2024 */}
        <section id="november-2024" className="education-section">
          <div className="education-section-content">
            <div className="content-section-header">
              <div className="h2">November</div>
            </div>
            <div className="content-body">
              <p>
                Through <span>collective efforts</span>, we successfully invited several <span>advisors with a strong interest in iGEM</span> to complete the <span>team structure</span>. Under the guidance of our advisors, we conducted <span>systematic preliminary training</span> and delved into various <span>bioinformatics analysis methods</span>. Through <span>multiple group discussions</span> and considering <span>contemporary needs</span>, we decided to focus our research on <span>breast cancer</span>. We interviewed <span>experts in the field</span> to gain a deeper understanding of the <span>challenges and prospects</span> in this area.
              </p>
            <div className="figure-container">
              <img src={image2} alt="2024年11月" className="figure-image" />
            </div>
            </div>
          </div>
        </section>

        {/* December 2024 */}
        <section id="december-2024" className="education-section">
          <div className="education-section-content">
            <div className="content-section-header">
              <div className="h2">December</div>
            </div>
            <div className="content-body">
              <p>
                Based on <span>preliminary research</span>, the team unanimously agreed that <span>breast cancer diagnostics</span> aligned better with both <span>societal needs</span> and our <span>technical foundation</span>. Subsequently, we consulted <span>diagnostic experts</span>, received <span>positive feedback</span> on the project's <span>feasibility</span>, and learned about the potential application of <span>Cas enzymes in detection</span>. With this foundation, we finalized the <span>Diagnostics track</span> as our core focus. Through <span>extensive literature review</span>, integration of <span>bioinformatics methods</span>, and <span>in-depth discussions</span> with our advisors, we developed a <span>detailed project plan</span> and <span>experimental protocol</span>.
              </p>
              <div className="figure-container">
              <img src={image3} alt="2024年12月" className="figure-image" />
            </div>
            </div>
          </div>
        </section>
      </div>
      </div>




      {/* 2025 Year Section */}
      <div id="2025" className="view-content">
        <div className="content-header">
          <div className="h1">2025</div>
        </div>
        <div className="content-body">

          {/* January 2025 */}
          <section id="january-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">January</div>
              </div>
              <div className="content-body">
                <p>
                  Following the <span>project plan</span> formulated in December, our team was divided into sub-teams: <span>wet lab</span>, <span>dry lab</span>, <span>Human Practices</span>, and <span>Wiki</span>. Multiple <span>preliminary experiments</span> were conducted. During the <span>winter break</span>, we held <span>online meetings</span> to analyze <span>pre-experimental results</span>, <span>optimize methods</span>, and fully prepare for the <span>official project launch</span> after the New Year.
                </p>
                <div className="figure-container">
                  <img src={image4} alt="2025年1月" className="figure-image" />
                </div>
              </div>
            </div>
          </section>

          {/* February 2025 */}
          <section id="february-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">February</div>
              </div>
              <div className="content-body">
                <p>
                  At the beginning of the <span>New Year</span>, our team and advisors jointly held the <span>project kickoff meeting</span>. As <span>Zhengzhou University's first representatives in iGEM</span>, we received <span>strong support and encouragement</span> from the college. The kickoff meeting ignited the <span>team's enthusiasm</span>, and <span>experimental work</span> began immediately. Through <span>bioinformatics and mass spectrometry analysis</span>, combined with <span>extensive literature research</span>, we identified <span>four key exosomal biomarkers for breast cancer</span> and successfully constructed the <span>CD63-aptamer magnetic bead module</span> for <span>exosome capture</span>.
                </p>
                <div className="figure-container">
                  <img src={image5} alt="2025年2月" className="figure-image" />
                </div>
              </div>
            </div>
          </section>

          {/* March 2025 */}
          <section id="march-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">March</div>
              </div>
              <div className="content-body">
                <p>
                  The previously constructed module received <span>positive feedback</span> from our advisors, and the project <span>progressed steadily</span>. The team established a <span>detection method for the four biomarkers</span> based on <span>CRISPR/Cas12a</span>. Coinciding with <span>International Women's Day on March 8th</span>, and aligned with our research focus, we collaborated with the <span>Third Affiliated Hospital of Zhengzhou University</span> to carry out a <span>"Caring for Women's Health" public welfare campaign</span> and also organized a <span>breast cancer awareness event</span> on campus. On <span>March 26th</span>, a team meeting was held to systematically summarize the <span>advantages and limitations</span> of existing detection methods and to propose a <span>"commercialization" direction</span> for the project. On <span>March 29th</span>, we visited <span>Autobio</span> and engaged in a thematic exchange with expert <span>Zhang Zihe</span> on the <span>CE registration process for medical products</span>, gaining valuable experience for <span>project commercialization</span>.
                </p>
                <div className="figure-container">
                  <img src={image6} alt="2025年3月" className="figure-image" />
                </div>
              </div>
            </div>
          </section>

          {/* April 2025 */}
          <section id="april-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">April</div>
              </div>
              <div className="content-body">
                <p>
                  From <span>April 23rd to 27th</span>, five undergraduate team representatives attended the <span>14th International Gene Conference in Nara, Japan</span>. At the conference, <span>Professor Yu Baofa</span>, inventor of an <span>immune slow-release therapy</span>, provided valuable suggestions, including <span>optimizing screening conditions</span>, and we also received guidance from <span>Nobel Laureate Thomas Südhof</span>. After returning to China, the team promptly shared the <span>conference insights</span>. Building on this, we innovatively introduced a <span>Hybridization Chain Reaction (HCR) system</span>, significantly improving <span>detection sensitivity</span>. Our project performance also attracted <span>sponsorship from Taimeng Company</span>.
                </p>
                <div className="figure-container">
                  <img src={image7} alt="2025年4月" className="figure-image" />
                </div>
                  </div>
            </div>
          </section>

          {/* May 2025 */}
          <section id="may-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">May</div>
              </div>
              <div className="content-body">
                <p>
                  Inspired by the <span>International Gene Conference</span>, the team held an on-campus experience-sharing session titled <span>"Nobel Inspiration · iGEM Sharing"</span>. Approaching <span>Children's Day</span>, we visited a <span>primary school</span> to conduct <span>science outreach activities</span>, featuring a <span>"Dialogue with Nobel Laureates"</span> session to spark students' interest in <span>science</span>. Meanwhile, the <span>HCR system</span> introduced in April achieved a <span>major breakthrough</span>. It was successfully integrated to establish a novel <span>detection method for the four biomarkers</span> based on the <span>APT-HCR-CRISPR/Cas12a system</span>.
                </p>
                <div className="figure-container">
                  <img src={image8} alt="2025年5月" className="figure-image" />
                </div>
              </div>
            </div>
          </section>

          {/* June 2025 */}
          <section id="june-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">June</div>
              </div>
              <div className="content-body">
                <p>
                  The project began to <span>take shape</span>. On <span>June 11th</span>, we participated in an <span>online iGEM experience exchange</span> involving <span>nine universities from four provinces</span>. Subsequently, we attended an <span>oncology conference in Tai'an, Shandong</span>, where we discussed our project with <span>Nobel Laureate Craig C. Mello</span> and received his <span>valuable advice</span>. During experiments, we found that the <span>original method lacked sufficient specificity</span>. After team discussions, we decided to <span>replace Cas12a with Cas14a</span>. Pre-experimental results showed a <span>significant improvement in specificity</span>, leading to the formulation of a plan for <span>vector construction and Cas14a expression</span>.
                </p>
                <div className="figure-container">
                  <img src={image9} alt="2025年6月" className="figure-image" />
                </div>
          </div>
        </div>
      </section>

          {/* July 2025 */}
          <section id="july-2025" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
                <div className="h2">July</div>
          </div>
          <div className="content-body">
            <p>
                  Following the plan developed in June, we successfully constructed the <span>vector and expressed the Cas14a enzyme</span>. After <span>thorough discussion</span>, the team confirmed the continued <span>high feasibility</span> of the earlier technical approach, leading to the establishment of a <span>four-biomarker detection method</span> based on <span>APT-CRISPR/Cas14a</span>. Concurrently, the team participated in the <span>11th National College Student Medical Innovation Competition</span>, winning the <span>provincial first prize</span> and advancing to the <span>national finals</span>. We also actively engaged in the <span>"Zhengzhou University Sino-Canadian High-Level Forum on Medical Education"</span>, exchanging ideas with experts from <span>China and Canada</span>.
                </p>
                <div className="figure-container">
                  <img src={image10} alt="2025年7月" className="figure-image" />
                </div>
              </div>
            </div>
          </section>

          {/* August 2025 */}
          <section id="august-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">August</div>
              </div>
              <div className="content-body">
                <p>
                  Our advisors organized a <span>second team meeting</span>. To further enhance <span>detection sensitivity</span>, the team decided to <span>replace the HCR system with a Rolling Circle Amplification (RCA) system</span> and adapt it for use with the <span>Cas14a enzyme</span>. From <span>August 6th to 8th</span>, we participated in the <span>10th Chinese Conference on Synthetic Biology & the International Young Scholars Forum</span>, gaining insights from <span>cutting-edge technologies</span> that helped us secure the <span>gold medal in the finals of the Medical Innovation Competition</span>. The team also won a <span>gold medal in the College Student Life Sciences Competition</span>. On <span>August 10th</span>, we successfully held a <span>science outreach event for high school students</span>.
                </p>
                <div className="figure-container">
                  <img src={image11} alt="2025年8月" className="figure-image" />
                </div>
              </div>
            </div>
          </section>

          {/* September 2025 */}
          <section id="september-2025" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">September</div>
              </div>
              <div className="content-body">
                <p>
                  As the project <span>neared completion</span>, to boost <span>team morale</span>, we hosted a unique <span>"Buffet Day" event</span> in the conference room on the second floor of <span>Building B, School of Basic Medical Sciences</span>, inviting <span>middle school students</span> to participate. The event blended <span>science with interaction</span>, creating a <span>relaxed and enjoyable research experience</span>. After the event, the team devoted <span>full efforts to the final experiments</span>, ultimately establishing a <span>robust four-biomarker detection method</span> based on the <span>APT-RCA-CRISPR/Cas14a system</span>. We also completed the <span>Wiki website construction</span> and finalized <span>project wrap-up tasks</span>.
                </p>
                <div className="figure-container">
                  <img src={image12} alt="2025年9月" className="figure-image" />
                </div>
          </div>
        </div>
      </section>
    </div>



      </div>



  </>
);

function Notebook() {
  const [activeSection, setActiveSection] = useState('overview');
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
      id: '2024',
      title: '2024',
      icon: '📅',
      subMenus: [
        { id: 'october-2024', title: 'October' },
        { id: 'november-2024', title: 'November' },
        { id: 'december-2024', title: 'December' }
      ]
    },
    {
      id: '2025',
      title: '2025',
      icon: '📅',
      subMenus: [
        { id: 'january-2025', title: 'January' },
        { id: 'february-2025', title: 'February' },
        { id: 'march-2025', title: 'March' },
        { id: 'april-2025', title: 'April' },
        { id: 'may-2025', title: 'May' },
        { id: 'june-2025', title: 'June' },
        { id: 'july-2025', title: 'July' },
        { id: 'august-2025', title: 'August' },
        { id: 'september-2025', title: 'September' }
      ]
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


export default Notebook;