import React from 'react';
import { useThemeContext } from '../../hooks/ThemeContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import { IProject } from '../../utils/projects';
import { Skill } from '../../utils/skills';
import VideoPlayer from '../VideoPlayer';

export interface IProjectCardProps {
  project: IProject;
  delay?: number;
}

export default function ProjectCard({ project, delay }: IProjectCardProps): JSX.Element {
  const { breakpoint } = useWindowSize();
  const { theme } = useThemeContext();

  const { title, description, videoUrl, links, techs } = project;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <VideoPlayer src={videoUrl} delay={delay} />

      <ul>
        {techs.map(tech => (
          <li>
            <img src={tech.logo} alt="" width={30} />
          </li>
        ))}
      </ul>

      <ul>
        {links.github && <a href={links.github}>Githyb</a>}
        {links.www && <a href={links.www}>Visit me</a>}
      </ul>
    </div>
  );
}
