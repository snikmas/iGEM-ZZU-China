import React, { } from 'react';
import './index.css';


const dongbinmentor = 'https://static.igem.wiki/teams/5822/newassets/members/mentors/sandong.webp';
const lipeimentor = 'https://static.igem.wiki/teams/5822/newassets/members/mentors/peili.webp';
const liukangdongmentor = 'https://static.igem.wiki/teams/5822/newassets/members/mentors/kangdongliu.webp';
const panzhifengmentor = 'https://static.igem.wiki/teams/5822/newassets/members/mentors/zhifengpan.webp';
const wangzhenlongmentor = 'https://static.igem.wiki/teams/5822/newassets/members/mentors/zenglongwang.webp';
const zangwenqiaomentor = 'https://static.igem.wiki/teams/5822/newassets/members/mentors/wenciaozang.webp';
const zhangshanfengmentor = 'https://static.igem.wiki/teams/5822/newassets/members/mentors/shanfengzhang.webp';

// 导入团队成员图片
const avatarCanyangWang = 'https://static.igem.wiki/teams/5822/newassets/members/canyang-wang.webp';
const avatarSnik = 'https://static.igem.wiki/teams/5822/newassets/members/snik.webp';
const avatarYutongLiu = 'https://static.igem.wiki/teams/5822/newassets/members/yutong-wang.webp';
const avatarJijingBa = 'https://static.igem.wiki/teams/5822/newassets/members/jijing-ba.webp';
const avatarTianhuiChen = 'https://static.igem.wiki/teams/5822/newassets/members/tianhui-chen.webp';
const avatarYuxiaoZhang = 'https://static.igem.wiki/teams/5822/newassets/members/yuxiao-zhang.webp';
const avatarJingLei = 'https://static.igem.wiki/teams/5822/newassets/members/jing-lei.webp';
const avatarWenlanFang = 'https://static.igem.wiki/teams/5822/newassets/members/wenlan-fang.webp';
const avatarYuxuanXia = 'https://static.igem.wiki/teams/5822/newassets/members/yuxuan-xia.webp';
const avatarMengyaoYu = 'https://static.igem.wiki/teams/5822/newassets/members/mengyao-yu.webp';
const avatarXiaoranJi = 'https://static.igem.wiki/teams/5822/newassets/members/xiaoran-ji.webp';
const avatarZhiquanZhang = 'https://static.igem.wiki/teams/5822/newassets/members/zhiquan-zhang.webp';
const avatarPeilinLi = 'https://static.igem.wiki/teams/5822/newassets/members/peilin-li.webp';
const avatarXinzeLi = 'https://static.igem.wiki/teams/5822/newassets/members/xinze-li.webp';
const avatarPengjieWang = 'https://static.igem.wiki/teams/5822/newassets/members/pengjie-wang.webp';
const avatarYufeiHuang = 'https://static.igem.wiki/teams/5822/newassets/members/yufei-huang.webp';



// ... existing code ...
function TeamAttributions() {


  const teamMembers = [
    {
      name: "Pei Li",
      role: "PI (Principal Investigator)",
      tasks: "Overall Leadership, Strategic Planning, External Cooperation",
      specificTasks: `Overall Leadership: Took overall responsibility for the project, determining the project direction and goals. Led the team to make important decisions and ensured the project's scientific and innovative nature.
Strategic Planning: Formulated the project's long - term development strategy and phase plans. Made sure the project was in line with academic frontiers and practical application needs.
External Cooperation: Responsible for external communication and cooperation of the project, connecting with sponsors, academic institutions, etc. Expanded the project's influence and resource channels to provide support for project development.`,
      image: lipeimentor
    },
    {
      name: "Kangdong Liu",
      role: "PI (Principal Investigator)",
      tasks: "Research Direction Guidance, Technical Innovation Promotion, Team Training",
      specificTasks: `Research Direction Guidance: Deeply involved in the project's research direction, providing professional guidance and cutting - edge insights. Helped the team break through technical bottlenecks and explore new research ideas.
Technical Innovation Promotion: Encouraged and supported team members to carry out technical innovation, promoting the application of new technologies and methods in the project. Improved the project's technical level and competitiveness.`,
      image: liukangdongmentor
    },
    {
      name: "San Dong",
      role: "Mentor",
      tasks: "Mentor",
      specificTasks: `SanDong is a mentor from China with a strong background in Biotechnology and Life Sciences. Over the years, he has accumulated extensive experience in both academic research and student training, which makes him an invaluable guide for our team. As a mentor, he has provided advice in multiple aspects of our project, including experimental design, optimization of laboratory workflows, and critical evaluation of data. Beyond the technical dimension, SanDong also encouraged us to broaden our vision, to link scientific exploration with real-world applications, and to think deeply about how our work may contribute to society. His continuous support and insightful feedback have greatly inspired our team members and helped us grow with more confidence in scientific innovation and collaboration.`,
      image: dongbinmentor
    },
    {
      name: "Shanfeng Zhang",
      role: "Instructor",
      tasks: "Technical Guidance, Project Supervision, Experimental Support，Team Training",
      specificTasks: `Technical Guidance: Provided in-depth support on technical aspects of the project, offering detailed advice on experimental techniques and software development. Assisted team members in optimizing experimental protocols and software algorithms to enhance overall project quality.
Project Supervision: Regularly monitored project progress, promptly identifying potential risks and issues. Proposed corrective measures and adjustments to ensure the project stayed on track.
Resource Allocation: Assisted in the rational allocation of project resources, including equipment, materials, and personnel. Ensured efficient use of resources to support the smooth execution of all tasks.
Experimental Support: Delivered strong backing in experimental design and technical operations, guiding team members in standardizing experimental procedures and data collection. Assisted in troubleshooting and optimizing protocols to improve the reliability of experimental results.
Team Training: Organized academic exchanges and training activities to enhance team members' professional skills and academic literacy. Built a high - quality research team to lay a foundation for project success.`,
      image: zhangshanfengmentor
    },
    {
      name: "Wenqiao Zang",
      role: "Instructor",
      tasks: "Guidance, Coordination, Support ",
      specificTasks: `Guidance: Provided professional insights and directions for the overall project, especially in the experimental design and theoretical analysis aspects. Offered advice to help team members overcome technical difficulties and make scientific decisions.
Coordination: Coordinated internal team resources and external communication, ensuring smooth cooperation among different task groups. Helped connect relevant parties to promote the progress of the project.
Support: Gave moral and academic support to team members, boosting their confidence and enthusiasm. Assisted in solving problems encountered in the project implementation process, creating a good research environment.`,
      image: zangwenqiaomentor
    },
    {
      name: "Zhenlong Wang",
      role: "Advisor",
      tasks: "Academic Consultation, Team Building, Quality Control",
      specificTasks: `Academic Consultation: Offered professional academic advice in aspects like project design and result analysis. Helped team members expand their academic thinking and improve the scientific nature of the project.
Team Building: Focused on team cohesion, organizing team - building activities to enhance communication and cooperation among members. Helped resolve conflicts within the team and create a positive working atmosphere.
Quality Control: Conducted quality inspection on project outputs such as experimental data and report writing. Put forward improvement suggestions to ensure the project met high - standard requirements.`,
      image: wangzhenlongmentor
    },
    {
      name: "Zhifeng Pan",
      role: "Instructor",
      tasks: "Academic Guidance, Experimental Support, Research Integrity Assurance",
      specificTasks: `Academic Guidance: Provided expert advice on project direction and methodology, assisting the team in developing scientifically rigorous and innovative research plans. Helped students deepen their understanding of medical-biological integration and strengthen the theoretical foundation of the project.
Research Integrity Assurance: Conducted comprehensive reviews of project outputs, including data accuracy and report logic. Provided detailed suggestions for refinement to ensure all deliverables met high academic and ethical standards.`,
      image: panzhifengmentor
    },


    // members
    {
      name: "Pengjie Wang",
      role: "Student Leader",
      tasks: "Wiki Coding, Investigation, Public Engagement",
      specificTasks: `Wiki Coding: Responsible for the software engineering part of the wiki. Spent time writing, revising, and perfecting relevant content to ensure the description was accurate and comprehensive. Collaborated with team members to optimize the wiki page.
Investigation: Participated in the protein marker CRISPR detection experiment. Carried out experimental operations, recorded data, and solved problems in the experiment process to ensure the smooth progress of the experiment.
Public Engagement: Prepared for the CCIC exchange meeting, including agenda planning, material preparation, etc. Contacted various teams, organized exchange meetings, promoted information sharing and cooperation among teams, and enhanced project communication and collaboration.`,
      image: avatarPengjieWang
    },
    {
      name: "Xinze Li",
      role: "Student Leader",
      tasks: "Conceptualization , Project Administration , Investigation, Software",
      specificTasks: `Conceptualization: Responsible for proposing the project's core ideas, designing the overall framework based on breast cancer detection needs, and determining the application of Apt-HCR/RCA CRISPR-cas14 technology.
Project Administration: Responsible for coordinating the project process, managing team operations, organizing human practice activities such as conferences and exhibitions, and ensuring the smooth progress of each project link.
Investigation: Responsible for designing and completing experiments, formulating scientific and reasonable experimental schemes. Considered various factors to ensure the feasibility and effectiveness of experiments, and provided a basis for project research.
Software: Completed the establishment of the software model part, designed and developed software models according to project needs. Conducted model optimization and verification to ensure the model could support project research and application.`,
      image: avatarXinzeLi
    },
    {
      name: "Yuxiao Zhang",
      role: "Student Leader",
      tasks: "Human Practice, Investigation , Visualization",
      specificTasks: `Human Practice: Carried out human practice work, including social investigation, public communication, etc. Understood social needs, promoted the combination of the project with society, and enhanced the project's social value.
Investigation: Participated in wet experiments, specifically responsible for the CD63 aptamer pull - down exosome experiment. Conducted experimental operations, analyzed data, and contributed to experimental research.
Visualization: Responsible for Logo and team uniform design. Created creative and representative designs to enhance the team's image and cohesion.`,
      image: avatarYuxiaoZhang
    },
    {
      name: "Mengyao Yu",
      role: "Member",
      tasks: " Investigation, Writing, Data Curation ",
      specificTasks: `Writing: Responsible for project document management, including sorting out experimental reports, meeting minutes, etc. Classified and archived documents to ensure information was traceable and easy to retrieve.
Data Curation: Participated in project data collection work, collecting and organizing data from various aspects such as experiments and investigations. Ensured data accuracy and completeness to provide support for project analysis.`,
      image: avatarMengyaoYu
    },
    {
      name: "Wenlan Fang",
      role: "Member",
      tasks: "Safety, Background Research",
      specificTasks: `Responsible for formulating protocols and measures to ensure wet experiment safety. Conducted safety inspections, trained team members on safety knowledge, and prevented safety accidents in the laboratory.
Background Research: Defined the ethical guidelines to be followed during the project. Conducted ethical reviews on project activities to ensure the project complied with ethical norms and social responsibilities. Also participated in the wet experiment group, carrying out relevant experimental operations.`,
      image: avatarWenlanFang
    },
    {
      name: "Yufei Huang",
      role: "Member",
      tasks: "Investigation, record keeping",
      specificTasks: `Investigation: Responsible for developing wet experiment methods, researching and exploring experimental techniques. Optimized experimental processes, improved experimental efficiency and accuracy, and provided technical support for project experiments.`,
      image: avatarYufeiHuang
    },
    {
      name: "Jijing Ba",
      role: "Member",
      tasks: "Entrepreneurship，Human practice",
      specificTasks: `Entrepreneurship: Responsible for writing the business plan of the project. Conducted market research, analyzed project commercial potential and development prospects. Formulated business strategies, including marketing, operation management, etc., to provide a commercial operation plan for the project.`,
      image: avatarJijingBa
    },
    {
      name: "Yutong Liu",
      role: "Member",
      tasks: "Experimental Work",
      specificTasks: `Molecular Cloning: Performed vector construction, transformation, and other core experimental operations to support the project's molecular-level design and validation.
Protein Expression: Conducted induction and expression experiments for target proteins, optimizing conditions to enhance expression efficiency and lay the foundation for functional analysis.
Data Documentation: Assisted in organizing and summarizing experimental processes and results, ensuring the accuracy and traceability of data to improve the overall quality of project reports.`,
      image: avatarYutongLiu
    },
    {
      name: "Canyang Wang",
      role: "Member",
      tasks: "Human Practice ",
      specificTasks: `Human Practice: Focused on cooperation and inclusion in human practice. Promoted cooperation among team members, built an inclusive team atmosphere. Carried out activities to enhance team cohesion and cooperation ability, and promoted the harmonious development of the project team.`,
      image: avatarCanyangWang
    },
    {
      name: "Yuxuan Xia",
      role: "Member",
      tasks: "Project Administration, Investigation",
      specificTasks: `Project Administration: Responsible for the final product (solution) delivery of the project. Ensured the product met requirements, completed product testing, packaging, and handover to ensure successful delivery.
Investigation: Deployed the solution in the actual environment, including environment configuration, system installation, etc. Solved problems in the deployment process to ensure the solution could work normally.
User Training: Provided training for end - users, including writing instructions, conducting training sessions. Helped users master the use method of the solution to ensure effective application of the product.`,
      image: avatarYuxuanXia
    },
    {
      name: "Xiaoran Ji",
      role: "Member",
      tasks: "Safety, Data Curation ",
      specificTasks: `Safety: Collaborated with FANG WENLAN in safety management work, including laboratory safety protocol implementation, data security measure execution, and ethical guideline compliance. Participated in safety inspection and management to ensure project safety.
Data Curation: Assisted in wet experiments, carried out experimental operations, equipment maintenance, etc. Supported the smooth progress of the experiment, and cooperated with team members to complete experimental tasks.`,
      image: avatarXiaoranJi
    },
    {
      name: "Jing Lei",
      role: "Member",
      tasks: "Investigation, Ethical Report Writing",
      specificTasks: `Investigation: Responsible for complementary strand design. Conducted design work according to experimental needs, ensured design rationality and effectiveness, and provided support for experimental research.
Background Research: Wrote the project's ethical report, sorted out ethical issues in the project process, and explained how to follow ethical guidelines. Ensured the project's ethical compliance and provided a basis for project review.`,
      image: avatarJingLei
    },
    {
      name: "Tianhui Chen",
      role: "Member",
      tasks: "Analysis, Writing",
      specificTasks: `Analysis: Conducted literature review related to the project, collected and analyzed relevant research results. Summarized research progress and trends to provide a reference for project research.
Writing: Assisted in project result summary, sorted out experimental results, data analysis results, etc. Helped write project result reports to improve the comprehensiveness and clarity of results.`,
      image: avatarTianhuiChen
    },
    {
      name: "Peilin Li",
      role: "Member",
      tasks: "Public Engagement",
      specificTasks: `Data Outreach & Visualization: Develops and shares clear, compelling visualizations and summaries of dry lab results (e.g., computational models, simulations, bioinformatics analyses) for public audiences.
Online Platform Engagement: Manages the presentation of dry lab work on project websites, wikis, and social media, ensuring content is accurate and accessible to both scientific and general communities.
Academic & Public Communication: Facilitates discussions and knowledge exchange about the team's computational approaches at virtual conferences, public webinars, and with online collaborators.`,
      image: avatarPeilinLi
    },
    {
      name: "Zhiquan Zhang",
      role: "Member",
      tasks: "record keeping , Public Engagement",
      specificTasks: `record keeping: Oversee end-to-end Youtube content creation. From ideating video concepts (e.g., format, theme alignment with audience demand) to managing production (shooting, editing, adding subtitles/annotations), ensure outputs are engaging, high - quality, and fit platform algorithms.
Public Engagement: Handle daily channel operations. Schedule and publish content timely, monitor comments to interact with viewers, update channel info/layout. Track data (views, watch time, subscriber trends) to guide content iteration.`,
      image: avatarZhiquanZhang
    },
    {
      name: " Maria Salnikova",
      role: "Member",
      tasks: "Wiki Coding, Web Development",
      specificTasks: `Wiki Coding: Responsible for end-to-end wiki development and maintenance. From structuring content (e.g., layout design, information architecture) to implementing functional features (interactive elements, responsive UI), ensuring the wiki is user-friendly, visually coherent, and technically robust.
Web Development: Handle the integration of front-end and back-end components. Optimize page performance and cross-browser compatibility, regularly update site content, and troubleshoot technical issues to ensure smooth and reliable wiki operation.`,
      image: avatarSnik
    },
  ];

  return (
    <div className='teamattributions'>
      {/* team */}
      <div className='team-introduction'>
        <div className="team-header">
          <h1>Team Introduction</h1>
          <div className="team-tag">iGEM Zhengzhou University Team</div>
        </div>

        <div className="team-content">
          <div className="team-quote">
            <blockquote>
              "We believe that tiny molecules can trigger huge changes."
            </blockquote>
            <p className="quote-source">—— Zhengzhou University iGEM Team</p>
          </div>

          <div className="team-text">
            <p>
              On the iGEM stage, there stands a team from Zhengzhou University. We came together out of our passion for life sciences, and walk side by side with a firm original aspiration: to carve out a more accurate and efficient path for breast cancer detection through the power of synthetic biology.
            </p>

            <p>
              When we saw that breast cancer accounts for nearly one-third of all malignant tumors in women worldwide, and learned about the limitations of traditional detection methods, we deeply realized that every delayed diagnosis could mean a regret in life. Thus, we set our sights on the cutting-edge field of "exosome detection" and dived headfirst into the laboratory, holding fast to the belief that "we can make early screening simpler and give patients more confidence".
            </p>

            <p>
              This journey has never been a lonely fight. Some team members stayed by the instruments for over ten hours, continuously monitoring fluorescence changes just to optimize the HCR signal amplification system; others pored over dozens of sets of molecular docking data repeatedly to design aptamer sequences; still others took the team's research results to international conferences, engaged in in-depth exchanges with Nobel laureates, and brought cutting-edge insights back to the lab overnight. We share the cheers of a successful experiment and bear the disappointment of an unsatisfactory result together — yet no one has ever said "let's call it quits". For we all know that what we hold in our hands is not just project data, but a shared commitment to "protecting lives with technology".
            </p>

            <p>
              From the initial conceptualization to today's breakthroughs in technologies such as Cas14a prokaryotic expression and exosome-capturing magnetic beads, what has sustained us is not only our dedication to science, but also the tacit understanding that "while you supplement experiments, I check literature; while you revise plans, I offer ideas". We are comrades, partners, and a group of light-chasers who believe that "tiny molecules can trigger huge changes". In the future, we will move forward with this cohesion, letting the innovative light of synthetic biology illuminate more possibilities for disease detection!
            </p>
          </div>


          <div className="team-visual">
            <div className="visual-element">
              <div className="molecule"></div>
              <div className="dna"></div>
            </div>
          </div>



          <div className="team-tasks">
            {/* <h2>团队成员贡献</h2> */}


            <div className="team-tasks-intro">
              <h2>Our Commitment to Collaboration and Recognition</h2>
              <div className="intro-content">
                <p>
                  At ZZU-IGEM, every member's contributions are clearly documented and valued, and we sincerely appreciate the selfless support from all our external partners.
                </p>
                <p>
                  Since the beginning of 2024, the ZZU-IGEM team has been committed to delivering a comprehensive project, pouring our utmost effort into every phase. Whether it's the repeated verifications at the lab bench, the logical restructuring in code, or the late-night brainstorming sessions, every milestone bears visible traces of our hard work. We openly share our moments of triumph and candidly document the obstacles we encounter—together, these form the most authentic growth map of our team. Each member's dedication and perseverance are recorded in the project logs, and every instance of collaboration and breakthrough earns the respect and applause of the entire team. We firmly believe: the value of teamwork lies not in flawless results, but in every step we take together.
                </p>
                <p>
                  It is especially important to acknowledge that without the generous support from experts within and outside our university, collaborating laboratories, and sponsors, our project would have been impossible to advance. When we faced bottlenecks in genome sequencing, professors from the School of Bioengineering provided critical guidance; when model optimization reached a deadlock, algorithmic suggestions from the Department of Mathematics opened new avenues; and the experimental fund sponsored by enterprises turned our concepts into reality. Here, we extend our deepest gratitude to all those who lent us their support—science is never an isolated island, but a vast continent that requires collective cultivation.
                </p>
              </div>
            </div>


            <div className="tasks-grid">
  {teamMembers.map((member, index) => (
    <div key={index} className="task-card">
      <div className="task-card-header">
        <div className="task-card-avatar">
          <img src={member.image} alt={member.name} />
        </div>
        <div className="task-card-info">
          <h3>{member.name}</h3>
          <p className="task-card-role">{member.role}</p>
        </div>
      </div>
      
      <div className="task-card-body">
        <div className="task-section">
          <h4>Tasks:</h4>
          <p>{member.tasks}</p>
        </div>
        
        <div className="task-section">
          <h4>Specific tasks:</h4>
          <p>{member.specificTasks}</p>
        </div>
      </div>
    </div>
  ))}
</div>




          </div>

        </div>
      </div>



    </div>
  );
}

export default TeamAttributions;