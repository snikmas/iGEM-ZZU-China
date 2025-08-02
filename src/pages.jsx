import { Hardware, Model, Software } from './contents/dryLab'
import { Contribution, Description, Development, Engineering, Results} from './contents/project'
import { Attributions, Members} from './contents/team'
import { Safety, Experiments, Notebook, Parts } from "./contents/wetLab"
import { Home } from './contents/home'
import { Education} from './contents/education'
import { Entrepreneurship, IntegratedHumanPractices, Cooperation } from './contents/human-practice'

const Pages = [

  // wetLab
  {
    name: "Safety",
    title: "Safety",
    path: './safety',
    component: Safety,
  },
  {
    name: "Experiments",
    title: "Experiments",
    path: './experiments',
    component: Experiments,
  },
  {
    name: "Notebook",
    title: "Notebook",
    path: "./notebook",
    component: Notebook
  },
  {
    name: "Parts",
    title: "Parts",
    path: "./parts",
    component: Parts
  },
  
]

export default Pages;