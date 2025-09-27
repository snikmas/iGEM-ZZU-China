import { 

  // home
  Home, 

  // team
  Members, 
  Attributions,  

  // project
  Description,
  Engineering, 
  Contribution, 
  Development, 
  
  //wetlab
  Experiments,
  Notebook, 
  Parts,
  Safety,
  Results,

  //drylab
  Model, 
  Software,

  // education.
  Education, 

  // human practice
  IntegratedHumanPractices, 
  Entrepreneurship, 
  Cooperation 

} from './contents/index.jsx'


// if more.length > 1 -> it has subnav
const pages = {

  //home 
  home: {
    path: "/home",
    more: [
      {
        name: "Home",
        title: "Home",
        path: false,
        Component: Home,
      }
    ]
  },

  // project
  project: {
    path: "/project",
    more: [
      {
        name: "Description",
        title: "Description",
        path: 'description',
        Component: Description,
        contents: {
          section_1: "Introduction",
          section_2: "Background",
          section_3: "Our Solution",
          section_4: "Future applications",
          section_5: "Project Innovation",
          section_6: "Reference",
        }
      },
      { 
        name: 'Engineering', 
        Component: Engineering,
        path: 'engineering',
      },
      { 
        name: 'Contribution', 
        Component: Contribution,
        path: 'contribution',
      },
      { 
        name: 'Development', 
        Component: Development,
        path: 'development',
      }
    ]
  },

  //team
  team: {
    path: '/team',
    more: [
      {
        name: "Members",
        title: "Members",
        path: 'members',
        Component: Members,
        contents: {
          section_1: "Team Introduction",
          section_2: "Team Members"
        }
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: 'attributions',
        Component: Attributions,
        contents: {
          section_1: "Introduction",
          section_2: "Team Member Contributions",
          section_3: "External Contributions",
          section_4: "Timeline",
        }
      },

    ]
  },

  // wetLab
  wetLab: {
    path: '/wet-lab',
    more: [
      {
        name: "Safety",
        title: "Safety",
        path: 'safety',
        Component: Safety,
        contents: {
          section_1: "Identification of Risks",
          section_2: "Management of Risks",
          section_3: "Responsibility in Human Practices"
        },
        hero: "https://static.igem.wiki/teams/5822/assets/safety/img-0.webp"
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: 'experiments',
        Component: Experiments,
      },
      {
        name: "Notebook",
        title: "Notebook",
        path: "notebook",
        Component: Notebook
      },
      {
        name: "Parts",
        title: "Parts",
        path: "parts",
        Component: Parts
      },
      { 
        name: 'Results', 
        Component: Results,
        path: 'results',
      },
    ]},

  //drylab
  drylab: {
    path: '/dry-lab',
    more: [
      {
        name: "Model",
        title: "Model",
        path: "model",
        Component: Model,
        contents: {
          section_1: "Introduction",
          section_2: "Aptamer Screening",
          section_3: "Molecular Docking",
          section_4: "Complementary Strand Design",
          section_5: "Reference",
        }
      },
      {
        name: "Software",
        title: "Software",
        path: 'software',
        Component: Software,
        contents: {
          section_1: "Overview: The core objectives of bioinformatics",
          section_2: "Target screening process: from data to candidate molecules",
          section_3: "Target validation: Multi-dimensional analysis to confirm reliability",
          section_4: "Summary: The value of bioinformatics driven target screening",
          section_5: "Reference",
        }
      }
    ],
  },

  // educatoin, no subnav
  education:{
    path: '/education',
    more: [
      {
        name: "Education",
        title: "Education",
        path: false,
        Component: Education
      }
    ],
  },

  humanPractice: {
    path: '/human-practice',
    more: [
      {
        name: "Integrated Human Practices",
        title: "Integrated Human Practices",
        path: "integrated-human-practices",
        Component: IntegratedHumanPractices,
        contents: {
          section_1: "Introduction and Problem Overview",
          section_2: "Solution and Challenges",
          section_3: "Integrated Report on Breast Health - Related Survey",
          section_4: "Stakeholder SWOT Analysis",
          section_5: "Interview on Why Exosomes and Magnetic Beads Were Chosen",
          section_6: "Interview on the Selection of the Four Target Protein",
          section_7: "Interview on Why CD63 Aptamers Are Chosen for Exosome Pull-Down",
          section_8: "Interview with Breast Surgeons",
          section_9: "Interview with Laboratory Doctors",
          section_10: "Interviews with Public and Patients",
        }

      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: 'entrepreneurship',
        Component: Entrepreneurship,
        contents: {
          section_1: "Introduction",
          section_2: "Commercial Prospects",
          section_3: "Market Analysis",
          section_4: "Supply Chain",
          section_5: "Financial Analysis",
          section_6: "Intellectual Property",
          section_7: "Stakeholder Analysis",
          section_8: "Risk Assessment and Countermeasures",
          section_9: "Development Plan",
          section_10: "Reference",
        }
      },
      {
        name: "Cooperation",
        title: "Cooperation",
        path:  "cooperation",
        Component: Cooperation
      }
    ]
  }
  
    
}

export default pages;