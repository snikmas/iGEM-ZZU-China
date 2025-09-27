import React from 'react'
import { members, roles } from "../membersInfo"; 


export function Members({props}) {
  const {section_1, section_2} = props;

  function memberCard(role) {
  return members
    .filter(member => member.position.includes(role))
    .map((member, idx) => (
      <div
        key={idx}
        className="relative w-70 h-85 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group"
      >
        {/* Background Photo */}
        <img
          src={member.photoUri}
          alt={member.name}
          className={member.imgStyle}
          // "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Text */}
        <div className="absolute bottom-[-5%] w-full bg-gradient-to-t from-black/90 via-black/90 to-transparent p-5 text-center">
          <h2 className="text-white/90! text-lg font-semibold">{member.name}</h2>
        </div>
      </div>
    ));
}




  function teamCards() {
    return roles.map((role, idx) => (
      <div key={idx} className="mb-10">
        {/* Role Title */}
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {role}
        </h2>
    
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-5">
          {memberCard(role)}
        </div>
      </div>
    ));
  }
  


  return (
    <div className="container my-4">
      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_1">{section_1}</h1>
          <p>
            On the IGEM stage, there stands a team from Zhengzhou University. We came together out of our passion for life sciences, and walk side by side with a firm original aspiration: to carve out a more accurate and efficient path for breast cancer detection through the power of synthetic biology.
            When we saw that breast cancer accounts for nearly one-third of all malignant tumors in women worldwide, and learned about the limitations of traditional detection methods, we deeply realized that every delayed diagnosis could mean a regret in life. Thus, we set our sights on the cutting-edge field of "exosome detection" and dived headfirst into the laboratory, holding fast to the belief that "we can make early screening simpler and give patients more confidence".
            This journey has never been a lonely fight. Some team members stayed by the instruments for over ten hours, continuously monitoring fluorescence changes just to optimize the HCR signal amplification system; others pored over dozens of sets of molecular docking data repeatedly to design aptamer sequences; still others took the team's research results to international conferences, engaged in in-depth exchanges with Nobel laureates, and brought cutting-edge insights back to the lab overnight. We share the cheers of a successful experiment and bear the disappointment of an unsatisfactory result together — yet no one has ever said "let's call it quits". For we all know that what we hold in our hands is not just project data, but a shared commitment to "protecting lives with technology".
            From the initial conceptualization to today's breakthroughs in technologies such as Cas14a prokaryotic expression and exosome-capturing magnetic beads, what has sustained us is not only our dedication to science, but also the tacit understanding that "while you supplement experiments, I check literature; while you revise plans, I offer ideas". We are comrades, partners, and a group of light-chasers who believe that "tiny molecules can trigger huge changes". In the future, we will move forward with this cohesion, letting the innovative light of synthetic biology illuminate more possibilities for disease detection!
          </p>
        </div>
      </div>
      <div className='card mb-4'>
        <div className="card-body p-8">
          {/* Section Header */}
          <h1 id="section_2" className="text-3xl font-bold mb-6 text-gray-800">
            {section_2}
          </h1>
          {teamCards()}
        </div>
      </div>
    </div>
  )
}
