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
import Cooperation from '../../views/cooperation';
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
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/project" element={<PageWrapper><Project /></PageWrapper>} />
          <Route path="/wet-lab" element={<PageWrapper><WetLab /></PageWrapper>} />
          <Route path="/dry-lab" element={<PageWrapper><DryLab /></PageWrapper>} />
          <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
          <Route path="/human-practice" element={<PageWrapper><HumanPractice /></PageWrapper>} />

          {/* 对应 mega-panel 子菜单 - 都需要包装 */}
          <Route path="/team/members" element={<PageWrapper><TeamMembers /></PageWrapper>} />
          <Route path="/team/attributions" element={<PageWrapper><TeamAttributions /></PageWrapper>} />

          <Route path="/project/description" element={<PageWrapper><ProjectDescription /></PageWrapper>} />
          <Route path="/project/engineering" element={<PageWrapper><Engineering /></PageWrapper>} />
          <Route path="/project/contribution" element={<PageWrapper><Contribution /></PageWrapper>} />
          <Route path="/project/development" element={<PageWrapper><Development /></PageWrapper>} />

          <Route path="/wet-lab/experiments" element={<PageWrapper><Experiments /></PageWrapper>} />
          <Route path="/wet-lab/notebook" element={<PageWrapper><Notebook /></PageWrapper>} />
          <Route path="/wet-lab/parts" element={<PageWrapper><Part /></PageWrapper>} />
          <Route path="/wet-lab/safety" element={<PageWrapper><WetLabSafety /></PageWrapper>} />
          <Route path="/wet-lab/results" element={<PageWrapper><Results /></PageWrapper>} />

          <Route path="/dry-lab/model" element={<PageWrapper><Model /></PageWrapper>} />
          <Route path="/dry-lab/software" element={<PageWrapper><Software /></PageWrapper>} />

          <Route path="/human-practice/integrated-human-practices" element={<PageWrapper><IHP /></PageWrapper>} />
          <Route path="/human-practice/entrepreneurship" element={<PageWrapper><Entrepreneurship /></PageWrapper>} />
          <Route path="/human-practice/cooperation" element={<PageWrapper><Cooperation /></PageWrapper>} />

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