import React from 'react'

export function IntegratedHumanPractices() {
  return (
  <>
      <div className="container my-4">
  {/* Section 1: Introduction and Problem Overview */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_1">Introduction and Problem Overview</h1>
      <p>
        <strong>
          "Science, technology and societal development must advance in synergy, with scientific progress being oriented towards the promotion of human dignity and social justice."
        </strong>
      </p>
      <p>
        ——(<em>UNESCO Science Report: Towards 2030</em>, Paris: UNESCO Publishing, 2015, p.12)
      </p>
      <h2>Problem Overview</h2>
      <p>
        In China, breast cancer has become a serious public health issue. Data from the National Cancer Center in 2023 shows that there are approximately 420,000 new cases of breast cancer in China each year, accounting for 21.6% of all malignant tumors in Chinese women, ranking first. Each year, about 120,000 people die from it, making it the fourth leading cause of cancer death among Chinese women (after lung cancer, gastric cancer, and liver cancer)<sup>[1]</sup>. Surveys indicate that various factors such as obesity (BMI ≥ 28), alcohol consumption, lack of exercise, environmental estrogens (plasticizers, pesticide residues), long-term stress, and depression have increased the incidence of breast cancer. The prevention and treatment of breast cancer face core challenges such as low coverage of breast cancer screening (the popularity rate of mammography screening is less than 30%), uneven distribution of medical resources, and sociocultural barriers. Given its profound impact on individual health and the healthcare system, addressing the challenges posed by breast cancer is crucial for improving the overall health status in China.
      </p>
      <img src="placeholder_image_1.jpg" alt="Top 10 Cancers by New Cases" className="img-fluid rounded mb-3 stats" />
      <p className="figure-caption">Figure 1. The top 10 cancer types by the number of new cases among Chinese women in 2020</p>
      <img src="placeholder_image_2.jpg" alt="Top 10 Cancers by Death Cases" className="img-fluid rounded mb-3 stats" />
      <p className="figure-caption">Figure 2. The top 10 cancer types by the number of death cases among Chinese women in 2020</p>
    </div>
  </div>

  {/* <!-- Section 2: Solution and Scientific/Social Challenges --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_2">Solution and Challenges</h1>
      <h2>Solution: Early Breast Cancer Screening through Parallel Scientific Innovation and Social Advocacy</h2>
      <p>
        Breast cancer poses a significant threat to women’s health worldwide. Despite remarkable advancements in medicine, low early diagnosis rates remain a critical challenge—while the 5-year survival rate for patients with early-stage (Stage I) breast cancer can reach 99%, it plummets to less than 30% for those with advanced-stage (Stage IV) disease. Therefore, popularizing early breast cancer screening across society is crucial for its prevention and treatment.
      </p>
      <h2>Scientific Challenges: Limitations of Existing Screening Technologies</h2>
      <p>
        Current breast cancer screening primarily relies on imaging techniques (e.g., mammography, ultrasound) and serum marker tests (e.g., CA15-3), but these methods have obvious drawbacks:
      </p>
      <p>
        <strong>Insufficient sensitivity:</strong> Mammography detects only about 65% of tumors in dense breast tissue, easily missing cases in young women.
      </p>
      <p>
        <strong>Poor accessibility:</strong> High-end equipment (e.g., MRI, liquid biopsy) is expensive and inaccessible in primary hospitals.
      </p>
      <p>
        <strong>Low timeliness:</strong> Traditional tests take several days to produce results, failing to meet the demand for rapid screening.
      </p>
      <p>
        To address these bottlenecks, our iGEM project aims to develop a low-cost, rapid, and highly sensitive test strip. By targeting the CD63 molecule on exosomes in samples, we will enable rapid breast cancer screening, overcoming the limitations of existing technologies.
      </p>
      <h2>Social Challenges: Insufficient Awareness and Weak Screening Consciousness</h2>
      <p>
        While advancing scientific research, we identified deeper social issues in breast cancer prevention through social surveys, questionnaires, and interviews:
      </p>
      <p>
        <strong>Public misconceptions:</strong> Over 60% of women believe "no family history = low risk" and neglect regular screening. In rural areas, approximately 70% of patients are diagnosed at intermediate or advanced stages, directly linked to a lack of health knowledge.
      </p>
      <p>
        <strong>Stigma and delayed medical care:</strong> Some patients avoid screening due to privacy concerns about breast examinations, leading to delayed diagnosis.
      </p>
      <p>
        <strong>Unequal distribution of medical resources:</strong> Breast cancer mortality rates are declining in developed countries, but remain high in developing countries due to inadequate screening access.
      </p>
      <p>
        Thus, with the dual mission of "technological innovation + social advocacy," we propose a three-in-one strategy of "<strong>scientific research, science popularization, and public welfare</strong>" to ensure science truly benefits all lives.
      </p>
      <p>
        We believe that breast cancer prevention is not only a scientific issue but also a social one. Through our iGEM project, we hope to promote the implementation of new technologies while raising public awareness of women’s health, ultimately achieving the goals of "popularizing early screening, democratizing knowledge, and normalizing care."
      </p>
    </div>
  </div>

  {/* <!-- Section 3: Integrated Report on Breast Health Surveys --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_3">Integrated Report on Breast Health - Related Surveys</h1>
      <h2>Survey Overview</h2>
      <p>
        The "Protecting Breast Health" survey focused on the cognition, behaviors, and popular science needs regarding breast health knowledge. Data was collected through online questionnaires, with 200 valid responses received, covering a diverse group of people, providing a basis for optimizing breast health science popularization.
      </p>
      <h2>Core Results</h2>
      <h3>Knowledge Cognition</h3>
      <p>
        <strong>Disease Awareness:</strong> 72.5% of respondents are aware of breast hyperplasia and breast cancer, while only 34.2% can identify the symptoms and causes of diseases such as breast fibroids and mastitis. Among the 18-30 age group, the awareness rate of lactational mastitis is 18.5%. 61.3% know the association with obesity, poor mood, and family history, but only 39.7% are aware that staying up late and a high-sugar, high-fat diet are risk factors. Men's overall cognition of high-risk factors is 24.8% lower than that of women.
      </p>
      <img src="placeholder_image_3.jpg" alt="Survey Questions and Response Statistics" className="img-fluid rounded mb-3 stats" />
      <p className="figure-caption">Figure 1. Survey Questions and Response Statistics</p>
      <p>
        <strong>Summary:</strong> The public has a certain understanding of common breast diseases, but there are gaps in knowledge about some diseases, especially among young people regarding specific diseases. Men's cognition is generally weak.
      </p>
      <h3>Improvement Plans</h3>
      <p>
        1. Produce interesting popular science short videos for young people, combining animations to explain the symptoms and causes of diseases such as mastitis;<br />
        2. Organize lectures on breast disease knowledge in communities and schools, inviting experts to answer questions on-site;<br />
        3. Publish graphic science popularization on social media, highlighting high-risk factors such as staying up late and diet;<br />
        4. Carry out health promotion activities for men, such as workplace health lectures, emphasizing that breast health is not gender-specific.
      </p>
      <h3>Screening and Prevention Behaviors</h3>
      <p>
        <strong>Screening Practices:</strong> 73.6% of women recognize the importance of screening. Among women over 40, 49.2% have regular (1-2 years) mammography/ultrasound examinations. Only 21.5% of women aged 20-30 perform self-examinations every year, and over 52.3% do not know the method. The participation rate of men in screening is 4.7%. 59.8% pay attention to breast health, but only 29.5% adhere to a healthy lifestyle (work and rest, diet, exercise). Over 41.2% find it difficult to practice long-term due to stress and lack of motivation, and only 24.6% actively search for popular science.
      </p>
      <img src="placeholder_image_4.jpg" alt="Survey Questions and Response Statistics" className="img-fluid rounded mb-3 stats" />
      <p className="figure-caption">Figure 2. Survey Questions and Response Statistics</p>
      <p>
        <strong>Summary:</strong> Women's awareness of screening has improved, but the self-examination rate of young women is low and their mastery of methods is insufficient. Men's participation is extremely low. Most people pay attention to it but fail to take action, and there is insufficient initiative to learn popular science.
      </p>
      <h3>Improvement Plans</h3>
      <p>
        1. Communities carry out self-examination training workshops for young women and distribute self-examination guide manuals;<br />
        2. Medical institutions provide free simple breast screening for men to improve their participation enthusiasm;<br />
        3. Develop a healthy lifestyle check-in applet with reward mechanisms to encourage persistence;<br />
        4. Push a series of popular science articles on medical platforms and social media to guide active learning.
      </p>
      <h3>Popular Science Needs</h3>
      <p>
        <strong>Content Preferences:</strong> 41.2% of respondents want "identification of early disease signals", 30.5% focus on "scientific preventive lifestyles", and 19.8% need "treatment and rehabilitation". The group over 55 has a prominent demand for "nursing related to diseases and aging" (accounting for 14.3%). 49.6% choose short videos/articles, 30.8% look forward to community lectures, and 19.6% prefer medical platform pushes. Young people like short videos (59.3%), while middle-aged and elderly people are more accepting of community lectures (40.7%).
      </p>
      <img src="placeholder_image_5.jpg" alt="Survey Questions and Response Statistics" className="img-fluid rounded mb-3 stats" />
      <p className="figure-caption">Figure 3. Survey Questions and Response Statistics</p>
      <p>
        <strong>Summary:</strong> Different age groups have differences in the demand for popular science content, and the identification of early signals has high attention.
      </p>
      <h3>Improvement Plans</h3>
      <p>
        1. Produce popular science content according to age stratification, creating animation popular science on early signal identification for young people;<br />
        2. Compile popular science manuals on disease and aging nursing for the elderly;<br />
        3. Cooperate with short video platforms to create popular science accounts;<br />
        4. Communities and hospitals regularly hold lectures and synchronize live broadcasts online to expand coverage.
      </p>
      <h2>Conclusion</h2>
      <p>
        The public has a certain basic understanding of breast health, but there are knowledge gaps, with prominent problems in young and male groups. The implementation of screening and prevention behaviors is poor, and the motivation for active learning is insufficient. The demand for popular science is not fully met, and there are obvious differences in content and channel needs among different age groups. In the future, it is necessary to target the knowledge weaknesses of different groups, customize personalized popular science content, accurately push through multiple channels, and innovate incentive methods to improve the public's enthusiasm for preventive behaviors, so as to comprehensively enhance the awareness and ability of the whole people in breast health protection.
      </p>
    </div>
  </div>

  {/* <!-- Section 4: Stakeholder SWOT Analysis --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_4">Stakeholder SWOT Analysis</h1>
      <p>
        The SWOT analysis was proposed by American management expert Albert Humphrey in the 1960s. Initially designed for the "Fortune 500 Enterprise Strategic Planning Project" of the Stanford Research Institute (SRI) in the United States, it was used to help enterprises analyze their competitive situation. Currently, it has been applied to various fields such as enterprise management, project planning, personal development, and public policy formulation. SWOT analysis is a strategic planning tool used to identify and analyze the Strengths, Weaknesses, Opportunities, and Threats of an organization or project. By comprehensively analyzing internal and external factors, SWOT analysis can help decision-makers formulate effective strategies and response measures. In our project, SWOT analysis is used to systematically evaluate the internal strengths and weaknesses, as well as external opportunities and threats, of core stakeholders such as women's groups, medical institutions, government departments, and scientific research institutions. It clarifies the role positioning of all parties, promotes the complementarity of advantages and integration of resources, and at the same time avoids risks and seizes opportunities in a targeted manner. This provides a basis for project planning, implementation, and optimization, and enhances the feasibility and effectiveness of the project.
      </p>
      <h2>Female Group</h2>
      <p><strong>Strengths:</strong> Growing willingness to actively participate in screening, which helps in the early detection of disease burden.</p>
      <p><strong>Weaknesses:</strong> Insufficient knowledge about early breast cancer screening and the existence of cognitive misunderstandings.</p>
      <p><strong>Opportunities:</strong> Strengthened social publicity and education, as well as support from new screening technologies and medical insurance.</p>
      <p><strong>Threats:</strong> The spread of false information may reduce women's trust in screening and their enthusiasm to participate.</p>
      <h2>Medical Institutions</h2>
      <p><strong>Strengths:</strong> Possess rich clinical experience and professional knowledge. Our early breast cancer screening test strip provides doctors with a new diagnostic tool.</p>
      <p><strong>Weaknesses:</strong> Screening equipment may be outdated or insufficient, medical staff have heavy workloads, and there are differences in screening levels among different institutions.</p>
      <p><strong>Opportunities:</strong> The test strip offers a convenient and cost-effective option for early breast cancer screening.</p>
      <p><strong>Threats:</strong> Risks of false positives and medical disputes related to screening.</p>
      <h2>Government Departments</h2>
      <p><strong>Strengths:</strong> Have the authority to formulate policies and allocate resources, and can strengthen supervision over the screening market.</p>
      <p><strong>Weaknesses:</strong> Policy formulation may be lagging, and uneven resource allocation may lead to insufficient screening services in some areas.</p>
      <p><strong>Opportunities:</strong> Promote the implementation of related strategies such as "Healthy China", cooperate with international organizations, and participate in global breast cancer prevention and control actions.</p>
      <p><strong>Threats:</strong> Limited financial funds, and there may be cases where policies are not fully implemented during the implementation process.</p>
      <h2>Scientific Research Institutions</h2>
      <p><strong>Strengths:</strong> Have professional scientific research talents and advanced scientific research equipment, and can collect a large amount of clinical data.</p>
      <p><strong>Weaknesses:</strong> Scientific research projects require large capital investment and have long cycles, and the process of transforming scientific research achievements into practical applications is relatively complex and difficult.</p>
      <p><strong>Opportunities:</strong> The government's support for scientific research projects is increasing, international scientific research cooperation is becoming more frequent, and emerging technologies such as big data and artificial intelligence are developing.</p>
      <p><strong>Threats:</strong> Fierce competition and issues related to intellectual property protection.</p>
      <img src="placeholder_image_6.jpg" alt="Stakeholder SWOT Analysis" className="img-fluid rounded mb-3 stats" />
      <p className="figure-caption">Figure 1. Stakeholder SWOT Analysis</p>
      <h2>Key Issues and Solutions</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Key Issues</th>
            <th>Solutions</th>
            <th>Key Measures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Women's insufficient awareness and low willingness to be screened</td>
            <td>Popular science promotion</td>
            <td>Short-video science popularization<br />Interviews and sharing with recovered patients</td>
          </tr>
          <tr>
            <td>High risk of false positives</td>
            <td>Technical optimization</td>
            <td>Standardized operation procedures<br />Improvement of test strip performance</td>
          </tr>
          <tr>
            <td>Uneven distribution of medical institution resources</td>
            <td>Policy support</td>
            <td>Special fund support<br />Doctor training</td>
          </tr>
          <tr>
            <td>Difficulties in transforming scientific research achievements</td>
            <td>Industry-university-research cooperation</td>
            <td>Patent application<br />Mass production with pharmaceutical companies</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* <!-- Section 5: Interview on Exosomes and Magnetic Beads --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_5">Interview on Why Exosomes and Magnetic Beads Were Chosen</h1>
      <h2>Purpose of the Interview</h2>
      <p>
        Through in-depth dialogue with experts, we aim to clearly explain the scientificity and rationality of two core choices in this project — namely why exosomes are selected as biomarkers for early screening of breast cancer, and why magnetic bead capture technology is used to isolate exosomes.
      </p>
      <p>
        <strong>Interview location:</strong> Office of XX<br />
        <strong>Interviewee expert:</strong> Professor XX<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview method:</strong> On-site interview<br />
        <strong>Interview time:</strong> 3:00 PM, May 7, 2025
      </p>
      <img src="placeholder_image_7.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h2>Interview Content</h2>
      <p>
        <strong>Interviewer:</strong> Among numerous tumor markers, what is <strong>the most prominent advantage</strong> of exosomes as a target for early screening of breast cancer?
      </p>
      <p>
        <strong>Professor XX:</strong> The core advantage is "<strong>early warning capability</strong>". Traditional markers such as CA153 often only significantly increase when the tumor grows to a certain size, and by then, it may no longer be in the very early stage. However, exosomes are different. As soon as cancer cells undergo malignant transformation, they secrete exosomes carrying their unique proteins and nucleic acids, which is equivalent to "spreading signals" in the blood. In our research, for some patients with very early breast cancer, abnormalities in blood exosomes were detected even before masses were found by mammography — this is an irreplaceable advantage for early screening.
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        The expert's analysis shows that exosomes are ideal early screening markers due to their clear early signals, stability, and easy accessibility; magnetic bead capture, with its high specificity and simple operation, has become the preferred technology for exosome isolation. In the future, it is necessary to improve performance through material optimization and process improvement, combine with existing screening methods, verify the effect in high-risk groups, and promote the popularization of the technology to truly realize the value of early screening.
      </p>
      <p>
        1. Exosomes are ideal for early screening due to clear signals, stability, and accessibility.<br />
        2. Magnetic bead capture is the preferred isolation method for its specificity and simplicity.<br />
        3. Future work requires optimizing processes, integrating methods, and validating in high-risk groups to enable widespread use.
      </p>
    </div>
  </div>

  {/* <!-- Section 6: Interview on Selection of Four Target Proteins --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_6">Interview on the Selection of the Four Target Proteins</h1>
      <h2>Purpose of the Interview</h2>
      <p>
        The "A Targeted Detection Platform for Breast Cancer Exosome Biomarkers" selects MMP-9, HER-2, PD-L1, and EpCAM on exosomes as target proteins, aiming to improve the precision of breast cancer diagnosis and treatment through multi-index combined analysis. This interview invites Professor XX to explore in depth the scientific rationale and clinical significance of choosing MMP-9, HER-2, PD-L1, and EpCAM on exosomes as target proteins.
      </p>
      <p>
        <strong>Interview Location:</strong> Office of XX<br />
        <strong>Interviewee:</strong> Professor XX<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview Method:</strong> On-site interview<br />
        <strong>Interview Time:</strong> 3:00 PM, May 9, 2025
      </p>
      <img src="placeholder_image_8.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h2>Interview Content</h2>
      <p>
        <strong>Interviewer:</strong> Hello, Professor. Our detection platform focuses on four proteins—MMP-9, HER-2, PD-L1, and EpCAM—on exosomes. From the perspective of breast cancer pathogenesis, <strong>what special significance does each of these proteins hold</strong>?
      </p>
      <p>
        <strong>Professor XX:</strong> Hello. The selection of these four proteins corresponds to key stages in the development of breast cancer. For example, <strong>EpCAM</strong> is a specific marker of epithelial cells. It is abnormally overexpressed in breast cancer cells, and particularly when the tumor progresses from an early stage to an invasive stage, the level of EpCAM carried by exosomes increases significantly, serving as an early signal indicating "malignant transformation of cells."
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        Through the dialogue with Professor XX, we <strong>clarified the scientific rationale for selecting MMP-9, HER-2, PD-L1, and EpCAM as exosomal target proteins</strong>—they reflect <strong>malignant transformation, driver gene status, metastatic potential, and immune microenvironment of breast cancer, respectively.</strong> Combined detection can improve diagnostic accuracy and treatment guidance value. Future efforts should focus on verifying critical thresholds through large-sample studies and optimizing technologies to enhance sensitivity and specificity, promoting their greater role in clinical practice.
      </p>
      <p>
        1. Four exosomal proteins (MMP-9/HER-2/PD-L1/EpCAM) reflect key breast cancer features for improved diagnosis and treatment guidance.<br />
        2. Their combined detection enhances accuracy and clinical utility.<br />
        3. Future needs: validate thresholds via large studies and optimize detection technology for broader clinical use.
      </p>
    </div>
  </div>

  {/* <!-- Section 7: Interview on CD63 Aptamers --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_7">Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down</h1>
      <h2>Purpose of the Interview</h2>
      <p>
        This interview invites Professor XX, a senior expert in the field of extracellular vesicle research, to analyze the scientific rationale and technical advantages of selecting CD63 and its aptamers as tools for exosome capture.
      </p>
      <p>
        <strong>Interview Location:</strong> Office of XX<br />
        <strong>Interviewee:</strong> Professor XX<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview Method:</strong> On-site interview<br />
        <strong>Interview Time:</strong> 5:00 PM, May 22, 2025
      </p>
      <img src="placeholder_image_9.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h2>Interview Content</h2>
      <p>
        <strong>Interviewer:</strong> Hello, Professor! Our platform uses CD63 aptamers to pull down exosomes. From the perspective of exosomal biological characteristics, <strong>why is CD63 suitable as a target for capture?</strong>
      </p>
      <p>
        <strong>Professor XX:</strong> Hello. The core reason why CD63 can become a "benchmark molecule" for exosome capture is that it serves as an "<strong>identity tag</strong>" for exosomes. As vesicles secreted by cells, exosomes are enriched with tetraspanin family proteins on their membranes, and CD63 is <strong>the most conserved and widely expressed member of this family.</strong> Whether exosomes are secreted by normal cells or breast cancer cells, the detection rate of CD63 exceeds 90%. This ensures that what we "fish out" are all genuine exosomes, reducing the mis capture of other vesicles (such as microvesicles).
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        The expert's analysis indicates that selecting CD63 as the exosome capture target, combined with the technical advantages of tumor-specific aptamers, enables efficient and specific enrichment of exosomes. Compared with antibodies, aptamers have greater advantages in stability, cost, and operational convenience. In the future, further optimization of modification processes and secondary enrichment strategies can improve the purity of tumor exosome capture, laying a solid foundation for early and accurate detection of breast cancer.
      </p>
      <p>
        1. CD63 and tumor-specific aptamers enable efficient exosome enrichment with superior stability, cost, and convenience over antibodies.<br />
        2. Future optimization of modification and secondary enrichment can improve tumor exosome purity.<br />
        3. This approach supports early, accurate breast cancer detection.
      </p>
    </div>
  </div>

  {/* <!-- Section 8: Interview with Breast Surgeons --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_8">Interview with Breast Surgeons</h1>
      <h2>Purpose of the Interview</h2>
      <p>
        Through a conversation with Dr. XX, we aim to gain an in-depth understanding of knowledge related to the etiology, pathological manifestations, treatment methods, prognosis, and screening methods of breast cancer, as well as the potential value and development direction of this project in clinical practice.
      </p>
      <p>
        <strong>Interview Location:</strong> Office of Breast Surgery, XX Hospital<br />
        <strong>Interviewee Expert:</strong> Dr. XX<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview Method:</strong> On-site interview<br />
        <strong>Interview Time:</strong> 5:00 PM, August 2, 2025
      </p>
      <img src="placeholder_image_10.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h2>Interview Content</h2>
      <p>
        <strong>Interviewer:</strong> Hello, Dr. [Doctor's Name]! Thank you very much for taking the time to accept our interview amidst your busy schedule. First of all, could you please introduce to us <strong>the common causes of breast cancer</strong>?
      </p>
      <p>
        <strong>Dr. [Doctor's Name]:</strong> Hello! The causes of breast cancer have not yet been fully clarified, but through years of research, it has been found that it is the result of the combined action of multiple factors. In terms of <strong>genetic factors</strong>, if there is a first-degree relative (such as a mother or sister) in the family who has breast cancer, an individual's risk of developing breast cancer will significantly increase. In addition, some <strong>gene mutations</strong>, such as BRCA1 and BRCA2 gene mutations, can also greatly increase the risk of the disease. Apart from genetics, <strong>hormone levels</strong> are also an important factor. For example, early menarche, late menopause, no childbirth or late childbirth, and no breastfeeding may all increase the risk of breast cancer due to the long-term effect of hormones such as estrogen in the body. In terms of <strong>lifestyle</strong>, long-term heavy drinking, obesity, lack of exercise, and excessive mental stress are also believed to be related to the occurrence of breast cancer.
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        Through this interview with Dr. [Doctor's Name], we have gained <strong>a deeper understanding of the etiology, pathological manifestations, treatment, prognosis, screening, and prevention of breast cancer</strong>. The doctor detailed the multiple pathogenic factors of breast cancer, the characteristics of different pathological types, the current comprehensive and individualized treatment plans, emphasized the importance of early screening for improving prognosis, and analyzed the existing screening methods. For our project, the doctor affirmed its potential advantages and put forward valuable suggestions, including paying attention to sample quality, strengthening clinical cooperation, focusing on the interpretation of detection results, and ethical issues. This information is of great guiding significance for the further development of our project. We will carefully listen to the doctor's suggestions, continuously improve the research plan, and strive to promote the clinical transformation of this screening method, contributing to the early diagnosis and prevention of breast cancer.
      </p>
      <p>
        1. Interview deepened understanding of breast cancer and emphasized early screening's importance.<br />
        2. Doctor endorsed project's potential and advised on sample quality, clinical collaboration, and ethics.<br />
        3. Feedback will guide project optimization for clinical application in early diagnosis and prevention.
      </p>
    </div>
  </div>

  {/* <!-- Section 9: Interview with Laboratory Doctors --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_9">Interview with Laboratory Doctors</h1>
      <h2>Purpose of the Interview</h2>
      <p>
        Early screening for breast cancer is crucial for improving patients' survival rates. As an important technical support department for disease diagnosis, the clinical laboratory plays a significant role in the implementation, optimization, and clinical validation of screening methods. On this occasion, we specially interviewed Dr. [Doctor's Name] from the Clinical Laboratory of XX Hospital to gain an in-depth understanding of the potential and challenges of this project in the testing process from the perspectives of practical operation of testing technologies, feasibility of clinical application, and laboratory standardization.
      </p>
      <p>
        <strong>Interview Location:</strong> Office of the Clinical Laboratory, XX Hospital<br />
        <strong>Interviewee Expert:</strong> Dr. XX<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview Method:</strong> On-site interview<br />
        <strong>Interview Time:</strong> 6:00 PM, August 2, 2025
      </p>
      <img src="placeholder_image_11.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h2>Interview Content</h2>
      <p>
        <strong>Interviewer:</strong> Hello, Dr. [Doctor's Name]! Thank you very much for taking the time to participate in this interview. Our project focuses on "A Targeted Detection Platform for Breast Cancer Exosome Biomarkers". First, we would like to ask: What are <strong>the main responsibilities of the clinical laboratory in breast cancer screening currently</strong>? What are the characteristics of <strong>commonly used detection technologies</strong>?
      </p>
      <p>
        <strong>Dr. [Doctor's Name]:</strong> Hello! The clinical laboratory is primarily responsible for <strong>sample testing and result analysis</strong> in breast cancer screening, serving as a critical link between clinical practice and diagnosis. Currently, commonly used auxiliary detection technologies include <strong>tumor marker testing (such as CA153, CEA)</strong> and <strong>hormone receptor testing (such as ER, PR)</strong>. These technologies have advantages: their operations are relatively mature, and the kits have a high degree of standardization, making them suitable for large-scale sample testing. However, their limitations are also obvious—for example, tumor markers lack strong specificity; some benign diseases may also cause elevated indicators, leading to <strong>false positives</strong>. Moreover, these indicators have <strong>low sensitivity</strong> in the early stages of cancer, often only rising significantly when the tumor has developed to a certain stage, which makes them <strong>unable to meet the needs of "early screening"</strong>.
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        Through the conversation with Dr. [Doctor's Name], we gained an in-depth understanding of the advantages and challenges of exosome detection in early breast cancer screening from the practical perspective of the clinical laboratory. The doctor <strong>not only affirmed the potential of exosomes in early diagnosis and the application value of magnetic bead capture technology but also put forward specific optimization suggestions based on the core needs of the clinical laboratory, such as sample processing, technical standardization, automation adaptation, and cost control.</strong> These suggestions provide important references for improving the project's technology and promoting its clinical transformation. Moving forward, we will focus on refining standardized operating procedures, strengthening technical collaboration with the clinical laboratory, and promoting the project toward being "operable, repeatable, and promotable", so as to truly realize the technical value of exosomes in early breast cancer screening.
      </p>
      <p>
        1. Exosome detection and magnetic bead technology show strong potential for early breast cancer screening, yet require optimization for clinical use.<br />
        2. Key improvements needed: standardized sample processing, automated adaptation, cost control, and technical reproducibility.<br />
        3. Next steps: refine protocols, enhance lab collaboration, and ensure the method becomes operable and scalable for practical clinical adoption.
      </p>
    </div>
  </div>

  {/* <!-- Section 10: Interviews with Public Representative, Public Health Expert, and Patients/Families --> */}
  <div className="card mb-4">
    <div className="card-body">
      <h1 id="section_10">Interviews with Public and Patients</h1>
      <h2>Interview with Public Representative</h2>
      <h3>Purpose of the Interview</h3>
      <p>
        To understand ordinary women's current awareness of breast cancer screening, barriers to participation, and acceptance of new screening technologies, providing a basis for improving public health awareness and optimizing screening strategies.
      </p>
      <p>
        <strong>Interview Location:</strong> XX Community Health Service Center<br />
        <strong>Interviewee:</strong> XX<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview Method:</strong> On-site interview<br />
        <strong>Interview Time:</strong> 10:00 AM, August 11, 2025
      </p>
      <img src="placeholder_image_12.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h3>Interview Content</h3>
      <p>
        <strong>Interviewer:</strong> Hello, Ms. XX! Thank you for participating in this interview. First, could you tell us what you know about <strong>breast cancer screening</strong>? Do you actively get checked regularly?
      </p>
      <p>
        <strong>Ms. XX:</strong> I know that <strong>breast ultrasound</strong> and <strong>mammography</strong> can detect breast cancer. My workplace organized two free physical exams, and I had the ultrasound both times. But I’ve heard mammography is a bit painful, so I’ve never dared to try it... I’ve never actively gone for checks on my own either. I always feel like "if there are no symptoms, there’s no need to check."
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        From the conversation with Ms. XX, we found that the public faces three main barriers to breast cancer screening: "fear of pain," "avoidance of risk," and "cumbersome procedures." Non-invasive blood testing technology is more acceptable due to its convenience but needs to address concerns about accuracy and cost. Popular science should focus on quantitative data about "screening benefits" (e.g., "over 90% survival rate with early detection") and practical guidance to improve public compliance.
      </p>
      <p>
        1. Public reluctance toward breast cancer screening stems from fear of pain, risk avoidance, and complex procedures.<br />
        2. Non-invasive blood tests are preferred for convenience but require improved accuracy and cost-effectiveness.<br />
        3. Effective science communication should emphasize quantitative benefits of early screening and provide actionable guidance to boost participation.
      </p>
      <h2>Interview with Public Health Expert</h2>
      <h3>Purpose of the Interview</h3>
      <p>
        To analyze the optimization path of breast cancer screening strategies from a population prevention perspective, and explore the integration potential and implementation challenges of new technologies (such as exosome testing) in the public health system.
      </p>
      <p>
        <strong>Interview Location:</strong> Office of the Municipal Center for Disease Control and Prevention<br />
        <strong>Expert Interviewee:</strong> Professor XX<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview Method:</strong> On-site interview<br />
        <strong>Interview Time:</strong> 2:00 PM, August 12, 2025
      </p>
      <img src="placeholder_image_13.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h3>Interview Content</h3>
      <p>
        <strong>Interviewer:</strong> Hello, Professor XX! Currently, the coverage rate of breast cancer screening in China is still less than 50%. From a public health perspective, <strong>what measures can effectively increase this coverage</strong>?
      </p>
      <p>
        <strong>Professor XX:</strong> A "<strong>three-integration</strong>" strategy is needed. First, <strong>policy integration</strong>: include screening in medical insurance or basic public health service packages to reduce the proportion of self-payment. Second, <strong>resource integration</strong>: promote initial screening in community hospitals, with positive cases referred to higher-level institutions to ease the pressure on top-tier hospitals. Finally, we must not forget <strong>publicity integration</strong>: customize promotional materials for rural/migrant populations, using dialect short videos and market lectures to dispel the idea that "no symptoms mean no need for checks."
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        From the interview with Professor XX, we learned that exosome technology, by improving accessibility and compliance, is expected to become a universally beneficial screening tool, but it needs supporting systems for "cost control, quality control networks, and simplified reporting." Therefore, we can prioritize integrating this technology into high-risk group screening and community initial screening scenarios, verify its long-term value in reducing advanced morbidity through real-world data, and ultimately achieve "promoting health equity through technological equity."
      </p>
      <p>
        1. Exosome technology enhances screening access and compliance but requires support in cost control, quality assurance, and simplified reporting.<br />
        2. Priority application scenarios include high-risk groups and community-based preliminary screening.<br />
        3. Real-world data should validate its long-term impact on reducing late-stage diagnoses, advancing health equity through accessible technology.
      </p>
      <h2>Interviews with Breast Cancer Patients and Their Families</h2>
      <h3>Purpose of the Interviews</h3>
      <p>
        Through conversations with breast cancer patients and their families, we gained in-depth insights into patients' treatment experiences, psychological changes, life impacts, and their perspectives on disease awareness, screening, and treatment. This aims to provide references for other patients and families, while also offering patient-centered suggestions for optimizing related medical programs.
      </p>
      <p>
        <strong>Interview Location:</strong> Breast Surgery Ward and Family Rest Area of XX Hospital<br />
        <strong>Interviewees:</strong><br />
        <strong>Patient A:</strong> 45 years old, early-stage breast cancer patient who has completed surgical treatment<br />
        <strong>Patient B:</strong> 52 years old, advanced breast cancer patient currently receiving chemotherapy<br />
        <strong>Family Member C:</strong> Husband of Patient A<br />
        <strong>Family Member D:</strong> Daughter of Patient B<br />
        <strong>Interviewer:</strong> XX<br />
        <strong>Interview Method:</strong> On-site interviews<br />
        <strong>Interview Time:</strong> 9:00 AM - 11:00 AM, August 17, 2025
      </p>
      <img src="placeholder_image_14.jpg" alt="Interview Image" className="img-fluid rounded mb-3 stats" />
      <h3>Interview Content</h3>
      <p>
        <strong>Interviewer:</strong> Patient A, <strong>how did you find out you had breast cancer</strong>?
      </p>
      <p>
        <strong>Patient A:</strong> I discovered tiny calcifications in my breast during a mammogram at a company-organized physical exam. My heart skipped a beat then—I knew something wasn’t right. Later, I had more tests: breast ultrasound, MRI, and even a biopsy. Finally, it was confirmed as breast cancer. Luckily, it was caught early, which took a little weight off my chest.
      </p>
      {/* <!-- Additional interview content follows the same structure --> */}
      <p>
        <strong>Summary</strong><br />
        These interviews with patients and families <strong>offered a comprehensive patient-centered view of their treatment journeys, psychological changes, and perspectives on screening and treatment</strong>. They widely emphasized the importance of early screening and hoped for more convenient, accurate, non-invasive methods. They expressed willingness to accept the new exosome detection platform but highlighted concerns about accuracy and cost. In treatment, they wished for fewer side effects, more precise plans, lower costs, and higher insurance coverage. For recovery, patients shared experiences like active rehabilitation, balanced nutrition, and mental well-being. This information provides valuable patient insights for breast cancer prevention/control and medical program optimization, aiming to inspire other patients and families.
      </p>
      <p>
        1. Patients emphasized the need for convenient, non-invasive early screening and expressed cautious interest in exosome technology, pending improved accuracy and cost.<br />
        2. Treatment priorities included reduced side effects, precision therapy, lower costs, and better insurance coverage.<br />
        3. Recovery relied on active rehabilitation, nutrition, and mental health support, highlighting patient-centered insights for improving care.
      </p>
    </div>
  </div>
</div>
    </>
    
  )
}