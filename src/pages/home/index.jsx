import React from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from '../../components/scrolltotop';
import PageWrapper from '../../components/pagewrapper';

import Header from '../../components/header';
import Exception403 from '../../components/exception';
import Bottom from '../../components/bottom';

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
          <Route path="/" element={<><HomeLanding /></>} />
          <Route path="/home" element={<><HomeLanding /></>} />
          <Route path="/team" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/merber.webp"><Team /><Bottom /></PageWrapper>} />
          <Route path="/project" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/merber.webp"><Project /><Bottom /></PageWrapper>} />
          <Route path="/wet-lab" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/merber.webp"><WetLab /><Bottom /></PageWrapper>} />
          <Route path="/dry-lab" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/merber.webp"><DryLab /><Bottom /></PageWrapper>} />
          <Route path="/education" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/deucation.webp"><Education /><Bottom /></PageWrapper>} />
          <Route path="/human-practice" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/merber.webp"><HumanPractice /><Bottom /></PageWrapper>} />
          {/* 重定向到对应的页面 */}
          <Route path="/attributions" element={<Navigate to="/team/attributions" replace />} />
          <Route path="/contribution" element={<Navigate to="/project/contribution" replace />} />
          {/* 对应 mega-panel 子菜单 - 都需要包装 */}
          <Route path="/team/members" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/merber.webp"><TeamMembers /><Bottom /></PageWrapper>} />
          <Route path="/team/attributions" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/team.webp"><TeamAttributions /><Bottom /></PageWrapper>} />

          <Route path="/project/description" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/description1.webp"><ProjectDescription /><Bottom /></PageWrapper>} />
          <Route path="/project/engineering" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/engineering-1.webp"><Engineering /><Bottom /></PageWrapper>} />
          <Route path="/project/contribution" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/contribution-1.webp"><Contribution /><Bottom /></PageWrapper>} />
          <Route path="/project/development" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/development-1.webp"><Development /><Bottom /></PageWrapper>} />

          <Route path="/wet-lab/experiments" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/experjents.webp"><Experiments /><Bottom /></PageWrapper>} />
          <Route path="/wet-lab/notebook" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/notebook.webp"><Notebook /><Bottom /></PageWrapper>} />
          <Route path="/wet-lab/parts" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/parts.webp"><Part /><Bottom /></PageWrapper>} />
          <Route path="/wet-lab/safety" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/safety.webp"><WetLabSafety /><Bottom /></PageWrapper>} />
          <Route path="/wet-lab/results" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/results.webp"><Results /><Bottom /></PageWrapper>} />

          <Route path="/dry-lab/model" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/models.webp"><Model /><Bottom /></PageWrapper>} />
          <Route path="/dry-lab/software" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/software-1.webp"><Software /><Bottom /></PageWrapper>} />

          <Route path="/human-practice/integrated-human-practices" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/ihp-1.webp"><IHP /><Bottom /></PageWrapper>} />
          <Route path="/human-practice/entrepreneurship" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/eng.webp"><Entrepreneurship /><Bottom /></PageWrapper>} />
          <Route path="/human-practice/collaborations" element={<PageWrapper headerImage="https://static.igem.wiki/teams/5822/newassets/titleimgs/collabratjon.webp"><Collaborations /><Bottom /></PageWrapper>} />

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