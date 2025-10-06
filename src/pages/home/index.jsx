import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from '../../components/scrolltotop';
import PageWrapper from '../../components/pagewrapper';

import Header from '../../components/header';
import Exception403 from '../../components/exception';

// 真实页面组件
import HomeLanding from '../../views/homelanding';
import TeamMembers from '../../views/teammembers';
import TeamAttributions from '../../views/teamattributions';
import ProjectDescription from '../../views/projectdescription';
import Contribution from '../../views/contribution';
import Part from '../../views/part';
import Experiments from '../../views/experiments';
import WetLabSafety from '../../views/wetlabsafety';
import Results from '../../views/results';
import Model from '../../views/model';
import Engineering from '../../views/engineering';
import Development from '../../views/development';
import IHP from '../../views/ihp';
import Education from '../../views/education';
import Collaborations from '../../views/collaborations';
import Entrepreneurship from '../../views/entrepreneurship';
import Notebook from '../../views/notebook';
import Software from '../../views/software';

const Team = () => <div style={{ color: '#000', fontSize: 20 }}>Team</div>;
const Project = () => <div style={{ color: '#000', fontSize: 20 }}>Project</div>;
const WetLab = () => <div style={{ color: '#000', fontSize: 20 }}>Wet Lab</div>;
const DryLab = () => <div style={{ color: '#000', fontSize: 20 }}>Dry Lab</div>;
const HumanPractice = () => <div style={{ color: '#000', fontSize: 20 }}>Human Practice</div>;





function Home() {


  return (
    <div className="home">

      <Header />

      <div className="home-body">
        <Routes>
          {/* 对应 header 顶部一级菜单 - HomeLanding 不需要包装 */}
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeLanding />} />
          <Route path="/team" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Team /></PageWrapper>} />
          <Route path="/project" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Project /></PageWrapper>} />
          <Route path="/wet-lab" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><WetLab /></PageWrapper>} />
          <Route path="/dry-lab" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><DryLab /></PageWrapper>} />
          <Route path="/education" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/8ce28fd2ae75722a79f657e07dcb64d1.webp"><Education /></PageWrapper>} />
          <Route path="/human-practice" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><HumanPractice /></PageWrapper>} />

          {/* 对应 mega-panel 子菜单 - 都需要包装 */}
          <Route path="/team/members" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/d501e8fe6abaa8f7ef0667fbd0b97d55.webp"><TeamMembers /></PageWrapper>} />
          <Route path="/team/attributions" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><TeamAttributions /></PageWrapper>} />

          <Route path="/project/description" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/description.webp"><ProjectDescription /></PageWrapper>} />
          <Route path="/project/engineering" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/engineering.webp"><Engineering /></PageWrapper>} />
          <Route path="/project/contribution" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/contribution.webp"><Contribution /></PageWrapper>} />
          <Route path="/project/development" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Development /></PageWrapper>} />

          <Route path="/wet-lab/experiments" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Experiments /></PageWrapper>} />
          <Route path="/wet-lab/notebook" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/notebook2.webp"><Notebook /></PageWrapper>} />
          <Route path="/wet-lab/parts" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Part /></PageWrapper>} />
          <Route path="/wet-lab/safety" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/26d3745443447d8ca4ce302087d76b93.webp"><WetLabSafety /></PageWrapper>} />
          <Route path="/wet-lab/results" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Results /></PageWrapper>} />

          <Route path="/dry-lab/model" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/model.webp"><Model /></PageWrapper>} />
          <Route path="/dry-lab/software" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/softwarett.webp"><Software /></PageWrapper>} />

          <Route path="/human-practice/integrated-human-practices" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/ihp.webp"><IHP /></PageWrapper>} />
          <Route path="/human-practice/entrepreneurship" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Entrepreneurship /></PageWrapper>} />
          <Route path="/human-practice/collaborations" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif"><Collaborations /></PageWrapper>} />

          {/* 兜底 */}
          <Route path="*" element={<Exception403 />} />
        </Routes>
      </div>


      {/* 右下角滚动进度指示器 */}
      <ScrollToTop />


    </div>
  );
}

export default Home;