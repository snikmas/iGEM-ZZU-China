import React, { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from '../../components/scrolltotop';


import Header from '../../components/header';
import Exception_403 from '../../components/exception';

// 真实页面组件
import HomeLanding from '../../views/homelanding';
import TeamMembers from '../../views/teammembers';
import TeamAttributions from '../../views/teamattributions';
import ProjectDescription from '../../views/projectdescription';
import Contribution from '../../views/contribution';
import Part from '../../views/part';
import Experiments from '../../views/experiments';
import WetLabSafety from '../../views/wetlabsafety';
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
const WetLabResults = () => <div style={{ color: '#000', fontSize: 20 }}>Wet Lab - Results</div>;
const DryLab = () => <div style={{ color: '#000', fontSize: 20 }}>Dry Lab</div>;
const HumanPractice = () => <div style={{ color: '#000', fontSize: 20 }}>Human Practice</div>;





function Home() {


  return (
    <div className="home">

      <Header />

      <div className="home-body">
        <Routes>
          {/* 对应 header 顶部一级菜单 */}
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeLanding />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/wet-lab" element={<WetLab />} />
          <Route path="/dry-lab" element={<DryLab />} />
          <Route path="/education" element={<Education />} />
          <Route path="/human-practice" element={<HumanPractice />} />

          {/* 对应 mega-panel 子菜单 */}
          <Route path="/team/members" element={<TeamMembers />} />
          <Route path="/team/attributions" element={<TeamAttributions />} />

          <Route path="/project/description" element={<ProjectDescription />} />
          <Route path="/project/engineering" element={<Engineering />} />
          <Route path="/project/contribution" element={<Contribution />} />
          <Route path="/project/development" element={<Development />} />

          <Route path="/wet-lab/experiments" element={<Experiments />} />
          <Route path="/wet-lab/notebook" element={<Notebook />} />
          <Route path="/wet-lab/parts" element={<Part />} />
          <Route path="/wet-lab/safety" element={<WetLabSafety />} />
          <Route path="/wet-lab/results" element={<WetLabResults />} />

          <Route path="/dry-lab/model" element={<Model />} />
          <Route path="/dry-lab/software" element={<Software />} />

          <Route path="/human-practice/integrated-human-practices" element={<IHP />} />
          <Route path="/human-practice/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/human-practice/cooperation" element={<Cooperation />} />

          {/* 兜底 */}
          <Route path="*" element={<Exception_403 />} />
        </Routes>
      </div>


      {/* 右下角滚动进度指示器 */}
      <ScrollToTop />


    </div>
  );
}

export default Home;