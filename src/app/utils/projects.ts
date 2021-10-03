import { Skill, SkillNames, skillsList } from './skills';
import { videoURLs } from './helpers';

export interface IProject {
  id: IProjectId;
  title: string;
  description: string;
  videoUrl: string;
  links: {
    github: string | null;
    www: string | null;
  };
  techs: Skill[];
}

type IProjectId =
  | 'gordinho'
  | 'd3'
  | 'mel'
  | 'mel-mobile'
  | 'lacos'
  | 'oldPortfolio'
  | 'capoeira'
  | 'happyPlants';

const gordinhoTechs: SkillNames[] = ['Html', 'Css', 'Typescript', 'threejs', 'aws'];
const d3Techs: SkillNames[] = ['Angular', 'Sass', 'Typescript', 'd3', 'aws'];
const lacosTechs: SkillNames[] = [
  'Angular',
  'Sass',
  'Typescript',
  'firebase',
  'firestore',
];

const getTechs = (techList: string[]) =>
  skillsList.filter(skill => techList.includes(skill.name));

export const projects: IProject[] = [
  {
    id: 'gordinho',
    title: 'Gordinho Defense',
    description:
      "A 3D Tower Defense game. Enemies swarm in a generative 3D maze trying to find their way out. It's your duty to stop them! Build towers shooting towers and see how long you can endure",
    links: {
      github: 'https://github.com/mrChernicharo/ts-map',
      www: 'https://main.d2797vtjwvpw5j.amplifyapp.com/',
    },
    techs: getTechs(gordinhoTechs),
    videoUrl: videoURLs.gordinho,
  },
  {
    id: 'd3',
    title: '3D Charts',
    description:
      'D3 stands for Data Driven Documents and D3.js is probably the most robust data visualizations library out there. This project is a study case on how to implement different kinds of charts focusing on animating and adding interaction to the widgets',
    links: {
      github: 'https://github.com/mrChernicharo/d3-charts',
      www: 'https://main.didxcis265emq.amplifyapp.com/stacked-area',
    },
    techs: getTechs(d3Techs),
    videoUrl: videoURLs.d3Charts,
  },
  {
    id: 'lacos',
    title: 'Laços App',
    description:
      'An Angular enterprise app constructed for a real Psychology Clinic in Brazil. The whole backend was built using firestore and the GCP infrastructure',
    links: {
      github: null,
      www: null,
    },
    techs: getTechs(lacosTechs),
    videoUrl: videoURLs.lacos,
  },
];

export const getProject = (projTitle: IProjectId): IProject =>
  projects.find(proj => proj.id === projTitle) || projects[0];
