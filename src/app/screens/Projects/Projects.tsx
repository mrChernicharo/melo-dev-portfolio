import React, { useEffect, useRef } from 'react';
import Lottie, { Options as LottieOptions } from 'react-lottie';
import { Styles } from './Styles';
import ideaAnimation from '../../assets/lottie/73810-business-idea-animation.json';

import { techCategories, skillsList } from '../../utils/skills';

import { videoURLs } from '../../utils/helpers';
import { projects } from '../../utils/projects';
import ProjectCard from '../../components/ProjectCard';

export interface VideoCard {
  videoUrl: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  videoDelay: number;
  title: string;
  description: string;
  techs: string[];
}

export default function Projects(): JSX.Element {
  const animOptions: LottieOptions = { animationData: ideaAnimation };

  console.log({ skillsList, techCategories });

  return (
    <Styles>
      <h2>Projects</h2>

      <a href="https://main.d2797vtjwvpw5j.amplifyapp.com" target="_blank">
        Gordinho Defense
      </a>

      <div className="illustration">
        <Lottie options={animOptions} width={400} height={400} />
      </div>

      {projects.map((project, i) => (
        <ProjectCard project={project} delay={i * 1000} />
      ))}
    </Styles>
  );
}
