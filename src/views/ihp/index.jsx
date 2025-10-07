import React, { useState, useEffect } from 'react';
import './index.css';
import '../../styles/common.css';
import ImageGallery from '../../components/imagegallery';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';


// DONE
const Figure1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/introduction/figure1.webp';
const Figure2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/introduction/figure2.webp';
const Figure3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/introduction/figure3t.webp';
const SolutionFigure3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/introduction/solutionfigure3.webp';
const SolutionFigure4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/introduction/solutin4.webp';
const InspirationFigure1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inspiration/inspirationfigure1.webp';
const InspirationFigure2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inspiration/inspirationfigure2.webp';

// DONE
const SWOTAnalysisFigure1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/swot/swotanalysisfigure1.webp';

// DONE
const IntegratedReportFigure1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/integratedreport/figure1.webp';
const IntegratedReportFigure2_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/integratedreport/figure2-1.webp';
const IntegratedReportFigure2_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/integratedreport/figure2-2.webp';
const IntegratedReportFigure2_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/integratedreport/figure2-3.webp';
const IntegratedReportFigure3_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/integratedreport/figure3-1.webp';
const IntegratedReportFigure3_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/integratedreport/figure3-2.webp';

// 4 DONE
const overviewpng = 'https://static.igem.wiki/teams/5822/newassets/ihp/overview.webp';
const InterviewFigure1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure1.webp';
const InterviewFigure2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interviewer1to8/interviewfigure2.webp';
const InterviewFigure3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interviewer1to8/interviewfigure3.webp';
const InterviewFigure4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interviewer1to8/interviewfigure4.webp';
const InterviewFigure5 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interviewer1to8/interviewfigure5.webp';
const InterviewFigure6 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interviewer1to8/interviewfigure6.webp';
const InterviewFigure7 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interviewer1to8/interviewfigure7.webp';
const InterviewFigure8 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interviewer1to8/interviewfigure8.webp';
const InterviewFigure9 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure9.webp';
const InterviewFigure10 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure10.webp';
const InterviewFigure11 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure11.webp';
const InterviewFigure12 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfirgure12.webp';
const InterviewFigure13 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure13.webp';
const InterviewFigure14 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure14.webp';
const InterviewFigure15 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure15.webp';
const InterviewFigure16 = 'https://static.igem.wiki/teams/5822/newassets/ihp/interview/interviewfigure16.webp';



// 5 DONE
const SurveyPDF = 'https://static.igem.wiki/teams/5822/newassets/files/survey.pdf';

// 6 DONE
const FeedbackIterationContentFigure1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/fbi/figure1.webp';

// 7 DONE
const EducationFigure1_1_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-1-1.webp';
const EducationFigure1_1_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-1-2.webp';
const EducationFigure1_1_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-1-3.webp';
const EducationFigure1_1_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-1-4.webp';

const EducationFigure1_2_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-2-1.webp';
const EducationFigure1_2_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-2-2.webp';
const EducationFigure1_2_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-2-3.webp';
const EducationFigure1_2_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-2-4.webp';

const EducationFigure1_3_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-3-1.webp';
const EducationFigure1_3_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-3-2.webp';
const EducationFigure1_3_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-3-3.webp';
const EducationFigure1_3_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-3-4.webp';
const EducationFigure1_3_5 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-1-3-5.webp';

const EducationFigure2_1_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-2-1-1.webp';
const EducationFigure3_1_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/education/education-3-1-1.webp';



// 8 Cooperation
const CooperationFigure1_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-1-1.webp';
const CooperationFigure1_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-1-2.webp';
const CooperationFigure1_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-1-3.webp';
const CooperationFigure1_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-1-4.webp';
const CooperationFigure1_5 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-1-5.webp';
const CooperationFigure1_6 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-1-6.webp';
const CooperationFigure2_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-2-1.webp';
const CooperationFigure2_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-2-2.webp';
const CooperationFigure2_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-2-3.webp';
const CooperationFigure2_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-2-4.webp';
const CooperationFigure2_5 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-2-5.webp';
const CooperationFigure2_6 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-2-6.webp';
const CooperationFigure2_7 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-2-7.webp';
const CooperationFigure3_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-3-1.webp';
const CooperationFigure3_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperation3-2.webp';
const CooperationFigure3_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-3-3.webp';
const CooperationFigure3_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperation3-4.webp';
const CooperationFigure3_5 = 'https://static.igem.wiki/teams/5822/newassets/ihp/cooperation/cooperaton-3-5.webp';


// 11 Safety DONE
const SafetyFigure1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/safety/safetyfigure1.webp'; // 临时使用现有图片

// 12 Spread DONE
const SpreadFigure1_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/spread/spread-1-1.webp';
const SpreadFigure1_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/spread/spread-1-2.webp';
const SpreadFigure2_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/spread/spread-2-1.webp';
const SpreadFigure2_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/spread/spread-2-2.webp';
const SpreadFigure2_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/spread/spread-2-3.webp';
const SpreadFigure2_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/spread/spread-2-4.webp';
const SpreadFigure2_5 = 'https://static.igem.wiki/teams/5822/newassets/ihp/spread/spread-2-5.webp';

// 13 Inclusiveness DONE
const InclusivenessFigure2_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/111.webp';
const InclusivenessFigure2_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/inclusiveness-2-2.webp';
const InclusivenessFigure3_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/inclusiveness-3-1.webp';
const InclusivenessFigure3_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/inclusiveness-3-2.webp';
const InclusivenessFigure3_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/inclusiveness-3-3.webp';
const InclusivenessFigure5_1 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/1.webp';
const InclusivenessFigure5_2 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/2.webp';
const InclusivenessFigure5_3 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/3.webp';
const InclusivenessFigure5_4 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/4.webp';
const InclusivenessFigure5_5 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/5.webp';
const InclusivenessFigure5_6 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/6.webp';
const InclusivenessFigure5_7 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/7.webp';
const InclusivenessFigure5_8 = 'https://static.igem.wiki/teams/5822/newassets/ihp/inclusiveness/8.webp';






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

      {/* 1.1 Problem Overview Section */}
      <section id="problem-overview" className="view-section">
        <div className="view-section-content">
          <div className="content-section-header">
            <div className="h2">Problem Overview</div>
          </div>
          <div className="content-body">
            <p>
              In China, <span>breast cancer</span> has become a serious <span>public health issue</span>. Data from the National Cancer Center in 2023 shows that there are approximately <span>420,000 new cases</span> of breast cancer in China each year, accounting for <span>21.6%</span> of all malignant tumors in Chinese women, <b>ranking first</b>. Each year, about <span>120,000 people</span> die from it, making it <b> the fourth leading cause of cancer death </b>among Chinese women (after lung cancer, gastric cancer, and liver cancer)<span className="citation">[1]</span>.
            </p>
            <p>
              Surveys indicate that <b>various factors</b> such as <span>obesity</span> (BMI ≥ 28), <span>alcohol consumption</span>, <span>lack of exercise</span>, <span>environmental estrogens</span> (plasticizers, pesticide residues), <span>long-term stress</span>, and <span>depression</span> have increased the incidence of breast cancer. The prevention and treatment of breast cancer face <b>core challenges</b> such as <span>low coverage</span> of breast cancer screening (the popularity rate of mammography screening is less than 30%), <span>uneven distribution</span> of medical resources, and <span>sociocultural barriers</span>.
            </p>
            <p>
              Given its profound impact on <span>individual health</span> and the <span>healthcare system</span>, addressing the challenges posed by breast cancer is crucial for improving the overall health status in China.
            </p>
            <div className="figure-container">
              <div className="figure-item">
                <img src={Figure1} alt="Figure 1: Top 10 Cancer Types by New Cases Among Chinese Women in 2020" className="figure-image" />
                <div className="h4">Figure 1. The Top 10 Cancer Types By the Number of New Cases Among Chinese Women in 2020<span className="citation">[1]</span></div>
              </div>
              <div className="figure-item">
                <img src={Figure2} alt="Figure 2: Top 10 Cancer Types by Death Cases Among Chinese Women in 2020" className="figure-image" />
                <div className="h4">Figure 2. The Top 10 Cancer Types By the Number of Death Cases Among Chinese Women in 2020<span className="citation">[1]</span></div>
              </div>
            </div>
            <div className="figure-container">
              <div className="figure-item">
                <img src={Figure3} alt="Figure 3: Approximate Population - Attributable Risks in High-income Countries" className="figure-image" />
                <div className="h4">Figure 3. Approximate Population - Attributable Risks in High-income Countries of More Readily Modifiable Breast Cancer Risk Factors(The Lancet Breast Cancer Commission.)<span className="citation">[2]</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*1.2 Solution Section */}
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
              Therefore, <b>popularizing early breast cancer screening across society</b> is crucial for its prevention and treatment.
            </p>
            <div className="figure-container">
              <div className="figure-item">
                <img src={SolutionFigure3} alt="Figure 4. Vision for Technology-enabled Breast Cancer Treatment and Research(The Lancet Breast Cancer Commission.)" className="figure-image" />
                <div className="h4">Figure 4. Vision for Technology-enabled Breast Cancer Treatment and Research(The Lancet Breast Cancer Commission.)<span className="citation">[2]</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3Scientific Challenges Section */}
      <section id="scientific-challenges" className="view-section">
        <div className="view-section-content">
          <div className="content-section-header">
            <div className="h2">Scientific Challenges: Limitations of Existing Screening Technologies</div>
          </div>

          <div className="figure-container">
            <div className="figure-item">
              <img src={SolutionFigure4} alt="Figure 5. History of Breast Cancer Detection" className="figure-image" />
              <div className="h4"><strong>Figure 5. History of Breast Cancer Detection</strong></div>
            </div>
          </div>

          <div className="content-body">
            <p>
              Current breast cancer screening primarily relies on imaging techniques(e.g., mammography, ultrasound) and <b>serum marker tests</b> (e.g., CA15-3), but these methods have <b>obvious drawbacks</b>:
            </p>
            <ul>
              <li><strong>Insufficient sensitivity:</strong> Mammography detects only about <span>65%</span> of tumors in dense breast tissue, easily missing cases in young women.</li>
              <li><strong>Poor accessibility:</strong> High-end equipment (e.g., MRI, liquid biopsy) is expensive and inaccessible in primary hospitals.</li>
              <li><strong>Low timeliness:</strong> Traditional tests take several days to produce results, failing to meet the demand for rapid screening.</li>
            </ul>
            <p>
              To address these bottlenecks, our iGEM project aims to develop <b>a low-cost, rapid, and highly sensitive test strip. By targeting the CD63 molecule on exosomes in samples</b>, we will enable rapid breast cancer screening, overcoming the limitations of existing technologies.
            </p>
          </div>
        </div>
      </section>


      {/*1.4 Social Challenges Section */}
      <section id="social-challenges" className="view-section">
        <div className="view-section-content">
          <div className="content-section-header">
            <div className="h2">Social Challenges: Insufficient Awareness and Weak Screening Consciousness</div>
          </div>
          <div className="content-body">
            <p>
              While advancing scientific research, we identified<b> deeper social issues</b> in breast cancer prevention through social surveys, questionnaires, and interviews:
            </p>
            <ul>
              <li><strong>Public misconceptions:</strong> Over <span>60%</span> of women believe "no family history = low risk" and neglect regular screening. In rural areas, approximately <span>70%</span> of patients are diagnosed at intermediate or advanced stages, directly linked to a lack of health knowledge.</li>
              <li><strong>Stigma and delayed medical care:</strong> Some patients avoid screening due to privacy concerns about breast examinations, leading to delayed diagnosis.</li>
              <li><strong>Unequal distribution of medical resources:</strong> Breast cancer mortality rates are declining in developed countries, but remain high in developing countries due to inadequate screening access.</li>
            </ul>
            <p>
              Thus, with the dual mission of <b>"technological innovation + social advocacy,"</b> we propose a three-in-one strategy of <b>"scientific research, science popularization, and public welfare"</b> to ensure science truly benefits all lives.
            </p>
            <p>
              We believe that breast cancer prevention is not only a scientific issue but also a social one. Through our iGEM project, we hope to promote the implementation of new technologies while raising public awareness of women's health, ultimately achieving the goals of <b>"popularizing early screening, democratizing knowledge, and normalizing care."</b>
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
        {/* 2.1 Overview */}
        <section id="overview" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Overview</div>
            </div>
            <div className="content-body">
              <p>
                In the practice of advancing early breast cancer screening and public education, we have constructed an <b>Iterative Symbiotic Practice Model (ISPM)</b>, which is a systematic framework based on feedback loops. The theoretical foundation of this model is the concept of <b>Responsible Research and Innovation (RRI)</b>, emphasizing that technological innovation must form a <span>symbiotic relationship</span> with societal needs through bidirectional feedback, perfectly aligning with the purpose of the iGEM competition—<b>promoting the responsible and ethical application of synthetic biology in solving real-world problems</b>.
              </p>
              <p>
                Simultaneously, the model incorporates the essence ofspan <b>action research theory (Kurt Lewin)</b>, adhering to the cyclical methodology of <b>"planning-acting-observing-reflecting"</b>, ensuring that every human practice is grounded in scientific empirical evidence.
              </p>
              <p>
                The ISPM model consists of five interconnected layers: <b>the Needs Insight Layer, Practice Design Layer, Implementation Interaction Layer, Feedback Integration Layer, and Iterative Optimization Layer</b>. Each layer serves a specific function while forming organic connections with other layers through feedback mechanisms. The Needs Insight Layer establishes the foundation through empirical research, the Practice Design Layer translates needs into action plans, the Implementation Interaction Layer tests designs in practice, the Feedback Integration Layer provides in-depth interpretation of practical outcomes, and the Iterative Optimization Layer achieves spiral progression of the system. This layered structure reflects <b>the holistic thinking of systems theory</b>, ensuring that each segment receives input from and generates output to other segments.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={InspirationFigure1} alt="Figure 6. Iterative Symbiotic Practice Model" className="figure-image" />
                  <div className="h4">Figure 6. Iterative Symbiotic Practice Model</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.2 Needs Insight Layer */}
        <section id="needs-insight-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Needs Insight Layer: Systematic Data Collection and In-Depth Needs Analysis</div>
            </div>
            <div className="content-body">
              <p>
                This layer employs multiple research methods to <b>comprehensively gather societal needs</b>. By designing scientific questionnaires, we collected 200 valid samples covering diverse populations of different ages, genders, and educational backgrounds. The survey results indicate: the awareness rate of lactational mastitis among the 18-30 age group is only <span>18.5%</span>, significantly lower than other age groups; men's awareness of high-risk factors for breast cancer is <span>24.8% lower</span> than that of women, highlighting gender-based cognitive disparities. These data provide <b>clear directional guidance for the subsequent design of educational content</b>.
              </p>

              <div className="figure-container">
                <div className="figure-item">
                  <img src={InspirationFigure2} alt="Figure 7. The Results of the Survey Questionnaire" className="figure-image" />
                  <div className="h4">Figure 7. The Results of the Survey Questionnaire</div></div>
              </div>
              <p>
                A <span>SWOT analysis</span> of stakeholders revealed: women exhibit a contradiction of "strong screening willingness but insufficient knowledge"; medical institutions face the practical dilemma of "strong professional capabilities but aging equipment and heavy workload for healthcare staff"; government departments possess the administrative characteristic of "policy-making authority but uneven resource allocation"; and research institutions confront the developmental challenge of "advantages in technological R&D but limited technology transfer capabilities." These in-depth analyses provide <b>a comprehensive needs map and problem-oriented guidance</b> for our <b>subsequent practice design</b>.
              </p>
            </div>
          </div>
        </section>

        {/* 2.3 Practice Design Layer */}
        <section id="practice-design-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Practice Design Layer: Tailored Content System and Collaborative Network Construction</div>
            </div>
            <div className="content-body">
              <p>
                Based on prior needs insight, we designed <b>a comprehensive tiered education system</b>. Targeting the cognitive characteristics and interests of primary school students, we developed the <span>"Strawberry DNA Extraction Experiment"</span> and <span>"DNA Science Pop-up Class"</span>, sparking scientific curiosity through hands-on activities. For middle school students, considering their knowledge level and learning needs, we designed the <span>"Plasmid Extraction Experiment"</span> and <span>"Human Anatomy Science Museum Visit"</span>, effectively bridging theoretical knowledge with practical application.
              </p>
              <p>
                The collaboration design <b>fully embodies the tailored approach</b>: the partnership with Antu Biology focused on learning CE certification processes and medical device compliance requirements; exchanges with the <span>UTokyo team</span> primarily centered on CRISPR technology optimization and pathogen detection applications; cooperation with the <span>Third Affiliated Hospital of Zhengzhou University</span> emphasized clinical needs alignment and medical practice validation. Each collaboration model was <b>designed for specific needs</b>, ensuring precise and effective resource allocation.
              </p>
            </div>
          </div>
        </section>

        {/* 2.4 Implementation Interaction Layer */}
        <section id="implementation-interaction-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Implementation Interaction Layer: Multi-dimensional Feedback Collection and Dynamic Optimization Mechanism</div>
            </div>
            <div className="content-body">
              <p>
                We established <b>a comprehensive multi-channel feedback mechanism during implementation</b>. Initial testing of the board game revealed that over 60% of participants found the questions too difficult, particularly those related to breast cancer screening knowledge, with a correct answer rate below <span>30%</span>. We promptly responded by <b>adding knowledge explanation sessions</b>, creating short videos, and graphic posters to <b>pre-educate</b> on basic concepts.
              </p>
              <p>
                Innocent questions from primary students during DNA experiments, like <span>"Can the DNA helix break?"</span>, prompted us to refine the accuracy of our scientific analogies. Middle school students' queries about experimental procedures drove us to improve the lab guide manual. University students' in-depth discussions on ethical issues inspired us to incorporate real-case studies. This real-time feedback from the field provided <b>crucial basis</b> for <b>subsequent deep optimization</b>.
              </p>
            </div>
          </div>
        </section>

        {/* 2.5 Feedback Integration Layer */}
        <section id="feedback-integration-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Feedback Integration Layer: Professional Interpretation and Systematic Optimization Plans</div>
            </div>
            <div className="content-body">
              <p>
                <b>In-depth professional feedback</b> was obtained through <span>structured interviews</span>. A breast surgeon's suggestion that <span>"exosome detection should prioritize specificity over sensitivity"</span> directly guided the focus of our experimental design optimization. Emphasis from laboratory medicine experts on <span>"the importance of standardized operating procedures"</span> led us to establish a comprehensive SOP documentation system and quality control standards.
              </p>
              <p>
                The strategy proposed by public health scholars to <span>"prioritize high-risk groups"</span> helped us adjust screening promotion priorities and resource allocation. Concerns from patients' families about testing costs prompted exploration of domestic reagent solutions and cost-control measures. Practical suggestions from community workers on science communication formats drove optimization of dissemination methods and content presentation. These diverse <b>professional inputs formed systematic optimization plans and implementation pathways</b>.
              </p>
            </div>
          </div>
        </section>

        {/* 2.6 Iterative Optimization Layer */}
        <section id="iterative-optimization-layer" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Iterative Optimization Layer: Data-Driven Continuous Improvement System</div>
            </div>
            <div className="content-body">
              <p>
                In-depth data analysis revealed that <b>science communication effectiveness closely relates to format</b>:short videos had 59.3% acceptance among 18-35-year-olds, while community lectures were more popular (40.7%) among those over 50. Accordingly, we developed a tailored communication system employing <b>differentiated strategies and content formats for different age groups</b> and educational backgrounds.
              </p>
              <p>
                Responding to clinicians' feedback about <span>"false-positive risks"</span>, we prioritized optimizing detection system specificity and accuracy. Addressing users' need for <span>"ease of operation"</span>, we developed a home sampler prototype and simplified procedures. Based on <span>"cost-control"</span> suggestions, we explored mass production cost optimization and medical insurance payment possibilities. Each optimization measure <b>re-entered the needs insight layer</b>, initiating new iterative cycles and refinement processes.
              </p>
            </div>
          </div>
        </section>

        {/* 2.7 Summary */}
        <section id="summary" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">Summary</div>
            </div>
            <div className="content-body interview-summary">
              <p>
                This model's five-layer closed-loop structure ensures each practice phase undergoes continuous optimization based on prior feedback. From needs insight to iterative optimization, the information flow forms <b>a complete cycle</b>, enabling <b>constant self-correction and improvement</b>. This design not only enhances resource utilization efficiency but also ensures technological innovation remains synchronized with societal needs, truly achieving responsible research and innovation, and providing a <b>sustainable development model</b> for breast cancer prevention.
              </p>
              <p>We believe the ISPM model holds <b>significant development potential</b> and <b>promote  value</b>. For our project, it serves as the cornerstone for continuous optimization and obtaining social license. Through its iterative cycles, we developed a home sampler prototype based on public feedback for "ease of operation," while optimizing detection specificity per doctors' "false-positive risk" concerns, making the technological product increasingly aligned with real needs through iteration.</p>
              <p>Beyond this project, the ISPM model provides <b>a valuable human practices paradigm</b> for other synthetic biology projects. Whether iGEM teams in environmental governance, energy production, or healthcare can borrowing this model's structure to systematically conduct responsible innovation activities. It guides researchers on <b>effectively communicating with the public, embedding ethical considerations into technology R&D cycles, and building inclusive, trusting innovation ecosystems</b> - fully aligning with iGEM's educational goal of cultivating responsible scientists.</p>
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
                The SWOT analysis was proposed by American management expert Albert Humphrey in the 1960s. Initially designed for the "Fortune 500 Enterprise Strategic Planning Project" of the Stanford Research Institute (SRI) in the United States, it was used to help enterprises analyze their competitive situation.
              </p>
              <p>
                SWOT analysis is a strategic planning tool used to <b>identify and analyze the Strengths, Weaknesses, Opportunities, and Threats of an organization or project</b>. Prior to conducting in-depth interviews, we performed a <b>systematic SWOT analysis of our core stakeholders</b>. This analysis helped us preliminarily identify the positioning, needs, and challenges of each party within the breast cancer screening ecosystem, providing a strategic blueprint for designing our interview protocols and conducting targeted engagements.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={SWOTAnalysisFigure1} alt="Figure 8. Stakeholder SWOT Analysis" className="figure-image" />
                  <div className="h4">Figure 8. Stakeholder SWOT Analysis</div>
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
                  <div className="table-cell">Identified Key Issues</div>
                  <div className="table-cell">Our Response Strategy</div>
                  <div className="table-cell">Specific Implementation Methods</div>
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
    {/* 4 interview */}
    <div id="interview" className="view-content">
      <div className="content-header">
        <div className="h1">4 Interview</div>
      </div>

      <div className="content-body">
        <div className='figure-container'>
          <div className='figure-item'>
            <img src={overviewpng} alt="Figure 9. Interview Map" className="figure-image" />
            <div className="h4">Figure 9. Interview Map</div>
          </div>
        </div>



        {/* 4.1 Introduction */}
        <section id="introduction" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.1 Introduction</div>
            </div>
            <div className="content-body">
              <div className="interview-card-professional">
                <div className="interview-card-header">
                  <div className="interview-card-title">Interview Overview</div>
                  <div className="interview-card-subtitle">Comprehensive Expert Insights</div>
                </div>
                <div className="interview-card-content">
                  <div className="interview-card-image">
                    <img src={overviewpng} alt="Figure 9. Interview Map" />
                    <div className="interview-card-figure-caption">Figure 9. Interview Map</div>
                  </div>
                  <div className="interview-card-body">
                    <div className="interview-card-findings">
                      <div className="interview-card-finding">
                        <div className="interview-card-finding-number">1</div>
                        <div className="interview-card-finding-text">
                          This chapter systematically documents our in-depth interviews with experts across various fields, aiming to examine and optimize our project from multiple perspectives.
                        </div>
                      </div>
                      <div className="interview-card-finding">
                        <div className="interview-card-finding-number">2</div>
                        <div className="interview-card-finding-text">
                          To clearly demonstrate the unique value of feedback from different groups, we have categorized the interviews into three sections: Technical Experts (focusing on technical routes and feasibility), Clinical Doctors (focusing on clinical needs and application), and The Public & Patients (focusing on user experience and social acceptance).
                        </div>
                      </div>
                      <div className="interview-card-finding">
                        <div className="interview-card-finding-number">3</div>
                        <div className="interview-card-finding-text">
                          Following each interview record, we have included a Feedback & Impact section to clarify how their professional opinions directly drove specific refinements and iterations in our project.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*4.2 Interviews with Technical Experts */}
        <section id="interviews-experts" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.2 Interviews with Technical Experts </div>
              <p>This section features interviews with technical experts in fields such as tumor biology, exosomes, and detection technologies.</p>
              <p>Their feedback primarily served to <b>validate and optimize the scientific basis and innovation of our core technical route</b>, laying a solid technical foundation for the project.</p>
            </div>
            <div className="content-body">
              {/* 4.2.1 Interview on Why Exosomes and Magnetic Beads Were Chosen */}
              <section id="interview-beads-were-chosen" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.1 Interview on Why Exosomes and Magnetic Beads Were Chosen
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Exosomes and Magnetic Beads Selection</div>
                      <div className="interview-card-subtitle">Lijuan Zhao</div>
                      <div className="interview-card-profile">Engaged in anti-tumor pharmacology research and tumor exosome research</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 10. Interview with Professor Lijuan Zhao" />
                        <div className="interview-card-figure-caption">Figure 10. Interview with Professor Lijuan Zhao</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              Exosomes are ideal for early screening due to clear signals, stability, and accessibility.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Magnetic bead capture is the preferred isolation method for its simplicity and efficiency.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Future work requires optimizing processes, integrating methods, and validating in high-risk groups to enable widespread use.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* 4.2.2 Interview on the Selection of the Four Target Proteins */}
              <section id="interview-target-proteins" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.2 Interview on the Selection of the Four Target Proteins
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Selection of Four Target Proteins</div>
                      <div className="interview-card-subtitle">Yan Xu（许燕）</div>
                      <div className="interview-card-profile">Focused on the fields of stem cell therapy and tumor immunology</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 11. Interview with Professor Yan Xu (许燕)" />
                        <div className="interview-card-figure-caption">Figure 11. Interview with Professor Yan Xu (许燕)</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              Four exosomal proteins (MMP-9/HER-2/PD-L1/EpCAM) reflect key breast cancer features for improved diagnosis and treatment guidance.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Their combined detection enhances accuracy and clinical utility.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Future needs: validate thresholds via large studies and optimize detection technology for broader clinical use.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* 4.2.3 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down */}
              <section id="interview-chosen-pull" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.3 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">CD63 Aptamers for Exosome Pull-Down</div>
                      <div className="interview-card-subtitle">Yan Xu（徐琰）</div>
                      <div className="interview-card-profile">Mainly studies tumor pharmacology chemistry and biomarkers</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 12. Interview with Professor Yan Xu (徐琰)" />
                        <div className="interview-card-figure-caption">Figure 12. Interview with Professor Yan Xu (徐琰)</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              CD63 and tumor-specific aptamers enable efficient exosome enrichment with superior stability, cost, and convenience over antibodies.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Future optimization of modification and secondary enrichment can improve tumor exosome purity.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* 4.2.4 Interview on the selection of breast cancer cell lines */}
              <section id="interview-on-the-selection-of-breast-cancer-cell-lines" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.4 Interview on the selection of breast cancer cell lines
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Selection of Breast Cancer Cell Lines</div>
                      <div className="interview-card-subtitle">Xiaoyan Xuan</div>
                      <div className="interview-card-profile">Research on immune cell development and related diseases</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 13. Interview with Professor Xiaoyan Xuan" />
                        <div className="interview-card-figure-caption">Figure 13. Interview with Professor Xiaoyan Xuan</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              MCF-10A, as a non-tumorigenic normal breast epithelial cell line, provides an essential negative control baseline for distinguishing between tumor-derived and normal exosomes.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              MCF-7 (Luminal A type), MDA-MB-231 (triple-negative), and SK-BR-3 (HER2-positive) cover the major molecular subtypes of breast cancer, ensuring broad-spectrum validation of the detection method developed in the project.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              The combination of these four cell lines establishes a comprehensive model system ranging from normal to malignant, encompassing key subtypes, significantly enhancing the reliability of experimental data and clinical translation potential.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.5 Interview on Why the Four-Marker HCR Signal Amplification Principle Was Established */}
              <section id="interview-on-why-the-four-marker-hcr-signal-amplification-principle-was-established" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.5 Interview on Why the Four-Marker HCR Signal Amplification Principle Was Established
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Four-Marker HCR Signal Amplification Principle</div>
                      <div className="interview-card-subtitle">Hongmei Geng</div>
                      <div className="interview-card-profile">Engaged in research on nano-oncology diagnosis and treatment, focusing on how to use enzyme-free amplification systems such as HCR to give nanomaterials higher detection sensitivity</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 14. Interview with Professor Hongmei Geng" />
                        <div className="interview-card-figure-caption">Figure 14. Interview with Professor Hongmei Geng</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              The four-marker HCR simultaneously amplifies signals of CD63, CD81, CD9, and EpCAM through multiplexed hybridization chain reaction, significantly improving detection sensitivity and specificity.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              This method avoids the risk of missed detection associated with traditional single-marker approaches and is suitable for the accurate identification of tumor exosomes in complex clinical samples.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              The modular design facilitates integration with other detection modules (such as RCA and Cas14), providing multiple verification safeguards for early breast cancer diagnosis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.6 Interview on Principles and Advantages of the RCA Method Module */}
              <section id="interview-on-principles-and-advantages-of-the-rca-method-module" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.6 Interview on Principles and Advantages of the RCA Method Module
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Principles and Advantages of the RCA Method Module</div>
                      <div className="interview-card-subtitle">Lu Ma</div>
                      <div className="interview-card-profile">Focuses on discovering targeted anti-tumor drugs, with a strong interest in high-sensitivity detection technologies like RCA</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 15. Interview with Professor Lu Ma" />
                        <div className="interview-card-figure-caption">Figure 15. Interview with Professor Lu Ma</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              RCA utilizes a circular DNA template for rolling circle amplification, generating long tandem repeat sequences and achieving exponential signal amplification, with a detection limit down to the single-molecule level.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Its room temperature reaction conditions and high amplification efficiency are superior to PCR, making it more suitable for in situ detection of exosome biomarkers and integration into portable devices.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              RCA was selected as the core amplification module because it can synergize with HCR and Cas14, forming a multi-stage amplification system to enhance overall detection reliability.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.7 Interview on Why Cas14 Enzyme Was Chosen */}
              <section id="interview-on-why-cas14-enzyme-was-chosen" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.7 Interview on Why Cas14 Enzyme Was Chosen
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Why Cas14 Enzyme Was Chosen</div>
                      <div className="interview-card-subtitle">Ye Yuan</div>
                      <div className="interview-card-profile">Mainly studies the design, synthesis, and antibacterial mechanisms of polypeptide and small molecule self-assembled nanozymes</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 16. Interview with Professor Ye Yuan" />
                        <div className="interview-card-figure-caption">Figure 16. Interview with Professor Ye Yuan</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              As a compact CRISPR system, Cas14 specifically cleaves single-stranded DNA without PAM sequence restrictions, making it suitable for detecting exosomal DNA biomarkers.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Its high editing activity and room temperature reaction characteristics significantly reduce detection time and are compatible with magnetic bead enrichment and liquid-phase detection workflows.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Cas14 was chosen to enable controllable activation of detection signals and suppression of background noise, providing high signal-to-noise ratio quantitative analysis for tumor exosomes.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.8 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down */}
              <section id="interview-on-the-application-of-rna-aptamers-in-exosome-capture" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.8 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Interview on CD63 Aptamers for Exosome Pull-Down</div>
                      <div className="interview-card-subtitle">Thomas Südhof</div>
                      <div className="interview-card-profile">Nobel Laureate in Physiology or Medicine, researching synaptic vesicle trafficking, membrane fusion, and intercellular communication</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="A photo with Professor Thomas Südhof" />
                        <div className="interview-card-figure-caption">Figure 17. A photo with Professor Thomas Südhof</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              Explained the rationale for CD63 as a pan-exosome marker from the biological basis of intercellular communication, noting its aptamer can efficiently capture exosomes for downstream analysis.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Highlighted the potential advantages of aptamers over antibodies for capturing vesicular structures, particularly in stability and impact on membrane integrity.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Expressed that this technology holds clear promise for analyzing the specific cargo of breast cancer-derived exosomes to achieve early diagnosis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.9 Interview on the Application of RNA Aptamers in Exosome Capture */}
              <section id="interview-on-the-application-of-rna-aptamers-in-exosome-capture" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.9 Interview on the Application of RNA Aptamers in Exosome Capture
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Application of RNA Aptamers in Exosome Capture</div>
                      <div className="interview-card-subtitle">Craig C. Mello</div>
                      <div className="interview-card-profile">Primarily researches RNA interference (RNAi) mechanisms and gene expression regulation; Nobel Laureate in Physiology or Medicine</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 18. A photo with Professor Craig C. Mello" />
                        <div className="interview-card-figure-caption">Figure 18. A photo with Professor Craig C. Mello</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              From the perspective of specific recognition by nucleic acid molecules, affirmed the technical approach of using RNA aptamers for exosome capture.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Emphasized the advantages of aptamers over protein antibodies in terms of synthesis cost, batch stability, and avoiding immunogenicity.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Envisioned future integration of aptamer capture with RNAi technology to analyze exosomal cargo, thereby enhancing the specificity of breast cancer diagnosis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.10 Interview on the Clinical Translation Potential of Aptamer-Based Diagnostics */}
              <section id="interview-on-the-clinical-translation-potential-of-aptamer-based-diagnostics" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.10 Interview on the Clinical Translation Potential of Aptamer-Based Diagnostics
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Clinical Translation Potential of Aptamer-Based Diagnostics</div>
                      <div className="interview-card-subtitle">Baofa Yu</div>
                      <div className="interview-card-profile">Expert in the field of cancer therapy, focusing on tumor-targeted therapy and drug delivery systems</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 19. Group photo with Professor Baofa Yu" />
                        <div className="interview-card-figure-caption">Figure 19. Group photo with Professor Baofa Yu</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              Highly evaluated the potential for clinical diagnostic applications, considering it simple to operate, cost-effective, and suitable for widespread use.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Noted that the captured exosomes can be used for subsequent liquid biopsy analysis, providing a more convenient solution for early screening.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Suggested future research could combine it with tumor-specific target aptamers for secondary enrichment, potentially improving detection sensitivity and specificity.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.11 Interview on the Commercial Viability of Aptamer-Based Exosome Capture Kits */}
              <section id="interview-on-the-commercial-viability-of-aptamer-based-exosome-capture-kits" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.11 Interview on the Commercial Viability of Aptamer-Based Exosome Capture Kits
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Commercial Viability of Aptamer-Based Exosome Capture Kits</div>
                      <div className="interview-card-subtitle">Ming Lei</div>
                      <div className="interview-card-profile">Co-founder of UST Inc. (USA), focusing on the development and commercialization of in vitro diagnostic (IVD) technologies and products</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 20. A photo with Professor Ming Lei" />
                        <div className="interview-card-figure-caption">Figure 20. A photo with Professor Ming Lei</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              Analyzed the significant advantages from a commercialization perspective, particularly in stability, production scale, and cost control.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Pointed out that this method is easy to integrate into automated platforms, aligning with IVD industry trends and possessing strong market prospects.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Proposed that future optimization could include modifying the aptamer sequence to improve affinity and developing matched detection reagents to form a complete solution.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.12 Interview on Humanities and Ethics */}
              <section id="interview-on-humanities-and-ethics" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.12 Interview on Humanities and Ethics
                  </div>
                </div>
                <div className="content-body">
                  <div className="interview-card-professional">
                    <div className="interview-card-header">
                      <div className="interview-card-title">Humanities and Ethics in Exosome Detection Technology</div>
                      <div className="interview-card-subtitle">Huaixin Zheng</div>
                      <div className="interview-card-profile">Integrating profound humanistic care into research on pathogens and anti-infection immunity, aligning closely with the ethical considerations of exosome detection technology</div>
                    </div>
                    <div className="interview-card-content">
                      <div className="interview-card-image">
                        <img src={SWOTAnalysisFigure1} alt="Figure 21. Interview with Professor Huaixin Zheng" />
                        <div className="interview-card-figure-caption">Figure 21. Interview with Professor Huaixin Zheng</div>
                      </div>
                      <div className="interview-card-body">
                        <div className="interview-card-findings">
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">1</div>
                            <div className="interview-card-finding-text">
                              Exosome technology enhances screening access and compliance but requires support in cost control, quality assurance, and simplified reporting.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">2</div>
                            <div className="interview-card-finding-text">
                              Priority application scenarios include high-risk groups and community-based preliminary screening.
                            </div>
                          </div>
                          <div className="interview-card-finding">
                            <div className="interview-card-finding-number">3</div>
                            <div className="interview-card-finding-text">
                              Real-world data should validate its long-term impact on reducing late-stage diagnoses, advancing health equity through accessible technology.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4.2.13 Feedback & Impact */}
              <section id="interview-on-feedback-and-impact" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.2.13 Feedback & Impact
                  </div>
                </div>
                <div className="content-body">
                  <div className="feedback-impact-card">
                    <div className="feedback-impact-header">
                      <div className="feedback-impact-title">Impact of Expert Feedback on Project Development</div>
                    </div>
                    <div className="feedback-impact-content">
                      <div className="feedback-impact-item">
                        <div className="feedback-impact-item-number">1</div>
                        <div className="feedback-impact-item-content">
                          <h4 className="feedback-impact-item-title">Establishment and Optimization of the Core Technical Pathway</h4>
                          <div className="feedback-impact-item-feedback">
                            <strong>Key Feedback:</strong> Professor Lijuan Zhao, Professor Thomas Südhof, and other experts pointed out from various perspectives that exosomes are ideal markers for early screening, and that the aptamer-based magnetic bead capture method offers advantages in specificity, stability, and cost. Professor Yan Xu, among others, further suggested optimizing strategies for "affinity" and "secondary enrichment".
                          </div>
                          <div className="feedback-impact-item-impact">
                            <strong>Project Impact:</strong> This concentrated feedback from authoritative experts strongly solidified our confidence in adopting the "aptamer-magnetic bead" approach as our core capture technology. More importantly, it provided a clear roadmap for technical optimization; we have now planned to further refine our wet-lab experiments through "affinity maturation" and "secondary enrichment".
                          </div>
                        </div>
                      </div>

                      <div className="feedback-impact-item">
                        <div className="feedback-impact-item-number">2</div>
                        <div className="feedback-impact-item-content">
                          <h4 className="feedback-impact-item-title">Formation of the Multi-Target Detection and Signal Amplification Strategy</h4>
                          <div className="feedback-impact-item-feedback">
                            <strong>Key Feedback:</strong> Professor Yan Xu emphasized the value of jointly detecting multiple target proteins (MMP-9/HER-2/PD-L1/EpCAM) for improving accuracy. Professors Hongmei Geng, Lu Ma, and Ye Yuan provided key validation for constructing a multi-stage amplification system from the perspectives of signal amplification principles, sensitivity, and reaction conditions.
                          </div>
                          <div className="feedback-impact-item-impact">
                            <strong>Project Impact:</strong> These series of professional insights collectively prompted us to abandon a single detection mode. We ultimately developed an integrated detection scheme of "multi-target capture + HCR/RCA/Cas14 multi-stage amplification", significantly enhancing the reliability and clinical potential of our method.
                          </div>
                        </div>
                      </div>

                      <div className="feedback-impact-item">
                        <div className="feedback-impact-item-number">3</div>
                        <div className="feedback-impact-item-content">
                          <h4 className="feedback-impact-item-title">Anticipation of Clinical Translation and Commercial Prospects</h4>
                          <div className="feedback-impact-item-feedback">
                            <strong>Key Feedback:</strong> Industry experts like Professor Baofa Yu and Dr. Ming Lei assessed the technology's potential for clinical diagnostic applications and commercial viability, affirming its advantages in being simple to operate and cost-effective. They also provided specific suggestions such as integration with automated platforms and developing matched detection reagents.
                          </div>
                          <div className="feedback-impact-item-impact">
                            <strong>Project Impact:</strong> This elevated our thinking beyond the laboratory. We proactively incorporated "cost control", "scalable production", and "regulatory compliance" into our long-term project planning, paving the way for future technology translation.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* 4.3 Interviews with Clinical Doctors */}
        <section id="interview-with-clinical-doctor" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.3 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down</div>
            </div>
            <p>This section features interviews with doctors and experts in breast surgery, laboratory medicine, and public health.</p>
            <p>Their feedback was crucial for transitioning our technology from the laboratory to clinical settings, ensuring it meets real medical needs, workflow requirements, and quality control standards.</p>
            <div className="content-body">
              {/* 4.3.1 Interview with Clinical Doctors */}
              <section id="clinical-doctors" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.3.1 Interview with Clinical Doctors
                  </div>
                </div>
                <div className="content-body">
                  <p>Interviewee: Youyong Lü</p>
                  <p>Character Profile: Professor at Peking University Cancer Hospital, primarily researching tumor molecular biology, early cancer diagnosis, and personalized therapy.</p>
                  {/* 图片 */}
                  <div className="figure-item">
                    <img src={SWOTAnalysisFigure1} alt="Figure 22. A photo with Professor Youyong Lü" className="figure-image" />
                    <div className="h4">Figure 22. A photo with Professor Youyong Lü</div>
                  </div>
                  <div className="interview-summary">
                    <p>
                      1 Affirmed the important clinical significance of exosome-targeted liquid biopsy for early breast cancer screening.
                    </p>
                    <p>
                      2 Considered the CD63 aptamer-magnetic bead method an efficient and gentle enrichment technique that well preserves exosomal bioactivity.
                    </p>
                    <p>
                      3 Emphasized that the core of future work is to validate the efficacy in large clinical cohorts and explore its combination with existing screening methods.

                    </p>
                  </div>
                </div>
              </section>

              {/* 4.3.2 Interview with Breast Surgeons */}
              <section id="surgeons" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.3.2 Interview with Breast Surgeons
                  </div>
                </div>
                <div className="content-body">
                  <p>Interviewee: Yanwu Zhang</p>
                  <p>Character Profile: Associate Chief Physician at the Breast Disease Center of the Third Affiliated Hospital of Zhengzhou University.</p>
                  {/* 图片 */}
                  <div className="figure-item">
                    <img src={SWOTAnalysisFigure1} alt="Figure 23. A photo with Associate Chief Physician Yanwu Zhang" className="figure-image" />
                    <div className="h4">Figure 23. A photo with Associate Chief Physician Yanwu Zhang</div>
                  </div>
                  <div className="interview-summary">
                    <p>
                      1 Interview deepened understanding of breast cancer and emphasized early screening's importance.
                    </p>
                    <p>
                      2 Doctor endorsed project's potential and advised on sample quality, clinical collaboration, and ethics.
                    </p>
                    <p>
                      3 Feedback will guide project optimization for clinical application in early diagnosis and prevention.

                    </p>
                  </div>
                </div>
              </section>

              {/* 4.3.3 Interview with Laboratory Doctors */}
              <section id="laboratory-doctors" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.3.3 Interview with Laboratory Doctors
                  </div>
                </div>
                <div className="content-body">
                  <p>Interviewee : Li Sun</p>
                  <p>Character Profile: Engaged in clinical laboratory work and responsible for teaching the basics of clinical laboratory science and clinical hematology in the Department of Medical Laboratory Science at Zhengzhou University</p>
                  {/* 图片 */}
                  <div className="figure-item">
                    <img src={SWOTAnalysisFigure1} alt="Figure 24. A photo with Laboratory Doctor Li Sun" className="figure-image" />
                    <div className="h4">Figure 24. A photo with Laboratory Doctor Li Sun</div>
                  </div>
                  <div className="interview-summary">
                    <p>
                      1 Exosome detection and magnetic bead technology show strong potential for early breast cancer screening, yet require optimization for clinical use.
                    </p>
                    <p>
                      2 Key improvements needed: standardized sample processing, automated adaptation, cost control, and technical reproducibility.
                    </p>
                    <p>
                      3 Next steps: refine protocols, enhance lab collaboration, and ensure the method becomes operable and scalable for practical clinical adoption.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4.3.4 Interview with Clinical Doctors in Other Countries */}
              <section id="interview-countries" className="view-subsection">
                <div className="content-section-header">
                  <div className="h3">
                    4.3.4 Interview with Clinical Doctors in Other Countries
                  </div>
                </div>
                <div className="content-body">
                  <div className="h3">1. Fundamental Adjustment of Clinical Priorities</div>
                  <p>Key Feedback: Professor Youyong Lü, Chief Physician Yanwu Zhang, and other clinicians repeatedly emphasized that for a screening tool, "specificity is more critical than sensitivity" to minimize false-positive risks. Concurrently, laboratory medicine doctor Li Sun stressed that "Standardized Operating Procedures (SOPs)" are crucial for reliable results.</p>
                  <br />
                  <p>Project Impact: This prompted a strategic shift in our R&D focus, moving from "pursuing pure performance metrics" to "ensuring the credibility and reproducibility of results." We committed to establishing and strictly implementing SOPs, and prioritized optimizing specificity as the highest experimental priority.</p>
                  <div className="h3">2. Clarification of Application Scenarios and Validation Pathways</div>
                  <p>Key Feedback: Doctors advised initially validating the technology preferentially in "high-risk groups" and considering integration with community screening. They pointed out that efficacy must ultimately be proven through "large-scale clinical cohorts."</p>
                  <p>Project Impact: This outlined a clear translation pathway for us. We adjusted our project narrative and promotion strategy, positioning screening for high-risk groups as the core application scenario. We also began planning long-term collaborations with hospitals to prepare for future clinical studies.</p>

                </div>
              </section>
            </div>
          </div>
        </section>

        {/* 4.4 Interview with Breast Surgeons */}
        <section id="interview-with-breast-surgeon" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.4 Interview on the Selection of Breast Cancer Cell Lines</div>
            </div>
            <p>This section features interviews with members of the public, breast cancer patients, and their families.</p>
            <p>Their feedback focuses on ensuring our technological solution is user-friendly, accessible, and genuinely addresses user concerns, which is fundamental for the project's social acceptance.</p>
            <div className="content-body">
              <div className="interview-card reverse">
                <div className="interview-content">
                  {/* 4.4.1 Interview with Public Representative */}
                  <section id="interview-with-public-representative" className="interview-section">
                    <div className="interview-info">
                      <div className="h3">4.4.1 Interview with Public Representative</div>
                      <p>Interviewee: A member of the public</p>
                      {/* 图片 */}
                      <div className="figure-item">
                        <img src={SWOTAnalysisFigure1} alt="Figure 25. Public Interview" className="figure-image" />
                        <div className="h4">Figure 25. Public Interview</div>
                      </div>
                      <div className="interview-content">
                        <p>
                          1 Public reluctance toward breast cancer screening stems from fear of pain, risk avoidance, and complex procedures.
                        </p>
                        <p>
                          2 Non-invasive blood tests are preferred for convenience but require improved accuracy and cost-effectiveness.
                        </p>
                        <p>
                          3 Effective science communication should emphasize quantitative benefits of early screening and provide actionable guidance to boost participation.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* 4.4.2 Interview with Breast Surgeons */}
                  <section id="interview-with-breast-surgeons" className="interview-section">
                    <div className="interview-info">
                      <div className="h3">4.4.2 Interview with Breast Surgeons</div>
                      <p>Interviewees：Patients and their families</p>
                      <div className="interview-summary">
                        <p>
                          1 Patients emphasized the need for convenient, non-invasive early screening and expressed cautious interest in exosome technology, pending improved accuracy and cost.
                        </p>
                        <p>
                          2 Treatment priorities included reduced side effects, precision therapy, lower costs, and better insurance coverage.
                        </p>
                        <p>
                          3 Recovery relied on active rehabilitation, nutrition, and mental health support, highlighting patient-centered insights for improving care.
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* 4.4.3 Feedback & Impact */}
                  <section id="feedback-and-impact" className="interview-section">
                    <div className="interview-info">
                      <div className="h3">4.4.3 Feedback & Impact</div>
                      <div className="h3">1. Reshaping Product Positioning and User Experience</div>
                      <p>Key Feedback: The public generally expressed reluctance towards traditional screening due to "fear of pain" and "complex procedures", showing a strong preference for detection methods that are "non-invasive, convenient, and low-cost". Patients and their families expressed deepest concern regarding the "accuracy" and "cost" of the test.</p>
                      <p>Project Impact: These voices directly drove our product design philosophy. We defined the direction for a "home-sampling" product prototype and established "cost control (targeting &lt;¥200 per test)" and "simplified operation" as core design goals, equal in importance to technical performance.</p>
                      <div className="h3">2. Integration of Communication Strategies and Psychological Care</div>
                      <p>Key Feedback: Interviews revealed user "fear" of screening, concerns about "privacy", and (for male patients) "social stigma".</p>
                      <p>Project Impact: In all our science communication efforts, we emphasized the benefits of early screening and provided clear operational guidance. Simultaneously, we proactively planned for post-test support channels for positive results and incorporated strict privacy protection measures into our design, directly addressing users' emotional needs.</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.5 Summary of the interview */}
        <section id="summary-of-the-interview" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">4.5 Summary of the interview</div>
            </div>
            <div className="content-body">
              <p>In conclusion, these systematic interviews form the three pillars of our project's iteration: Technical experts ensured scientific depth, clinical doctors outlined the scope of application, and patients and the public provided the technology with its human warmth.</p>
              <p>The feedback from these three aspects is complementary and indispensable, working together to shape our breast cancer screening project from a preliminary concept into a responsible innovation solution that embodies technical foresight, clinical practicality, and social inclusivity.</p>
              <div className="interview-card">
                <div className="interview-image">
                  <img src={InterviewFigure5} alt="Interview with Professor Hongmei Geng" />
                </div>
                <div className="interview-content">
                  <div className="interview-info">
                    <div className="h3">Hongmei Geng</div>
                    <p className="affiliation">Engaged in research on nano-oncology diagnosis and treatment, focusing on how to use enzyme-free amplification systems such as HCR to give nanomaterials higher detection sensitivity</p>
                    <p className="details">Figure 14. Interview with Professor Hongmei Geng</p>
                  </div>
                  <div className="interview-summary">
                    <p>The four-marker HCR simultaneously amplifies signals of CD63, CD81, CD9, and EpCAM through multiplexed hybridization chain reaction, significantly improving detection sensitivity and specificity.</p>
                    <p>This method avoids the risk of missed detection associated with traditional single-marker approaches and is suitable for the accurate identification of tumor exosomes in complex clinical samples.</p>
                    <p>The modular design facilitates integration with other detection modules (such as RCA and Cas14), providing multiple verification safeguards for early breast cancer diagnosis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 5 */}
    <div id="integrated-report-on-breast-health" className="view-content">
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
                The "Protecting Breast Health" survey focused on the cognition, behaviors, and popular science needs regarding breast health knowledge.
              </p>
              <p>Data was collected through online questionnaires, with 200 valid responses received, covering a diverse group of people, providing a basis for optimizing breast health science popularization.</p>
              <div className="pdf-iframe-wrapper">
                <object
                  data={SurveyPDF}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  aria-label="Survey PDF Document"
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
                            <img src={IntegratedReportFigure1} alt="Figure 26. The Results of the Survey Questionnaire" className="figure-image" />
                            <div className="h4">Figure 26. The Results of the Survey Questionnaire</div>
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
                            <div className="h4">Figure 27.1 Screening and Prevention Behaviors</div>
                          </div>
                          <div className="figure-item">
                            <img src={IntegratedReportFigure2_2} alt="Screening and Prevention Behaviors Figure 2.2" className="figure-image" />
                            <div className="h4">Figure 27.2 Screening and Prevention Behaviors</div>
                          </div>
                          <div className="figure-item">
                            <img src={IntegratedReportFigure2_3} alt="Screening and Prevention Behaviors Figure 2.3" className="figure-image" />
                            <div className="h4">Figure 27.3 Screening and Prevention Behaviors</div>
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
                            <div className="h4">Figure 28.1 The Results of the Survey Questionnaire</div>
                          </div>
                          <div className="figure-item">
                            <img src={IntegratedReportFigure3_2} alt="Figure 3. The Results of the Survey Questionnaire" className="figure-image" />
                            <div className="h4">Figure 28.2 The Results of the Survey Questionnaire</div>
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
        <section id="feedback-iteration-regarding-insufficient-awareness-of-male-breast-cancer" className="view-section">
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
                    {/* 图片 */}
                    <div className="figure-item">
                      <img src={FeedbackIterationContentFigure1} alt="Figure 1. Conduct Science Popularization for the Male Group" className="figure-image" />
                      <div className="h4">Figure 29. Conduct Science Popularization for the Male Group</div>
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
        <section id="feedback-iteration-on-technical-optimization-and-reliability-improvement" className="view-section">
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
    <div id="hp-driven-redesign-of-external-work" className="view-content">
      <div className="content-header">
        <div className="h1">7 HP-Driven Redesign of external work</div>
      </div>

      <div className="content-body">
        <p>
          The insights gathered through our Human Practices did not merely influence our laboratory research; they fundamentally reshaped our external activities and strategic framework.
        </p>
        <p>
          This section demonstrates how feedback directly guided the redesign of our education, collaboration, safety, and ethical policies, ensuring all external-facing work is deeply integrated with societal needs.
        </p>

        {/* 7.1 Education for Students: Inspiring the Next Generation */}
        <section id="education-outreach-from-dissemination-to-dialogue" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">7.1 Education & Outreach: From Dissemination to Dialogue</div>
            </div>
            <div className="content-body">
              <p>Our educational strategy evolved from one-way knowledge transfer to a dynamic, feedback-driven dialogue, ensuring our outreach was both engaging and effective.</p>
              <p>Our initial plan involved standard popular science lectures. However, survey data revealed that 85% of the public found existing science communication formats "dry and difficult to understand.</p>
              <p>This clear feedback necessitated a complete strategic pivot.</p>
              <p>Consequently, we undertook a comprehensive redesign. First, we replaced lectures with interactive workshops, board games, and hands-on experiments.</p>
              <p>This shift was directly validated by significantly higher engagement and positive feedback from participants across all age groups. </p>
              <p>Second, we focused on real-time optimization during implementation.</p>
              <p>For instance, during a DNA science pop-up class, a primary student's question—"Can the DNA helix break?"—prompted us to refine the accuracy and relatability of all our scientific analogies across educational materials. Finally, we segmented our communication channels based on data.</p>
              <p>Surveys indicated that 59.3% of young people preferred short videos, while 40.7% of those over 50 favored community lectures.</p>
              <p>This led us to develop a tiered communication system, producing animated shorts for social media while maintaining in-person lectures for older demographics.</p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_1} alt="Figure 30. Primary Education" className="figure-image" />
                  <div className="h4">Figure 30. Primary Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_2} alt="Figure 30. Primary Education" className="figure-image" />
                  <div className="h4">Figure 30. Primary Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_1} alt="Figure 30. Primary Education" className="figure-image" />
                  <div className="h4">Figure 30. Primary Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_2} alt="Figure 30. Primary Education" className="figure-image" />
                  <div className="h4">Figure 30. Primary Education</div>
                </div>
              </div>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_1} alt="Figure 31. Secondary Education" className="figure-image" />
                  <div className="h4">Figure 31. Secondary Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_2} alt="Figure 31. Secondary Education" className="figure-image" />
                  <div className="h4">Figure 31. Secondary Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_1} alt="Figure 31. Secondary Education" className="figure-image" />
                  <div className="h4">Figure 31. Secondary Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_2} alt="Figure 31. Secondary Education" className="figure-image" />
                  <div className="h4">Figure 31. Secondary Education</div>
                </div>
              </div>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_1} alt="Figure 32. University and Community Education" className="figure-image" />
                  <div className="h4">Figure 32. University and Community Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_2} alt="Figure 32. University and Community Education" className="figure-image" />
                  <div className="h4">Figure 32. University and Community Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_1} alt="Figure 32. University and Community Education" className="figure-image" />
                  <div className="h4">Figure 32. University and Community Education</div>
                </div>
                <div className="figure-item">
                  <img src={IntegratedReportFigure3_2} alt="Figure 32. University and Community Education" className="figure-image" />
                  <div className="h4">Figure 32. University and Community Education</div>
                </div>
              </div>
              <div className="figure-item">
                <img src={IntegratedReportFigure3_2} alt="Figure 33. Professional Education" className="figure-image" />
                <div className="h4">Figure 33. Professional Education</div>
              </div>
              <div className="figure-item">
                <img src={IntegratedReportFigure3_2} alt="Figure 34. Online Education" className="figure-image" />
                <div className="h4">Figure 34. Online Education</div>
              </div>
            </div>
            <p>Ultimately, education itself became a two-way feedback loop. We not only disseminated knowledge but also used these interactions as a live channel to test messaging, identify knowledge gaps, and continuously refine our public engagement strategy.</p>
          </div>
        </section>

        {/* 7.2 Collaboration & Partnership: Building a Feedback-Informed Network */}
        <section id="collaboration-partnership" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">7.2 Collaboration & Partnership: Building a Feedback-Informed Network</div>
            </div>
            <div className="content-body">
              <p>
                We moved beyond general networking to establish strategic, purpose-driven partnerships, each designed to address a specific knowledge gap or challenge identified through our HP analysis.
              </p>
              <p>
                Our initial approach to collaboration was relatively broad. However, our SWOT analysis clearly highlighted key challenges: "difficulties in translating scientific research achievements" and "uneven distribution of medical resources." We needed targeted collaborations to address these issues.
              </p>
              <p>
                Therefore, we reshaped our collaborations with clear objectives. To bridge the "translation gap," we partnered with Antu Biology. This provided systematic training on IVD regulatory pathways, enabling us to integrate compliance requirements into our R&D and quality control processes from an early stage. For technical validation and optimization, we engaged in exchanges with the UTokyo iGEM team, focusing specifically on CRISPR-Cas system selection and optimization, which provided alternative strategies for our signal amplification module. To accurately understand clinical needs, we worked closely with the Third Affiliated Hospital of Zhengzhou University. Feedback from breast surgeons and laboratory doctors emphasizing "specificity over sensitivity" and "standardized operating procedures" directly guided our experimental priorities and protocol development.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 35. Team-to-Team Technical Exchange" className="figure-image" />
                  <div className="h4">Figure 35. Team-to-Team Technical Exchange</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 35. Team-to-Team Technical Exchange" className="figure-image" />
                  <div className="h4">Figure 35. Team-to-Team Technical Exchange</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 35. Team-to-Team Technical Exchange" className="figure-image" />
                  <div className="h4">Figure 35. Team-to-Team Technical Exchange</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 35. Team-to-Team Technical Exchange" className="figure-image" />
                  <div className="h4">Figure 35. Team-to-Team Technical Exchange</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 35. Team-to-Team Technical Exchange" className="figure-image" />
                  <div className="h4">Figure 35. Team-to-Team Technical Exchange</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 35. Institutional & Expert Collaboration" className="figure-image" />
                  <div className="h4">Figure 35. Institutional & Expert Collaboration</div>
                </div>
              </div>

              <div className="figure-container">
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 36. Educational & Outreach Collaboration" className="figure-image" />
                  <div className='h4'>Figure 36. Educational & Outreach Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 36. Educational & Outreach Collaboration" className="figure-image" />
                  <div className='h4'>Figure 36. Educational & Outreach Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 36. Educational & Outreach Collaboration" className="figure-image" />
                  <div className='h4'>Figure 36. Educational & Outreach Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 36. Institutional & Expert Collaboration" className="figure-image" />
                  <div className='h4'>Figure 36. Institutional & Expert Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 36. Educational & Outreach Collaboration" className="figure-image" />
                  <div className='h4'>Figure 36. Educational & Outreach Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 36. Educational & Outreach Collaboration" className="figure-image" />
                  <div className='h4'>Figure 36. Educational & Outreach Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 36. Educational & Outreach Collaboration" className="figure-image" />
                  <div className='h4'>Figure 36. Educational & Outreach Collaboration</div>
                </div>
              </div>


              <div className="figure-container">
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 37. Institutional & Expert Collaboration" className="figure-image" />
                  <div className='h4'>Figure 37. Institutional & Expert Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 37. Institutional & Expert Collaboration" className="figure-image" />
                  <div className='h4'>Figure 37. Institutional & Expert Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 37. Institutional & Expert Collaboration" className="figure-image" />
                  <div className='h4'>Figure 37. Institutional & Expert Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 37. Institutional & Expert Collaboration" className="figure-image" />
                  <div className='h4'>Figure 37. Institutional & Expert Collaboration</div>
                </div>
                <div className="figure-item">
                  <img src={EducationFigure2_1_1} alt="Figure 37. Institutional & Expert Collaboration" className="figure-image" />
                  <div className='h4'>Figure 37. Institutional & Expert Collaboration</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7.3 Safety, Ethics & Policy: A Proactive Framework */}
        <section id="safety-ethics-policy" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">7.3 Safety, Ethics & Policy: A Proactive Framework</div>
            </div>
            <div className="content-body">
              <p>
                Insights from patients and experts transformed our approach to safety and ethics from a reactive compliance checklist into a proactive, human-centered design framework.
              </p>
              <p>
                Initially, our focus was on standard laboratory safety protocols. However, interviews with patients revealed deeper concerns: anxiety about false-positive results, data privacy, and the psychological burden associated with screening.
              </p>
              <p>
                This feedback drove a comprehensive redesign across all fronts. Regarding product safety and user trust, in response to user fears, we prioritized biocompatible materials and designed a simple, "foolproof" testing procedure to minimize operational errors. Simultaneously, we established clear post-test support channels to counsel users with positive results, directly addressing the anxiety highlighted in interviews. In terms of data ethics, prompted by patient concerns over privacy, we implemented strict informed consent and data anonymization protocols from the outset, exceeding basic regulatory requirements. For regulatory foresight, consultations with IVD industry experts made us aware of the "policy lag" threat. Consequently, we proactively studied FDA and CE regulatory pathways, ensuring our development process and documentation align with future medical device approval standards.
              </p>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={EducationFigure3_1_1} alt="Figure 38. Laboratory Safety" className="figure-image" />
                  <div className='h4'>Figure 38. Laboratory Safety</div>
                </div>
              </div>
              <p>Ultimately, safety and ethics became the cornerstone of public trust. By embedding these considerations, informed by Human Practices feedback, into our design philosophy, we are building not just an effective test, but a responsible, trustworthy, and compassionate healthcare solution.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 8 */}
    <div id="spread" className="view-content">
      <div className="content-header">
        <div className="h1">8 Spread</div>
      </div>
      <div className="content-body">
        <p>
          In the healthcare field, the dissemination of disease awareness and the implementation of technological innovation often go hand in hand.

        </p>
        <p>
          When we identified, through online information and public exchanges, the importance of early breast cancer diagnosis and the widespread lack of public science education, we resolved to build a multi-dimensional, comprehensive science education and promotion system with the goal of "bridging the knowledge gap and promoting technological accessibility."
        </p>

        {/* 8.1 Online Matrix: Breaking Down Information Barriers with New Media */}
        <section id="online-matrix" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">8.1 Online Matrix: Breaking Down Information Barriers with New Media</div>
            </div>
            <div className="content-body">
              <p>
                We established a dual-platform communication matrix comprising the iGEM-ZZU WeChat public account and a YouTube short-form video channel. On the public account, we launched a "Breast Cancer Early Diagnosis" column, using accessible language to explain cutting-edge detection technologies like CRISPR—for instance, translating "mammography" into "calcification tracking" and using comic-style diagrams to illustrate technical principles. Simultaneously, we serialized "ZZU Team's Progress in the Breast Cancer Early Diagnosis Project," conveying key messages such as "early diagnosis and treatment can increase survival rates by 40%" through real-world scenarios. The short-form video platform focused on "bite-sized science," producing lightweight content like "Understanding CRISPR in 2 Minutes" and "ZZU-iGEMers' Vlogs." Feedback in the comments sections confirmed the reach and impact of these science communication efforts.
              </p>
              {/* 图片 */}
              <div className="figure-container">
                <div className="figure-item">
                  <img src={SpreadFigure1_1} alt="Figure 39. iGEM-ZZU WeChat Public Account" className="figure-image" />
                  <div className='h4'>Figure 39. iGEM-ZZU WeChat Public Account</div>
                </div>
              </div>
              <div className="figure-container">
                <div className="figure-item">
                  <img src={SpreadFigure1_2} alt="Figure 40. YouTube Short-form Video Channel" className="figure-image" />
                  <div className='h4'>Figure 40. YouTube Short-form Video Channel</div>
                </div>
              </div>
              <p>
                This content was not created in isolation but drew on the operational logic of excellent medical science accounts within the industry—blending the rigor of professional institutional accounts with the communication skills of health Key Opinion Leaders (KOLs), allowing complex knowledge to permeate public awareness in an engaging and popular format.
              </p>
            </div>
          </div>
        </section>

        {/* 8.2 Offline Scenarios: Integrating Science into the Fabric of Daily Life */}
        <section id="offline-scenarios" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">8.2 Offline Scenarios: Integrating Science into the Fabric of Daily Life</div>
            </div>
            <div className="content-body">
              <p>We extended our science education efforts from online to offline, creating "u     In hospitals and communities, we organized public welfare pop-up events for breast health, using models to demonstrate breast anatomy, allowing residents to visually understand "why regular screening can interrupt the cancer progression process." On university campuses, we set up "interactive science booths" featuring quick Q&As, puzzle games, board games, warm message walls, and other interactive installations. These transformed academic concepts like five-year survival rates and pathological subtypes into gamified content that young people could participate in and share.
              </p>
              {/* 图片 */}
              <div className="figure-container">
                <div className="figure-item">
                  <img src={SpreadFigure2_1} alt="Figure 41. Offline Scenarios" className="figure-image" />
                  <div className='h4'>Figure 41. Offline Scenarios</div>
                </div>
                <div className="figure-item">
                  <img src={SpreadFigure2_1} alt="Figure 41. Offline Scenarios" className="figure-image" />
                  <div className='h4'>Figure 41. Offline Scenarios</div>
                </div>
                <div className="figure-item">
                  <img src={SpreadFigure2_1} alt="Figure 41. Offline Scenarios" className="figure-image" />
                  <div className='h4'>Figure 41. Offline Scenarios</div>
                </div>
                <div className="figure-item">
                  <img src={SpreadFigure2_1} alt="Figure 41. Offline Scenarios" className="figure-image" />
                  <div className='h4'>Figure 41. Offline Scenarios</div>
                </div>
                <div className="figure-item">
                  <img src={SpreadFigure2_1} alt="Figure 41. Offline Scenarios" className="figure-image" />
                  <div className='h4'>Figure 41. Offline Scenarios</div>
                </div>
              </div>

              <p>
                More innovatively, we  : in primary and secondary schools, we conducted "Strawberry DNA Extraction" experiments, using the "code of life in fruit" as an analogy for "breast cancer biomarker detection," planting the seeds of scientific exploration. In middle schools, we held cocktail receptions, using a crossover format of "molecular gastronomy + medical knowledge" to explain the link between diet and breast health. We organized high school students to visit human anatomy specimen museums, linking breast specimens to explanations of CRISPR technology's application in breast cancer detection, thereby helping future potential healthcare audiences build an early understanding of "technology for the people."
              </p>
            </div>
          </div>
        </section>

        {/* 8.3 Two-Way Linkage: From "Knowledge Transfer" to "Trust Building" */}
        <section id="two-way-linkage" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">8.3 Two-Way Linkage: From "Knowledge Transfer" to "Trust Building"</div>
            </div>
            <div className="content-body">
              <p>
                Online science communication helped the public recognize that breast cancer is not invincible and that early diagnosis is key. Offline interactive experiences turned technology from a laboratory concept into a tangible solution. The linkage between these two ultimately aims to create a "public-healthcare-technology" trust loop: when people learn about the value of early breast cancer diagnosis through science communication, they naturally develop an interest in the CRISPR detection technology our team is developing. Conversely, the professionalism of the technology lends authority to the science content, creating a virtuous cycle where "science education raises awareness, and technology meets the demand."
              </p>
              <p>
                In the future, we will continue to deepen the integrated model of "content-scenario-technology," ensuring that breast cancer early diagnosis education is both warm and profound, and enabling cutting-edge testing technology to truly move from the laboratory to every corner where it is needed.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
    {/* 9 */}
    <div id="inclusiveness" className="view-content">
      <div className="content-header">
        <div className="h1">9 Inclusiveness Design</div>
      </div>
      <div className="content-body">
        <p>Our iGEM project deeply recognizes that true innovation lies not only in technological breakthroughs but also in ensuring that the technology is inclusive and benefits everyone. We have worked systematically to break down barriers to public engagement with synthetic biology and translate cutting-edge science into equitable and accessible social benefits.</p>
        {/* 9.1 Inclusiveness Overview */}
        <section id="inclusiveness-overview" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">9.1 Inclusiveness Overview</div>
            </div>
            <div className="content-body">
              <p>
                The gold-standard lateral flow biosensor (LFB) we designed integrates multiple marker proteins to cover various breast cancer subtypes as comprehensively as possible during detection, thereby reducing false negatives caused by tumor heterogeneity. This multi-target detection approach ensures that patients with rare or atypical breast cancers are not excluded from early diagnosis. Additionally, the test strip is simple to operate and does not rely on large instruments, making it particularly suitable for elderly patients, people in primary-care or remote areas, and those with limited mobility—effectively lowering diagnostic barriers caused by uneven distribution of medical resources. We are also exploring the possibility of using non-invasive samples (such as saliva or urine) to provide a more user-friendly testing pathway for special populations, including individuals with coagulation disorders or mucosal sensitivity.              </p>
            </div>
          </div>
        </section>


        {/* 9.2 Community Dialogues */}
        <section id="community-dialogues" className="view-section">
          <div className="view-section-content">
            <div className="content-section-header">
              <div className="h2">9.2 Community Dialogues</div>
            </div>
            <div className="content-body">
              {/* 9.2.1 Inclusiveness of Women and Patient Groups */}
              <section id="inclusiveness-of-women-and-patient-groups" className="view-section">
                <div className="content-section-header">
                  <div className="h3">9.2.1 Inclusiveness of Women and Patient Groups</div>
                </div>
                <div className="content-body">
                  <p>
                    As breast cancer is one of the most common cancers among women globally, we have always placed women and patients at the core of our practice. Through surveys and interviews, we specifically collected feedback from breast cancer patients and their families to gain a deeper understanding of the challenges they face in diagnosis, treatment, and psychological well-being. For example, patients often express concerns about the complexity and high cost of detection methods, as well as the anxiety associated with medical visits. By listening to these voices, we have prioritized simplicity of use, low psychological burden, and accessibility in our product design, striving to enable women to access health information in a comfortable and safe environment. Furthermore, during outreach activities on International Women’s Day, we integrated breast health education with messages of self-care, helping more women recognize the importance of early detection.                  </p>
                  {/* 图片 */}
                  <div className="figure-container">
                    <div className="figure-item">
                      <img src={SpreadFigure2_1} alt="Figure 41. Offline Scenarios" className="figure-image" />
                      <div className='h4'>Figure 41. Offline Scenarios</div>
                    </div>
                  </div>
                </div>

              </section>

              {/* 9.2.2 Inclusiveness of Male Breast Cancer Patients */}
              <section id="inclusiveness-of-male-breast-cancer-patients" className="view-section">
                <div className="content-section-header">
                  <div className="h3">9.2.2 Inclusiveness of Male Breast Cancer Patients</div>
                </div>
                <div className="content-body">
                  <p>
                    Although breast cancer is more common in women, men can also develop the disease. However, due to its lower incidence, male breast cancer is often overlooked. Male patients not only face diagnostic and treatment challenges but may also endure psychological stress and social stigma stemming from limited public awareness. Our detection system, based on exosome biomarkers, is not gender-specific and is equally applicable to male patients. In our human practices, we have specifically emphasized in science communication that "men can also get breast cancer," helping to dispel misconceptions and biases. This reflects our attention to minority groups and expands the project’s applicability and social value.                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* 9.3 Educational Practices */}
        <section id="educational-practices" className="view-section">
          <div className="content-section-header">
            <div className="h2">9.3 Educational Practices</div>
          </div>
          <div className="content-body">
            <p>
              Educational practices play a crucial role in promoting inclusiveness and equity in breast cancer care. By providing comprehensive training and support to both women and patient groups, we can equip them with the knowledge and skills needed to make informed decisions about their health. This, in turn, can help to reduce the incidence of breast cancer and improve the overall quality of life for all women.
            </p>
            {/* 图片 */}
            <div className="figure-container">
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 43. Educational Practices for Different Age Groups" className="figure-image" />
                <div className='h4'>Figure 43. Educational Practices for Different Age Groups</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 43. Educational Practices for Different Age Groups" className="figure-image" />
                <div className='h4'>Figure 43. Educational Practices for Different Age Groups</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 43. Educational Practices for Different Age Groups" className="figure-image" />
                <div className='h4'>Figure 43. Educational Practices for Different Age Groups</div>
              </div>
            </div>
          </div>
        </section>
        {/* 9.4 Breaking Disciplinary Cultural Boundaries */}
        <section id="breaking-disciplinary-cultural-boundaries" className="view-section">
          <div className="content-section-header">
            <div className="h2">9.4 Breaking Disciplinary Cultural Boundaries</div>
          </div>
          <div className="content-body">
            <p>
              In terms of communication and collaboration, we participated in international and domestic conferences such as the online exchange with the University of Tokyo, the World Gene Conference, and CCiC, engaging in discussions with teams from diverse cultural and disciplinary backgrounds. Through these exchanges, we not only disseminated our project’s philosophy but also incorporated diverse feedback. Such cross-cultural and interdisciplinary cooperation demonstrates our respect and openness to different groups, avoiding the limitations of research confined to a single perspective.
            </p>
          </div>
        </section>
        {/* 9.5 Enhancing Sense of Participation and Belonging */}
        <section id="enhancing-sense-of-participation-and-belonging" className="view-section">
          <div className="content-section-header">
            <div className="h2">9.5 Enhancing Sense of Participation and Belonging</div>
          </div>
          <div className="content-body">
            <p>
              We also used cultural and creative products (team uniforms, badges, keychains, etc.) to enhance interaction between the team and the public. These products feature gender-neutral designs, allowing anyone to identify with and participate in the initiative. This design philosophy reflects our commitment to cultural inclusivity, making science not a privilege for the few but a endeavor that can be shared and embraced by all groups.
            </p>
            {/* 图片 */}
            <div className="figure-container">
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 44. Cultural and Creative Products" className="figure-image" />
                <div className='h4'>Figure 44. Cultural and Creative Products</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 44. Cultural and Creative Products" className="figure-image" />
                <div className='h4'>Figure 44. Cultural and Creative Products</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 44. Cultural and Creative Products" className="figure-image" />
                <div className='h4'>Figure 44. Cultural and Creative Products</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 44. Cultural and Creative Products" className="figure-image" />
                <div className='h4'>Figure 44. Cultural and Creative Products</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 44. Cultural and Creative Products" className="figure-image" />
                <div className='h4'>Figure 44. Cultural and Creative Products</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 44. Cultural and Creative Products" className="figure-image" />
                <div className='h4'>Figure 44. Cultural and Creative Products</div>
              </div>
              <div className="figure-item">
                <img src={SpreadFigure2_1} alt="Figure 44. Cultural and Creative Products" className="figure-image" />
                <div className='h4'>Figure 44. Cultural and Creative Products</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 10 */}
    <div id="reference" className="view-content">
      <div className="content-header">
        <div className="h1">10 Reference</div>
      </div>
      <div className="content-body">
        <p><span className="citation">[1]</span>Zheng R, Zhang S, Zeng H, Wang S, Sun K, Chen R, Li L, Wei W, He J. Cancer incidence and mortality in China, 2016. J Natl Cancer Cent. 2022 Feb 27;2(1):1-9. doi: 10.1016/j.jncc.2022.02.002. PMID: 39035212; PMCID: PMC11256658.</p>
        <p><span className='citation'>[2]</span>Coles CE, Earl H, Anderson BO, Barrios CH, Bienz M, Bliss JM, Cameron DA, Cardoso F, Cui W, Francis PA, Jagsi R, Knaul FM, McIntosh SA, Phillips KA, Radbruch L, Thompson MK, André F, Abraham JE, Bhattacharya IS, Franzoi MA, Drewett L, Fulton A, Kazmi F, Inbah Rajah D, Mutebi M, Ng D, Ng S, Olopade OI, Rosa WE, Rubasingham J, Spence D, Stobart H, Vargas Enciso V, Vaz-Luis I, Villarreal-Garza C; Lancet Breast Cancer Commission. The Lancet Breast Cancer Commission. Lancet. 2024 May 11;403(10439):1895-1950. doi: 10.1016/S0140-6736(24)00747-5. Epub 2024 Apr 15. PMID: 38636533.</p>
      </div>
    </div>






  </>
);




function IHP() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMenu, setActiveMenu] = useState('overview');
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  // const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
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
    // 1
    {
      id: 'introduction',
      title: '1 Introduction',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'problem-overview',
          title: '1.1 Problem Overview',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'solution',
          title: '1.2 Solution',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'scientific-challenges',
          title: '1.3 Scientific Challenges',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'social-challenges',
          title: '1.4Social Challenges',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 2 
    {
      id: 'iterative-symbiotic-practice-model',
      title: '2 Iterative Symbiotic Practice Model',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'overview',
          title: '2.1 Overview',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'needs-insight-layer',
          title: '2.2 Needs Insight Layer',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'practice-design-layer',
          title: '2.3 Practice Design Layer',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'implementation-interaction-layer',
          title: '2.4 Implementation Interaction Layer',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'feedback-integration-layer',
          title: '2.5 Feedback Integration Layer',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'iterative-optimization-layer',
          title: '2.6 Iterative Optimization Layer',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'summary',
          title: '2.7 Summary',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 3
    {
      id: 'stakeholder-swot-analysis',
      title: '3 Stakeholder SWOT Analysis',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'female-group',
          title: '3.1 Female Group',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'medical-institutions',
          title: '3.2 Medical Institutions',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'government-departments',
          title: '3.3 Government Departments',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'scientific-research-institutions',
          title: '3.4 Scientific Research Institutions',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 4
    {
      id: 'interview',
      title: '4 Interview',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'introduction',
          title: '4.1 Introduction',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'interviews-experts',
          title: '4.2 Interviews with Technical Experts ',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp',
          subMenus: [
            {
              id: 'interview-beads-were-chosen',
              title: '4.2.1 Interview on Why Exosomes and Magnetic Beads Were Chosen',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-target-proteins',
              title: '4.2.2 Interview on the Selection of the Four Target Proteins',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-chosen-pull',
              title: '4.2.3 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-the-selection-of-breast-cancer-cell-lines',
              title: '4.2.4 Interview on the selection of breast cancer cell lines',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-why-the-four-marker-hcr-signal-amplification-principle-was-established',
              title: '4.2.5 Interview on Why the Four-Marker HCR Signal Amplification Principle Was Established',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-principles-and-advantages-of-the-rca-method-module',
              title: '4.2.6 Interview on Principles and Advantages of the RCA Method Module',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-why-cas14-enzyme-was-chosen',
              title: '4.2.7 Interview on Why Cas14 Enzyme Was Chosen',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-why-cd63-aptamers-are-chosen-for-exosome-pull-2',
              title: '4.2.8 Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-the-application-of-rna-aptamers-in-exosome-capture-2',
              title: '4.2.9 Interview on the Application of RNA Aptamers in Exosome Capture',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-the-clinical-translation-potential-of-aptamer-based-diagnostics',
              title: '4.2.10 Interview on the Clinical Translation Potential of Aptamer-Based Diagnostics',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-the-commercial-viability-of-aptamer-based-exosome-capture-kits',
              title: '4.2.11 Interview on the Commercial Viability of Aptamer-Based Exosome Capture Kits',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-humanities-and-ethics',
              title: '4.2.12 Interview on Humanities and Ethics',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-on-feedback-and-impact',
              title: '4.2.13 Feedback & Impact',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            }
          ]
        },
        {
          id: 'interview-with-clinical-doctors',
          title: '4.3 Interviews with Clinical Doctors',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp',
          subMenus: [
            {
              id: 'clinical-doctors',
              title: '4.3.1 Interview with Clinical Doctors',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'surgeons',
              title: '4.3.2 Interview with Breast Surgeons',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'laboratory-doctors',
              title: '4.3.3 Interview with Laboratory Doctors',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-countries',
              title: '4.3.4 Interview with Clinical Doctors in Other Countries',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            }
          ]
        },
        {
          id: 'interview-with-breast-surgeons',
          title: '4.4 Interview with Breast Surgeons',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp',
          subMenus: [
            {
              id: 'interview-with-public-representative',
              title: '4.4.1 Interview with Public Representative',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'interview-with-breast-surgeons',
              title: '4.4.2 Interview with Breast Surgeons',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'feedback-and-impact',
              title: '4.4.3 Feedback & Impact',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
          ]
        },
        {
          id: 'summary-of-the-interview',
          title: '4.5 Summary of the interview',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }


      ]
    },
    // 5
    {
      id: 'integrated-report-on-breast-health',
      title: '5 Integrated Report on Breast Health',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'survey-overview',
          title: '5.1 Survey Overview',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'core-results',
          title: '5.2 Core Results',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp',
          subMenus: [
            {
              id: 'knowledge-cognition',
              title: '5.2.1 Knowledge Cognition',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'screening-prevention-behaviors',
              title: '5.2.2 Screening and Prevention Behaviors',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'popular-science-needs',
              title: '5.2.3 Popular Science Needs',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            }
          ]
        },
        {
          id: 'conclusion',
          title: '5.3 Conclusion',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 6
    {
      id: 'feedback-iteration',
      title: '6 Feedback and Iteration',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'feedback-iteration-regarding-insufficient-awareness-of-male-breast-cancer',
          title: '6.1 Feedback and Iteration Regarding Insufficient Awareness of Male Breast Cancer',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'feedback-iteration-on-technical-optimization-and-reliability-improvement',
          title: '6.2 Feedback and Iteration on Technical Optimization and Reliability Improvement',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'feedback-summary',
          title: '6.3 Summary',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 7
    {
      id: 'hp-driven-redesign-of-external-work',
      title: '7 HP-Driven Redesign of External Work',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'education-outreach-from-dissemination-to-dialogue',
          title: '7.1 Education & Outreach: From Dissemination to Dialogue',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'collaboration-partnership',
          title: '7.2 Collaboration & Partnership: Building a Feedback-Informed Network',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'safety-ethics-policy',
          title: '7.3 Safety, Ethics & Policy: A Proactive Framework',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 8
    {
      id: 'spread',
      title: '8 Spread',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'online-matrix',
          title: '8.1 Online Matrix: Breaking Down Information Barriers with New Media',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'offline-scenarios',
          title: '8.2 Offline Scenarios: Integrating Science into the Fabric of Daily Life',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'two-way-linkage',
          title: '8.3 Two-Way Linkage: From "Knowledge Transfer" to "Trust Building"',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 9
    {
      id: 'inclusiveness',
      title: '9 Inclusiveness Design',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        {
          id: 'inclusiveness-overview',
          title: '9.1 Inclusiveness Overview',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'inclusiveness-approaches',
          title: '9.2 Inclusiveness Approaches',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp',
          subMenus: [
            {
              id: 'inclusiveness-of-women-and-patient-groups',
              title: '9.2.1 Inclusiveness of Women and Patient Groups',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            },
            {
              id: 'inclusiveness-of-male-breast-cancer-patients',
              title: '9.2.2 Inclusiveness of Male Breast Cancer Patients',
              icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
            }
          ]
        },
        {
          id: 'educational-practices',
          title: '9.3 Educational Practices for Different Age Groups',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'breaking-disciplinary-cultural-boundaries',
          title: '9.4 Breaking Disciplinary and Cultural Boundaries',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        },
        {
          id: 'enhancing-sense-of-participation-and-belonging',
          title: '9.5 Enhancing Sense of Participation and Belonging',
          icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp'
        }
      ]
    },
    // 10
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
    setActiveMenu(menuId);
  };

  // 二级菜单点击
  const handleSubMenuClick = (menuId, subMenuId) => {
    scrollToSection(subMenuId);
    setActiveSubMenu(subMenuId);
    setActiveMenu(menuId);
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
                <img className={`menu-icon `} src={menu.icon} />
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && (
                <div className="submenu">
                  {menu.subMenus.map((subMenu) => (
                    <div key={subMenu.id} className="submenu-container">
                      <div
                        className="submenu-item"
                        onClick={() => handleSubMenuClick(menu.id, subMenu.id)}
                      >
                        <img className='menu-icon' src={subMenu.icon} />
                        <span className="submenu-text">{subMenu.title}</span>
                      </div>
                      {/* 三级菜单渲染 */}
                      {subMenu.subMenus && (
                        <div className="submenu-level3">
                          {subMenu.subMenus.map((subMenu3) => (
                            <div
                              key={subMenu3.id}
                              className="submenu-item-level3"
                              onClick={() => handleSubMenuClick(subMenu.id, subMenu3.id)}
                            >
                              <img className='menu-icon' src={subMenu3.icon} />
                              <span className="submenu-text-level3">{subMenu3.title}</span>
                            </div>
                          ))}
                        </div>
                      )}
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