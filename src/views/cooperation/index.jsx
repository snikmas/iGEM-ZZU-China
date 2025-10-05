import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';


import ImageGallery from '../../components/imagegallery';
const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';

const overview = 'https://static.igem.wiki/teams/5822/newassets/collaborations/overview.webp';

const figure1 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/1.webp';
const figure2 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/2.webp';
const figure3 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/3.webp';
const figure4 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/4.webp';
const figure5 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/5.webp';
const figure2t = 'https://static.igem.wiki/teams/5822/newassets/collaborations/2t.webp';

const figure6 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/6.webp';
const figure7 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/7.webp';
const figure8 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/8.webp';
const figure9 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/9.webp';
const figure10 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/10.webp';
const figure11 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/11.webp';
const figure12 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/12.webp';
const figure13 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/13.webp';
const figure14 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/14.webp';

const figure16 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/16.webp';
const figure17 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/17.webp';
const figure18 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/18.webp';
const figure19 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/19.webp';
const figure20 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/20.webp';
const figure21 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/21.webp';
const figure22 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/22.webp';
const figure23 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/23.webp';
const figure24 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/24.webp';
const figure25 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/25.webp';
const figure26 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/26.webp';
const figure27 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/27.webp';
const figure28 = 'https://static.igem.wiki/teams/5822/newassets/collaborations/28.webp';
const videoFile = 'https://video.igem.org/w/4fn358tiUgPLNzKES39Rnh';


// 组件定义 1
// 组件定义
const MainContent = () => (
  <>
    {/* 1 */}
    <div id="overview" className="view-content">
      <div className="content-header">
        <div className="h1">Overview</div>
      </div>
      <div className="content-body">
        <p>
          <span>Collaboration</span> has always been at the <span>heart</span> of our <span>project</span>. To ensure that our work is both <span>innovative</span> and <span>impactful</span>, we actively sought opportunities to <span>learn from</span>, <span>share with</span>, and <span>collaborate</span> across <span>diverse groups</span> — <span>fellow iGEM teams</span>, <span>schools and communities</span>, as well as <span>institutions</span> and <span>leading experts</span>.
        </p>
        <p>
          Through these <span>exchanges</span>, we not only <span>refined</span> our <span>scientific approach</span> but also <span>broadened</span> the <span>social</span> and <span>educational dimensions</span> of our <span>project</span>. Each <span>collaboration</span> shaped our <span>design</span>, <span>challenged</span> our <span>thinking</span>, and <span>strengthened</span> our <span>commitment</span> to making <span>synthetic biology</span> more <span>accessible</span> and <span>meaningful</span> in <span>real-world contexts</span>.
        </p>

        <div className="figure-container">
          <div className="figure-item">
          <img src={overview} alt="Collaborations" className="figure-image" />
          </div>
        </div>

      </div>
    </div>

    {/* 2 */}
    <div id="team-technical-exchange" className="view-content">
      <div className="content-header">
        <div className="h1">Team-to-Team Technical Exchange</div>
      </div>

      {/* Technical Exchange Overview Subsection */}
      <section id="technical-overview" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Technical Exchange Overview</div>
          </div>
          <div className="content-body">
            <p>Working alongside other iGEM teams gave us the chance to test ideas, receive feedback, and grow together as part of a larger synthetic biology community.</p>
            <p>From online exchanges with Japanese teams to on-site discussions during conferences and regional meetups, we built connections that encouraged technical improvement, creative problem-solving, and shared learning. These collaborations motivated us to push our project forward with new perspectives and practical advice.</p>
          </div>
        </div>
      </section>

      {/* Japan Online Exchange Subsection */}
      <section id="japan-online" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Japan Online Exchange (March 2025)</div>
          </div>
          <div className="content-body">
            <p>In March 2025, we organized a structured online symposium with several Japanese iGEM teams, focusing on synthetic biology education, project design, and technical implementation. During the session, each team presented their project frameworks, highlighting innovative approaches in diagnostics, biosensing, and public engagement. Our team introduced the early-stage design of our breast cancer exosome detection system, emphasizing the integration of aptamer-based recognition with CRISPR-Cas12a signal amplification. Through in-depth Q&A and breakout discussions, we explored common challenges such as off-target effects, signal-to-noise ratio, and ethical considerations in gene editing. This cross-border dialogue not only expanded our technical perspective but also inspired adjustments in our experimental workflow, particularly in optimizing reagent concentrations and assay conditions. The exchange reinforced the importance of international collaboration in addressing complex biomedical problems using synthetic biology tools.</p>


            <ImageGallery
              images={[
                { src: figure1, alt: "Team-to-Team Technical Exchange Figure 1.1" },
                { src: figure2, alt: "Team-to-Team Technical Exchange Figure 1.2" },
                { src: figure2t, alt: "Team-to-Team Technical Exchange Figure 1.3" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Osaka University Exchange Subsection */}
      <section id="osaka-university" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Osaka University On-Site Exchange (April 2025)</div>
          </div>
          <div className="content-body">
            <p>In April 2025, we visited Osaka University for an in-person exchange. Both teams presented their projects—our CRISPR–aptamer breast cancer diagnostic system and their microbial metabolic engineering platform—before diving into discussions on assay sensitivity, workflow optimization, and user-friendly design. The exchange not only gave us practical feedback to refine our experimental pipeline but also highlighted how regional healthcare and sustainability priorities shape iGEM projects. Meeting face-to-face deepened collaboration, showing us the importance of cross-cultural dialogue in advancing synthetic biology.</p>

            <ImageGallery
              images={[
                { src: figure3, alt: "Osaka University On-Site Exchange Figure 2.1" },
                { src: figure4, alt: "Osaka University On-Site Exchange Figure 2.2" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Taian iGEM Exchange Subsection */}
      <section id="taian-igem" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Taian iGEM Exchange Conference (June 2025)</div>
          </div>
          <div className="content-body">
            <p>At the regional iGEM conference in Taian, we presented our progress on the CRISPR-exosome detection platform and participated in technical workshops focused on biosensor optimization and usability testing. We exchanged ideas with teams working on similar diagnostic tools, discussing issues such as primer design, non-specific binding, and user-friendly result interpretation. The feedback we received prompted us to simplify our experimental protocol and enhance the readability of output signals. In return, we shared our experience in integrating CRISPR with isothermal amplification, offering a practical reference for other teams developing point-of-care diagnostic devices. This regional interaction not only refined our technical approach but also strengthened our collaborative network within the Chinese iGEM community.</p>

            <div className="figure-container">
              <div className="figure-item">
              <img src={figure5} alt="Taian iGEM Exchange Conference" className="figure-image" />
              <div className="h4">Figure 3. Taian iGEM Exchange Conference</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Shanhe Four Provinces Exchange Subsection */}
      <section id="shanhe-igem" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Shanhe Four Provinces iGEM Exchange Conference (June 2025)</div>
          </div>
          <div className="content-body">
            <p>On June 11, we co-organized a cloud-based summit with nine universities from the Shanhe region, centered on the theme "Frontier Interdisciplinarity and Practical Implementation." We presented our dual-driven model combining research with social action, highlighting community-based breast cancer awareness activities and educational outreach. Other teams shared innovative approaches in areas such as carbon-neutral biomanufacturing, gut microbiome engineering, and AI-assisted metabolic design. During the free discussion session, we explored best practices for Human Practices (HP) and Education (EDU), such as using local cultural elements in science communication and building sustainable partnerships with local hospitals. This exchange enriched our understanding of interdisciplinary collaboration and provided practical strategies to enhance the social impact of our project.</p>
            <ImageGallery
              images={[
                { src: figure6, alt: "Shanhe Four Provinces iGEM Exchange Conference Figure 4.1" },
                { src: figure7, alt: "Shanhe Four Provinces iGEM Exchange Conference Figure 4.2" },
                { src: figure8, alt: "Shanhe Four Provinces iGEM Exchange Conference Figure 4.3" }
              ]}
            />

          </div>
        </div>
      </section>

      {/* CCiC Conference Subsection */}
      <section id="ccic-conference" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">The 10th China Synthetic Biology Conference (CCiC) & Synbiopunk 2025 (August 2025)</div>
          </div>
          <div className="content-body">
            <p>From August 6 to 8, we participated in CCiC & Synbiopunk 2025 in Beijing, engaging with scholars, industry leaders, and over 100 iGEM teams. We presented our project through a professional booth, poster sessions, and a formal roadshow. We also joined roundtable discussions on topics such as "The Next Leap in DNA Synthesis" and "Generative AI in Life Sciences," and held a one-on-one meeting with Mr. Mark Dupal, Vice President of Twist Bioscience Asia-Pacific, who offered advice on scaling production and navigating regulatory pathways. These interactions helped us identify key bottlenecks in technology transfer and refine our quality control and documentation processes. Our project, which closely links CRISPR innovation with clinical needs, also served as an inspiring case for other teams aiming for real-world application.</p>

            <ImageGallery
              images={[
                { src: figure9, alt: "The 10th China Synthetic Biology Conference (CCiC) & Synbiopunk 2025 Figure 5.1" },
                { src: figure10, alt: "The 10th China Synthetic Biology Conference (CCiC) & Synbiopunk 2025 Figure 5.2" },
                { src: figure11, alt: "The 10th China Synthetic Biology Conference (CCiC) & Synbiopunk 2025 Figure 5.3" }
              ]}
            />
          </div>
        </div>
      </section>
    </div>

    {/* 3 */}
    <div id="educational-outreach" className="view-content">
      <div className="content-header">
        <div className="h1">Educational & Outreach Collaboration</div>
      </div>

      {/* Educational Outreach Overview Subsection */}
      <section id="outreach-overview" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Educational Outreach Overview</div>
          </div>
          <div className="content-body">
            <p>
              We believe <span>science</span> should reach <span>beyond the lab</span>. By working with <span>primary schools</span>, <span>middle schools</span>, <span>high schools</span>, <span>hospitals</span>, and <span>universities</span>, we shared <span>knowledge</span> with <span>students</span>, <span>patients</span>, and the <span>public</span> in <span>engaging</span> and <span>approachable</span> ways.
            </p>
            <p>
              From designing <span>interactive workshops</span> and <span>creative outreach materials</span> to hosting <span>campus events</span>, these <span>collaborations</span> allowed us to <span>inspire interest</span> in <span>synthetic biology</span> and <span>raise awareness</span> of <span>breast cancer prevention</span> and <span>early detection</span>.
            </p>


          </div>
        </div>
      </section>

      {/* Science Outreach Subsection */}
      <section id="science-outreach" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Science Outreach for Primary to High Schools (March–April 2025)</div>
          </div>
          <div className="content-body">
            <p>
              We believe that <span>scientific curiosity</span> should be <span>nurtured from an early age</span>. To spark <span>interest</span> in <span>biology</span>, our team designed <span>interactive workshops</span> for <span>primary</span>, <span>middle</span>, and <span>high school students</span>. At the <span>primary level</span>, children <span>mashed strawberries</span> and <span>witnessed DNA</span> with their own eyes, transforming <span>abstract textbook content</span> into a <span>joyful discovery</span>. <span>Middle school students</span> carried out a <span>plasmid extraction experiment</span>, role-playing as <span>"science couriers"</span> to experience <span>real lab procedures</span>. <span>High school students</span> joined our <span>"iGEM Buffet"</span> and <span>anatomy hall visit</span>, where <span>casual conversations</span> and <span>hands-on exploration</span> opened the door to <span>synthetic biology</span> and <span>medical sciences</span>.
            </p>
            <p>
              These sessions not only <span>planted seeds of curiosity</span> but also <span>challenged</span> us to <span>refine our communication</span>. The children's <span>imaginative questions</span> and the teenagers' <span>practical concerns</span> gave us <span>feedback</span> we used to <span>improve our science outreach materials</span>, ensuring <span>accuracy</span> without losing <span>creativity</span>. This experience <span>strengthened</span> our ability to <span>communicate science</span> across <span>age groups</span> and <span>inspired</span> us to keep <span>bridging the gap</span> between <span>laboratories</span> and <span>classrooms</span>.
            </p>

            <div className="figure-container">
              <video
                controls
                autoPlay
                loop
                muted
                className="video-player"
              >
                <source src={videoFile} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Day Hospital Subsection */}
      <section id="womens-day-hospital" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Women's Day Health Awareness Campaign at the Third Affiliated Hospital (March 8, 2025)</div>
          </div>
          <div className="content-body">
            <p>
              On <span>March 8</span>, <span>International Women's Day</span>, we collaborated with the <span>Third Affiliated Hospital</span> of <span>Zhengzhou University</span> to hold a <span>public health campaign</span> focused on <span>women's wellness</span>. With <span>doctors and nurses</span>, we shared <span>breast cancer prevention tips</span>, demonstrated <span>screening methods</span>, and distributed <span>accessible brochures</span> to <span>patients</span> and their <span>families</span>. The <span>hospital setting</span> gave our <span>campaign direct impact</span>, reaching <span>women</span> who were most in need of <span>knowledge</span> and <span>reassurance</span>.
            </p>
            <p>
              Through this <span>collaboration</span>, we realized that <span>awareness</span> is not only about <span>science</span>, but also about <span>empathy</span>. Listening to <span>women's personal worries</span> about <span>screening</span> and <span>treatment</span> helped us better understand the <span>human side</span> of <span>breast cancer care</span> and <span>motivated</span> us to make our <span>project more patient-centered</span>. This <span>collaboration</span> built a <span>foundation</span> for future <span>hospital-based outreach</span> and <span>encouraged</span> us to <span>align our project</span> more closely with <span>patient needs</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure12, alt: "Women's Day Health Awareness Campaign at the Third Affiliated Hospital Figure 6.1" },
                { src: figure13, alt: "Women's Day Health Awareness Campaign at the Third Affiliated Hospital Figure 6.2" }
              ]}
            />


          </div>
        </div>
      </section>

      {/* Women's Day Campus Subsection */}
      <section id="womens-day-campus" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Women's Day Outreach at Zhengzhou University North Playground (March 2025)</div>
          </div>
          <div className="content-body">
            <p>
              That same week, we organized a <span>large-scale outreach event</span> on our own <span>campus</span>, transforming the <span>North Playground</span> into an <span>interactive science fair</span>. Activities included <span>board games</span> about <span>prevention</span>, <span>puzzles</span> about <span>screening</span>, a <span>"knowledge acceleration" quiz</span>, and a <span>message wall</span> where <span>students</span> wrote <span>encouragements</span> for <span>women's health</span>. We also introduced our <span>iGEM project</span> through <span>banners</span> and <span>presentations</span>, connecting <span>synthetic biology</span> with <span>real-world solutions</span>.
            </p>
            <p>
              The event drew <span>enthusiastic participation</span> from <span>hundreds of students</span>. Their <span>questions</span> revealed both <span>curiosity</span> and <span>knowledge gaps</span>—for example, <span>confusion</span> about when to begin <span>regular screening</span>. This <span>direct feedback</span> helped us <span>design clearer educational materials</span> and <span>optimize our board game</span>. For us, the event was more than <span>outreach</span>—it was a <span>vivid reminder</span> that <span>science communication</span> thrives when it is <span>engaging</span>, <span>personal</span>, and <span>empowering</span>. This <span>outreach</span> not only <span>raised awareness</span> among <span>peers</span> but also <span>fostered a stronger connection</span> between our <span>project</span> and the <span>wider university community</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure14, alt: "Women's Day Outreach at Zhengzhou University North Playground Figure 7.1" },
                { src: figure16, alt: "Women's Day Outreach at Zhengzhou University North Playground Figure 7.2" }
              ]}
            />


          </div>
        </div>
      </section>

      {/* Campus iGEM Sharing Subsection */}
      <section id="campus-igem" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Campus iGEM Sharing (May 2025)</div>
          </div>
          <div className="content-body">
            <p>
              Our <span>campus event</span> blended <span>academic reporting</span> with <span>interactive learning</span>. In addition to <span>sharing conference experiences</span>, we designed <span>hands-on activities</span> such as the <span>"Knowledge Arena"</span>, where <span>students</span> competed in <span>answering questions</span> about <span>synthetic biology</span> and <span>women's health</span>, and <span>"Medical Turtle Soup"</span>, which combined <span>storytelling</span> with <span>ethical reasoning</span>. These <span>activities</span> made <span>abstract concepts</span> <span>tangible</span> and <span>encouraged active participation</span>. The event not only <span>raised awareness</span> about <span>iGEM</span> and <span>synthetic biology</span> but also <span>demonstrated</span> how <span>scientific knowledge</span> can be <span>communicated</span> in an <span>engaging</span> and <span>inclusive manner</span>. <span>Feedback</span> from <span>participants</span> helped us <span>improve the design</span> of future <span>outreach activities</span> and <span>strengthen</span> our role as <span>student science ambassadors</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure17, alt: "Campus iGEM Sharing Figure 8.1" },
                { src: figure18, alt: "Campus iGEM Sharing Figure 8.2" },
                { src: figure19, alt: "Campus iGEM Sharing Figure 8.3" }
              ]}
            />
          </div>
        </div>
      </section>
    </div>

    {/* 4 */}
    <div id="institutional-expert" className="view-content">
      <div className="content-header">
        <div className="h1">Institutional & Expert Collaboration</div>
      </div>

      {/* Institutional Collaboration Overview Subsection */}
      <section id="institutional-overview" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Institutional Collaboration Overview</div>
          </div>
          <div className="content-body">
            <p>
              <span>Engagement</span> with <span>institutions</span>, <span>companies</span>, and <span>leading scientists</span> provided us with <span>invaluable guidance</span> and <span>real-world perspectives</span>.
            </p>
            <p>
              <span>Conversations</span> with <span>biotech companies</span>, <span>clinicians</span>, and <span>Nobel laureates</span> gave us <span>deeper insights</span> into the <span>challenges</span> and <span>opportunities</span> of <span>translating</span> our <span>project</span> into <span>practice</span>. Their <span>feedback</span> helped us to <span>evaluate feasibility</span>, <span>improve our design</span>, and ensure that our <span>work</span> aligns with both <span>medical needs</span> and <span>ethical standards</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Autogen Partnership Subsection */}
      <section id="autogen-partnership" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Partnership with Autogen (April 2025)</div>
          </div>
          <div className="content-body">
            <p>
              We visited <span>Autogen</span>, a <span>leading biotech company</span>, to learn about <span>industrial standards</span> in <span>exosome isolation</span> and <span>diagnostic device development</span>. Through <span>lab tours</span> and <span>technical workshops</span>, we gained <span>hands-on experience</span> with <span>advanced extraction kits</span> and <span>microfluidic platforms</span>. <span>Experts</span> from the <span>company</span> also provided <span>feedback</span> on <span>improving the purity</span> and <span>yield</span> of <span>exosome samples</span>, which directly influenced the <span>optimization</span> of our <span>upstream processing steps</span>. This <span>collaboration</span> provided a <span>realistic understanding</span> of the <span>gap</span> between <span>academic research</span> and <span>industrial application</span> and helped us <span>design</span> a more <span>robust</span> and <span>reproducible detection pipeline</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure20, alt: "Partnership with Autogen Figure 9.1" },
                { src: figure21, alt: "Partnership with Autogen Figure 9.2" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Thomas Südhof Interview Subsection */}
      <section id="thomas-sudhof" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Interview with Professor Thomas Südhof (March 2025)</div>
          </div>
          <div className="content-body">
            <p>
              Our <span>journey</span> began with an <span>inspiring conversation</span> with <span>Professor Thomas Südhof</span>, <span>Nobel Laureate</span> in <span>Physiology or Medicine</span>. He shared his <span>insights</span> on <span>cellular signaling</span> and <span>synaptic mechanisms</span>, helping us understand how <span>fundamental biological principles</span> can guide the <span>design</span> of <span>highly sensitive detection systems</span>. His <span>advice</span> was <span>crucial</span> in <span>optimizing</span> our <span>project</span> for <span>early breast cancer biomarkers</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure22, alt: "Interview with Professor Thomas Südhof Figure 10.1" },
                { src: figure23, alt: "Interview with Professor Thomas Südhof Figure 10.2" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Craig Mello Interview Subsection */}
      <section id="craig-mello" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Interview with Craig C. Mello (April 2025)</div>
          </div>
          <div className="content-body">
            <p>
              Next, we had the <span>privilege</span> of speaking with <span>Craig C. Mello</span>, <span>2006 Nobel Prize winner</span>. We discussed <span>RNA interference</span> and <span>gene regulation</span>, which <span>inspired improvements</span> in our <span>LFA detection strategy</span>, particularly in <span>enhancing signal specificity</span> and <span>reducing background noise</span>. His <span>guidance</span> directly influenced how we <span>refined</span> the <span>molecular components</span> of our <span>test strips</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure24, alt: "Interview with Craig C. Mello Figure 11.1" },
                { src: figure25, alt: "Interview with Craig C. Mello Figure 11.2" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Clinical Experts Subsection */}
      <section id="clinical-experts" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Guidance from Clinical Experts in China (April 2025)</div>
          </div>
          <div className="content-body">
            <p>
              We also consulted <span>Professor Yu Baofa</span>, a <span>leading oncologist</span> and <span>Chairman</span> of <span>Baofa Cancer Hospital</span>. He shared <span>insights</span> on <span>early breast cancer screening</span> and <span>clinical workflows</span>, helping us <span>design</span> a <span>test strip</span> compatible with <span>real-world hospital routines</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure26, alt: "Interview with Professor Yu Baofa Figure 12.1" },
                { src: figure27, alt: "Interview with Professor Yu Baofa Figure 12.2" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Twist Bioscience Subsection */}
      <section id="twist-bioscience" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Industry Perspective from Twist Bioscience (May 2025)</div>
          </div>
          <div className="content-body">
            <p>
              To ensure <span>practical implementation</span>, we spoke with <span>Mark Dupal</span>, <span>VP</span> of <span>Twist Bioscience</span>. He provided <span>guidance</span> on <span>oligonucleotide design</span>, <span>production scalability</span>, and <span>quality control</span>, <span>improving</span> the <span>stability</span> and <span>reproducibility</span> of our <span>LFA strips</span> and <span>bridging</span> our <span>academic work</span> with <span>industrial feasibility</span>.
            </p>
            <p>
              Through <span>Nobel-level insights</span>, <span>clinical expertise</span>, and <span>industry guidance</span>, we developed a <span>breast cancer screening platform</span> that is <span>rapid</span>, <span>reliable</span>, and <span>ready for early detection</span>, while <span>inspiring</span> our <span>team</span> to <span>aim higher</span> at every <span>step</span>.
            </p>
            <ImageGallery
              images={[
                { src: figure28, alt: "Interview with Mark Dupal Figure 13.1" }
              ]}
            />
          </div>
        </div>
      </section>
    </div>

    {/* 5 */}
    <div id="impact-reflection" className="view-content">
      <div className="content-header">
        <div className="h1">Impact and Reflection</div>
      </div>
      <div className="content-body">
        <p>
          Through multi-level collaborations with academic, industrial, and international partners, our team has not only advanced the technical development of our project but also enhanced its social relevance and implementation potential. These exchanges provided critical feedback that improved experimental design, assay performance, and user-centered features. They also strengthened our ability to communicate science effectively across cultural and disciplinary boundaries. Most importantly, these experiences instilled a collaborative mindset that values open dialogue, ethical consideration, and shared learning—a mindset that will continue to guide our work beyond the iGEM competition.
        </p>
      </div>
    </div>
  </>
);


function Cooperation() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState('overview');
  
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
      id: 'overview',
      title: 'Overview',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'team-technical-exchange',
      title: 'Team-to-Team Technical Exchange',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'japan-online', title: 'Japan Online Exchange (March 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'osaka-university', title: 'Osaka University On-Site Exchange (April 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'taian-igem', title: 'Taian iGEM Exchange Conference (June 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'shanhe-igem', title: 'Shanhe Four Provinces iGEM Exchange Conference (June 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'ccic-conference', title: 'The 10th China Synthetic Biology Conference (CCiC) & Synbiopunk 2025 (August 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'educational-outreach',
      title: 'Educational & Outreach Collaboration',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'science-outreach', title: 'Science Outreach for Primary to High Schools (March–April 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'womens-day-hospital', title: 'Women\'s Day Health Awareness Campaign at the Third Affiliated Hospital (March 8, 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }, 
        { id: 'womens-day-campus', title: 'Women\'s Day Outreach at Zhengzhou University North Playground (March 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'campus-igem', title: 'Campus iGEM Sharing (May 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'institutional-expert',
      title: 'Institutional & Expert Collaboration',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'autogen-partnership', title: 'Partnership with Autogen (April 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'thomas-sudhof', title: 'Interview with Professor Thomas Südhof (March 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'craig-mello', title: 'Interview with Craig C. Mello (April 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'clinical-experts', title: 'Guidance from Clinical Experts in China (April 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'twist-bioscience', title: 'Industry Perspective from Twist Bioscience (May 2025)', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'impact-reflection',
      title: 'Impact and Reflection',
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
                <img className='menu-icon' src={menu.icon}  />
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && (
                <div className="submenu">
                  {menu.subMenus.map((subMenu) => (
                    <div
                      key={subMenu.id}
                      className="submenu-item"
                      onClick={() => handleSubMenuClick(menu.id, subMenu.id)}
                    >
                      <img className='menu-icon' src={subMenu.icon}  /> 
                      <span className="submenu-text">{subMenu.title}</span>
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


export default Cooperation;