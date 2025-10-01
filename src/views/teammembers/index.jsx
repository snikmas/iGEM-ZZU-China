import React, { useState } from 'react';
import './index.css';

// ... existing code ...
import dongbinmentor from '../../assets/images/team_menbers/mentors/董杉-mentor.jpg';
import lipengmentor from '../../assets/images/team_menbers/mentors/李沛.png';
import liukangdongmentor from '../../assets/images/team_menbers/mentors/刘康栋.png';
import panzhifengmentor from '../../assets/images/team_menbers/mentors/潘志峰.png';
import wangzhenlongmentor from '../../assets/images/team_menbers/mentors/王振龙.jpg';
import zangwenqiaomentor from '../../assets/images/team_menbers/mentors/臧文巧.jpeg';
import zhangshanfengmentor from '../../assets/images/team_menbers/mentors/张善锋.jpg';

// 导入团队成员图片
import avatarCanyangWang from '../../assets/images/team_menbers/members/Canyang Wang.jpg';
import avatarSnik from '../../assets/images/team_menbers/members/snik.jpg';
import avatarYutongLiu from '../../assets/images/team_menbers/members/Yutong Wang.jpg';
import avatarJijingBa from '../../assets/images/team_menbers/members/Jijing Ba.jpg';
import avatarTianhuiChen from '../../assets/images/team_menbers/members/Tianhui Chen.jpg';
import avatarYuxiaoZhang from '../../assets/images/team_menbers/members/Yuxiao Zhang.jpg';
import avatarJingLei from '../../assets/images/team_menbers/members/Jing Lei.jpg';
import avatarWenlanFang from '../../assets/images/team_menbers/members/Wenlan Fang.jpg';
import avatarYuxuanXia from '../../assets/images/team_menbers/members/Yuxuan Xia.jpg';
import avatarMengyaoYu from '../../assets/images/team_menbers/members/Mengyao Yu.jpg';
import avatarXiaoranJi from '../../assets/images/team_menbers/members/Xiaoran Ji.jpg';
import avatarZhiquanZhang from '../../assets/images/team_menbers/members/Zhiquan Zhang.jpg';
import avatarPeilinLi from '../../assets/images/team_menbers/members/Peilin Li.jpg';
import avatarXinzeLi from '../../assets/images/team_menbers/members/Xinze Li.jpg';
import avatarPengjieWang from '../../assets/images/team_menbers/members/Pengjie Wang.jpg';
import avatarYufeiHuang from '../../assets/images/team_menbers/members/Yufei Huang.jpg';

function TeamMembers() {
  const roleGroups = {
    'PI': [
      {
        name: "Pei Li",
        title: "Primary PI",
        image: lipengmentor,
        content: `Hello everyone, I'm Professor Pei Li. As Vice Dean of the Basic Medical College and an expert in tumor immunology, I have extensive research experience in molecular pathology of cancer, particularly in cancer prevention and immunotherapy. I am pleased to provide this year's iGEM team with guidance in tumor immunology, experimental design optimization, and access to international academic resources. My research team has achieved innovative results in esophageal cancer chemoprevention and previously mentored student teams to win special awards in the Henan "Challenge Cup" competition. I look forward to collaborating with young team members to explore innovative applications of synthetic biology in cancer prevention and treatment, and to supporting your efforts to showcase Chinese scientific research on the international stage!`
      },
      {
        name: "Kangdong Liu", 
        title: "Secondary PI",
        image: liukangdongmentor,
        content: `Hello everyone, I'm Professor Kangdong Liu. As Executive Dean of Zhengzhou University's Basic Medical College and an expert in esophageal cancer prevention, I specialize in cancer chemoprevention research with extensive experience in anticancer mechanisms of natural compounds. I'm delighted to provide professional guidance on molecular mechanism design and experimental optimization for this year's iGEM team, and look forward to collaborating with young researchers to explore innovative applications of synthetic biology in cancer prevention.`
      }
    ],
    'Mentor': [
      {
        name: "San Dong",
        title: "Mentor",
        image: dongbinmentor,
        content: "Hello everyone, I am Mentor, San Dong"
      }
    ],
    'Instructors': [
      {
        name: "Shangfeng Zhang",
        title: "Instructor",
        image: zhangshanfengmentor,
        content: `Hello everyone, I'm Professor Shangfeng Zhang. As Director of the Basic Medical Experiment Center and an expert in natural anti-tumor drug research, I specialize in developing novel molecular detection technologies and have achieved multiple innovative results in studying the anti-tumor mechanisms of plant extracts. I'm delighted to provide the iGEM team with experimental platform support, molecular detection technical guidance, and innovation/entrepreneurship resources. My experiences can strongly support your synthetic biology research. Looking forward to exploring the infinite possibilities of life sciences together with our students!`
      },
      {
        name: "Wenqiao Zang",
        title: "Instructor", 
        image: zangwenqiaomentor,
        content: `Hello everyone, I'm Professor Wenqiao Zang. I am excited to join the iGEM team as your research mentor! With expertise in tumor immunology and novel bacterial detection technologies, plus research experience at the New York Blood Center, I look forward to supporting your project design and experimental innovation. My background in national-level grants and international collaboration will help bridge your synthetic biology work with real-world medical applications. Let's work together to make an impact!`
      }
    ],
    'Advisors': [,
      {
        name: "Zhenlong Wang",
        title: "Advisor",
        image: wangzhenlongmentor,
        content: `Hello everyone, I'm Professor Zhenlong Wang. As a bioinformatics specialist with extensive experience in animal adaptation research and national-level projects, I'm excited to support your iGEM journey by providing genomic analysis guidance, animal model insights, and interdisciplinary research strategies - let's work together to bridge evolutionary biology with synthetic biology innovation!`
      },
      {
        name: "Pan Zhifeng",
        title: "Instructor",
        image: panzhifengmentor,
        content: `Hello everyone, I am Professor Pan Zhifeng, currently teaching at Zhengzhou University. As a long-term dedicated researcher and educator, I have always focused on nurturing students' innovative thinking and practical abilities, and have accumulated substantial experience in guiding students through innovation and entrepreneurship training programs. I am very excited to join your iGEM team and look forward to providing support and guidance in social practice strategies. Let's work together to integrate solid social practices with cutting-edge synthetic biology innovations, exploring more valuable scientific solutions!`
      }
    ]
  };


  const members = [
    {
      role: 'Student Leader', name: 'Xinze Li', avator: avatarXinzeLi, content: `Hello everyone! I’m Xinze Li, an undergraduate student with a passion for lab work and data analysis. In my free time, I love honing my experimental techniques and learning how to turn raw data into meaningful insights—a process I find incredibly rewarding. It’s what drives me to take on new challenges.
By joining the iGEM team, I hope to further develop my hands-on skills in molecular biology (like PCR and Western blot) while using R for data organization and visualization. This way, I can bridge the gap between experiments and analysis, making our work more impactful.
What excites me most is collaborating with teammates who share the same growth mindset. Learning from and contributing to this team is what makes iGEM truly meaningful for me.`},
    {
      role: 'Student Leader', name: 'Yuxiao Zhang', avator: avatarYuxiaoZhang, content: `Hello! I'm Yuxiao Zhang, a clinical medicine student with a creative side. When I'm not studying, you'll find me playing piano, singing, or sketching. I also love good food, quality sleep, and exploring new places - and I've recently discovered a passion for swimming!
What drew me to iGEM is its incredible diversity. This competition has introduced me to brilliant minds across different disciplines while expanding my perspective through hands-on experiments and meaningful outreach activities.
I'm absolutely thrilled to be meeting all of you this October in Paris - it's going to be an unforgettable experience!`},
    {
      role: 'Student Leader', name: 'Pengjie Wang', avator: avatarPengjieWang, content: `Hello everyone, I’m Pengjie Wang. My passion lies in computational biology, particularly in using algorithms and data analysis to uncover the fundamental principles of biological systems. That’s why I’m actively engaged in cutting-edge research in this field as part of the iGEM team.
I also have a strong command of English, which allows me to fluently read academic literature, communicate research ideas, and collaborate across disciplines—skills that greatly enhance my ability to explore interdisciplinary science.
At the upcoming iGEM competition, I look forward to working with my teammates to push boundaries and contribute meaningfully to synthetic biology. Together, we’ll reach new heights and advance this exciting field!`},
    {
      role: 'Presentation Group', name: 'Pengjie Wang', avator: avatarPengjieWang, content: `Hello everyone, I’m Pengjie Wang. My passion lies in computational biology, particularly in using algorithms and data analysis to uncover the fundamental principles of biological systems. That’s why I’m actively engaged in cutting-edge research in this field as part of the iGEM team.
I also have a strong command of English, which allows me to fluently read academic literature, communicate research ideas, and collaborate across disciplines—skills that greatly enhance my ability to explore interdisciplinary science.
At the upcoming iGEM competition, I look forward to working with my teammates to push boundaries and contribute meaningfully to synthetic biology. Together, we’ll reach new heights and advance this exciting field!`},
    {
      role: 'Presentation Group', name: 'Jing Lei', avator: avatarJingLei, content: `Hello everyone, I'm Jing Lei, a medical student specializing in clinical medicine. I have a passion for hands-on lab work and unraveling complex biological phenomena. Outside the lab, you'll find me enjoying music, writing essays, and I particularly thrive in public speaking and presentations.
What excites me most about joining iGEM is the opportunity to learn, innovate, and contribute to meaningful research as part of a dynamic team. I can't wait to collaborate with all of you and look forward to our meeting in Paris!`},
    {
      role: 'Presentation Group', name: 'Tianhui Chen', avator: avatarTianhuiChen, content: `Hello everyone! I'm Tianhui Chen. I'm an outgoing and articulate person who thrives on lively discussions and intellectual challenges. My friends often describe me as a "friendly debater"—I love analyzing different perspectives and finding the strongest arguments to support great ideas. When I'm not engaged in debates, you can find me reading books or playing competitive board games—both of which sharpen my critical thinking. I joined this team because I believe the best solutions come from rigorous discussion and collaborative problem-solving.`
    },
    {
      role: 'Wet Lab Group', name: 'Yufei Huang', avator: avatarYufeiHuang, content: `Hello everyone! I'm Yufei Huang. As an iGEMer, I'm passionate about synthetic biology and fascinated by how interdisciplinary approaches can solve real-world problems - from the intricate design of gene editing to practical engineering applications. What excites me most is the entire discovery process, and I can't wait to share this enthusiasm and inspiration with all of you during our scientific journey! `
    },
    {
      role: 'Wet Lab Group', name: 'Xinze Li', avator: avatarXinzeLi, content: `Hello everyone! I’m Xinze Li, an undergraduate student with a passion for lab work and data analysis. In my free time, I love honing my experimental techniques and learning how to turn raw data into meaningful insights—a process I find incredibly rewarding. It’s what drives me to take on new challenges.
By joining the iGEM team, I hope to further develop my hands-on skills in molecular biology (like PCR and Western blot) while using R for data organization and visualization. This way, I can bridge the gap between experiments and analysis, making our work more impactful.
What excites me most is collaborating with teammates who share the same growth mindset. Learning from and contributing to this team is what makes iGEM truly meaningful for me.`},
    {
      role: 'Wet Lab Group', name: 'Jing Lei', avator: avatarJingLei, content: `Hello everyone, I'm Jing Lei, a medical student specializing in clinical medicine. I have a passion for hands-on lab work and unraveling complex biological phenomena. Outside the lab, you'll find me enjoying music, writing essays, and I particularly thrive in public speaking and presentations.
What excites me most about joining iGEM is the opportunity to learn, innovate, and contribute to meaningful research as part of a dynamic team. I can't wait to collaborate with all of you and look forward to our meeting in Paris!`},
    {
      role: 'Wet Lab Group', name: 'Yuxuan Xia', avator: avatarYuxuanXia, content: `Hello everyone, I'm Yuxuan Xia. I'm particularly fascinated by biosynthesis - how we can engineer living systems as "biological factories" to produce valuable compounds. This cutting-edge approach in biotechnology is exactly why I joined iGEM, where I hope to deepen my knowledge of pathway design and optimization. Beyond the lab, I enjoy creative pursuits like painting, graphic design, and video production. I believe these skills can contribute uniquely to our team's projects, whether in visualization, presentation, or conceptual design. Looking forward to collaborating and creating something remarkable together!`
    },
    {
      role: 'Wet Lab Group', name: 'Tianhui Chen', avator: avatarTianhuiChen, content: `Hello everyone! I'm Tianhui Chen. I'm an outgoing and articulate person who thrives on lively discussions and intellectual challenges. My friends often describe me as a "friendly debater"—I love analyzing different perspectives and finding the strongest arguments to support great ideas. When I'm not engaged in debates, you can find me reading books or playing competitive board games—both of which sharpen my critical thinking. I joined this team because I believe the best solutions come from rigorous discussion and collaborative problem-solving.`
    },
    {
      role: 'Wet Lab Group', name: 'Mengyao Yu', avator: avatarMengyaoYu, content: `Hello everyone, I’m Mengyao Yu. I joined iGEM team to apply my passion for research toward meaningful work in breast cancer prevention and treatment—from experimental design to hands-on lab work. My strength lies in my meticulous, organized approach, which helps me tackle complex challenges effectively. When I’m not in the lab, you’ll likely find me on the badminton court. I’m excited to bring both my scientific dedication and attention to detail to our team’s mission!`
    },


    {
      role: 'Model Group', name: 'Pengjie Wang', avator: avatarPengjieWang, content: `Hello everyone, I’m Pengjie Wang. My passion lies in computational biology, particularly in using algorithms and data analysis to uncover the fundamental principles of biological systems. That’s why I’m actively engaged in cutting-edge research in this field as part of the iGEM team.
I also have a strong command of English, which allows me to fluently read academic literature, communicate research ideas, and collaborate across disciplines—skills that greatly enhance my ability to explore interdisciplinary science.
At the upcoming iGEM competition, I look forward to working with my teammates to push boundaries and contribute meaningfully to synthetic biology. Together, we’ll reach new heights and advance this exciting field!`},
    {
      role: 'Model Group', name: 'Jijing Ba', avator: avatarJijingBa, content: `Hello everyone! I'm Jijing Ba.What drew me to iGEM is my fascination with how science connects to real-world applications. This competition offers the perfect platform to not only dive into synthetic biology but also to collaborate on turning innovative ideas into meaningful solutions.For me, iGEM represents more than just a competition - it's an opportunity to grow as a scientist and team player while working on projects that can make a genuine difference. I'm thrilled to be part of this journey with all of you!`
    },
    {
      role: 'Model Group', name: 'Yutong Liu', avator: avatarYutongLiu, content: `Hello, I'm Yutong Liu, a second-year Basic Medicine student. I competed in iGEM, focusing on molecular cloning and protein expression. I handled vector construction, transformation, and induction, which improved my lab skills and teamwork. This experience strengthened my interest in life sciences and motivated me to advance human health. Looking forward to connecting with you all!`
    },


    {
      role: 'Human Practices Group', name: 'Yuxiao Zhang', avator: avatarYuxiaoZhang, content: `Hello! I'm Yuxiao Zhang, a clinical medicine student with a creative side. When I'm not studying, you'll find me playing piano, singing, or sketching. I also love good food, quality sleep, and exploring new places - and I've recently discovered a passion for swimming!
What drew me to iGEM is its incredible diversity. This competition has introduced me to brilliant minds across different disciplines while expanding my perspective through hands-on experiments and meaningful outreach activities.
I'm absolutely thrilled to be meeting all of you this October in Paris - it's going to be an unforgettable experience!`},
    {
      role: 'Human Practices Group', name: 'Canyang Wang', avator: avatarCanyangWang, content: `Hello everyone! I’m Canyang Wang, a student in the 2024 Basic Medical Science program. I’m excited to join this team because I want to combine my medical knowledge with collaborative innovation to create real impact. Outside of academics, I love social activities—they’ve introduced me to incredible people and expanded my perspective in ways I never expected. I also bring practical skills to the table, like video shooting and editing, which I’d love to use to document and share our team’s journey.
Can’t wait to learn, create, and grow with all of you in IGEM!`},
    {
      role: 'Human Practices Group', name: 'Xiaoran Ji', avator: avatarXiaoranJi, content: `Hello everyone, I'm Xiaoran Ji. I may be a bit shy and take time to warm up, but you'll find I'm genuinely dedicated once we get to know each other. In my free time, I love drawing and crafting—these hobbies have taught me to observe details patiently and nurtured my creativity. I joined the IGEM team because I was drawn to everyone's focused and dedicated attitude, and I want to gradually challenge myself through collaboration.  Looking forward to growing together with all of you—your guidance would be much appreciated!`
    },
    {
      role: 'Human Practices Group', name: 'Wenlan Fang', avator: avatarWenlanFang, content: `Hello everyone! I'm Wenlan Fang.I'm an outgoing yet thoughtful person who loves bringing positive energy to teamwork while staying grounded in results. My strengths lie in creative problem-solving and collaborative communication—I enjoy brainstorming ideas that balance innovation with practicality. Outside of work, I'm passionate about creative writing and outdoor sports, which fuel both my imagination and discipline. I joined this IGEM team because I believe the best solutions come from diverse perspectives working in sync. `
    },
    {
      role: 'Human Practices Group', name: 'Zhiquan Zhang', avator: avatarZhiquanZhang, content: `Hello everyone, I'm Zhiquan Zhang. I’m a calm and steady person who thrives in creative environments, which makes me a natural fit for managing our YouTube content and visual storytelling. My strengths lie in video production, editing, and strategic content planning—I enjoy transforming complex ideas into engaging, accessible formats for wider audiences. Beyond the camera, I have a passion for photography and music, which help me maintain a sharp eye for detail and rhythm in my work. I joined this team because I believe in the power of media to amplify scientific impact.`
    },
    {
      role: 'Wiki Group', name: 'Snik', avator: avatarSnik, content: `Hello everyone! I'm snik, an international student currently studying in China. I’ve always been passionate about cross-cultural collaboration and scientific innovation, which is why I’m thrilled to join this team. My strengths lie in data analysis and computational modeling—I enjoy turning complex biological questions into actionable insights using tools like Python and R. Outside the lab, I love photography and hiking, which help me see problems from creative perspectives.`
    },
    {
      role: 'Wiki Group', name: 'Peilin Li', avator: avatarPeilinLi, content: `Hello everyone, I am Peilin Li, a student majoring in Clinical Medicine at Huazhong University of Science and Technology. Currently, I am enthusiastically participating in my university's iGEM competition team, primarily responsible for the Human Practices segment.My core work revolves around building a bridge between synthetic biology and the public. Through activities such as social research and science education, I explore the ethical and social issues related to our project, ensuring that scientific innovation can responsibly serve society. My background in medicine allows me to place greater emphasis on the humanistic care aspect of technology, and I look forward to collaborating with the team to achieve meaningful and impactful work. Thank you!`
    }
  ];

  // 按角色分组
  const groupedMembers = members.reduce((acc, member) => {
    if (!acc[member.role]) acc[member.role] = [];
    acc[member.role].push(member);
    return acc;
  }, {});



  return (
    <div className="teammembers">
      <div className="team-members-container">
        {/* 导师介绍区域 */}
        <div className="mentors-section">
          <h2>Team Member</h2>
          
          {/* 第一行：PI组和Mentor组 */}
          <div className="mentors-row mentors-row-1">
            {/* PI组 */}
            <div className="role-group pi-group">
              <div className="group-title"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
                <div>Primary PI</div>
                <div>Secondary PI</div>
              </div>
              <div className="group-cards">
                {roleGroups.PI.map((mentor, index) => (
                  <div key={index} className="mentor-card-flip">
                    <div className="mentor-card-inner">
                      <div className="mentor-card-front">
                        <div className="mentor-front-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-front-image"
                          />
                        </div>
                        <div className="mentor-name">{mentor.name}</div>
                      </div>
                      <div className="mentor-card-back">
                        <div className="mentor-image-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-image"
                          />
                        </div>
                        <div className="mentor-content">{mentor.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor组 */}
            <div className="role-group mentor-group">
              <div className="group-title">Mentor</div>
              <div className="group-cards">
                {roleGroups.Mentor.map((mentor, index) => (
                  <div key={index} className="mentor-card-flip">
                    <div className="mentor-card-inner">
                      <div className="mentor-card-front">
                        <div className="mentor-front-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-front-image"
                          />
                        </div>
                        <div className="mentor-name">{mentor.name}</div>
                      </div>
                      <div className="mentor-card-back">
                        <div className="mentor-image-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-image"
                          />
                        </div>
                        <div className="mentor-content">{mentor.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 第二行：Instructors组和Advisors组 */}
          <div className="mentors-row mentors-row-2">
            {/* Instructors组 */}
            <div className="role-group instructors-group">
              <div className="group-title">Instructors</div>
              <div className="group-cards">
                {roleGroups.Instructors.map((mentor, index) => (
                  <div key={index} className="mentor-card-flip">
                    <div className="mentor-card-inner">
                      <div className="mentor-card-front">
                        <div className="mentor-front-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-front-image"
                          />
                        </div>
                        <div className="mentor-name">{mentor.name}</div>
                      </div>
                      <div className="mentor-card-back">
                        <div className="mentor-image-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-image"
                          />
                        </div>
                        <div className="mentor-content">{mentor.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisors组 */}
            <div className="role-group advisors-group">
              <div className="group-title">Advisors</div>
              <div className="group-cards">
                {roleGroups.Advisors.map((mentor, index) => (
                  <div key={index} className="mentor-card-flip">
                    <div className="mentor-card-inner">
                      <div className="mentor-card-front">
                        <div className="mentor-front-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-front-image"
                          />
                        </div>
                        <div className="mentor-name">{mentor.name}</div>
                      </div>
                      <div className="mentor-card-back">
                        <div className="mentor-image-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="mentor-image"
                          />
                        </div>
                        <div className="mentor-content">{mentor.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* 团队成员区域 */}
      <div className="members-section">
        {/* <h2>Team Members</h2> */}
        <div className="members-grid">
          {Object.entries(groupedMembers).map(([role, roleMembers]) => (
            <div key={role} className="role-section">
              <h3 className="role-title">{role}</h3>
              <div className="members-row">
                {roleMembers.map((member, index) => (
                  <div key={index} className="member-card-flip">
                    <div className="member-card-inner">
                      <div className="member-card-front">
                        <div className="member-front-wrapper">
                          <img
                            src={member.avator}
                            alt={member.name}
                            className="member-front-image"
                          />
                        </div>
                        <div className="member-name">{member.name}</div>
                      </div>
                      <div className="member-card-back">
                        <div className="member-image-wrapper">
                          <img
                            src={member.avator}
                            alt={member.name}
                            className="member-image"
                          />
                        </div>
                        <div className="member-content">{member.content || "暂无介绍"}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;