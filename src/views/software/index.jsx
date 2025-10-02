import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

import menuLogo from 'https://static.igem.wiki/teams/5822/newassets/menulogo.png';

import Figure1 from 'https://static.igem.wiki/teams/5822/newassets/software/figure1.png';
import Figure2 from 'https://static.igem.wiki/teams/5822/newassets/software/figure2.png';
import softwarePdf from 'https://static.igem.wiki/teams/5822/newassets/software/software.pdf';

// 组件定义 1
const MainContent = () => (
  <>
    <div id="overview" className="view-content">
      <div className="content-header">
        <div className="h1">Software</div>
      </div>

      {/* Overview Section */}
      <section id="overview-section" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Overview</div>
          </div>
          <div className="content-body">
            <p>
              Our software provides an <span>integrated bioinformatics pipeline</span> designed to identify and validate <span>exosomal biomarkers</span> associated with <span>tumor progression</span>. Built in <span>R with modular scripts</span>, the pipeline automates <span>data preprocessing</span>, <span>differential expression analysis</span>, <span>exosomal intersection</span>, <span>functional enrichment</span>, <span>survival validation</span>, and <span>visualization</span>. This system bridges <span>computational prediction with experimental validation</span>, enabling the discovery of <span>clinically relevant exosomal markers</span> that can be directly applied in <span>aptamer screening</span> and <span>CRISPR-based detection platforms</span>.
            </p>
            <p>
              Although the <span>full source code</span> is still under <span>internal testing</span>, all modules have been <span>successfully executed and validated</span> using real <span>exosome sequencing data</span> derived from <span>normal and cancer cell lines</span>.
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section id="system-architecture" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">System Architecture</div>
          </div>
          <div className="content-body">
            <p>
              The pipeline is composed of <span>six functional modules</span>, each corresponding to a key stage in <span>biomarker discovery</span>:
            </p>
            <ol>
              <li><span>Data Preprocessing</span> – Normalizes and aligns <span>transcriptomic data</span> (TCGA, GEO, or in-house RNA-seq) with <span>sample metadata</span>.</li>
              <li><span>Differential Expression Analysis</span> – Uses <span>DESeq2 or limma-voom</span> to identify significantly <span>dysregulated genes</span> (|log₂FC| &gt; 1, p &lt; 0.05), generating <span>volcano plots</span>.</li>
              <li><span>Intersection Filtering</span> – Extracts overlapping genes between <span>DEGs and ExoCarta exosomal markers</span> to highlight <span>exosome-relevant candidates</span>.</li>
              <li><span>Functional Enrichment</span> – Applies <span>clusterProfiler</span> for <span>GO and KEGG enrichment</span> to explore <span>biological functions and pathways</span>.</li>
              <li><span>Validation Module</span> – Conducts <span>Kaplan–Meier survival analysis</span> and <span>ROC evaluation</span> to assess <span>prognostic potential</span>.</li>
              <li><span>Visualization & Reporting</span> – Outputs <span>high-quality plots</span> (volcano, Venn, enrichment, KM, ROC) and <span>ranked biomarker tables</span> for publication and Wiki display.</li>
            </ol>

            <div className="figure-container"><div className="figure-item">
              <img src={Figure1} alt="Schematic diagram of workflow" className="figure-image" />
              <div className="h4">Figure 1. Schematic diagram of workflow</div>
            </div></div>
          </div>
        </div>
      </section>

      {/* Input & Output Section */}
      <section id="input-output" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Input & Output</div>
          </div>
          <div className="content-body">
            <p>
              The pipeline accepts <span>standardized transcriptomic and annotation files</span>:
            </p>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Input</th>
                    <th>Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Preprocessing</td>
                    <td>Expression matrix (gene × sample), metadata</td>
                    <td>Normalized matrix</td>
                  </tr>
                  <tr>
                    <td>DEG Analysis</td>
                    <td>Normalized data, condition labels</td>
                    <td>DEG list, volcano plot</td>
                  </tr>
                  <tr>
                    <td>Intersection</td>
                    <td>DEG list + ExoCarta markers</td>
                    <td>Overlap gene list, Venn diagram</td>
                  </tr>
                  <tr>
                    <td>Enrichment</td>
                    <td>Overlap genes</td>
                    <td>GO/KEGG results, bar/bubble plots</td>
                  </tr>
                  <tr>
                    <td>Validation</td>
                    <td>Expression + survival data</td>
                    <td>KM curves, ROC, AUC table</td>
                  </tr>
                  <tr>
                    <td>Visualization</td>
                    <td>All intermediate outputs</td>
                    <td>High-resolution figures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Implementation</div>
          </div>
          <div className="content-body">
            <p>
              The software adopts a <span>modular architecture</span>, ensuring <span>transparency and reusability</span>:
            </p>
            <ul>
              <li><span>Language</span>: R (≥4.2.0)</li>
              <li><span>Core Packages</span>: tidyverse, DESeq2, clusterProfiler, survminer, pROC, GSVA, VennDiagram</li>
              <li><span>Automation</span>: A single command executes all modules:</li>
            </ul>
            <div className="code-block">
              <code>Rscript run_pipeline.R</code>
            </div>
            <ul>
              <li><span>Reproducibility</span>: Input/output paths, statistical thresholds, and methods are configurable at the top of the main script.</li>
              <li><span>Output Format</span>: CSV tables and PNG figures, optimized for iGEM Wiki embedding.</li>
            </ul>
            <p>
              <span>Repository (coming soon)</span>:<br/>
              🔗 GitHub – iGEM Software Repository
            </p>
            <p>
              The specific analysis process of <span>ZZU-China</span> using the software is as follows:<br/>
            </p>
            <object
              data={softwarePdf}
              type="application/pdf"
              width="100%"
              height="600px">
            </object>
          </div>
        </div>
      </section>

      {/* Experimental Validation Section */}
      <section id="experimental-validation" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Experimental Validation</div>
          </div>
          <div className="content-body">
            <p>
              To validate the <span>computational predictions</span>, we performed <span>exosome RNA sequencing</span> on normal (<span>MCF-10A</span>) and cancer cell lines (<span>SK-BR-3</span>). The <span>differential expression analysis</span> revealed significantly <span>upregulated exosomal genes</span>, including <span>PD-L1</span>, <span>EpCAM</span>, <span>MMP-9</span>, and <span>Her2</span>, which are well-established <span>tumor-associated biomarkers</span>.
            </p>
            <p>
              The <span>volcano plot</span> below demonstrates the <span>distinct upregulation</span> of these four targets in <span>cancer-derived exosomes</span>, confirming the <span>accuracy of our pipeline's prediction results</span>.
            </p>

            <div className="figure-container"><div className="figure-item">
              <img src={Figure2} alt="Experimental Validation Results" className="figure-image" />
              <div className="h4">Figure 2. Experimental Validation Results</div>
            </div></div>

            <p>
              These findings substantiate the <span>biological relevance and clinical potential</span> of the identified genes, bridging the <span>software predictions with experimental verification</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Key Features</div>
          </div>
          <div className="content-body">
            <ul>
              <li><span>One-click automation</span> – Execute full workflow via run_pipeline.R</li>
              <li><span>Exosome-specific intersection</span> – Integration with ExoCarta database</li>
              <li><span>Comprehensive analytics</span> – DEG, GO/KEGG, survival, ROC, immune infiltration</li>
              <li><span>Publication-ready visualization</span> – Automatic figure export (1200 dpi PNG)</li>
              <li><span>Modularity</span> – Each step as independent R script for flexible adaptation</li>
              <li><span>Scalability</span> – Compatible with TCGA, GEO, and custom sequencing datasets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Impact</div>
          </div>
          <div className="content-body">
            <p>
              This software acts as the <span>computational backbone</span> of our project, linking <span>in silico biomarker discovery</span> with <span>wet-lab validation</span>. It significantly reduces <span>manual coding effort</span> and enhances <span>reproducibility</span>, making it accessible to both <span>bioinformaticians and experimentalists</span>. By integrating <span>exosomal databases and survival validation</span>, the pipeline ensures that identified candidates possess <span>clinical significance and experimental feasibility</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Future Development Section */}
      <section id="future-development" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Future Development</div>
          </div>
          <div className="content-body">
            <ul>
              <li>Develop a <span>Shiny-based web interface</span> for user-friendly operation</li>
              <li>Integrate <span>aptamer docking modules</span> for downstream molecular design</li>
              <li>Expand support to <span>multi-omics data</span> (proteomics, metabolomics)</li>
              <li>Incorporate <span>automated reporting</span> (HTML/PDF summaries)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Conclusion</div>
          </div>
          <div className="content-body">
            <p>
              Our pipeline provides a <span>robust, reproducible, and experimentally validated framework</span> for <span>exosomal biomarker discovery</span>. The combination of <span>automated R scripts</span>, <span>curated exosomal intersections</span>, and <span>experimental verification</span> demonstrates a full <span>Design–Build–Test–Learn (DBTL) loop</span> — a core philosophy of <span>synthetic biology</span> and the <span>iGEM competition</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
);

function Software() {
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
      id: 'overview-section',
      title: 'Overview',
      icon: '🌱'
    },
    {
      id: 'system-architecture',
      title: 'System Architecture',
      icon: '🏗️'
    },
    {
      id: 'input-output',
      title: 'Input & Output',
      icon: '📊'
    },
    {
      id: 'implementation',
      title: 'Implementation',
      icon: '⚙️'
    },
    {
      id: 'experimental-validation',
      title: 'Experimental Validation',
      icon: '🧪'
    },
    {
      id: 'key-features',
      title: 'Key Features',
      icon: '✨'
    },
    {
      id: 'impact',
      title: 'Impact',
      icon: '🎯'
    },
    {
      id: 'future-development',
      title: 'Future Development',
      icon: '🚀'
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      icon: '🏁'
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


export default Software;