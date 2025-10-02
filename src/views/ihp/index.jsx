import React, { useState, useEffect } from 'react';
import './index.css';
import '../../styles/common.css';


import menuLogo from 'https://static.igem.wiki/teams/5822/newassets/menulogo.png';
import ImageGallery from '../../components/imagegallery';

import Figure1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Introduction/Figure1.png';
import Figure2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Introduction/Figure2.png';
import Figure3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Introduction/Figure3.png';
import SolutionFigure3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Introduction/SolutionFigure3.png';
import InspirationFigure1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inspiration/InspirationFigure1.png';
import InspirationFigure2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inspiration/InspirationFigure2.png';

import SWOTAnalysisFigure1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/SWOTAnalysis/SWOTAnalysisFigure1.png';

import IntegratedReportFigure1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/IntegratedReport/Figure1.png';
import IntegratedReportFigure2_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/IntegratedReport/Figure2_1.png';
import IntegratedReportFigure2_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/IntegratedReport/Figure2_2.png';
import IntegratedReportFigure2_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/IntegratedReport/Figure2_3.png';
import IntegratedReportFigure3_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/IntegratedReport/Figure3_1.png';
import IntegratedReportFigure3_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/IntegratedReport/Figure3_2.png';

// 4
import InterviewFigure1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure1.png';
import InterviewFigure2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure2.png';
import InterviewFigure3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure3.png';
import InterviewFigure4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure4.png';
import InterviewFigure5 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure5.png';
import InterviewFigure6 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure6.png';
import InterviewFigure7 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure7.png';
import InterviewFigure8 from 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/InterviewFigure8.png';

// 5
import SurveyPDF from '../../assets/images/ihp/survey.pdf';

// 6
import FeedbackIterationContentFigure1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/FeedbackIteration/Figure1.png';

// 7
import EducationFigure1_1_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_1_1.png';
import EducationFigure1_1_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_1_2.png';
import EducationFigure1_1_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_1_3.png';
import EducationFigure1_1_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_1_4.png';

import EducationFigure1_2_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_2_1.png';
import EducationFigure1_2_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_2_2.png';
import EducationFigure1_2_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_2_3.png';
import EducationFigure1_2_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_2_4.png';

import EducationFigure1_3_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_3_1.png';
import EducationFigure1_3_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_3_2.png';
import EducationFigure1_3_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_3_3.png';
import EducationFigure1_3_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_3_4.png';
import EducationFigure1_3_5 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_1_3_5.png';

import EducationFigure2_1_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_2_1_1.png';
import EducationFigure3_1_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education_3_1_1.png';



// 8 Cooperation
import CooperationFigure1_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_1_1.png';
import CooperationFigure1_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_1_2.png';
import CooperationFigure1_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_1_3.png';
import CooperationFigure1_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_1_4.png';
import CooperationFigure1_5 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_1_5.png';
import CooperationFigure1_6 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_1_6.png';
import CooperationFigure2_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_2_1.png';
import CooperationFigure2_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_2_2.png';
import CooperationFigure2_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_2_3.png';
import CooperationFigure2_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_2_4.png';
import CooperationFigure2_5 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_2_5.png';
import CooperationFigure2_6 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_2_6.png';
import CooperationFigure2_7 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_2_7.png';
import CooperationFigure3_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_3_1.png';
import CooperationFigure3_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_3_2.png';
import CooperationFigure3_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_3_3.png';
import CooperationFigure3_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_3_4.png';
import CooperationFigure3_5 from 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton_3_5.png';


// 11 Safety
import SafetyFigure1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/safety/SafetyFigure1.png'; // 临时使用现有图片

// 12 Spread
import SpreadFigure1_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Spread/Spread_1_1.png';
import SpreadFigure1_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Spread/Spread_1_2.png';
import SpreadFigure2_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Spread/Spread_2_1.png';
import SpreadFigure2_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Spread/Spread_2_2.png';
import SpreadFigure2_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Spread/Spread_2_3.png';
import SpreadFigure2_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Spread/Spread_2_4.png';
import SpreadFigure2_5 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Spread/Spread_2_5.png';

// 13 Inclusiveness
import InclusivenessFigure2_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_2_1.png';
import InclusivenessFigure2_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_2_2.png';
import InclusivenessFigure3_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_3_1.png';
import InclusivenessFigure3_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_3_2.png';
import InclusivenessFigure3_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_3_3.png';
import InclusivenessFigure5_1 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_1.png';
import InclusivenessFigure5_2 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_2.png';
import InclusivenessFigure5_3 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_3.png';
import InclusivenessFigure5_4 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_4.png';
import InclusivenessFigure5_5 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_5.png';
import InclusivenessFigure5_6 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_6.png';
import InclusivenessFigure5_7 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_7.png';
import InclusivenessFigure5_8 from 'https://static.igem.wiki/teams/5822/newassets/ihp/Inclusiveness/Inclusiveness_5_8.png';






// 主Introduction组件
const MainContent = () => (
  <>
    {/* 1 */}
    <div id="introduction" className="view-content">
      <div className="content-header">
        <div className="h1">Introduction</div>
      </div>
      <div className="content-body">
        <blockquote className="intro-quote">
          "Science, technology and societal development must advance in synergy, with scientific progress being oriented towards the promotion of human dignity and social justice."
          <footer>—(UNESCO Science Report: Towards 2030, Paris: UNESCO Publishing, 2015, p.12)</footer>
        </blockquote>
      </div>

      {/* Problem Overview Section */}
      <section id="problem-overview" className="view-section">
        <div className="view-section-content">
          <div className="content-section-header">
            <div className="h2">Problem Overview</div>
          </div>
          <div className="content-body">
            <p>
              In China, <span>breast cancer</span> has become a serious <span>public health issue</span>. Data from the National Cancer Center in 2023 shows that there are approximately <span>420,000 new cases</span> of breast cancer in China each year, accounting for <span>21.6%</span> of all malignant tumors in Chinese women, <span className='text-strong'>ranking first</span>. Each year, about <span>120,000 people</span> die from it, making it <span className='text-strong'> the fourth leading cause of cancer death </span>among Chinese women (after lung cancer, gastric cancer, and liver cancer).
            </p>
            <p>
              Surveys indicate that <span className='text-strong'>various factors</span> such as <span>obesity</span> (BMI ≥ 28), <span>alcohol consumption</span>, <span>lack of exercise</span>, <span>environmental estrogens</span> (plasticizers, pesticide residues), <span>long-term stress</span>, and <span>depression</span> have increased the incidence of breast cancer. The prevention and treatment of breast cancer face <span className='text-strong'>core challenges</span> such as <span>low coverage</span> of breast cancer screening (the popularity rate of mammography screening is less than 30%), <span>uneven distribution</span> of medical resources, and <span>sociocultural barriers</span>.
            </p>
            <p>
              Given its profound impact on <span>individual health</span> and the <span>healthcare system</span>, addressing the challenges posed by breast cancer is crucial for improving the overall health status in China.
            </p>
            <div className="figure-container">
              <div className="figure-item">
                <img src={Figure1} alt="Figure 1: Top 10 Cancer Types by New Cases Among Chinese Women in 2020" className="figure-image" />
                <div className="h4">Figure 1. The Top 10 Cancer Types By the Number of New Cases Among Chinese Women in 2020</div>
              </div>
              <div className="figure-item">
                <img src={Figure2} alt="Figure 2: Top 10 Cancer Types by Death Cases Among Chinese Women in 2020" className="figure-image" />
                <div className="h4">Figure 2. The Top 10 Cancer Types By the Number of Death Cases Among Chinese Women in 2020</div>
              </div>
            </div>
            <div className="figure-container">
              <div className="figure-item">
                <img src={Figure3} alt="Figure 3: Approximate Population - Attributable Risks in High-income Countries" className="figure-image" />
                <div className="h4">Figure 3. Approximate Population - Attributable Risks in High-income Countries of More Readily Modifiable Breast Cancer Risk Factors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="view-section">
        <div className="view-section-content">
          <div className="content-section-header">
            <div className="h2">Solution: Early Breast Cancer Screening through Parallel Scientific Innovation and Social Advocacy</div>
          </div>
          <div className="content-body">
            <p>
              <span>Breast cancer</span> poses a significant threat to <span>women's health</span> worldwide. Despite remarkable advancements in medicine, <span>low early diagnosis rates</span> remain a critical challenge—while the <span>5-year survival rate</span> for patients with early-stage (Stage I) breast cancer can reach <span>99%</span>, it plummets to less than <span>30%</span> for those with advanced-stage (Stage IV) disease.
            </p>
            <p>
              Therefore, <span className='text-strong'>popularizing early breast cancer screening across society</span> is crucial for its prevention and treatment.
            </p>
            <div className="figure-container">
              <div className="figure-item">
                <img src={SolutionFigure3} alt="Figure 1: Top 10 Cancer Types by New Cases Among Chinese Women in 2020" className="figure-image" />
                <div className="h4">Figure 3. Vision for Technology-enabled Breast Cancer Treatment and Research</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Challenges Section */}
      <section id="scientific-challenges" className="view-section">
        <div className="view-section-content">
          <div className="content-section-header">
            <div className="h2">Scientific Challenges: Limitations of Existing Screening Technologies</div>
          </div>
          <div className="content-body">
            <p>
              Current breast cancer screening primarily relies on <span className='text-strong'>imaging techniques</span> (e.g., mammography, ultrasound) and <span className='text-strong'>serum marker tests</span> (e.g., CA15-3), but these methods have <span className='text-strong'>obvious drawbacks</span>:
            </p>
            <ul>
              <li><strong>Insufficient sensitivity:</strong> Mammography detects only about <span>65%</span> of tumors in dense breast tissue, easily missing cases in young women.</li>
              <li><strong>Poor accessibility:</strong> High-end equipment (e.g., MRI, liquid biopsy) is expensive and inaccessible in primary hospitals.</li>
              <li><strong>Low timeliness:</strong> Traditional tests take several days to produce results, failing to meet the demand for rapid screening.</li>
            </ul>
            <p>
              To address these bottlenecks, our iGEM project aims to develop <span className='text-strong'>a low-cost, rapid, and highly sensitive test strip. By targeting the CD63 moleculeon exosomes in samples</span> , we will enable rapid breast cancer screening, overcoming the limitations of existing technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Social Challenges Section */}
      <section id="social-challenges" className="view-section">
        <div className="view-section-content">
          <div className="content-section-header">
            <div className="h2">Social Challenges: Insufficient Awareness and Weak Screening Consciousness</div>
          </div>
          <div className="content-body">
            <p>
              While advancing scientific research, we identified<span className='text-strong'> deeper social issues</span> in breast cancer prevention through social surveys, questionnaires, and interviews:
            </p>
            <ul>
              <li><strong>Public misconceptions:</strong> Over <span>60%</span> of women believe "no family history = low risk" and neglect regular screening. In rural areas, approximately <span>70%</span> of patients are diagnosed at intermediate or advanced stages, directly linked to a lack of health knowledge.</li>
              <li><strong>Stigma and delayed medical care:</strong> Some patients avoid screening due to privacy concerns about breast examinations, leading to delayed diagnosis.</li>
              <li><strong>Unequal distribution of medical resources:</strong> Breast cancer mortality rates are declining in developed countries, but remain high in developing countries due to inadequate screening access.</li>
            </ul>
            <p>
              Thus, with the dual mission of <span className='text-strong'>"technological innovation + social advocacy,"</span> we propose a three-in-one strategy of <span className='text-strong'>"scientific research, science popularization, and public welfare"</span> to ensure science truly benefits all lives.
            </p>
            <p>
              We believe that breast cancer prevention is not only a <span className='text-strong'>scientific issue</span> but also a <span className='text-strong'>social one</span>. Through our iGEM project, we hope to promote the implementation of new technologies while raising public awareness of women's health, ultimately achieving the goals of <span className='text-strong'>"popularizing early screening, democratizing knowledge, and normalizing care."</span>
            </p>
          </div>
        </div>
      </section>
    </div>
    {/* 2 */}
    <div id="iterative-symbiotic-practice-model" className="view-content">
      <div className="content-header">
        <div className="h1">2 Iterative Symbiotic Practice Model</div>
      </div>

      <div className="content-body">
        {/* 2. Overview */}
        <section id="overview" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Overview</div>
            </div>
            <div className="content-body">
              <p>
                In the practice of advancing early breast cancer screening and public education, we have constructed an <span>Iterative Symbiotic Practice Model (ISPM)</span>, which is a systematic framework based on feedback loops. The theoretical foundation of this model is the concept of <span>Responsible Research and Innovation (RRI)</span>, emphasizing that technological innovation must form a <span>symbiotic relationship</span> with societal needs through bidirectional feedback, perfectly aligning with the purpose of the iGEM competition—promoting the responsible and ethical application of synthetic biology in solving real-world problems.
              </p>
              <p>
                Simultaneously, the model incorporates the essence of <span>action research theory (Kurt Lewin)</span>, adhering to the cyclical methodology of <span>"planning-acting-observing-reflecting"</span>, ensuring that every human practice is grounded in scientific empirical evidence.
              </p>
              <p>
                The ISPM model consists of <span>five interconnected layers</span>: the Needs Insight Layer, Practice Design Layer, Implementation Interaction Layer, Feedback Integration Layer, and Iterative Optimization Layer. Each layer serves a specific function while forming organic connections with other layers through feedback mechanisms. The Needs Insight Layer establishes the foundation through empirical research, the Practice Design Layer translates needs into action plans, the Implementation Interaction Layer tests designs in practice, the Feedback Integration Layer provides in-depth interpretation of practical outcomes, and the Iterative Optimization Layer achieves spiral progression of the system. This layered structure reflects the holistic thinking of systems theory, ensuring that each segment receives input from and generates output to other segments.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={InspirationFigure1} alt="Figure 1. Iterative Symbiotic Practice Model" className="figure-image" />
                  <div className="h4">Figure 1. Iterative Symbiotic Practice Model</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1 Needs Insight Layer */}
        <section id="needs-insight-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Needs Insight Layer: Systematic Data Collection and In-Depth Needs Analysis</div>
            </div>
            <div className="content-body">
              <p>
                This layer employs multiple research methods to comprehensively gather societal needs. By designing scientific questionnaires, we collected <span>200 valid samples</span> covering diverse populations of different ages, genders, and educational backgrounds. The survey results indicate: the awareness rate of lactational mastitis among the 18-30 age group is only <span>18.5%</span>, significantly lower than other age groups; men's awareness of high-risk factors for breast cancer is <span>24.8% lower</span> than that of women, highlighting gender-based cognitive disparities. These data provide clear directional guidance for the subsequent design of educational content.
              </p>

              <div className="figure-container">
                <div className="figure-item">
                  <img src={InspirationFigure2} alt="Needs Insight Layer Figure 2.1" className="figure-image" />
                  <div className="h4">Needs Insight Layer Figure 2.1</div></div>
              </div>
              <p>
                A <span>SWOT analysis</span> of stakeholders revealed: women exhibit a contradiction of "strong screening willingness but insufficient knowledge"; medical institutions face the practical dilemma of "strong professional capabilities but aging equipment and heavy workload for healthcare staff"; government departments possess the administrative characteristic of "policy-making authority but uneven resource allocation"; and research institutions confront the developmental challenge of "advantages in technological R&D but limited technology transfer capabilities." These in-depth analyses provide a comprehensive needs map and problem-oriented guidance for our subsequent practice design.
              </p>
            </div>
          </div>
        </section>

        {/* 2.2 Practice Design Layer */}
        <section id="practice-design-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Practice Design Layer: Tailored Content System and Collaborative Network Construction</div>
            </div>
            <div className="content-body">
              <p>
                Based on prior needs insight, we designed a comprehensive <span>tiered education system</span>. Targeting the cognitive characteristics and interests of primary school students, we developed the <span>"Strawberry DNA Extraction Experiment"</span> and <span>"DNA Science Pop-up Class"</span>, sparking scientific curiosity through hands-on activities. For middle school students, considering their knowledge level and learning needs, we designed the <span>"Plasmid Extraction Experiment"</span> and <span>"Human Anatomy Science Museum Visit"</span>, effectively bridging theoretical knowledge with practical application.
              </p>
              <p>
                The collaboration design fully embodies the tailored approach: the partnership with <span>Antu Biology</span> focused on learning CE certification processes and medical device compliance requirements; exchanges with the <span>UTokyo team</span> primarily centered on CRISPR technology optimization and pathogen detection applications; cooperation with the <span>Third Affiliated Hospital of Zhengzhou University</span> emphasized clinical needs alignment and medical practice validation. Each collaboration model was designed for specific needs, ensuring precise and effective resource allocation.
              </p>
            </div>
          </div>
        </section>

        {/* 2.3 Implementation Interaction Layer */}
        <section id="implementation-interaction-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Implementation Interaction Layer: Multi-dimensional Feedback Collection and Dynamic Optimization Mechanism</div>
            </div>
            <div className="content-body">
              <p>
                We established a comprehensive <span>multi-channel feedback mechanism</span> during implementation. Initial testing of the board game revealed that over <span>60% of participants</span> found the questions too difficult, particularly those related to breast cancer screening knowledge, with a correct answer rate below <span>30%</span>. We promptly responded by adding knowledge explanation sessions, creating short videos, and graphic posters to pre-educate on basic concepts.
              </p>
              <p>
                Innocent questions from primary students during DNA experiments, like <span>"Can the DNA helix break?"</span>, prompted us to refine the accuracy of our scientific analogies. Middle school students' queries about experimental procedures drove us to improve the lab guide manual. University students' in-depth discussions on ethical issues inspired us to incorporate real-case studies. This real-time feedback from the field provided crucial basis for subsequent deep optimization.
              </p>
            </div>
          </div>
        </section>

        {/* 2.4 Feedback Integration Layer */}
        <section id="feedback-integration-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Feedback Integration Layer: Professional Interpretation and Systematic Optimization Plans</div>
            </div>
            <div className="content-body">
              <p>
                In-depth professional feedback was obtained through <span>structured interviews</span>. A breast surgeon's suggestion that <span>"exosome detection should prioritize specificity over sensitivity"</span> directly guided the focus of our experimental design optimization. Emphasis from laboratory medicine experts on <span>"the importance of standardized operating procedures"</span> led us to establish a comprehensive SOP documentation system and quality control standards.
              </p>
              <p>
                The strategy proposed by public health scholars to <span>"prioritize high-risk groups"</span> helped us adjust screening promotion priorities and resource allocation. Concerns from patients' families about testing costs prompted exploration of domestic reagent solutions and cost-control measures. Practical suggestions from community workers on science communication formats drove optimization of dissemination methods and content presentation. These diverse professional inputs formed systematic optimization plans and implementation pathways.
              </p>
            </div>
          </div>
        </section>

        {/* 2.5 Iterative Optimization Layer */}
        <section id="iterative-optimization-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Iterative Optimization Layer: Data-Driven Continuous Improvement System</div>
            </div>
            <div className="content-body">
              <p>
                In-depth data analysis revealed that science communication effectiveness closely relates to format: <span>short videos had 59.3% acceptance</span> among 18-35-year-olds, while <span>community lectures were more popular (40.7%)</span> among those over 50. Accordingly, we developed a tailored communication system employing differentiated strategies and content formats for different age groups and educational backgrounds.
              </p>
              <p>
                Responding to clinicians' feedback about <span>"false-positive risks"</span>, we prioritized optimizing detection system specificity and accuracy. Addressing users' need for <span>"ease of operation"</span>, we developed a home sampler prototype and simplified procedures. Based on <span>"cost-control"</span> suggestions, we explored mass production cost optimization and medical insurance payment possibilities. Each optimization measure re-entered the needs insight layer, initiating new iterative cycles and refinement processes.
              </p>
              <p>
                This model's five-layer closed-loop structure ensures each practice phase undergoes continuous optimization based on prior feedback. From needs insight to iterative optimization, the information flow forms a complete cycle, enabling constant self-correction and improvement. This design not only enhances resource utilization efficiency but also ensures technological innovation remains synchronized with societal needs, truly achieving responsible research and innovation, and providing a sustainable development model for breast cancer prevention.
              </p>
            </div>
          </div>
        </section>

        {/* 2.6 Summary */}
        <section id="summary" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Summary</div>
            </div>
            <div className="content-body">
              <p>
                We believe the <span>ISPM model</span> holds significant development potential and promote value. For our project, it serves as the cornerstone for continuous optimization and obtaining social license. Through its iterative cycles, we developed a home sampler prototype based on public feedback for "ease of operation," while optimizing detection specificity per doctors' "false-positive risk" concerns, making the technological product increasingly aligned with real needs through iteration.
              </p>
              <p>
                Beyond this project, the ISPM model provides a valuable human practices paradigm for other synthetic biology projects. Whether iGEM teams in environmental governance, energy production, or healthcare can borrowing this model's structure to systematically conduct responsible innovation activities. It guides researchers on effectively communicating with the public, embedding ethical considerations into technology R&D cycles, and building inclusive, trusting innovation ecosystems - fully aligning with iGEM's educational goal of cultivating responsible scientists.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 3 */}
    <div id="stakeholder-swot-analysis" className="view-content">
      <div className="content-header">
        <div className="h1">3 Stakeholder SWOT Analysis</div>
      </div>

      <div className="content-body">
        {/* 3. Overview */}
        <section id="swot-overview" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Overview</div>
            </div>
            <div className="content-body">
              <p>
                The SWOT analysis was proposed by American management expert <span>Albert Humphrey</span> in the 1960s. Initially designed for the <span>"Fortune 500 Enterprise Strategic Planning Project"</span> of the Stanford Research Institute (SRI) in the United States, it was used to help enterprises analyze their competitive situation. Currently, it has been applied to various fields such as enterprise management, project planning, personal development, and public policy formulation.
              </p>
              <p>
                SWOT analysis is a strategic planning tool used to identify and analyze the <span>Strengths</span>, <span>Weaknesses</span>, <span>Opportunities</span>, and <span>Threats</span> of an organization or project. By comprehensively analyzing internal and external factors, SWOT analysis can help decision-makers formulate effective strategies and response measures.
              </p>
              <p>
                In our project, SWOT analysis is used to systematically evaluate the internal strengths and weaknesses, as well as external opportunities and threats, of core stakeholders such as <span>women's groups</span>, <span>medical institutions</span>, <span>government departments</span>, and <span>scientific research institutions</span>. It clarifies the role positioning of all parties, promotes the complementarity of advantages and integration of resources, and at the same time avoids risks and seizes opportunities in a targeted manner.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={SWOTAnalysisFigure1} alt="Figure 1. Stakeholder SWOT Analysis" className="figure-image" />
                  <div className="h4">Figure 1. Stakeholder SWOT Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.1 Female Group */}
        <section id="female-group" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">3.1 Female Group</div>
            </div>
            <div className="content-body">
              <div className="swot-analysis">
                <div className="swot-item strength">
                  <h4>Strengths</h4>
                  <p>Growing willingness to actively participate in screening, which helps in the early detection of disease burden.</p>
                </div>
                <div className="swot-item weakness">
                  <h4>Weaknesses</h4>
                  <p>Insufficient knowledge about early breast cancer screening and the existence of cognitive misunderstandings.</p>
                </div>
                <div className="swot-item opportunity">
                  <h4>Opportunities</h4>
                  <p>Strengthened social publicity and education, as well as support from new screening technologies and medical insurance.</p>
                </div>
                <div className="swot-item threat">
                  <h4>Threats</h4>
                  <p>The spread of false information may reduce women's trust in screening and their enthusiasm to participate.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.2 Medical Institutions */}
        <section id="medical-institutions" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">3.2 Medical Institutions</div>
            </div>
            <div className="content-body">
              <div className="swot-analysis">
                <div className="swot-item strength">
                  <h4>Strengths</h4>
                  <p>Possess rich clinical experience and professional knowledge. Our early breast cancer screening test strip provides doctors with a new diagnostic tool.</p>
                </div>
                <div className="swot-item weakness">
                  <h4>Weaknesses</h4>
                  <p>Screening equipment may be outdated or insufficient, medical staff have heavy workloads, and there are differences in screening levels among different institutions.</p>
                </div>
                <div className="swot-item opportunity">
                  <h4>Opportunities</h4>
                  <p>The test strip offers a convenient and cost-effective option for early breast cancer screening.</p>
                </div>
                <div className="swot-item threat">
                  <h4>Threats</h4>
                  <p>Risks of false positives and medical disputes related to screening.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.3 Government Departments */}
        <section id="government-departments" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">3.3 Government Departments</div>
            </div>
            <div className="content-body">
              <div className="swot-analysis">
                <div className="swot-item strength">
                  <h4>Strengths</h4>
                  <p>Have the authority to formulate policies and allocate resources, and can strengthen supervision over the screening market.</p>
                </div>
                <div className="swot-item weakness">
                  <h4>Weaknesses</h4>
                  <p>Policy formulation may be lagging, and uneven resource allocation may lead to insufficient screening services in some areas.</p>
                </div>
                <div className="swot-item opportunity">
                  <h4>Opportunities</h4>
                  <p>Promote the implementation of related strategies such as "Healthy China", cooperate with international organizations, and participate in global breast cancer prevention and control actions.</p>
                </div>
                <div className="swot-item threat">
                  <h4>Threats</h4>
                  <p>Limited financial funds, and there may be cases where policies are not fully implemented during the implementation process.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.4 Scientific Research Institutions */}
        <section id="scientific-research-institutions" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">3.4 Scientific Research Institutions</div>
            </div>
            <div className="content-body">
              <div className="swot-analysis">
                <div className="swot-item strength">
                  <h4>Strengths</h4>
                  <p>Have professional scientific research talents and advanced scientific research equipment, and can collect a large amount of clinical data.</p>
                </div>
                <div className="swot-item weakness">
                  <h4>Weaknesses</h4>
                  <p>Scientific research projects require large capital investment and have long cycles, and the process of transforming scientific research achievements into practical applications is relatively complex and difficult.</p>
                </div>
                <div className="swot-item opportunity">
                  <h4>Opportunities</h4>
                  <p>The government's support for scientific research projects is increasing, international scientific research cooperation is becoming more frequent, and emerging technologies such as big data and artificial intelligence are developing.</p>
                </div>
                <div className="swot-item threat">
                  <h4>Threats</h4>
                  <p>Fierce competition and issues related to intellectual property protection.</p>
                </div>
              </div>

              <div className="solutions-table">
                <div className="table-header">
                  <div className="table-cell">Key Issues</div>
                  <div className="table-cell">Solutions</div>
                  <div className="table-cell">Key Measures</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Women's insufficient awareness and low willingness to be screened</div>
                  <div className="table-cell">Popular science promotion</div>
                  <div className="table-cell">Short-video science popularization<br />Interviews and sharing with recovered patients</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">High risk of false positives</div>
                  <div className="table-cell">Technical optimization</div>
                  <div className="table-cell">Standardized operation procedures<br />Improvement of test strip performance</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Uneven distribution of medical institution resources</div>
                  <div className="table-cell">Policy support</div>
                  <div className="table-cell">Special fund support<br />Doctor training</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Difficulties in transforming scientific research achievements</div>
                  <div className="table-cell">Industry-university-research cooperation</div>
                  <div className="table-cell">Patent application<br />Mass production with pharmaceutical companies</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
    {/* 4 */}
    <div id="interview" className="view-content">
      <div className="content-header">
        <div className="h1">4 Interview</div>
      </div>

      <div className="content-body">
        {/* 4.1 Interview on Why Exosomes and Magnetic Beads Were Chosen */}
        <section id="interview-exosomes-magnetic-beads" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.1 Interview on Why Exosomes and Magnetic Beads Were Chosen</div>
            </div>
            <div className="content-body">
              <div className="interview-card">
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👨‍🔬</span>
                  </div>
                </div>
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Professor XX</div>
                    <p className="affiliation">Professor @ University</p>
                    <p className="details">Area: Dry Lab | Date: May 7, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 Exosomes are ideal for early screening due to clear signals, stability, and accessibility.</p>
                    <p>2 Magnetic bead capture is the preferred isolation method for its specificity and simplicity.</p>
                    <p>3 Future work requires optimizing processes, integrating methods, and validating in high-risk groups to enable widespread use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.2 Interview on the Selection of the Four Target Proteins */}
        <section id="interview-target-proteins" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.2 Interview on the Selection of the Four Target Proteins</div>
            </div>
            <div className="content-body">
              <div className="interview-card reverse">
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Professor XX</div>
                    <p className="affiliation">Professor @ University</p>
                    <p className="details">Area: Dry Lab | Date: May 9, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 Four exosomal proteins (MMP-9/HER-2/PD-L1/EpCAM) reflect key breast cancer features for improved diagnosis and treatment guidance.</p>
                    <p>2 Their combined detection enhances accuracy and clinical utility.</p>
                    <p>3 Future needs: validate thresholds via large studies and optimize detection technology for broader clinical use.</p>
                  </div>
                </div>
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👨‍🔬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.3 Interview on Why CD63 Aptamers Are Chosen */}
        <section id="interview-cd63-aptamers" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.3 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down</div>
            </div>
            <div className="content-body">
              <div className="interview-card">
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👨‍🔬</span>
                  </div>
                </div>
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Professor XX</div>
                    <p className="affiliation">Professor @ University</p>
                    <p className="details">Area: Dry Lab | Date: May 22, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 CD63 and tumor-specific aptamers enable efficient exosome enrichment with superior stability, cost, and convenience over antibodies.</p>
                    <p>2 Future optimization of modification and secondary enrichment can improve tumor exosome purity.</p>
                    <p>3 This approach supports early, accurate breast cancer detection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.4 Interview with Breast Surgeons */}
        <section id="interview-breast-surgeons" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.4 Interview with Breast Surgeons</div>
            </div>
            <div className="content-body">
              <div className="interview-card reverse">
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Dr. XX</div>
                    <p className="affiliation">Breast Surgery @ XX Hospital</p>
                    <p className="details">Area: Clinical | Date: August 2, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 Interview deepened understanding of breast cancer and emphasized early screening's importance.</p>
                    <p>2 Doctor endorsed project's potential and advised on sample quality, clinical collaboration, and ethics.</p>
                    <p>3 Feedback will guide project optimization for clinical application in early diagnosis and prevention.</p>
                  </div>
                </div>
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👩‍⚕️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.5 Interview with Laboratory Doctors */}
        <section id="interview-laboratory-doctors" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.5 Interview with Laboratory Doctors</div>
            </div>
            <div className="content-body">
              <div className="interview-card">
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👨</span>
                  </div>
                </div>
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Dr. XX</div>
                    <p className="affiliation">Clinical Laboratory @ XX Hospital</p>
                    <p className="details">Area: Laboratory | Date: August 2, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 Exosome detection and magnetic bead technology show strong potential for early breast cancer screening, yet require optimization for clinical use.</p>
                    <p>2 Key improvements needed: standardized sample processing, automated adaptation, cost control, and technical reproducibility.</p>
                    <p>3 Next steps: refine protocols, enhance lab collaboration, and ensure the method becomes operable and scalable for practical clinical adoption.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.6 Interview with Public Representative */}
        <section id="interview-public-representative" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.6 Interview with Public Representative</div>
            </div>
            <div className="content-body">
              <div className="interview-card reverse">
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">XX</div>
                    <p className="affiliation">Community Health Service Center</p>
                    <p className="details">Area: Community | Date: August 11, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 Public reluctance toward breast cancer screening stems from fear of pain, risk avoidance, and complex procedures.</p>
                    <p>2 Non-invasive blood tests are preferred for convenience but require improved accuracy and cost-effectiveness.</p>
                    <p>3 Effective science communication should emphasize quantitative benefits of early screening and provide actionable guidance to boost participation.</p>
                  </div>
                </div>
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.7 Interview with Public Health Expert */}
        <section id="interview-public-health-expert" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.7 Interview with Public Health Expert</div>
            </div>
            <div className="content-body">
              <div className="interview-card">
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👨‍🔬</span>
                  </div>
                </div>
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Professor XX</div>
                    <p className="affiliation">Municipal Center for Disease Control and Prevention</p>
                    <p className="details">Area: Public Health | Date: August 12, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 Exosome technology enhances screening access and compliance but requires support in cost control, quality assurance, and simplified reporting.</p>
                    <p>2 Priority application scenarios include high-risk groups and community-based preliminary screening.</p>
                    <p>3 Real-world data should validate its long-term impact on reducing late-stage diagnoses, advancing health equity through accessible technology.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.8 Interviews with Breast Cancer Patients and Their Families */}
        <section id="interview-patients-families" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.8 Interviews with Breast Cancer Patients and Their Families</div>
            </div>
            <div className="content-body">
              <div className="interview-card reverse">
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Patients & Families</div>
                    <p className="affiliation">XX Hospital</p>
                    <p className="details">Area: Patient Care | Date: August 17, 2025</p>
                  </div>
                  <div className="interview-summary">
                    <p>1 Patients emphasized the need for convenient, non-invasive early screening and expressed cautious interest in exosome technology, pending improved accuracy and cost.</p>
                    <p>2 Treatment priorities included reduced side effects, precision therapy, lower costs, and better insurance coverage.</p>
                    <p>3 Recovery relied on active rehabilitation, nutrition, and mental health support, highlighting patient-centered insights for improving care.</p>
                  </div>
                </div>
                <div className="interview-image">
                  <div className="placeholder-image">
                    <span>👨‍🔬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 5 */}
    <div id="integrated-report" className="view-content">
      <div className="content-header">
        <div className="h1">5 Integrated Report on Breast Health</div>
      </div>

      <div className="content-body">
        {/* 5.1 Survey Overview */}
        <section id="survey-overview" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">5.1 Survey Overview</div>
            </div>
            <div className="content-body">
              <p>
                The <span>"Protecting Breast Health"</span> survey focused on the cognition, behaviors, and popular science needs regarding breast health knowledge. Data was collected through online questionnaires, with <span>200 valid responses</span> received, covering a diverse group of people, providing a basis for optimizing breast health science popularization.
              </p>
              <div className="pdf-iframe-wrapper">

                <object
                  data={SurveyPDF}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  className="pdf-object"
                  style={{
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                ></object>
              </div>
            </div>
          </div>
        </section>

        {/* 5.2 Core Results */}
        <section id="core-results" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">5.2 Core Results</div>
            </div>
            <div className="content-body">

              {/* 5.2.1 Knowledge Cognition */}
              <section id="knowledge-cognition" className="view-section">
                <div className="view-section-content">
                  <div className="content-section-header">
                    <div className="h3">5.2.1 Knowledge Cognition</div>
                  </div>
                  <div className="content-body">
                    <div className="results-content">
                      <div className="results-text">
                        <p>
                          <span>Disease Awareness:</span> 72.5% of respondents are aware of breast hyperplasia and breast cancer, while only 34.2% can identify the symptoms and causes of diseases such as breast fibroids and mastitis. Among the 18-30 age group, the awareness rate of lactational mastitis is <span>18.5%</span>. 61.3% know the association with obesity, poor mood, and family history, but only 39.7% are aware that staying up late and a high-sugar, high-fat diet are risk factors. Men's overall cognition of high-risk factors is <span>24.8% lower</span> than that of women.
                        </p>
                        <div className="figure-container">
                          <div className="figure-item">
                            <img src={IntegratedReportFigure1} alt="Figure 1. The Results of the Survey Questionnaire" className="figure-image" />
                            <div className="h4">Figure 1. The Results of the Survey Questionnaire</div>
                          </div>
                        </div>
                        <div className="summary-box">
                          <h4>Summary:</h4>
                          <p>The public has a certain understanding of common breast diseases, but there are gaps in knowledge about some diseases, especially among young people regarding specific diseases. Men's cognition is generally weak.</p>
                        </div>
                        <div className="improvement-plans">
                          <h4>Improvement Plans:</h4>
                          <ol>
                            <li>Produce interesting popular science short videos for young people, combining animations to explain the symptoms and causes of diseases such as mastitis</li>
                            <li>Organize lectures on breast disease knowledge in communities and schools, inviting experts to answer questions on-site</li>
                            <li>Publish graphic science popularization on social media, highlighting high-risk factors such as staying up late and diet</li>
                            <li>Carry out health promotion activities for men, such as workplace health lectures, emphasizing that breast health is not gender-specific</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5.2.2 Screening and Prevention Behaviors */}
              <section id="screening-prevention-behaviors" className="view-section">
                <div className="view-section-content">
                  <div className="content-section-header">
                    <div className="h3">5.2.2 Screening and Prevention Behaviors</div>
                  </div>
                  <div className="content-body">
                    <div className="results-content">
                      <div className="results-text">
                        <p>
                          <span>Screening Practices:</span> 73.6% of women recognize the importance of screening. Among women over 40, 49.2% have regular (1-2 years) mammography/ultrasound examinations. Only 21.5% of women aged 20-30 perform self-examinations every year, and over 52.3% do not know the method. The participation rate of men in screening is <span>4.7%</span>. 59.8% pay attention to breast health, but only 29.5% adhere to a healthy lifestyle (work and rest, diet, exercise). Over 41.2% find it difficult to practice long-term due to stress and lack of motivation, and only 24.6% actively search for popular science.
                        </p>
                        <div className="figure-container">
                          <div className="figure-item">
                            <img src={IntegratedReportFigure2_1} alt="Screening and Prevention Behaviors Figure 2.1" className="figure-image" />
                            <div className="h4">Screening and Prevention Behaviors Figure 2.1</div>
                          </div>
                          <div className="figure-item">
                            <img src={IntegratedReportFigure2_2} alt="Screening and Prevention Behaviors Figure 2.2" className="figure-image" />
                            <div className="h4">Screening and Prevention Behaviors Figure 2.2</div>
                          </div>
                          <div className="figure-item">
                            <img src={IntegratedReportFigure2_3} alt="Screening and Prevention Behaviors Figure 2.3" className="figure-image" />
                            <div className="h4">Screening and Prevention Behaviors Figure 2.3</div>
                          </div>
                        </div>
                        <div className="summary-box">
                          <h4>Summary:</h4>
                          <p>Women's awareness of screening has improved, but the self-examination rate of young women is low and their mastery of methods is insufficient. Men's participation is extremely low. Most people pay attention to it but fail to take action, and there is insufficient initiative to learn popular science.</p>
                        </div>
                        <div className="improvement-plans">
                          <h4>Improvement Plans:</h4>
                          <ol>
                            <li>Communities carry out self-examination training workshops for young women and distribute self-examination guide manuals</li>
                            <li>Medical institutions provide free simple breast screening for men to improve their participation enthusiasm</li>
                            <li>Develop a healthy lifestyle check-in applet with reward mechanisms to encourage persistence</li>
                            <li>Push a series of popular science articles on medical platforms and social media to guide active learning</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5.2.3 Popular Science Needs */}
              <section id="popular-science-needs" className="view-section">
                <div className="view-section-content">
                  <div className="content-section-header">
                    <div className="h3">5.2.3 Popular Science Needs</div>
                  </div>
                  <div className="content-body">
                    <div className="results-content">
                      <div className="results-text">
                        <p>
                          <span>Content Preferences:</span> 41.2% of respondents want "identification of early disease signals", 30.5% focus on "scientific preventive lifestyles", and 19.8% need "treatment and rehabilitation". The group over 55 has a prominent demand for "nursing related to diseases and aging" (accounting for 14.3%). 49.6% choose short videos/articles, 30.8% look forward to community lectures, and 19.6% prefer medical platform pushes. Young people like short videos (59.3%), while middle-aged and elderly people are more accepting of community lectures (40.7%).
                        </p>
                        <div className="figure-container">
                          <div className="figure-item">
                            <img src={IntegratedReportFigure3_1} alt="Figure 3. The Results of the Survey Questionnaire" className="figure-image" />
                            <div className="h4">Figure 3. The Results of the Survey Questionnaire</div>
                          </div>
                          <div className="figure-item">
                            <img src={IntegratedReportFigure3_2} alt="Figure 3. The Results of the Survey Questionnaire" className="figure-image" />
                            <div className="h4">Figure 3. The Results of the Survey Questionnaire</div>
                          </div>
                        </div>
                        <div className="summary-box">
                          <h4>Summary:</h4>
                          <p>Different age groups have differences in the demand for popular science content, and the identification of early signals has high attention.</p>
                        </div>
                        <div className="improvement-plans">
                          <h4>Improvement Plans:</h4>
                          <ol>
                            <li>Produce popular science content according to age stratification, creating animation popular science on early signal identification for young people</li>
                            <li>Compile popular science manuals on disease and aging nursing for the elderly</li>
                            <li>Cooperate with short video platforms to create popular science accounts</li>
                            <li>Communities and hospitals regularly hold lectures and synchronize live broadcasts online to expand coverage</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* 5.3 Conclusion */}
        <section id="conclusion" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">5.3 Conclusion</div>
            </div>
            <div className="content-body">
              <div className="conclusion-content">
                <p>
                  The public has a certain basic understanding of breast health, but there are knowledge gaps, with prominent problems in young and male groups. The implementation of screening and prevention behaviors is poor, and the motivation for active learning is insufficient. The demand for popular science is not fully met, and there are obvious differences in content and channel needs among different age groups.
                </p>
                <p>
                  In the future, it is necessary to target the knowledge weaknesses of different groups, customize personalized popular science content, accurately push through multiple channels, and innovate incentive methods to improve the public's enthusiasm for preventive behaviors, so as to comprehensively enhance the awareness and ability of the whole people in breast health protection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 6 */}
    <div id="feedback-iteration" className="view-content">
      <div className="content-header">
        <div className="h1">6 Feedback and Iteration</div>
      </div>

      <div className="content-body">
        <p>
          At the outset of our practical activities, we conducted <span>systematic research</span> and <span>in-depth interviews</span> to gather valuable feedback from the public, medical experts, and stakeholders. This feedback not only revealed key issues in current breast cancer prevention and treatment efforts but also provided clear directions for the project's optimization and iteration.
        </p>

        {/* 6.1 Feedback and Iteration Regarding Insufficient Awareness of Male Breast Cancer */}
        <section id="male-breast-cancer-awareness" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">6.1 Feedback and Iteration Regarding Insufficient Awareness of Male Breast Cancer</div>
            </div>
            <div className="content-body">
              <div className="feedback-content">
                <div className="feedback-text">
                  <p>
                    Through questionnaires and public interviews, we obtained an alarming finding: there is a <span>severe lack of awareness</span> about breast cancer among men. Specific data shows that only <span>4.7%</span> of men have participated in relevant screenings, and their awareness of high-risk factors is <span>24.8% lower</span> than that of women. Behind this data lies a pervasive gender stereotype—most men believe breast cancer is a "women-only disease," completely overlooking their own potential risk of developing it.
                  </p>

                  <div className="figure-container">
                    <div className="figure-item">
                      <img src={FeedbackIterationContentFigure1} alt="Figure 1. Conduct Science Popularization for the Male Group" className="figure-image" />
                      <div className="h4">Figure 1. Conduct Science Popularization for the Male Group</div>
                    </div>
                  </div>

                  <div className="response-section">
                    <h4>Our Response:</h4>
                    <p>
                      This feedback prompted us to reflect deeply: we must break down gender biases and make men realize that breast cancer prevention and treatment are equally relevant to their health. To this end, we specifically designed a series of targeted interventions.
                    </p>
                    <p>
                      We launched health education activities aimed at men, showcasing real cases of male breast cancer incidence and using data to illustrate that men also face the risk of developing the disease, with an early-stage cure rate of over <span>90%</span>. These initiatives received positive feedback from participating men, with many stating that it was the first time they realized the need to pay attention to breast health and expressed willingness to perform regular self-examinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6.2 Feedback and Iteration on Technical Optimization and Reliability Improvement */}
        <section id="technical-optimization" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">6.2 Feedback and Iteration on Technical Optimization and Reliability Improvement</div>
            </div>
            <div className="content-body">
              <div className="feedback-content">
                <div className="feedback-text">
                  <p>
                    Feedback from laboratory doctors and patients highlighted <span>technical issues</span> requiring urgent resolution. Patients generally expressed a desire for non-invasive and convenient screening methods but had concerns about the accuracy and cost of the technology. Medical experts pointed out that existing screening technologies still have room for improvement in terms of sensitivity and specificity and emphasized the need for a stricter quality control system.
                  </p>

                  <div className="response-section">
                    <h4>Technical Improvements:</h4>
                    <p>
                      This professional feedback guided us in conducting in-depth technical optimization. We focused on improving the magnetic bead-based exosome capture technology, significantly reducing non-specific binding by adding blockers. We established a strict standardized operating procedure (SOP) to ensure the consistency and reliability of test results.
                    </p>
                    <p>
                      Additionally, we plan to collaborate with domestic suppliers in the future to develop low-cost, high-performance detection reagents, aiming to keep the cost per test below <span>200 RMB</span>. These technical enhancements not only improved detection accuracy but also laid a solid foundation for subsequent clinical promotion and application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6.3 Summary */}
        <section id="feedback-summary" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">6.3 Summary</div>
            </div>
            <div className="content-body">
              <div className="summary-content">
                <p>
                  Through systematic feedback collection and continuous iterative optimization, we have not only addressed the issue of insufficient awareness among men but also significantly enhanced technical reliability and the effectiveness of science communication.
                </p>
                <p>
                  These practices have provided us with valuable experience: effective health interventions must be based on a deep understanding of the target group's needs and employ tailored strategic approaches. In the future, we will continue to refine these measures, further advancing early breast cancer prevention and treatment efforts, and actively contributing to the improvement of public health.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 7 */}
    <div id="education" className="view-content">
      <div className="content-header">
        <div className="h1">7 Education</div>
      </div>

      <div className="content-body">
        <p>
          Through systematic questionnaires, in-depth interviews, and stakeholder analysis, we gained valuable feedback regarding the public's needs for science education. Surveys revealed that <span>85%</span> of the public find existing science communication formats "dry and difficult to understand," expressing a stronger desire for life sciences to be more closely integrated with daily life. These findings prompted us to redesign our educational approach, shifting from one-way knowledge transmission to two-way interactive learning, ensuring that each educational activity is rooted in real needs and addresses societal concerns.
        </p>
        <p>
          In advancing early breast cancer screening and public education, we have consistently adhered to the philosophy that <span>"education is not the filling of a pail, but the lighting of a fire."</span> Through multi-level, differentiated educational practices, we have built a bridge between science and society. From hands-on experiments in primary schools to ethical debates in universities, we are committed to enabling every age group to understand science through interaction and to dispel knowledge gaps and fears about breast cancer through participation.
        </p>

        {/* 7.1 Education for Students: Inspiring the Next Generation */}
        <section id="student-education" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">7.1 Education for Students: Inspiring the Next Generation</div>
            </div>
            <div className="content-body">

              {/* 7.1.1 Primary Education */}
              <section id="primary-education" className="view-section">
                <div className="view-section-content">
                  <div className="content-section-header">
                    <div className="h3">7.1.1 Primary Education</div>
                  </div>
                  <div className="content-body">
                    <p>
                      For primary school students, we designed <span>immersive experiential activities</span> that transform abstract life sciences into tangible exploratory games. Through the "Strawberry DNA Extraction Experiment" and "DNA Science Workshop," children observed the magical moment of DNA precipitation through hands-on operation. Starting with everyday questions like "Why do some people dislike cilantro?", we guided them to discover the scientific principles behind daily phenomena. These activities not only cultivated the children's interest in science but also planted the seeds of exploring the unknown in their hearts.
                    </p>
                    <ImageGallery
                      title="Figure 1. Primary Education"
                      images={[
                        {
                          src: EducationFigure1_1_1,
                          alt: "Primary Education Figure 1.1.1"
                        },
                        {
                          src: EducationFigure1_1_2,
                          alt: "Primary Education Figure 1.1.2"
                        },
                        {
                          src: EducationFigure1_1_3,
                          alt: "Primary Education Figure 1.1.3"
                        },
                        {
                          src: EducationFigure1_1_4,
                          alt: "Primary Education Figure 1.1.4"
                        }
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* 7.1.2 Secondary Education */}
              <section id="secondary-education" className="view-section">
                <div className="view-section-content">
                  <div className="content-section-header">
                    <div className="h3">7.1.2 Secondary Education</div>
                  </div>
                  <div className="content-body">
                    <p>
                      Tailored to the cognitive characteristics of secondary school students, we designed practical activities such as the <span>"Plasmid Extraction Experiment"</span> and visits to the "Human Anatomy Science Museum." By playing the role of "Science Couriers," students completed the entire process of plasmid extraction, turning complex molecular biology techniques into an engaging challenge game. During the immersive experience in the anatomy museum, they not only learned about human structure and disease mechanisms but also gained a deeper appreciation for medical humanism and the social responsibility of scientists.
                    </p>
                    <ImageGallery
                      title="Figure 2. Secondary Education"
                      images={[
                        {
                          src: EducationFigure1_2_1,
                          alt: "Secondary Education Figure 1.2.1"
                        },
                        {
                          src: EducationFigure1_2_2,
                          alt: "Secondary Education Figure 1.2.2"
                        },
                        {
                          src: EducationFigure1_2_3,
                          alt: "Secondary Education Figure 1.2.3"
                        },
                        {
                          src: EducationFigure1_2_4,
                          alt: "Secondary Education Figure 1.2.4"
                        }
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* 7.1.3 University and Community Education */}
              <section id="university-community-education" className="view-section">
                <div className="view-section-content">
                  <div className="content-section-header">
                    <div className="h3">7.1.3 University and Community Education</div>
                  </div>
                  <div className="content-body">
                    <p>
                      For university students and the general public, we organized activities such as <span>"Medical Turtle Soup"</span> "Knowledge Arena" and International Women's Day outreach events to promote the integration of scientific knowledge and humanistic spirit. Through competition and games, participants not only acquired professional knowledge on breast cancer prevention and treatment but also deeply considered the ethical boundaries and social responsibilities of technological development. Interactive formats like board games significantly enhanced the effectiveness of knowledge dissemination, making health science more deeply resonant.
                    </p>
                    <ImageGallery
                      title="Figure 3. University and Community Education"
                      images={[
                        {
                          src: EducationFigure1_3_1,
                          alt: "University Education Figure 1.3.1"
                        },
                        {
                          src: EducationFigure1_3_2,
                          alt: "University Education Figure 1.3.2"
                        },
                        {
                          src: EducationFigure1_3_3,
                          alt: "University Education Figure 1.3.3"
                        },
                        {
                          src: EducationFigure1_3_4,
                          alt: "University Education Figure 1.3.4"
                        },
                        {
                          src: EducationFigure1_3_5,
                          alt: "University Education Figure 1.3.5"
                        }
                      ]}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* 7.2 Professional Education: Bridging Science and Medicine */}
        <section id="professional-education" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">7.2 Professional Education: Bridging Science and Medicine</div>
            </div>
            <div className="content-body">
              <p>
                Our educational initiatives for healthcare and scientific research professionals form a crucial component of this project. Through expert interviews and SWOT analysis, we identified key issues including uneven screening capabilities across medical institutions and complexities in research translation. To address these, we organized a series of specialized seminars, inviting breast surgeons, laboratory specialists, and nurses to engage in in-depth dialogues.
              </p>
              <p>
                Physicians emphasized that <span>"diagnostic tools must be paired with clear referral pathways,"</span> feedback that directly informed the optimization of our educational materials. Technical challenges raised by laboratory experts, such as "batch-to-batch variation control of magnetic beads" and "integration into automated detection platforms," prompted us to develop targeted training modules. These professionally tailored educational contents ensure the smooth transition of exosome detection technology from laboratory research to clinical application, effectively bridging science and medicine.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Professional Education Figure 1.4.1" className="figure-image" />
                  <div className='h4'>Figure 4. Professional Education</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7.3 Online Education: Extending Our Reach */}
        <section id="online-education" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">7.3 Online Education: Extending Our Reach</div>
            </div>
            <div className="content-body">
              <p>
                Online education serves as a vital strategy responding to the <span>"diverse preferences for science communication channels"</span> identified through questionnaire surveys. Based on data showing 49.6% of audiences prefer short videos and 30.8% anticipate community lectures, we established a multi-level digital science communication system.
              </p>
              <p>
                Our WeChat public account regularly publishes illustrated articles such as <span>"Three Steps for Breast Self-Examination"</span> and "Common Misconceptions About Breast Cancer," utilizing visual illustrations and infographics to lower comprehension barriers. On Bilibili and Douyin platforms, dynamic demonstrations of self-examination procedures and animated explanations of exosome technology effectively address operational knowledge gaps among younger demographics.
              </p>
              <p>
                Furthermore, we consolidated all educational materials into an open-source toolkit shared globally through Wiki platforms, empowering teachers and student teams worldwide. This approach not only aligns with the opportunities identified in SWOT analysis but also ensures the accuracy and accessibility of science communication content.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={EducationFigure3_1_1} alt="Online Education Figure 1.5.1" className="figure-image" />
                  <div className='h4'>Figure 5. Online Education</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7.4 Summary */}
        <section id="education-summary" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">7.4 Summary</div>
            </div>
            <div className="content-body">
              <div className="summary-content">
                <p>
                  Through systematic educational practices, we have successfully constructed a <span>full-chain science communication system</span>—from enlightenment to advanced understanding. These activities have not only disseminated knowledge on breast cancer prevention and treatment but have also fostered public scientific literacy and health awareness.
                </p>
                <p>
                  The success of these educational practices validates the value of <span>"innovation through feedback."</span> In the future, we will continue to collect feedback through questionnaires, interviews, and other methods to dynamically optimize educational content, ensuring that science education remains a vibrant force that actively responds to societal concerns.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 8 */}
    <div id="cooperation" className="view-content">
      <div className="content-header">
        <div className="h1">8 Cooperation</div>
      </div>
      <div className="content-body">
        <p>
          At ZZU-iGEM, we firmly believe that meaningful innovation in synthetic biology stems not only from technological breakthroughs in the laboratory but also from <span>cross-disciplinary</span>, <span>cross-cultural</span>, and <span>multi-level collaboration</span> and dialogue. Through extensive partnerships with hospitals, enterprises, universities, international conferences, and educational institutions, we have deeply integrated technological R&D with humanistic care, advancing our breast cancer early screening project from concept to practice and truly fulfilling our mission of <span>"Technology Serving Society."</span>
        </p>

        {/* 8.1 Team-to-Team Technical Exchange */}
        <section id="team-technical-exchange" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">8.1 Team-to-Team Technical Exchange</div>
            </div>
            <div className="content-body">
              <p>
                We actively engaged in global technical exchanges to optimize CRISPR-based detection technology for breast cancer screening. Our collaboration with the University of Tokyo iGEM team focused on comparative studies of CRISPR-Cas12a/Cas3 systems, addressing both technical efficiency and ethical frameworks for gene editing. At the 14th International Conference on Genomics, we presented our exosome detection system and received valuable guidance from Nobel Laureate Professor Thomas Südhof on clinical translation pathways.
              </p>
              <ImageGallery
                title="Figure 1. Team-to-Team Technical Exchange"
                images={[
                  {
                    src: CooperationFigure1_1,
                    alt: "Team-to-Team Technical Exchange Figure 1.1"
                  },
                  {
                    src: CooperationFigure1_2,
                    alt: "Team-to-Team Technical Exchange Figure 1.2"
                  },
                  {
                    src: CooperationFigure1_3,
                    alt: "Team-to-Team Technical Exchange Figure 1.3"
                  },
                  {
                    src: CooperationFigure1_4,
                    alt: "Team-to-Team Technical Exchange Figure 1.4"
                  },
                  {
                    src: CooperationFigure1_5,
                    alt: "Team-to-Team Technical Exchange Figure 1.5"
                  }
                ]}
              />
              <p>
                Regional collaborations, including a cloud summit with nine universities, allowed us to share technical promotion strategies and refine public engagement methodologies. The 10th China Synthetic Biology Conference provided a platform for critical discussions with industry leaders like Twist Bioscience on scaling challenges and implementation pathways. These exchanges formed a comprehensive support system bridging fundamental research and industrial application.
              </p>
            </div>
          </div>
        </section>

        {/* 8.2 Educational & Outreach Collaboration */}
        <section id="educational-outreach-collaboration" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">8.2 Educational & Outreach Collaboration</div>
            </div>
            <div className="content-body">
              <p>
                We implemented a multi-tiered outreach strategy to disseminate synthetic biology knowledge across diverse audiences. In primary and secondary schools, interactive experiments and accessible explanations introduced students to gene editing fundamentals, fostering scientific curiosity.
              </p>
              <ImageGallery
                title="Figure 2. Educational & Outreach Collaboration"
                images={[
                  {
                    src: CooperationFigure2_1,
                    alt: "Educational & Outreach Collaboration Figure 2.1"
                  },
                  {
                    src: CooperationFigure2_2,
                    alt: "Educational & Outreach Collaboration Figure 2.2"
                  },
                  {
                    src: CooperationFigure2_3,
                    alt: "Educational & Outreach Collaboration Figure 2.3"
                  },
                  {
                    src: CooperationFigure2_4,
                    alt: "Educational & Outreach Collaboration Figure 2.4"
                  },
                  {
                    src: CooperationFigure2_5,
                    alt: "Educational & Outreach Collaboration Figure 2.5"
                  },
                  {
                    src: CooperationFigure2_6,
                    alt: "Educational & Outreach Collaboration Figure 3.1"
                  },
                  {
                    src: CooperationFigure2_7,
                    alt: "Educational & Outreach Collaboration Figure 3.2"
                  },
                ]}
              />
              <p>
                Our partnership with Henan Provincial Maternal and Child Health Hospital established a "Research-Clinical-Public" model during International Women's Day initiatives. Through volunteer-supported health campaigns, we gathered public feedback on early detection technologies while providing technical explanations and logistical support.
              </p>
              <p>
                At the Zhengzhou University Sino-Canadian High-Level Forum on Medical Education, we demonstrated synthetic biology applications in breast cancer diagnosis and engaged with global experts on integrating engineering technologies into medical education. These activities simultaneously promoted scientific literacy and generated practical insights for project improvement.
              </p>
            </div>
          </div>
        </section>

        {/* 8.3 Institutional & Expert Collaboration */}
        <section id="institutional-expert-collaboration" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">8.3 Institutional & Expert Collaboration</div>
            </div>
            <div className="content-body">
              <p>
                Strategic partnerships with medical institutions, industry leaders, and Nobel Laureates provided crucial guidance for our technical and regulatory development. Our collaboration with Autobio Diagnostics delivered systematic training on IVD regulatory requirements, including CE certification and ISO 13485 standards, ensuring compliance from initial R&D stages.
              </p>
              <ImageGallery
                title="Figure 3. Institutional & Expert Collaboration"
                images={[
                  {
                    src: CooperationFigure3_1,
                    alt: "Institutional & Expert Collaboration Figure 3.1"
                  },
                  {
                    src: CooperationFigure3_2,
                    alt: "Institutional & Expert Collaboration Figure 3.2"
                  },
                  {
                    src: CooperationFigure3_3,
                    alt: "Institutional & Expert Collaboration Figure 3.3"
                  },
                  {
                    src: CooperationFigure3_4,
                    alt: "Institutional & Expert Collaboration Figure 3.4"
                  },
                  {
                    src: CooperationFigure3_5,
                    alt: "Institutional & Expert Collaboration Figure 3.5"
                  },
                ]}
              />
              <p>
                Academic exchanges with Professor Bao Fa in Japan and Nobel Laureate Professor Craig Mello at the Taian Symposium advanced our understanding of CRISPR and RNAi applications in oncology, particularly regarding ethical considerations and clinical translation pathways. Consultations with Twist Bioscience executives clarified engineering constraints for technology scaling, quality control protocols, and regulatory submission processes. These expert interactions ensured our project maintained both innovation excellence and practical implementability.
              </p>
            </div>
          </div>
        </section>

        {/* 8.4 Summary */}
        <section id="cooperation-summary" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">8.4 Summary</div>
            </div>
            <div className="content-body">
              <div className="summary-content">
                <p>
                  The ZZU-iGEM project exemplifies how <span>open collaboration and mutual empowerment</span> drive meaningful innovation. Each exchange represented a convergence of technological advancement and humanistic values, while every partnership accelerated the translation of theoretical research into practical solutions.
                </p>
                <p>
                  Through cross-disciplinary dialogues, we have not only advanced breast cancer screening technology but also demonstrated synthetic biology's societal potential and the responsibility of young scientists. Moving forward, we remain committed to deepening these collaborations to ensure technology truly serves humanity and innovation benefits all society.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 9 */}
    <div id="bioethics" className="view-content">
      <div className="content-header">
        <div className="h1">9 Bioethics</div>
      </div>
      <div className="content-body">
        <p>
          We deeply recognize that any intervention in biological systems through synthetic biology must be grounded in <span>thorough ethical reflection</span>. Therefore, we have always placed ethical considerations at the forefront of our early breast cancer detection project. Based on a series of in-depth interviews, we have further established a <span>patient-wellbeing-centric design philosophy</span>. It is important to note that while our project does not directly involve treatment, we are consistently committed to ensuring that every test embodies a practice of <span>warm, humanistic care</span>.
        </p>
        <p>
          Specifically, we focus on the <span>accessibility of the detection technology</span> and its <span>psychological impact</span>: On one hand, we optimize processes to reduce production costs, thereby ensuring women from diverse economic backgrounds can have equitable access to screening. On the other hand, we strictly define the confidence intervals for test results and proactively provide clear result interpretation guidelines and psychological counseling support channels. This helps avoid unnecessary psychological distress caused by false-positive results. Regarding safety, all laboratory operations comply with <span>Biosafety Level 2 standards</span>, ensuring zero risk to the environment and personnel.
        </p>
        <p>
          Furthermore, we place special emphasis on <span>human-centric design</span> for the testing experience. For instance, we have simplified the operational procedures so that tests can be conducted in community hospitals, reducing the need for patients to travel extensively. On an industrial design level, the testing devices employ soft colors and rounded forms to alleviate the anxiety often associated with medical settings. More importantly, we have established a <span>post-test support system</span>. By collaborating with partner medical institutions, we provide green channels for women requiring further diagnosis and conduct ongoing patient education programs to help the public develop a scientific understanding of prevention and treatment.
        </p>
        <div className="summary-content">
          <div className="h3">Summary</div>
          <p>
            In summary, this philosophy of deeply integrating <span>technological innovation with humanistic care</span> essentially reflects our reverence for the dignity of life. Our goal is not merely to detect cancer cells, but to safeguard every woman's hope for a better life. Precisely for this reason, we firmly believe that genuine medical progress should make technology more compassionate and, simultaneously, make humanistic care more accessible.
          </p>
        </div>
      </div>
    </div>
    {/* 10 */}
    <div id="law-policy" className="view-content">
      <div className="content-header">
        <div className="h1">10 Law and Policy</div>
      </div>
      <div className="content-body">
        <p>
          We consistently treat <span>legal and policy compliance</span> as the foundation for advancing our early breast cancer detection project. At the technological R&D level, we strictly adhere to international guidelines and local laws and regulations concerning synthetic biology. All laboratory operations comply with <span>Biosafety Level 2 standards</span>, and we implement stringent biological waste disposal protocols to ensure zero environmental leakage of engineered strains and biological materials, fully conforming to environmental protection safety standards.
        </p>
        <p>
          At the medical product development level, we strictly follow the regulatory requirements of the <span>Food and Drug Administration (FDA)</span> for In Vitro Diagnostic (IVD) devices. Our processes—from biomarker selection and assay optimization to equipment design—all comply with quality system regulations. Currently in the preclinical research stage, the project will, upon progressing to clinical and industrial phases, involve collaboration with medical institutions to systematically conduct performance validation and clinical trials. We will subsequently apply for <span>FDA approval</span> via the 510(k) or De Novo pathways as appropriate, ensuring the product's safety, efficacy, and reliability.
        </p>
        <p>
          Regarding data and ethics, the use of all patient samples and data is based on <span>informed consent</span> and complies with health data privacy protection regulations. We are committed to advancing technological innovation within the legal and regulatory framework, aiming to make early breast cancer detection a <span>safe, accessible, and trustworthy</span> public healthcare resource.
        </p>
      </div>
    </div>
    {/* 11 */}
    <div id="safety" className="view-content">
      <div className="content-header">
        <div className="h1">11 Safety</div>
      </div>
      <div className="content-body">
        <p>
          Our team considers <span>safety assurance</span> as the fundamental cornerstone of project development, committed to implementing stringent safety standards throughout the entire process of scientific exploration, product transformation, and social application. In the development of early breast cancer detection technology, we consistently base our work on a <span>systematic risk management framework</span> that covers all aspects—from laboratory operations and material handling to personnel training and product design—ensuring every task complies with biosafety and ethical norms to reliably safeguard the safety of team members, end-users, and the environment.
        </p>
        <p>
          In terms of <span>laboratory safety</span>, we strictly adhere to <span>Biosafety Level 2 (BSL-2) standards</span> for all experimental activities. All operations involving engineered strains, human tumor cell lines, and nucleic acid amplification reagents are conducted within biosafety cabinets or under appropriate ventilation conditions to minimize the risk of aerosol contamination and cross-contact. Team members must complete comprehensive safety training and pass assessments before gaining laboratory access. Training covers the correct use of personal protective equipment, handling procedures for chemical and biological waste, and emergency response protocols. We rigorously enforce a <span>"buddy supervision system,"</span> prohibiting any form of solo experimentation. All high-risk operations require dual-person verification and process documentation to ensure controllability, traceability, and reliability.
        </p>
        <div className="figure-container">
          <div className="figure-item">
            <img src={SafetyFigure1} alt="Laboratory Safety Figure 1.1" className="figure-image" />
            <div className="h4">Figure 1. Laboratory Safety</div>
          </div>

        </div>
        <p>
          Regarding <span>technical safety and product responsibility</span>, we emphasize user safety and environmental compatibility from the design stage. All components used in the diagnostic system are selected for their biocompatibility, avoiding the introduction of toxic or high-risk substances. The testing procedure is designed to be simple and reliable, significantly reducing potential risks arising from operational errors. Clear disposal guidelines are provided for all components, ensuring full lifecycle compliance with environmental requirements—from production and use to disposal. Throughout the project, we consistently prioritize the <span>ethical boundaries of synthetic biology</span>, maintaining communication with biosafety committees and ethics experts. All external materials undergo review to prevent misleading statements, upholding rigor and transparency to earn public trust.
        </p>
        <div className="summary-content">
          <div className="h3">Summary</div>
          <p>
            We firmly believe that <span>innovation must be built upon safety and responsibility</span>. By integrating safety awareness into every phase of R&D, the early breast cancer detection project not only aims to deliver effective medical solutions but also strives to advance public health through safe, trustworthy, and human-centered technology.
          </p>
        </div>
      </div>
    </div>
    {/* 12 */}
    <div id="spread" className="view-content">
      <div className="content-header">
        <div className="h1">12 Spread</div>
      </div>
      <div className="content-body">
        <p>
          In the healthcare field, the dissemination of disease awareness and the implementation of technological innovation often go hand in hand. When we identified, through online information and public exchanges, the importance of early breast cancer diagnosis and the widespread lack of public science education, we resolved to build a <span>multi-dimensional, comprehensive science education and promotion system</span> with the goal of <span>"bridging the knowledge gap and promoting technological accessibility."</span>
        </p>

        {/* 12.1 Online Matrix */}
        <section id="online-matrix" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">12.1 Online Matrix: Breaking Down Information Barriers with New Media</div>
            </div>
            <div className="content-body">
              <p>
                We established a <span>dual-platform communication matrix</span> comprising the iGEM-ZZU WeChat public account and a YouTube short-form video channel. On the public account, we launched a "Breast Cancer Early Diagnosis" column, using accessible language to explain cutting-edge detection technologies like CRISPR—for instance, translating "mammography" into "calcification tracking" and using comic-style diagrams to illustrate technical principles. Simultaneously, we serialized "ZZU Team's Progress in the Breast Cancer Early Diagnosis Project," conveying key messages such as <span>"early diagnosis and treatment can increase survival rates by 40%"</span> through real-world scenarios. The short-form video platform focused on "bite-sized science," producing lightweight content like "Understanding CRISPR in 2 Minutes" and "ZZU-iGEMers' Vlogs." Feedback in the comments sections confirmed the reach and impact of these science communication efforts.
              </p>

              <div className="figure-container">
                <div className="figure-item">
                  <img src={SpreadFigure1_1} alt="Figure 1. iGEM-ZZU WeChat Public Account" className="figure-image" />
                  <div className="h4">Figure 1. iGEM-ZZU WeChat Public Account</div>

                </div>
                <div className="figure-item">
                  <img src={SpreadFigure1_2} alt="Figure 2. YouTube Short-form Video Channel" className="figure-image" />
                  <div className="h4">Figure 2. YouTube Short-form Video Channel</div>
                </div>


              </div>
              <p>
                This content was not created in isolation but drew on the operational logic of excellent medical science accounts within the industry—blending the rigor of professional institutional accounts with the communication skills of health Key Opinion Leaders (KOLs), allowing complex knowledge to permeate public awareness in an <span>engaging and popular format</span>.
              </p>
            </div>
          </div>
        </section>

        {/* 12.2 Offline Scenarios */}
        <section id="offline-scenarios" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">12.2 Offline Scenarios: Integrating Science into the Fabric of Daily Life</div>
            </div>
            <div className="content-body">
              <p>
                We extended our science education efforts from online to offline, creating <span>"immersive health interaction zones."</span> In hospitals and communities, we organized public welfare pop-up events for breast health, using models to demonstrate breast anatomy, allowing residents to visually understand "why regular screening can interrupt the cancer progression process." On university campuses, we set up "interactive science booths" featuring quick Q&As, puzzle games, board games, warm message walls, and other interactive installations. These transformed academic concepts like five-year survival rates and pathological subtypes into <span>gamified content</span> that young people could participate in and share.
              </p>
              <ImageGallery
                title="Figure 2. Offline Scenarios and Interactive Activities"
                images={[
                  {
                    src: SpreadFigure2_1,
                    alt: "Figure 2. Offline Scenarios and Interactive Activities"
                  },
                  {
                    src: SpreadFigure2_2,
                    alt: "Figure 2. Offline Scenarios and Interactive Activities"
                  },
                  {
                    src: SpreadFigure2_3,
                    alt: "Figure 2. Offline Scenarios and Interactive Activities"
                  },
                  {
                    src: SpreadFigure2_4,
                    alt: "Figure 2. Offline Scenarios and Interactive Activities"
                  },
                  {
                    src: SpreadFigure2_5,
                    alt: "Figure 2. Offline Scenarios and Interactive Activities"
                  },
                ]}
              />
              <p>
                More innovatively, we transformed laboratory technology into <span>participatory science</span>: in primary and secondary schools, we conducted "Strawberry DNA Extraction" experiments, using the "code of life in fruit" as an analogy for "breast cancer biomarker detection," planting the seeds of scientific exploration. In middle schools, we held cocktail receptions, using a crossover format of "molecular gastronomy + medical knowledge" to explain the link between diet and breast health. We organized high school students to visit human anatomy specimen museums, linking breast specimens to explanations of CRISPR technology's application in breast cancer detection, thereby helping future potential healthcare audiences build an early understanding of <span>"technology for the people."</span>
              </p>
            </div>
          </div>
        </section>

        {/* 12.3 Two-Way Linkage */}
        <section id="two-way-linkage" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">12.3 Two-Way Linkage: From "Knowledge Transfer" to "Trust Building"</div>
            </div>
            <div className="content-body">
              <p>
                Online science communication helped the public recognize that breast cancer is not invincible and that early diagnosis is key. Offline interactive experiences turned technology from a laboratory concept into a tangible solution. The linkage between these two ultimately aims to create a <span>"public-healthcare-technology" trust loop</span>: when people learn about the value of early breast cancer diagnosis through science communication, they naturally develop an interest in the CRISPR detection technology our team is developing. Conversely, the professionalism of the technology lends authority to the science content, creating a virtuous cycle where <span>"science education raises awareness, and technology meets the demand."</span>
              </p>
              <p>
                In the future, we will continue to deepen the integrated model of <span>"content-scenario-technology,"</span> ensuring that breast cancer early diagnosis education is both warm and profound, and enabling cutting-edge testing technology to truly move from the laboratory to every corner where it is needed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    {/* 13 */}
    <div id="inclusiveness" className="view-content">
      <div className="content-header">
        <div className="h1">13 Inclusiveness</div>
      </div>
      <div className="content-body">
        <p>
          Our iGEM project deeply recognizes that true innovation lies not only in technological breakthroughs but also in ensuring that the technology is <span>inclusive and benefits everyone</span>. We have worked systematically to break down barriers to public engagement with synthetic biology and translate cutting-edge science into <span>equitable and accessible social benefits</span>.
        </p>

        {/* 13.1 Technological Inclusiveness */}
        <section id="technological-inclusiveness" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">13.1 Technological Inclusiveness</div>
            </div>
            <div className="content-body">
              <p>
                The gold-standard <span>lateral flow biosensor (LFB)</span> we designed integrates multiple marker proteins to cover various breast cancer subtypes as comprehensively as possible during detection, thereby reducing false negatives caused by tumor heterogeneity. This multi-target detection approach ensures that patients with rare or atypical breast cancers are not excluded from early diagnosis. Additionally, the test strip is simple to operate and does not rely on large instruments, making it particularly suitable for <span>elderly patients, people in primary-care or remote areas, and those with limited mobility</span>—effectively lowering diagnostic barriers caused by uneven distribution of medical resources. We are also exploring the possibility of using <span>non-invasive samples</span> (such as saliva or urine) to provide a more user-friendly testing pathway for special populations, including individuals with coagulation disorders or mucosal sensitivity.
              </p>
            </div>
          </div>
        </section>

        {/* 13.2 Community Dialogue */}
        <section id="community-dialogue" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">13.2 Community Dialogue</div>
            </div>
            <div className="content-body">
              {/* 13.2.1 Inclusiveness of Women and Patient Groups */}
              <div className="sub-section">
                <div className="h3">13.2.1 Inclusiveness of Women and Patient Groups</div>
                <p>
                  As breast cancer is one of the most common cancers among women globally, we have always placed <span>women and patients at the core</span> of our practice. Through surveys and interviews, we specifically collected feedback from breast cancer patients and their families to gain a deeper understanding of the challenges they face in diagnosis, treatment, and psychological well-being. For example, patients often express concerns about the complexity and high cost of detection methods, as well as the anxiety associated with medical visits. By listening to these voices, we have prioritized <span>simplicity of use, low psychological burden, and accessibility</span> in our product design, striving to enable women to access health information in a comfortable and safe environment. Furthermore, during outreach activities on International Women's Day, we integrated breast health education with messages of self-care, helping more women recognize the importance of early detection.
                </p>
                <div className="figure-container">
                  <div className="figure-item">
                    <img src={InclusivenessFigure2_1} alt="Figure 1. Inclusiveness of Women and Patient Groups" className="figure-image" />
                    <div className="h4">Figure 1. Inclusiveness of Women and Patient Groups</div>
                  </div>
                </div>
              </div>

              {/* 13.2.2 Inclusiveness of Male Breast Cancer Patients */}
              <div className="sub-section">
                <div className="h3">13.2.2 Inclusiveness of Male Breast Cancer Patients</div>
                <p>
                  Although breast cancer is more common in women, men can also develop the disease. However, due to its lower incidence, male breast cancer is often overlooked. Male patients not only face diagnostic and treatment challenges but may also endure psychological stress and social stigma stemming from limited public awareness. Our detection system, based on exosome biomarkers, is <span>not gender-specific</span> and is equally applicable to male patients. In our human practices, we have specifically emphasized in science communication that <span>"men can also get breast cancer,"</span> helping to dispel misconceptions and biases. This reflects our attention to minority groups and expands the project's applicability and social value.
                </p>
                <div className="figure-container">
                  <div className="figure-item">
                    <img src={InclusivenessFigure2_2} alt="Figure 2. Inclusiveness of Male Breast Cancer Patients" className="figure-image" />
                    <div className="h4">Figure 2. Inclusiveness of Male Breast Cancer Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13.3 Educational Practices for Different Age Groups */}
        <section id="educational-practices" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">13.3 Educational Practices for Different Age Groups</div>
            </div>
            <div className="content-body">
              <p>
                In our human practices, we placed strong emphasis on <span>educational inclusivity</span> by designing activities tailored to different age groups. For elementary school students, we designed a "Strawberry DNA Extraction" experiment to let children experience the joy of science through hands-on cooperation. For middle school students, we held relaxed exchanges in the format of "light receptions" to help them engage with advanced knowledge in an informal atmosphere. For university students, we organized a lecture series titled <span>"Global Vision, Synthetic Future"</span> to enhance their scientific literacy. At the same time, we integrated breast health themes into International Women's Day activities, paying special attention to raising health awareness among young women. These activities covered multiple stages from childhood to young adulthood, ensuring that people with different educational backgrounds and cognitive levels could benefit.
              </p>
              <ImageGallery
                title="Figure 3. Educational Practices for Different Age Groups"
                images={[
                  {
                    src: InclusivenessFigure3_1,
                    alt: "Figure 3. Educational Practices for Different Age Groups"
                  },
                  {
                    src: InclusivenessFigure3_2,
                    alt: "Figure 3. Educational Practices for Different Age Groups"
                  },
                  {
                    src: InclusivenessFigure3_3,
                    alt: "Figure 3. Educational Practices for Different Age Groups"
                  }]}
              />
            </div>
          </div>
        </section>

        {/* 13.4 Breaking Disciplinary and Cultural Boundaries */}
        <section id="disciplinary-boundaries" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">13.4 Breaking Disciplinary and Cultural Boundaries</div>
            </div>
            <div className="content-body">
              <p>
                In terms of communication and collaboration, we participated in international and domestic conferences such as the online exchange with the University of Tokyo, the World Gene Conference, and CCiC, engaging in discussions with teams from diverse cultural and disciplinary backgrounds. Through these exchanges, we not only disseminated our project's philosophy but also incorporated diverse feedback. Such <span>cross-cultural and interdisciplinary cooperation</span> demonstrates our respect and openness to different groups, avoiding the limitations of research confined to a single perspective.
              </p>
            </div>
          </div>
        </section>

        {/* 13.5 Enhancing Sense of Participation and Belonging */}
        <section id="participation-belonging" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">13.5 Enhancing Sense of Participation and Belonging</div>
            </div>
            <div className="content-body">
              <p>
                We also used <span>cultural and creative products</span> (team uniforms, badges, keychains, etc.) to enhance interaction between the team and the public. These products feature gender-neutral designs, allowing anyone to identify with and participate in the initiative. This design philosophy reflects our commitment to <span>cultural inclusivity</span>, making science not a privilege for the few but a endeavor that can be shared and embraced by all groups.
              </p>
              <ImageGallery
                title="Figure 4. Cultural and Creative Products"
                images={
                  [
                    {
                      src: InclusivenessFigure5_1,
                      alt: "Figure 4. Cultural and Creative Products"
                    },
                    {
                      src: InclusivenessFigure5_2,
                      alt: "Figure 4. Cultural and Creative Products"
                    },
                    {
                      src: InclusivenessFigure5_3,
                      alt: "Figure 4. Cultural and Creative Products"
                    },
                    {
                      src: InclusivenessFigure5_4,
                      alt: "Figure 4. Cultural and Creative Products"
                    },
                    {
                      src: InclusivenessFigure5_5,
                      alt: "Figure 4. Cultural and Creative Products"
                    },
                    {
                      src: InclusivenessFigure5_6,
                      alt: "Figure 4. Cultural and Creative Products"
                    },
                    {
                      src: InclusivenessFigure5_7,
                      alt: "Figure 4. Cultural and Creative Products"
                    },
                    {
                      src: InclusivenessFigure5_8,
                      alt: "Figure 4. Cultural and Creative Products"
                    }
                  ]
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>


  </>
);




function IHP() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isLoaded, setIsLoaded] = useState(false);

  // 页面加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);



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
      id: 'introduction',
      title: 'Introduction',
      icon: '📖',
      subMenus: [
        {
          id: 'problem-overview',
          title: 'Problem Overview',
          icon: '📊'
        },
        {
          id: 'solution',
          title: 'Solution',
          icon: '💡'
        },
        {
          id: 'scientific-challenges',
          title: 'Scientific Challenges',
          icon: '🔬'
        },
        {
          id: 'social-challenges',
          title: 'Social Challenges',
          icon: '🌍'
        }
      ]
    },
    {
      id: 'iterative-symbiotic-practice-model',
      title: 'Iterative Symbiotic Practice Model',
      icon: '🔄',
      subMenus: [
        {
          id: 'overview',
          title: 'Overview',
          icon: '🔄'
        },
        {
          id: 'needs-insight-layer',
          title: 'Needs Insight Layer',
          icon: '🔍'
        },
        {
          id: 'practice-design-layer',
          title: 'Practice Design Layer',
          icon: '🎯'
        },
        {
          id: 'implementation-interaction-layer',
          title: 'Implementation Interaction Layer',
          icon: '⚡'
        },
        {
          id: 'feedback-integration-layer',
          title: 'Feedback Integration Layer',
          icon: '🔄'
        },
        {
          id: 'iterative-optimization-layer',
          title: 'Iterative Optimization Layer',
          icon: '📈'
        },
        {
          id: 'summary',
          title: 'Summary',
          icon: '📋'
        }
      ]
    },
    {
      id: 'stakeholder-swot-analysis',
      title: 'Stakeholder SWOT Analysis',
      icon: '📊',
      subMenus: [
        {
          id: 'swot-overview',
          title: 'Overview',
          icon: '📊'
        },
        {
          id: 'female-group',
          title: 'Female Group',
          icon: '👩'
        },
        {
          id: 'medical-institutions',
          title: 'Medical Institutions',
          icon: '🏥'
        },
        {
          id: 'government-departments',
          title: 'Government Departments',
          icon: '🏛️'
        },
        {
          id: 'scientific-research-institutions',
          title: 'Scientific Research Institutions',
          icon: '🔬'
        }
      ]
    },
    {
      id: 'interview',
      title: 'Interview',
      icon: '🎤'
    },
    {
      id: 'integrated-report',
      title: 'Integrated Report on Breast Health',
      icon: '📋',
      subMenus: [
        {
          id: 'survey-overview',
          title: 'Survey Overview',
          icon: '📊'
        },
        {
          id: 'core-results',
          title: 'Core Results',
          icon: '📈'
        },
        {
          id: 'conclusion',
          title: 'Conclusion',
          icon: '✅'
        }
      ]
    },
    {
      id: 'feedback-iteration',
      title: 'Feedback and Iteration',
      icon: '🔄',
      subMenus: [
        {
          id: 'male-breast-cancer-awareness',
          title: 'Male Breast Cancer Awareness',
          icon: '👨‍⚕️'
        },
        {
          id: 'technical-optimization',
          title: 'Technical Optimization',
          icon: '🔧'
        },
        {
          id: 'feedback-summary',
          title: 'Summary',
          icon: '📝'
        }
      ]
    },
    // 7
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      subMenus: [
        {
          id: 'student-education',
          title: 'Student Education',
          icon: '👨‍🎓'
        },
        {
          id: 'professional-education',
          title: 'Professional Education',
          icon: '👩‍⚕️'
        },
        {
          id: 'online-education',
          title: 'Online Education',
          icon: '💻'
        },
        {
          id: 'education-summary',
          title: 'Summary',
          icon: '📝'
        }
      ]
    },
    {
      id: 'cooperation',
      title: 'Cooperation',
      icon: '🤝',
      subMenus: [
        {
          id: 'team-technical-exchange',
          title: 'Team-to-Team Technical Exchange',
          icon: '🤝'
        },
        {
          id: 'educational-outreach-collaboration',
          title: 'Educational & Outreach Collaboration',
          icon: '🎓'
        },
        {
          id: 'institutional-expert-collaboration',
          title: 'Institutional & Expert Collaboration',
          icon: '🏥'
        },
        {
          id: 'cooperation-summary',
          title: 'Summary',
          icon: '📝'
        }
      ]
    },
    {
      id: 'bioethics',
      title: 'Bioethics',
      icon: '⚖️'
    },
    {
      id: 'law-policy',
      title: 'Law and Policy',
      icon: '📜'
    },
    {
      id: 'safety',
      title: 'Safety',
      icon: '🛡️'
    },
    {
      id: 'spread',
      title: 'Spread',
      icon: '📢',
      subMenus: [
        {
          id: 'online-matrix',
          title: 'Online Matrix',
          icon: '📱',
          component: null
        },
        {
          id: 'offline-scenarios',
          title: 'Offline Scenarios',
          icon: '🏘️',
          component: null
        },
        {
          id: 'two-way-linkage',
          title: 'Two-Way Linkage',
          icon: '🔗',
          component: null
        }
      ]
    },
    {
      id: 'inclusiveness',
      title: 'Inclusiveness',
      icon: '🌍',
      subMenus: [

        {
          id: 'technological-inclusiveness',
          title: 'Technological Inclusiveness',
          icon: '🔬',
          component: null
        },
        {
          id: 'community-dialogue',
          title: 'Community Dialogue',
          icon: '💬',
          component: null
        },
        {
          id: 'educational-practices',
          title: 'Educational Practices',
          icon: '🎓',
          component: null
        },
        {
          id: 'disciplinary-boundaries',
          title: 'Breaking Boundaries',
          icon: '🌐',
          component: null
        },
        {
          id: 'participation-belonging',
          title: 'Participation & Belonging',
          icon: '🤝',
          component: null
        }
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


export default IHP;