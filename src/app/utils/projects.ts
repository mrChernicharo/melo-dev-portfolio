import { Skill, SkillNames, skillsList } from './skills';
import { gordinhoPix, videoURLs } from './helpers';

export interface IProject {
  id: IProjectId;
  title: string;
  description: string;
  videoUrl: string;
  links: {
    github: string | null;
    www: string | null;
  };
  imageUrls?: string[];
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

// prettier-ignore
const lacosTechs: SkillNames[] = ['Angular','RxJS','Sass','Typescript','firebase','firestore'];
// prettier-ignore
const melMobileTechs: SkillNames[] = ['Typescript', 'Styled Components','React Native', 'firebase', 'firestore', 'Stripe'];
// prettier-ignore
const melTechs: SkillNames[] = ['Angular','RxJS','Sass','Typescript','firebase','firestore']
const gordinhoTechs: SkillNames[] = ['Html', 'Css', 'Typescript', 'threejs', 'aws'];
const d3Techs: SkillNames[] = ['Angular', 'RxJS', 'Sass', 'Typescript', 'd3', 'aws'];
const capoeiraTechs: SkillNames[] = ['Javascript', 'React', 'threejs', 'vite'];

const getTechs = (techList: string[]) =>
  skillsList.filter(skill => techList.includes(skill.name));

export const projects: IProject[] = [
  {
    id: 'gordinho',
    title: 'Gordinho Defense',
    description:
      "A 3D Tower Defense game. Enemies swarm in a generative 3D maze trying to find their way out. It's your duty to stop them! Build towers shooting towers and see how long you can endure.",
    videoUrl: videoURLs.gordinho,
    techs: getTechs(gordinhoTechs),
    imageUrls: gordinhoPix,
    links: {
      github: 'https://github.com/mrChernicharo/ts-map',
      www: 'https://main.d2797vtjwvpw5j.amplifyapp.com/',
    },
  },
  {
    id: 'd3',
    title: '3D Charts',
    description:
      'D3 stands for Data Driven Documents and D3.js is probably the most robust data visualizations library out there. This project is a study case on how to implement different kinds of charts focusing on animating and adding interaction to the widgets.',
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
      'An Angular enterprise app constructed for a real Psychology Clinic in Brazil. The whole backend was built using firebase products, like authentication, firestore, firestorage, and the GCP infrastructure.',
    links: {
      github: null,
      www: null,
    },
    techs: getTechs(lacosTechs),
    videoUrl: videoURLs.lacos,
  },
  {
    id: 'capoeira',
    title: 'Capoeira 3D',
    description:
      'THREE.js is a powerful library for rendering 3D objects and environments. In this demo I load a 3d model and play around with some capoeira movements.',
    links: {
      github: 'https://github.com/mrChernicharo/capoeira',
      www: null,
    },
    techs: getTechs(capoeiraTechs),
    videoUrl: videoURLs.capoeira,
  },
  {
    id: 'mel-mobile',
    title: 'Mel da Terra Mobile',
    description:
      'Mel da Terra Verde is a small business of raw honey production and delivery. With this app clients can now order products and perform payments in a seamless way.',
    links: {
      github: null,
      www: null,
    },
    techs: getTechs(melMobileTechs),
    videoUrl: videoURLs.melMobile,
  },
  {
    id: 'mel',
    title: 'Mel da Terra Verde app',
    description:
      'Mel da Terra Verde is a small business of raw honey production and delivery. This is the Admin web app.',
    links: {
      github: 'https://github.com/mrChernicharo/app-mel-da-terra-verde',
      www: 'https://mel-da-terra-verde-app.web.app/produtos',
    },
    techs: getTechs(melTechs),
    videoUrl: videoURLs.mel,
  },
];

export const getProject = (projTitle: IProjectId): IProject =>
  projects.find(proj => proj.id === projTitle) || projects[0];
