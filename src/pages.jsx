import { 

  // home
  Home, 

  // team
  Members, 
  Attributions,  

  // project
  Description,
  Engineering, 
  Results,
  Contribution, 
  Development, 
  
  //wetlab
  Experiments,
  Notebook, 
  Parts,
  Safety, 

  //drylab
  Model, 
  Software, 
  Hardware, 

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
      },
      { 
        name: 'Engineering', 
        Component: Engineering,
        path: 'engineering',
      },
      { 
        name: 'Results', 
        Component: Results,
        path: 'results',
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
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: 'attributions',
        Component: Attributions,
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
      }
    ]},

  //drylab
  drylab: {
    path: '/dry-lab',
    more: [
      {
        name: "Model",
        title: "Model",
        path: "model",
        Component: Model
      },
      {
        name: "Software",
        title: "Software",
        path: 'software',
        Component: Software
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "hardware",
        Component: Hardware
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
        Component: IntegratedHumanPractices
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: 'entrepreneurship',
        Component: Entrepreneurship
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