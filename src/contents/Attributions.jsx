import React from 'react'

export function Attributions() {
  return (
  <>
    <div className="container my-4">
      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_1">Introduction to Team Contributions</h1>
            <p>
              At ZZU-IGEM, every member's contributions are clearly documented and valued, and we sincerely appreciate the selfless support from all our external partners.
              Since the beginning of 2024, the ZZU-IGEM team has been committed to delivering a comprehensive project, pouring our utmost effort into every phase. Whether it's the repeated verifications at the lab bench, the logical restructuring in code, or the late-night brainstorming sessions, every milestone bears visible traces of our hard work. We openly share our moments of triumph and candidly document the obstacles we encounter—together, these form the most authentic growth map of our team. Each member's dedication and perseverance are recorded in the project logs, and every instance of collaboration and breakthrough earns the respect and applause of the entire team. We firmly believe: the value of teamwork lies not in flawless results, but in every step we take together.
              It is especially important to acknowledge that without the generous support from experts within and outside our university, collaborating laboratories, and sponsors, our project would have been impossible to advance. When we faced bottlenecks in genome sequencing, professors from the School of Bioengineering provided critical guidance; when model optimization reached a deadlock, algorithmic suggestions from the Department of Mathematics opened new avenues; and the experimental fund sponsored by enterprises turned our concepts into reality. Here, we extend our deepest gratitude to all those who lent us their support—science is never an isolated island, but a vast continent that requires collective cultivation.     
            </p>
        </div>
      </div>
      
      <div className='card mb-4'>
  <div className='card-body'>
    <h1 id='section_2'>Team Member Contributions</h1>
    <div className="grid grid-cols-2 gap-6">

      {/* Li Pei */}
      <div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
        <div className="avatar-member mr-4 flex flex-row gap-5 items-center">
          <div className='w-32 h-32 rounded-full overflow-hidden'>
            <img className="w-full h-full object-cover translate-y-[-45%]" src="https://static.igem.wiki/teams/5822/assets/members/lipei.webp" alt="Li Pei"/>
          </div> 
          <div className="flex flex-col justify-center title h-[80%] gap-2">
            <h6 className="text-[28px] font-bold leading-none">Li Pei</h6>
            <span className="text-gray-600 text-xl tracking-wider font-normal">PRIMARY PI</span>
          </div>
        </div>
        <div className="content space-y-2 text-sm">
          <div className="tasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
            <p>Overall Leadership, Strategic Planning, External Cooperation</p>
          </div>
          <div className="specTasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
            <p><b>Overall Leadership:</b> Took overall responsibility for the project, determining the project direction and goals. Led the team to make important decisions and ensured the project's scientific and innovative nature.</p>
            <p><b>Strategic Planning:</b> Formulated the project's long-term development strategy and phase plans. Made sure the project was in line with academic frontiers and practical application needs.</p>
            <p><b>External Cooperation:</b> Responsible for external communication and cooperation of the project, connecting with sponsors, academic institutions, etc. Expanded the project's influence and resource channels to provide support for project development.</p>
          </div>
        </div>
      </div>

      {/* Kangdong Liu */}
      <div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
        <div className="avatar-member mr-4 flex flex-row gap-5 items-center">
          <div className='w-32 h-32 rounded-full overflow-hidden'>
            <img className="w-full h-full object-cover translate-y-[-43%] scale-110" src="https://static.igem.wiki/teams/5822/assets/members/liukangdong.webp" alt="Liu Kangdong"/>
          </div>
          <div className="flex flex-col justify-center title h-[80%] gap-2">
            <h6 className="text-[28px] font-bold leading-none"> Liu Kangdong</h6>
            <span className="text-gray-600 text-xl tracking-wider font-normal">PI</span>
          </div>
        </div>
        <div className="content space-y-2 text-sm">
          <div className="tasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
            <p>Research Direction Guidance, Technical Innovation Promotion, Team Training</p>
          </div>
          <div className="specTasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
            <p><b>Research Direction Guidance:</b> Deeply involved in the project's research direction, providing professional guidance and cutting - edge insights. Helped the team break through technical bottlenecks and explore new research ideas.</p>
            <p><b>Technical Innovation Promotion:</b> Encouraged and supported team members to carry out technical innovation, promoting the application of new technologies and methods in the project. Improved the project's technical level and competitiveness.</p>
            <p><b>Team Training:</b> Trained team members in research skills, experimental techniques, and project management to improve overall team quality and cohesion.</p>
          </div>
        </div>
      </div>

      {/* Shanfeng Zhang */}
      <div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
        <div className="avatar-member mr-4 flex flex-row gap-5 items-center">
          <div className='w-32 h-32 rounded-full overflow-hidden'>
            <img className="w-full h-full object-cover translate-y-[-45%]" src="https://static.igem.wiki/teams/5822/assets/members/zhangshanfeng.webp" alt="Shanfeng Zhang"/>
          </div>
          <div className="flex flex-col justify-center title h-[80%] gap-2">
            <h6 className="text-[28px] font-bold leading-none">Zhang Shanfeng</h6>
            <span className="text-gray-600 text-xl tracking-wider font-normal">Instructor</span>
          </div>
        </div>
        <div className="content space-y-2 text-sm">
          <div className="tasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
            <p>Technical Guidance, Project Supervision, Experimental Support, Team Training</p>
          </div>
          <div className="specTasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
            <p><b>Technical Guidance:</b> Provided in-depth support on technical aspects of the project, offering detailed advice on experimental techniques and software development. Assisted team members in optimizing experimental protocols and software algorithms to enhance overall project quality.</p>
            <p><b>Project Supervision:</b> Regularly monitored project progress, promptly identifying potential risks and issues. Proposed corrective measures and adjustments to ensure the project stayed on track.</p>
            <p><b>Resource Allocation:</b> Assisted in the rational allocation of project resources, including equipment, materials, and personnel. Ensured efficient use of resources to support the smooth execution of all tasks.</p>
            <p><b>Experimental Support:</b> Delivered strong backing in experimental design and technical operations, guiding team members in standardizing experimental procedures and data collection. Assisted in troubleshooting and optimizing protocols to improve the reliability of experimental results.</p>
            <p><b>Team Training:</b> Organized academic exchanges and training activities to enhance team members' professional skills and academic literacy. Built a high - quality research team to lay a foundation for project success.</p>
          </div>
        </div>
      </div>

      {/* Wenqiao Zang */}
      <div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
        <div className="avatar-member mr-4 flex flex-row gap-5 items-center">
          <div className='w-32 h-32 rounded-full overflow-hidden'>
            <img className="w-full h-full object-cover translate-y-[-45%]" src="https://static.igem.wiki/teams/5822/assets/members/zhangwenqiao.webp" alt="Wenqiao Zang"/>
          </div>
          <div className="flex flex-col justify-center title h-[80%] gap-2">
            <h6 className="text-[28px] font-bold leading-none">Zhang Wenqiao</h6>
            <span className="text-gray-600 text-xl tracking-wider font-normal">Instructor</span>
          </div>
        </div>
        <div className="content space-y-2 text-sm">
          <div className="tasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
            <p>Guidance, Coordination, Support</p>
          </div>
          <div className="specTasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
            <p><b>Guidance:</b> Provided professional insights and directions for the overall project, especially in the experimental design and theoretical analysis aspects. Offered advice to help team members overcome technical difficulties and make scientific decisions.</p>
            <p><b>Coordination:</b> Coordinated internal team resources and external communication, ensuring smooth cooperation among different task groups. Helped connect relevant parties to promote the progress of the project.</p>
            <p><b>Support:</b> Gave moral and academic support to team members, boosting their confidence and enthusiasm. Assisted in solving problems encountered in the project implementation process, creating a good research environment.</p>
          </div>
        </div>
      </div>

      {/* Zhenlong Wang */}
      <div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
        <div className="avatar-member mr-4 flex flex-row gap-5 items-center">
          <div className='w-32 h-32 rounded-full overflow-hidden'>
            <img className="w-full h-full object-cover translate-y-[-45%]" src="https://static.igem.wiki/teams/5822/assets/members/wangzhenlong.webp" alt="Zhenlong Wang"/>
          </div>
          <div className="flex flex-col justify-center title h-[80%] gap-2">
            <h6 className="text-[28px] font-bold leading-none">Wang Zhenlong</h6>
            <span className="text-gray-600 text-xl tracking-wider font-normal">Advisor</span>
          </div>
        </div>
        <div className="content space-y-2 text-sm">
          <div className="tasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
            <p>Academic Consultation, Team Building, Quality Control</p>
          </div>
          <div className="specTasks">
            <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
            <p><b>Academic Consultation:</b> Offered professional academic advice in aspects like project design and result analysis. Helped team members expand their academic thinking and improve the scientific nature of the project.</p>
            <p><b>Team Building:</b> Focused on team cohesion, organizing team - building activities to enhance communication and cooperation among members. Helped resolve conflicts within the team and create a positive working atmosphere.</p>
            <p><b>Quality Control:</b> Conducted quality inspection on project outputs such as experimental data and report writing. Put forward improvement suggestions to ensure the project met high - standard requirements.</p>
          </div>
        </div>
      </div>

      {/* Zhifeng Pan */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-39%]" src="https://static.igem.wiki/teams/5822/assets/members/panzhifeng.webp" alt="Zhifeng Pan"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Pan Zhifeng</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Advisor</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Academic Guidance, Experimental Support, Research Integrity Assurance</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Academic Guidance:</b> Provided expert advice on project direction and methodology, assisting the team in developing scientifically rigorous and innovative research plans. Helped students deepen their understanding of medical-biological integration and strengthen the theoretical foundation of the project.</p>
      <p><b>Research Integrity Assurance:</b> Conducted comprehensive reviews of project outputs, including data accuracy and report logic. Provided detailed suggestions for refinement to ensure all deliverables met high academic and ethical standards.</p>
    </div>
  </div>
</div>

{/* Pengjie Wang */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-45%] translate-x-[-20%] scale-145" src="https://static.igem.wiki/teams/5822/assets/members/zzu-pengjiewang.webp" alt="Pengjie Wang"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Wang Pengjie</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Wiki Coding, Investigation, Public Engagement</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Wiki Coding:</b> Responsible for the software engineering part of the wiki. Spent time writing, revising, and perfecting relevant content to ensure the description was accurate and comprehensive. Collaborated with team members to optimize the wiki page.</p>
      <p><b>Investigation:</b> Participated in the protein marker CRISPR detection experiment. Carried out experimental operations, recorded data, and solved problems in the experiment process to ensure the smooth progress of the experiment.</p>
      <p><b>Public Engagement:</b> Prepared for the CCIC exchange meeting, including agenda planning, material preparation, etc. Contacted various teams, organized exchange meetings, promoted information sharing and cooperation among teams, and enhanced project communication and collaboration.</p>
    </div>
  </div>
</div>

{/* Xinze Li */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-50%] scale-140" src="https://static.igem.wiki/teams/5822/assets/members/zzu-xinzeli.webp" alt="LiXinze"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Li Xinze</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Conceptualization , Project Administration , Investigation, Software</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Conceptualization:</b> Responsible for proposing the project's core ideas, designing the overall framework based on breast cancer detection needs, and determining the application of Apt-HCR/RCA CRISPR-cas14 technology.</p>
      <p><b>Project Administration:</b> Responsible for coordinating the project process, managing team operations, organizing human practice activities such as conferences and exhibitions, and ensuring the smooth progress of each project link.</p>
      <p><b>Investigation:</b> Responsible for designing and completing experiments, formulating scientific and reasonable experimental schemes. Considered various factors to ensure the feasibility and effectiveness of experiments, and provided a basis for project research.</p>
      <p><b>Software:</b> Completed the establishment of the software model part, designed and developed software models according to project needs. Conducted model optimization and verification to ensure the model could support project research and application.</p>
    </div>
  </div>
</div>

{/* Jijing Ba */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-52%] translate-x-[15%] scale-130" src="https://static.igem.wiki/teams/5822/assets/members/zzu-jijingba.webp" alt="BaJijing"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Ba Jijing</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Entrepreneurship, Human Practice</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Entrepreneurship:</b> Responsible for writing the business plan of the project. Conducted market research, analyzed project commercial potential and development prospects. Formulated business strategies, including marketing, operation management, etc., to provide a commercial operation plan for the project.</p>
    </div>
  </div>
</div>
{/* Mengxiao Yu */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover scale-133 translate-y-[-50%]" src="https://static.igem.wiki/teams/5822/assets/members/zzu-mengyaoyu.webp" alt="Mengxiao Yu"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Yu Mengxiao</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Investigation, Writing, Data Curation</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Writing:</b> Responsible for project document management, including sorting out experimental reports, meeting minutes, etc. Classified and archived documents to ensure information was traceable and easy to retrieve.</p>
      <p><b>Data Curation:</b> Participated in project data collection work, collecting and organizing data from various aspects such as experiments and investigations. Ensured data accuracy and completeness to provide support for project analysis.</p>
    </div>
  </div>
</div>

{/* Wenlan Fang */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover scale-130 translate-y-[-50%]" src="https://static.igem.wiki/teams/5822/assets/members/zzu-wenlan-fang.webp" alt="Wenlan Fang"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Fang Wenlan</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Safety, Background Research</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Safety:</b> Responsible for formulating protocols and measures to ensure wet experiment safety. Conducted safety inspections, trained team members on safety knowledge, and prevented safety accidents in the laboratory.</p>
      <p><b>Background Research:</b> Defined the ethical guidelines to be followed during the project. Conducted ethical reviews on project activities to ensure the project complied with ethical norms and social responsibilities. Also participated in the wet experiment group, carrying out relevant experimental operations.</p>
    </div>
  </div>
</div>

{/* Yufei Huang */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover scale-133 translate-y-[-50%]" src="https://static.igem.wiki/teams/5822/assets/members/zzu-yufeihuang.webp" alt="Yufei Huang"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Huang Yufei</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Investigation, Record Keeping</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Investigation:</b> Responsible for developing wet experiment methods, researching and exploring experimental techniques. Optimized experimental processes, improved experimental efficiency and accuracy, and provided technical support for project experiments.</p>
    </div>
  </div>
</div>

{/* Yuxiao Zhang */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full scale-132 object-cover translate-y-[-50%]" src="https://static.igem.wiki/teams/5822/assets/members/zzu-yuxiaozhang.webp" alt="Yuxiao Zhang"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Zhang Yuxiao</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Human Practice, Investigation, Visualization</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Human Practice:</b> Carried out human practice work, including social investigation, public communication, etc. Understood social needs, promoted the combination of the project with society, and enhanced the project's social value.</p>
      <p><b>Investigation:</b> Participated in wet experiments, specifically responsible for the CD63 aptamer pull-down exosome experiment. Conducted experimental operations, analyzed data, and contributed to experimental research.</p>
      <p><b>Visualization:</b> Responsible for Logo and team uniform design. Created creative and representative designs to enhance the team's image and cohesion.</p>
    </div>
  </div>
</div>
{/* Yutong Liu */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-49%] translate-x-[15%] scale-140" src="https://static.igem.wiki/teams/5822/assets/members/zzu-yutongwang.webp" alt="Yutong"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Liu Yutong</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Experimental Work</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Molecular Cloning:</b> Performed vector construction, transformation, and other core experimental operations to support the project's molecular-level design and validation.</p>
      <p><b>Protein Expression:</b> Conducted induction and expression experiments for target proteins, optimizing conditions to enhance expression efficiency and lay the foundation for functional analysis.</p>
      <p><b>Data Documentation:</b> Assisted in organizing and summarizing experimental processes and results, ensuring the accuracy and traceability of data to improve the overall quality of project reports.</p>
    </div>
  </div>
</div>

{/* Canyang Wang */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full scale-132 h-full object-cover translate-y-[-50%]" src="https://static.igem.wiki/teams/5822/assets/members/zzu-canyangwang.webp" alt="Canyang Wang"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Wang Canyang</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Human Practice</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Human Practice:</b> Focused on cooperation and inclusion in human practice. Promoted cooperation among team members, built an inclusive team atmosphere. Carried out activities to enhance team cohesion and cooperation ability, and promoted the harmonious development of the project team.</p>
    </div>
  </div>
</div>

{/* Yuxuan Xia */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-51%] scale-133" src="https://static.igem.wiki/teams/5822/assets/members/zzu-yuxuanxia.webp" alt="Yuxuan Xia"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Xia Yuxuan</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Project Administration, Investigation</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Project Administration:</b> Responsible for the final product (solution) delivery of the project. Ensured the product met requirements, completed product testing, packaging, and handover to ensure successful delivery.</p>
      <p><b>Investigation:</b> Deployed the solution in the actual environment, including environment configuration, system installation, etc. Solved problems in the deployment process to ensure the solution could work normally.</p>
      <p><b>User Training:</b> Provided training for end-users, including writing instructions, conducting training sessions. Helped users master the use method of the solution to ensure effective application of the product.</p>
    </div>
  </div>
</div>

{/* Xiaoran Ji */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover scale-130 translate-y-[-55%]" src="https://static.igem.wiki/teams/5822/assets/members/zzu-xiaoran-ji.webp" alt="Xiaoran Ji"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Ji Xiaoran</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Safety, Data Curation</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Safety:</b> Collaborated with FANG WENLAN in safety management work, including laboratory safety protocol implementation, data security measure execution, and ethical guideline compliance. Participated in safety inspection and management to ensure project safety.</p>
      <p><b>Data Curation:</b> Assisted in wet experiments, carried out experimental operations, equipment maintenance, etc. Supported the smooth progress of the experiment, and cooperated with team members to complete experimental tasks.</p>
    </div>
  </div>
</div>

{/* Jing Lei */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-50%] scale-135" src="https://static.igem.wiki/teams/5822/assets/members/zzu-jinglei.webp" alt="Jing Lei"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Lei Jing</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Investigation, Ethical Report Writing</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Investigation:</b> Responsible for complementary strand design. Conducted design work according to experimental needs, ensured design rationality and effectiveness, and provided support for experimental research.</p>
      <p><b>Background Research:</b> Wrote the project's ethical report, sorted out ethical issues in the project process, and explained how to follow ethical guidelines. Ensured the project's ethical compliance and provided a basis for project review.</p>
    </div>
  </div>
</div>

{/* Tianhui Chen */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover scale-133 translate-x-[-15%] translate-y-[-50%]" src="https://static.igem.wiki/teams/5822/assets/members/zzu-tianhui-chen.webp" alt="Tianhui Chen"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Chen Tianhui</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Analysis, Writing</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Analysis:</b> Conducted literature review related to the project, collected and analyzed relevant research results. Summarized research progress and trends to provide a reference for project research.</p>
      <p><b>Writing:</b> Assisted in project result summary, sorted out experimental results, data analysis results, etc. Helped write project result reports to improve the comprehensiveness and clarity of results.</p>
    </div>
  </div>
</div>
{/* Peilin Li */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-51%] scale-133" src="https://static.igem.wiki/teams/5822/assets/members/huazhong-university-peilinli.webp" alt="Peilin Li"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Li Peilin</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Public Engagement</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Data Outreach & Visualization:</b> Develops and shares clear, compelling visualizations and summaries of dry lab results (e.g., computational models, simulations, bioinformatics analyses) for public audiences.</p>
      <p><b>Online Platform Engagement:</b> Manages the presentation of dry lab work on project websites, wikis, and social media, ensuring content is accurate and accessible to both scientific and general communities.</p>
      <p><b>Academic & Public Communication:</b> Facilitates discussions and knowledge exchange about the team's computational approaches at virtual conferences, public webinars, and with online collaborators.</p>
    </div>
  </div>
</div>

{/* Zhiquan Zhang */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover scale-133 translate-x-[-15%] translate-y-[-50%]" src="https://static.igem.wiki/teams/5822/assets/members/konanuniversity-zhiquanzhang.webp" alt="Zhiquan Zhang"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Zhang Zhiquan</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Record Keeping, Public Engagement</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Record Keeping:</b> Oversee end-to-end Youtube content creation. From ideating video concepts (e.g., format, theme alignment with audience demand) to managing production (shooting, editing, adding subtitles/annotations), ensure outputs are engaging, high-quality, and fit platform algorithms.</p>
      <p><b>Public Engagement:</b> Handle daily channel operations. Schedule and publish content timely, monitor comments to interact with viewers, update channel info/layout. Track data (views, watch time, subscriber trends) to guide content iteration.</p>
    </div>
  </div>
</div>

{/* Snik */}
<div className="card flex flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
  <div className="avatar-member flex flex-row gap-5 items-center">
    <div className='w-32 h-32 rounded-full overflow-hidden'>
      <img className="w-full h-full object-cover translate-y-[-50%] scale-131" src="https://static.igem.wiki/teams/5822/assets/members/zzu-mary.webp" alt="Snik"/>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h6 className="text-[28px] font-bold leading-none">Maria Salnikova</h6>
      <span className="text-gray-600 text-xl tracking-wider font-normal">Member</span>
    </div>
  </div>
  <div className="content space-y-2 text-sm">
    <div className="tasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Tasks: </span>
      <p>Wiki Coding, Web Development</p>
    </div>
    <div className="specTasks">
      <span className="font-bold text-[20px] tracking-wide leading-10">Specific tasks: </span>
      <p><b>Wiki Coding:</b> Responsible for end-to-end wiki development and maintenance. From structuring content (e.g., layout design, information architecture) to implementing functional features (interactive elements, responsive UI), ensuring the wiki is user-friendly, visually coherent, and technically robust.</p>
      <p><b>Web Development:</b> Handle the integration of front-end and back-end components. Optimize page performance and cross-browser compatibility, regularly update site content, and troubleshoot technical issues to ensure smooth and reliable wiki operation.</p>
    </div>
  </div>
</div>




      
    </div>
  </div>

  <div className='card-body'>
    <h1 id='section_2'>Timeline</h1>
    
    <div className='grid grid-cols-3 gap-6'>
      <div className="card flex flex-col p-8 bg-white shadow-md rounded-2xl gap-2 justify-center h-50">
        <h6 className='font-semibold text-[20px]'>Recruit Team Members</h6>   
        <span>Start: 2024 October</span>
        <span>End: 2025 March</span>
        <span>Calendar Duration: 20 weeks</span>   

      </div>
      <div className="card flex flex-col p-8 bg-white shadow-md rounded-2xl gap-2 justify-center h-50">
        <h6 className='font-semibold text-[20px]'>Development Of Project Plan</h6>   
        <span>Start: 2025 January</span>
        <span>End: 2025 March</span>
        <span>Calendar Duration: 8 weeks</span>   

      </div>
      <div className="card flex flex-col p-8 bg-white shadow-md rounded-2xl gap-2 justify-center h-50">
        <h6 className='font-semibold text-[20px]'>Wet Laboratory Activities</h6>   
        <span>Start: 2025 July 1st</span>
        <span>End: 2025 October 8th</span>
        <span>Calendar Duration: 13 weeks</span>   

      </div>
      <div className="card flex flex-col p-8 bg-white shadow-md rounded-2xl gap-2 justify-center h-50">
        <h6 className='font-semibold text-[20px]'>Dry Laboratory Activities</h6>   
        <span>Start: 2025 March</span>
        <span>End: 2025 September</span>
        <span>Calendar Duration: 28 weeks</span>   

      </div>
      <div className="card flex flex-col p-8 bg-white shadow-md rounded-2xl gap-2 justify-center h-50">
        <h6 className='font-semibold text-[20px]'>Building The Team Wili</h6>   
        <span>Start: 2025 July 1st</span>
        <span>End: 2025 October 8th</span>
        <span>Calendar Duration: 13 weeks</span>   

      </div>
      

    <div>

    </div>
    </div>
  </div>
  </div>
    

  </div>
  </>
  )
}

