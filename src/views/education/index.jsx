import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

// 相册组件
import ImageGallery from '../../components/imagegallery';



const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';
const overview = 'https://static.igem.wiki/teams/5822/newassets/education/overview.webp';
// Primary Education Images (1-17)
const Primary_1 = 'https://static.igem.wiki/teams/5822/newassets/education/1.webp';
const Primary_2 = 'https://static.igem.wiki/teams/5822/newassets/education/2.webp';
const Primary_3 = 'https://static.igem.wiki/teams/5822/newassets/education/3.webp';
const Primary_4 = 'https://static.igem.wiki/teams/5822/newassets/education/4.webp';
const Primary_5 = 'https://static.igem.wiki/teams/5822/newassets/education/5.webp';


const Primary_6 = 'https://static.igem.wiki/teams/5822/newassets/education/pri6.webp';
const Primary_7 = 'https://static.igem.wiki/teams/5822/newassets/education/pri7.webp';
const Primary_8 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-8.webp';
const Primary_9 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-9.webp';
const Primary_10 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-10.webp';

const Primary_11 = 'https://static.igem.wiki/teams/5822/newassets/education/primaiary11.webp';
const Primary_12 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-12.webp';
const Primary_13 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-13.webp';
const Primary_14 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-14.webp';
const Primary_15 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-15.webp';
const Primary_16 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-16.webp';
const Primary_17 = 'https://static.igem.wiki/teams/5822/newassets/education/primary-17.webp';

// Middle School Images (1-3)
const Middle_1 = 'https://static.igem.wiki/teams/5822/newassets/education/middle1.webp';
const Middle_2 = 'https://static.igem.wiki/teams/5822/newassets/education/middle-2.webp';
const Middle_3 = 'https://static.igem.wiki/teams/5822/newassets/education/middle-3.webp';

// High School Images (1-5)
const high_1 = 'https://static.igem.wiki/teams/5822/newassets/education/high-1.webp';
const high_2 = 'https://static.igem.wiki/teams/5822/newassets/education/high2.webp';
const high_3 = 'https://static.igem.wiki/teams/5822/newassets/education/high3.webp';
const high_4 = 'https://static.igem.wiki/teams/5822/newassets/education/high-4.webp';
const high_5 = 'https://static.igem.wiki/teams/5822/newassets/education/high-5.webp';




// University Images (1-10)
const university_1 = 'https://static.igem.wiki/teams/5822/newassets/education/university-1.webp';
const university_2 = 'https://static.igem.wiki/teams/5822/newassets/education/university-2.webp';
const university_3 = 'https://static.igem.wiki/teams/5822/newassets/education/university-3.webp';
const university_4 = 'https://static.igem.wiki/teams/5822/newassets/education/university-4.webp';
const university_5 = 'https://static.igem.wiki/teams/5822/newassets/education/university-5.webp';
const university_6 = 'https://static.igem.wiki/teams/5822/newassets/education/university-6.webp';
const university_7 = 'https://static.igem.wiki/teams/5822/newassets/education/university-7.webp';
const university_8 = 'https://static.igem.wiki/teams/5822/newassets/education/university-8.webp';
const university_9 = 'https://static.igem.wiki/teams/5822/newassets/education/university-9.webp';
const university_10 = 'https://static.igem.wiki/teams/5822/newassets/education/university-10.webp';
const university_11 = 'https://static.igem.wiki/teams/5822/newassets/education/uni-11.webp';
const university_12 = 'https://static.igem.wiki/teams/5822/newassets/education/uni-12.webp';
const university_13 = 'https://static.igem.wiki/teams/5822/newassets/education/uni-13.webp';



const community_1 = 'https://static.igem.wiki/teams/5822/newassets/education/com1.webp';
const community_2 = 'https://static.igem.wiki/teams/5822/newassets/education/com2.webp';
const community_3 = 'https://static.igem.wiki/teams/5822/newassets/education/com3.webp';
const community_4 = 'https://static.igem.wiki/teams/5822/newassets/education/com4.webp';
const community_5 = 'https://static.igem.wiki/teams/5822/newassets/education/comm5.webp';
const community_6 = 'https://static.igem.wiki/teams/5822/newassets/education/com6.webp';
const community_7 = 'https://static.igem.wiki/teams/5822/newassets/education/com7.webp';

const professional_1 = 'https://static.igem.wiki/teams/5822/newassets/education/pro1.webp';
const professional_2 = 'https://static.igem.wiki/teams/5822/newassets/education/pro2.webp';
const professional_3 = 'https://static.igem.wiki/teams/5822/newassets/education/pro3.webp';
const professional_4 = 'https://static.igem.wiki/teams/5822/newassets/education/pro4.webp';
const professional_5 = 'https://static.igem.wiki/teams/5822/newassets/education/pro5.webp';
const professional_6 = 'https://static.igem.wiki/teams/5822/newassets/education/pro6.webp';
const professional_7 = 'https://static.igem.wiki/teams/5822/newassets/education/pro7.webp';
const professional_8 = 'https://static.igem.wiki/teams/5822/newassets/education/pro8.webp';

const online_1 = 'https://static.igem.wiki/teams/5822/newassets/education/wechat1.webp';
const online_2 = 'https://static.igem.wiki/teams/5822/newassets/education/vedio2.webp';


const PrimaryEducationPDF = 'https://static.igem.wiki/teams/5822/newassets/files/primary-education.pdf';
const StrawberryDNAExtractionWorkshopPDF = 'https://static.igem.wiki/teams/5822/newassets/files/strawberry-dna-extraction-workshop.pdf';
const UniversityEducationPDF = 'https://static.igem.wiki/teams/5822/newassets/files/university-education.pdf';


// Main education figure
const educationFigure = 'https://static.igem.wiki/teams/5822/newassets/education/education.webp';


// 组件定义 1
const MainContent = () => (
  <>
    <div id="overview" className="education-hero-section">
      <div className="hero-image-container">
        <img
          src={educationFigure}
          alt="Education - Knowledge & Healing"
          className="hero-education-image"
        />
      </div>
      <div className="hero-quote">
        <blockquote>
          "Education is not the filling of a pail, but the lighting of a fire."
        </blockquote>
        <cite>—William Butler Yeats</cite>
      </div>
    </div>


    {/* 1 */}
    <div id="overview-education" className="view-content">


      <div className="content-body">

        <div className="content-header">
          <div className="h1">Overview</div>
        </div>

        <p>
          <span>Education</span> has always been a <span>cornerstone</span> of our <span>iGEM journey</span>—not only a <span>responsibility</span> to the public, but also a <span>bridge</span> connecting <span>science</span> with <span>daily life</span>. This year, our project focuses on <span>breast cancer</span>, a disease where <span>early screening</span>, <span>diagnosis</span>, and <span>treatment</span> can make the difference between <span>life and death</span>. Guided by this theme, we designed diverse initiatives ranging from <span className='text-strong'>"Biology for Kids" workshops and school experiments</span> to <span>Anatomy Hall visits</span> and the <span>Little Scientist Program</span>, allowing participants of different ages to experience science firsthand.
        </p>
        <p>
          Rather than simply <span>"delivering knowledge,"</span> our approach emphasized <span>interaction</span>, <span>participation</span>, and <span>feedback</span>. Through <span>community roadshows</span>, <span>online education platforms</span>, and <span>health campaigns</span>, we reached wider audiences; through <span>Doctors' Dialogue</span>, <span>Arena of Knowledge contests</span>, and the <span>Turtle Soup Game</span>, we deepened understanding in engaging and interactive ways. Meanwhile, <span>Humanistic Spirit sessions</span> highlighted <span>medical humanities</span> and <span>female scientist role models</span>, while <span>Empowerment activities</span> encouraged <span>breast self-exams</span> and <span>proactive health choices</span>. To sustain these efforts, we promoted <span>resources sharing</span> under the belief that <span>"Your Health, Your Choice"</span> should be accessible to all.
        </p>
        <p>
          Through these combined endeavors, we hope to build a <span>culture</span> where <span>breast health</span> is openly discussed, <span>early screening</span> is normalized, and <span>science</span> truly serves <span>society</span>. Just as the <span>pink ribbon</span> symbolizes <span>care</span> and <span>resilience</span>, our <span>education activities</span> carry the hope of spreading <span>awareness</span>, <span>knowledge</span>, and <span>empowerment</span>—step by step, person by person.
        </p>
        <div className="figure-container">
          <div className="figure-item">
            <img src={overview} alt="Education - Knowledge & Healing" className="figure-image" />
            <div className="h4">Event Guide Map</div>
          </div>
        </div>
      </div>
    </div>

    {/* 2 */}
    <div id="student-education" className="view-content">
      <div className="content-header">
        <div className="h1">Education for Students: Inspiring the Next Generation</div>
      </div>

      {/* Primary Education Subsection */}
      <section id="primary-education" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Primary Education</div>
          </div>
          <div className="content-body">
            <p>For younger students, science education should go beyond textbooks and transform into vivid, tangible experiences. Our team designed a series of outreach programs that allowed children to encounter the wonders of biology firsthand, turning abstract knowledge into exciting discoveries.</p>

            <object
              data={PrimaryEducationPDF}
              type="application/pdf"
              width="100%"
              height="600px"
              aria-label="Professional Development PDF"
              className="pdf-object"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />

            <div className="h4">Strawberry DNA Extraction Workshop</div>
            <p>On May 30, 2025, we visited Zhengzhou University Experimental Primary School and carried out a hands-on DNA extraction experiment with fifth-grade students. The goal was to let children not only hear about DNA but actually see it with their own eyes, planting the first seeds of scientific exploration. Divided into nine groups, the students followed step-by-step instructions: mashing strawberries, adding salt and detergent to break cell walls, filtering the mixture, and finally adding chilled alcohol to precipitate DNA.</p>
            <p>At every stage, team members patiently explained the science behind each step. When the white, filament-like DNA appeared, the classroom was filled with excited exclamations. One student said, "I didn't know something so small in our bodies could really be seen like this—it's like magic!" Teachers observed that the activity successfully combined rigor and fun, and they praised it as "a perfect example of learning by doing."</p>
            <p>To reinforce the lesson, we distributed instruction cards and QR codes linking to a video tutorial. Follow-up surveys showed that most students could clearly recall the three main steps, and many expressed interest in learning more about synthetic biology. Inspired by their enthusiasm, we proposed a long-term "Little Science Talent" program with the school, aiming to provide children with sustained opportunities for scientific exploration.</p>


            <ImageGallery
              // title="Strawberry DNA Extraction Workshop"
              images={[
                {
                  src: Primary_1,
                  alt: "Strawberry DNA Extraction Workshop"
                },
                {
                  src: Primary_2,
                  alt: "Strawberry DNA Extraction Workshop"
                },
                {
                  src: Primary_3,
                  alt: "Strawberry DNA Extraction Workshop"
                },
                {
                  src: Primary_4,
                  alt: "Strawberry DNA Extraction Workshop"
                },
                {
                  src: Primary_5,
                  alt: "Strawberry DNA Extraction Workshop"
                }
              ]}
            />

            <object
              data={StrawberryDNAExtractionWorkshopPDF}
              type="application/pdf"
              width="100%"
              height="600px"
              className="pdf-object"
              aria-label="Strawberry DNA Extraction Workshop PDF"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />

            <div className="h4">DNA Science Workshop</div>
            <p>In another session, we introduced DNA through a question closely connected to the children's daily lives: "Why do some people dislike cilantro?" This simple question immediately caught their attention and provided a natural entry point to discuss genetic differences. We explained DNA not with complex terminology but through vivid metaphors—base pairs as "zippers" and the double helix as a "spiral staircase."</p>
            <p>The children were deeply engaged, eagerly raising imaginative questions such as, "If I fall down, will my little spiral staircase break?" Their innocent curiosity made the classroom lively and interactive. Teachers later commented that this workshop was "a creative way to make abstract science relatable to children's everyday experiences."</p>
            <p>By the end of the session, students had not only learned about DNA but also realized that science could explain many aspects of daily life. The workshop helped nurture their courage to ask questions and fostered a spirit of active exploration.</p>

            <ImageGallery
              // title="DNA Science Workshop"
              images={[
                {
                  src: Primary_6,
                  alt: "DNA Science Workshop"
                },
                {
                  src: Primary_7,
                  alt: "DNA Science Workshop"
                },
                {
                  src: Primary_8,
                  alt: "DNA Science Workshop"
                },
                {
                  src: Primary_9,
                  alt: "DNA Science Workshop"
                },
                {
                  src: Primary_10,
                  alt: "DNA Science Workshop"
                }
              ]}
            />

            <div className="h4">"I Am a Little Scientist" Outreach Series</div>
            <p>For younger children aged 4–12, we organized a multi-activity outreach program that blended observation, experimentation, and parent-child engagement. Younger participants visited the zebrafish facility, where they were fascinated by the sight of transparent embryos and swimming larvae. Volunteers helped each child adjust microscopes to view tiny details of the fish, prompting gasps of wonder. Older students explored cell biology, observing onion root tip cell division under the microscope, while attending short lectures tailored to their level.</p>
            <p>Parents were invited to join for a photo session against a genetics-themed backdrop, turning the outreach into a family science day. Teachers highlighted the program's inclusiveness, noting that "every child, regardless of age, had a chance to feel like a scientist."</p>
            <p>From these activities, we witnessed firsthand the power of direct interaction: children who had never touched a microscope before left with sparkling eyes and new questions. One parent told us, "My child used to think science was difficult, but now she says she wants to look at more things under the microscope at home." For our team, this was not only a chance to inspire but also an opportunity to refine our science communication, learning how to make complex concepts accessible while keeping the joy of discovery alive.</p>

            <ImageGallery
              // title="'I Am a Little Scientist' Outreach Series"
              images={[
                {
                  src: Primary_11,
                  alt: "'I Am a Little Scientist' Outreach Series"
                },
                {
                  src: Primary_12,
                  alt: "'I Am a Little Scientist' Outreach Series"
                },
                {
                  src: Primary_13,
                  alt: "'I Am a Little Scientist' Outreach Series"
                },
                {
                  src: Primary_14,
                  alt: "'I Am a Little Scientist' Outreach Series"
                },
                {
                  src: Primary_15,
                  alt: "'I Am a Little Scientist' Outreach Series"
                },
                {
                  src: Primary_16,
                  alt: "'I Am a Little Scientist' Outreach Series"
                },
                {
                  src: Primary_17,
                  alt: "'I Am a Little Scientist' Outreach Seriesp"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Middle School Education Subsection */}
      <section id="middle-school-education" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Middle School Education</div>
          </div>
          <div className="content-body">
            <p>Middle school students are at a stage where abstract concepts can feel distant, so they benefit most from vivid metaphors and hands-on practice. To meet this need, we designed a Plasmid Extraction Experiment framed as a role-playing game called "Science Courier."</p>

            <div className="h3">Plasmid Extraction Experiment</div>
            <p>In this activity, students were tasked with "delivering" plasmid DNA safely through a series of checkpoints. Under the guidance of Teacher Zhang and our team members, they carried out key operations step by step: centrifuging to collect cells, breaking down walls with lysis buffer, stabilizing plasmids, removing impurities, and finally eluting purified DNA. Each stage was paired with simple metaphors—"gather, pry open, stabilize, clean, capture, obtain"—which made complex terms easy to visualize and remember.</p>
            <p>The classroom atmosphere was lively and full of questions. One student asked, "If the lysis buffer can break down the cell wall, will it also destroy the plasmid?" Such interactions showed real engagement and pushed us to refine our explanations. Teachers praised the activity as age-appropriate and imaginative, while students expressed a strong sense of achievement. As one remarked, "I never thought I could do an experiment like real scientists. It feels like I've unlocked a new world."</p>
            <p>By combining storytelling with hands-on practice, the "Science Courier" model not only conveyed the logic of plasmid extraction but also lowered cognitive barriers, helping students experience the excitement of life science in a way that was both accessible and inspiring.</p>

            <ImageGallery
              images={[
                {
                  src: Middle_1,
                  alt: "Plasmid Extraction Experiment"
                },
                {
                  src: Middle_2,
                  alt: "Plasmid Extraction Experiment"
                },
                {
                  src: Middle_3,
                  alt: "Plasmid Extraction Experiment"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* High School Education Subsection */}
      <section id="high-school-education" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">High School Education</div>
          </div>
          <div className="content-body">
            <p>High school students are developing advanced abstract reasoning and systematic thinking while beginning to question how learning connects to future careers and society. To meet these needs, our team designed activities that go beyond textbooks—offering direct dialogue with researchers, immersive experiences in real-world medical science, and reflections on the broader impact of life sciences. These activities aimed to convey knowledge while inspiring students and helping them find direction and purpose in their future studies.</p>

            <div className="h3">iGEM Buffet – Breaking Barriers Between Students and Science</div>
            <p>The "iGEM Buffet" was designed as an interactive science outreach event that went beyond traditional lectures. Using food as a conversation starter, it created a relaxed setting for high school students to engage directly with university iGEM members, explore synthetic biology, and receive personalized academic guidance.</p>
            <p>The event began with a brief, engaging introduction to iGEM and our project on breast cancer exosome detection using Apt-HCR/RCA CRISPR-Cas14 technology, highlighting the interdisciplinary nature of biology, chemistry, and engineering. Instead of overwhelming students with technical details, we emphasized real-world relevance—how early detection technologies save lives and the importance of collaborative innovation.</p>
            <p>The highlight was informal discussions at round tables, where students and mentors shared snacks and talked about study strategies, university life, career planning, and in-depth scientific questions, such as why CRISPR-Cas14 was chosen over other systems. Students also inquired about researchers' daily lives and preparation for competitions like iGEM.</p>
            <p>Feedback was overwhelmingly positive. One student said, "It didn't feel like a lecture at all — it felt like talking to older siblings who had already walked the path we're about to take." Teachers praised the practical, relatable guidance. For our team, the event revealed students' genuine interests and knowledge gaps, helping tailor future outreach. Most importantly, it broke down barriers between "scientists" and students, inspiring them to see themselves as future innovators.</p>

            <ImageGallery
              images={[
                {
                  src: high_1,
                  alt: "iGEM Buffet – Breaking Barriers Between Students and Science"
                },
                {
                  src: high_2,
                  alt: "iGEM Buffet – Breaking Barriers Between Students and Science"
                },
                {
                  src: high_3,
                  alt: "iGEM Buffet – Breaking Barriers Between Students and Science"
                },
                {
                  src: high_4,
                  alt: "iGEM Buffet – Breaking Barriers Between Students and Science"
                },
                {
                  src: high_5,
                  alt: "iGEM Buffet – Breaking Barriers Between Students and Science"
                }
              ]}
            />
            <div className="h3">Visit to the Human Anatomy Science Education Hall – Connecting Biology to Medicine</div>
            <p>To bridge classroom learning with real-world application, we organized a visit to the Human Anatomy Science Education Hall, transforming abstract biological knowledge into a vivid, multidimensional experience. The activity aimed to show how biology underpins modern medicine while cultivating empathy, responsibility, and a sense of purpose in future scientists or medical professionals.</p>
            <p>Guided by Teacher Zhang and our team, students explored four themed zones. In the "Nine Major Systems of the Human Body" section, they examined anatomical models and interactive displays to understand physiological structures and related diseases. The "Disease Treatment and First Aid" zone offered hands-on practice in emergency response, providing practical skills beyond textbooks. The "Medical Humanistic Spirit" section encouraged reflection on real stories of medical professionals, highlighting ethical and emotional aspects of healthcare. Finally, the "History of Medical Education" exhibit traced key scientific milestones, deepening students' appreciation for the progress of medical science.</p>
            <p>Throughout the visit, we used a "question–observation–reveal" approach to stimulate critical thinking. Students were prompted to hypothesize, debate, and connect new information to prior knowledge, which greatly enhanced engagement and retention. Teachers praised the method as an excellent example of inquiry-based learning.</p>
            <p>Feedback from students was highly positive. Many reported a change in how they viewed biology, recognizing it not just as exam material but as a tool for understanding and improving human life. One participant reflected, "Seeing how biology connects to medicine made me realize that science isn't just knowledge — it's responsibility." The visit demonstrated the importance of hands-on, immersive science education in inspiring students and guiding them toward careers in research, medicine, and beyond.</p>



          </div>
        </div>
      </section>

      {/* University Education Subsection */}
      <section id="university-education" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">University Education</div>
          </div>
          <div className="content-body">
            <p>At the university level, our education efforts aim to foster critical thinking, interdisciplinary understanding, and active engagement with breast health and synthetic biology. We designed interactive and immersive experiences to go beyond traditional lectures, allowing students to explore medical knowledge, research principles, and ethical considerations in a participatory manner.</p>


            <object
              data={UniversityEducationPDF}
              type="application/pdf"
              width="100%"
              height="600px"
              className="pdf-object"
              aria-label="University Education PDF"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
            <div className="h3">Medical Turtle Soup</div>
            <p>We introduced students to the evolution of cancer treatment through a suspenseful narrative called "Medical Turtle Soup." The activity encouraged students to reflect on medical logic, technological limits, and ethical dilemmas. A sci-fi story with elements like a "blue agent" and "nanomachines" sparked group discussions and bold hypotheses.</p>
            <p>As the story unfolded, we connected the puzzle to real science, mapping treatments from surgery, radiotherapy, and chemotherapy to targeted therapy, immunotherapy, CAR-T, and proton/heavy-ion therapy. Students engaged actively, asking about efficacy and ethics. One remarked, "I never thought learning cancer treatment could feel like solving a mystery—it makes learning exciting."</p>
            <p>This narrative approach proved effective in motivating self-directed learning. Teachers praised its creativity, and students' divergent thinking offered valuable insight for future science communication.</p>

            <ImageGallery
              images={[
                {
                  src: university_1,
                  alt: "Medical Turtle Soup"
                },
                {
                  src: university_2,
                  alt: "Medical Turtle Soup"
                }
              ]}
            />

            <div className="h3">Knowledge Arena</div>
            <p>The Knowledge Arena was an interdisciplinary competition combining scientific and humanistic aspects of breast health. It aimed to deepen understanding of breast cancer prevention and synthetic biology while raising awareness of women's health issues.</p>
            <p>Teams competed in fast-paced rounds with both scientific questions (mechanisms, prevention, applications) and humanistic ones (women's health events and contributions of scientists like Marie Curie and Tu Youyou). Students collaborated, debated, and strategized, often showing greater interest in the humanistic topics. One team shared, "Learning about these women alongside modern science makes the experience inspiring."</p>
            <p>Teachers commended the event for merging rigor with cultural context, fostering both knowledge and empathy.</p>

            <ImageGallery
              images={[
                {
                  src: university_3,
                  alt: "Knowledge Arena"
                },
                {
                  src: university_4,
                  alt: "Knowledge Arena"
                },
                {
                  src: university_5,
                  alt: "Knowledge Arena"
                },
                {
                  src: university_6,
                  alt: "Knowledge Arena"
                }
              ]}
            />

            <div className="h3">Women's Day Outreach Event</div>
            <p>On International Women's Day, we held "Pink Ribbon: Guarding Health" at Zhengzhou University, reaching a wider campus audience with interactive, game-based activities.</p>
            <p>Highlights included a quiz challenge, a puzzle on prevention, a board game on cancer pathways, interactive sessions on female scientists, and a message wall for encouragement. A dedicated booth showcased the ZZU-iGEM project on breast cancer detection and synthetic biology.</p>
            <p>Students engaged enthusiastically, asking thoughtful questions about screening and hereditary risk. One participant said, "I never thought a science event could be so fun—I learned while playing games!" Teachers praised the inclusive design and multi-dimensional format.</p>
            <p>The event not only raised awareness of breast health but also provided feedback to refine future outreach, reinforcing the value of combining science, interaction, and humanistic context.</p>

            <ImageGallery
              images={[
                {
                  src: university_7,
                  alt: "Women's Day Outreach Event"
                },
                {
                  src: university_8,
                  alt: "Women's Day Outreach Event"
                },
                {
                  src: university_9,
                  alt: "Women's Day Outreach Event"
                },
                {
                  src: university_10,
                  alt: "Women's Day Outreach Event"
                },
                {
                  src: university_11,
                  alt: "Women's Day Outreach Event"
                },
                {
                  src: university_12,
                  alt: "Women's Day Outreach Event"
                },
                {
                  src: university_13,
                  alt: "Women's Day Outreach Event"
                }
              ]}
            />
          </div>
        </div>
      </section>
    </div>

    {/* 3 */}
    <div id="community-education" className="view-content">
      <div className="content-header">
        <div className="h1">Community Education: Raising Awareness of Breast Health</div>
      </div>
      {/* 3.1 */}
      <section id="march-8-public-welfare-campaign" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">“March 8” Public Welfare Campaign — Safeguarding Women’s Health</div>
          </div>
          <div className="content-body">
            <p>
              On International Women's Day, our team collaborated with the Third Affiliated Hospital of Zhengzhou University
              (Henan Provincial Maternal and Child Health Hospital) to organize a breast health awareness event. The goal was
              to enhance community knowledge of breast health, stress the importance of early screening and self-examination,
              and showcase the role of science in breast cancer prevention.
            </p>
            <p>
              The event combined lectures and free consultations. Experts delivered talks on adolescent health, HPV myths,
              menopause care, and breast self-examination in accessible language, which prompted active engagement from the
              audience. Volunteers supported the consultation area by guiding residents, assisting those with limited mobility,
              and explaining check-up procedures. We also introduced iGEM and our project in simple terms, which drew strong
              interest—especially from younger participants curious about research.
            </p>
            <p>
              The activity received positive feedback. Many attendees reported a deeper understanding of breast health, with
              one participant noting, "Early detection is the real protection." Others requested materials to share with family.
              A teacher volunteer concluded, "This event brought both knowledge and genuine care into the community." For our
              team, it was both valuable practice and motivation to continue serving women's health through science.
            </p>
            <ImageGallery
              images={[
                {
                  src: community_1,
                  alt: "“March 8” Public Welfare Campaign — Safeguarding Women’s Health"
                },
                {
                  src: community_2,
                  alt: "“March 8” Public Welfare Campaign — Safeguarding Women’s Health"
                },
                {
                  src: community_3,
                  alt: "“March 8” Public Welfare Campaign — Safeguarding Women’s Health"
                },
                {
                  src: community_4,
                  alt: "“March 8” Public Welfare Campaign — Safeguarding Women’s Health"
                },
                {
                  src: community_5,
                  alt: "“March 8” Public Welfare Campaign — Safeguarding Women’s Health"
                },
                {
                  src: community_6,
                  alt: "“March 8” Public Welfare Campaign — Safeguarding Women’s Health"
                },
                {
                  src: community_7,
                  alt: "“March 8” Public Welfare Campaign — Safeguarding Women’s Health"
                }
              ]}
            />
          </div>
        </div>
      </section>
    </div>

    {/* 4 */}
    <div id="professional-education" className="view-content">
      <div className="content-header">
        <div className="h1">Professional Education: Bridging Science and Medicine</div>
      </div>
      <div className="content-body">
        <p>
          Breast cancer education cannot be complete without the involvement of medical professionals. To this end,
          we invited breast surgeons, radiologists, and nurses for a focused seminar.
        </p>
        <p>
          Our team first introduced the concept of our diagnostic tool, highlighting its potential for early detection.
          The physicians then provided professional feedback, raising key points such as:
        </p>
        <ul>
          <li>Diagnostic tools must be paired with clear referral pathways;</li>
          <li>Public materials should emphasize that the tool is a screening aid, not a substitute for clinical diagnosis;</li>
          <li>Messaging should reduce unnecessary fear while still underscoring urgency.</li>
        </ul>
        <p>
          This dialogue significantly improved our educational materials. For example, we added a "Next Steps for Patients"
          flowchart to our leaflets and presentations, ensuring that individuals understand where to seek medical care
          after receiving a screening result.
        </p>
        <p>
          By listening to doctors and nurses, we aligned our educational approach with clinical realities, ensuring
          accuracy, reliability, and empathy in our outreach.
        </p>
        <ImageGallery
          images={[
            {
              src: professional_1,
              alt: "Professional Education: Bridging Science and Medicine",
            },
            {
              src: professional_2,
              alt: "Professional Education: Bridging Science and Medicine",
            },
            {
              src: professional_3,
              alt: "Professional Education: Bridging Science and Medicine",
            },
            {
              src: professional_5,
              alt: "Professional Education: Bridging Science and Medicine",
            },
            {
              src: professional_5,
              alt: "Professional Education: Bridging Science and Medicine",
            },
            {
              src: professional_6,
              alt: "Professional Education: Bridging Science and Medicine",
            },
            {
              src: professional_7,
              alt: "Professional Education: Bridging Science and Medicine",
            },
            {
              src: professional_8,
              alt: "Professional Education: Bridging Science and Medicine",
            }
          ]}
        />
      </div>
    </div>

    {/* 5 */}
    <div id="online-education" className="view-content">
      <div className="content-header">
        <div className="h1">Online Education: Extending Our Reach</div>
      </div>

      {/* WeChat Public Account Subsection */}
      <section id="wechat-section" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">WeChat Public Account</div>
          </div>
          <div className="content-body">
            <p>
              While offline events are impactful, they inevitably face geographical and time limitations. To overcome this,
              we developed an online education strategy centered on digital platforms.
            </p>
            <p>
              We published a series of WeChat articles covering topics such as "Three Steps for Breast Self-Examination,"
              "Common Myths about Breast Cancer," and "How to Prepare for a Hospital Screening." Each article combined
              clear text with illustrations and infographics, making complex medical knowledge accessible.
            </p>

            <div className="figure-container">
              <div className="figure-item">
                <img src={online_1} alt="WeChat Public Account" className="figure-image" />
                <div className='h4'>WeChat Public Account</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Videos and Social Media Subsection */}
      <section id="videos-section" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Short Videos and Social Media</div>
          </div>
          <div className="content-body">
            <p>
              Recognizing the influence of visual media, we created short videos on Bilibili and Douyin (TikTok China).
              These videos included step-by-step self-exam demonstrations, myth-busting content, and animated explainers
              about breast health. Within weeks, the videos reached thousands of views, with audience comments such as:
              "I finally understand how to check myself—it was always confusing before!"
            </p>
            <p>
              The visual format proved particularly effective for reaching younger audiences and those who prefer
              learning through demonstration rather than text-based materials.
            </p>
            <div className="figure-container">
              <img
                style={{
                  boxShadow: 'none'
                }}
                src={online_2} alt="Short Videos and Social Media" className="figure-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Future Resource Sharing Subsection */}
      <section id="future-section" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Future Resource Sharing</div>
          </div>
          <div className="content-body">
            <p>
              Looking ahead, we are compiling our educational materials—including PowerPoint slides, experimental scripts,
              and educational games—into an open-source education package. By making these resources freely downloadable
              through our Wiki, we hope to empower teachers, students, and other iGEM teams to replicate and adapt our
              programs worldwide.
            </p>
            <p>
              Through online dissemination, our education extended beyond local boundaries, reaching a much larger and more
              diverse audience. This digital approach ensures that our impact continues to grow even after the project ends.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 6 */}
    <div id="conclusion" className="view-content">
      <div className="content-header">
        <div className="h1">Conclusion and Future Plans</div>
      </div>
      <div className="content-body">
        <p>
          Our education efforts this year encompassed community members, students of all ages,
          medical professionals, and the digital public. Each initiative was designed not as a
          one-way lecture, but as an interactive and adaptive exchange. Residents practiced
          self-exams, children conducted experiments, students asked critical questions, doctors
          provided professional advice, and online users shared our materials with their peers.
        </p>
        <p>
          By combining in-person activities with online strategies, we maximized inclusivity and
          accessibility. Our approach drew inspiration from the comprehensive and multi-level
          structure used by other iGEM teams, but we added unique depth by integrating breast
          health as a unifying theme across all audiences.
        </p>
        <p>
          In the future, we plan to:
        </p>
        <ul>
          <li>Institutionalize our community programs by partnering with local healthcare centers for long-term collaboration;</li>
          <li>Package our student-oriented experiments into full curricula for schools;</li>
          <li>Expand digital outreach into new formats such as podcasts and live-streamed Q&A sessions;</li>
          <li>Continue working with healthcare professionals to ensure our education remains clinically accurate and socially responsible.</li>
        </ul>
        <p>
          Education, to us, is not an afterthought but an essential dimension of scientific innovation.
          By sharing knowledge and fostering dialogue, we not only advance our iGEM project but also
          contribute to building a healthier, more informed, and more empowered society.
        </p>
      </div>
    </div>


  </>
);


function Education() {
  
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
      id: 'overview',
      title: 'Overview',
      icon: '🌱'
    },
    {
      id: 'student-education',
      title: 'Education for Students',
      icon: '🎓',
      subMenus: [
        { id: 'primary-education', title: 'Primary Education' },
        { id: 'middle-school-education', title: 'Middle School Education' },
        { id: 'high-school-education', title: 'High School Education' },
        { id: 'university-education', title: 'University Education' }
      ]
    },
    {
      id: 'community-education',
      title: 'Community Education',
      icon: '🏘️',
      subMenus: [
        { id: 'march-8-public-welfare-campaign', title: '“March 8” Public Welfare Campaign' }
      ]
    },
    {
      id: 'professional-education',
      title: 'Professional Education',
      icon: '👩‍⚕️'
    },
    {
      id: 'online-education',
      title: 'Online Education',
      icon: '💻',
      subMenus: [
        { id: 'wechat-section', title: 'WeChat Public Account' },
        { id: 'videos-section', title: 'Short Videos and Social Media' },
        { id: 'future-section', title: 'Future Resource Sharing' }
      ]
    },
    {
      id: 'conclusion',
      title: 'Conclusion & Future Plans',
      icon: '🚀'
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
                {/* <div className="menu-icon-wrapper">
                  <img src={menuIconDefault} alt="" className="menu-icon default" />
                  <img src={menuIconHover} alt="" className="menu-icon hover" />
                </div> */}
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
{/* <nav className="sidebar-nav">
          {menuData.map((menu) => (
            <div key={menu.id} className="menu-item">
              <div
                className="menu-title"
                onClick={() => handleMainMenuClick(menu.id)}
              >
                <Menu size={60}/>
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
        </nav> */}
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


export default Education;