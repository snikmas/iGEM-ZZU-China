import React from 'react'

export function Members() {
  return (
    <div className="container my-4">
      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_1">Team Introduction</h1>
          <p>
            On the IGEM stage, there stands a team from Zhengzhou University. We came together out of our passion for life sciences, and walk side by side with a firm original aspiration: to carve out a more accurate and efficient path for breast cancer detection through the power of synthetic biology.
            When we saw that breast cancer accounts for nearly one-third of all malignant tumors in women worldwide, and learned about the limitations of traditional detection methods, we deeply realized that every delayed diagnosis could mean a regret in life. Thus, we set our sights on the cutting-edge field of "exosome detection" and dived headfirst into the laboratory, holding fast to the belief that "we can make early screening simpler and give patients more confidence".
            This journey has never been a lonely fight. Some team members stayed by the instruments for over ten hours, continuously monitoring fluorescence changes just to optimize the HCR signal amplification system; others pored over dozens of sets of molecular docking data repeatedly to design aptamer sequences; still others took the team's research results to international conferences, engaged in in-depth exchanges with Nobel laureates, and brought cutting-edge insights back to the lab overnight. We share the cheers of a successful experiment and bear the disappointment of an unsatisfactory result together — yet no one has ever said "let's call it quits". For we all know that what we hold in our hands is not just project data, but a shared commitment to "protecting lives with technology".
            From the initial conceptualization to today's breakthroughs in technologies such as Cas14a prokaryotic expression and exosome-capturing magnetic beads, what has sustained us is not only our dedication to science, but also the tacit understanding that "while you supplement experiments, I check literature; while you revise plans, I offer ideas". We are comrades, partners, and a group of light-chasers who believe that "tiny molecules can trigger huge changes". In the future, we will move forward with this cohesion, letting the innovative light of synthetic biology illuminate more possibilities for disease detection!
          </p>
        </div>
      </div>
      <div className='card mb-4'>
        <div className="card-body">
          <h1 id="section_1">Team Members</h1>
            <h2>Principal Investigators</h2>
          <div className="block-with-cards + text grid grid-cols-3 gap-6">
              {/* card */}
              <div className="card flex- bg-white shadow-md rounded-2xl gap-10">
                <div className="card-img">
                  <img src="https://static.igem.wiki/teams/5822/assets/members/lipei.webp" alt="LiPei" className="w-full"/>
                </div>
                <div className='card-description flex flex-col text-center bg-amber-50'>
                  <h2>Pei Li</h2>
                  <span>Primary Investigator</span>
                </div>
              </div>

              <div className="card flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
                <div className=" card-img">
                  <img src="https://static.igem.wiki/teams/5822/assets/members/lipei.webp" alt="LiPei"/>
                </div>
                <div className='card-description'>
                  <h2>Pei Li</h2>
                </div>
              </div>

              <div className="card flex-col p-10 bg-white shadow-md rounded-2xl gap-10">
                <div className=" card-img">
                  <img src="https://static.igem.wiki/teams/5822/assets/members/lipei.webp" alt="LiPei"/>
                </div>
                <div className='card-description '>
                  <h2>Pei Li</h2>
                </div>
              </div>
              
            </div>


              

            

            
        </div>

      </div>








    </div>
  )
}
