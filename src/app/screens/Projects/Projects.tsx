import React, { useEffect, useRef } from 'react';
import Lottie, { Options as LottieOptions } from 'react-lottie';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { Styles } from './Styles';
import ideaAnimation from '../../assets/lottie/73810-business-idea-animation.json';

import { techCategories, skillsList } from '../../utils/skills';

const baseURL = 'https://melo-dev-portfolio.s3.us-west-2.amazonaws.com';

const videoURLs = {
  capoeira: `${baseURL}/hello-capoeira.mp4`,
  d3Charts: `${baseURL}/D3-charts.mp4`,
  gordinho: `${baseURL}/gordinho_3D.mp4`,
  happyPlants: `${baseURL}/happy-plants.mp4`,
  lacos: `${baseURL}/Lacos-portfolio.mp4`,
  mel: `${baseURL}/mel-portfolio.mp4`,
  melMobile: `${baseURL}/Mel-mobile.mp4`,
  oldPortfolio: `${baseURL}/old-portfolio.mp4`,
};

export interface VideoCard {
  videoUrl: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  videoDelay: number;
  title: string;
  description: string;
  techs: string[];
}

export default function Projects(): JSX.Element {
  const videoRefs = {
    capoeiraVideoRef: useRef<HTMLVideoElement>(null),
    d3ChartsVideoRef: useRef<HTMLVideoElement>(null),
    gordinhoVideoRef: useRef<HTMLVideoElement>(null),
    happyPlantsVideoRef: useRef<HTMLVideoElement>(null),
    lacosVideoRef: useRef<HTMLVideoElement>(null),
    melVideoRef: useRef<HTMLVideoElement>(null),
    melMobileVideoRef: useRef<HTMLVideoElement>(null),
    oldPortfolioVideoRef: useRef<HTMLVideoElement>(null),
  };
  const {
    capoeira,
    d3Charts,
    gordinho,
    happyPlants,
    lacos,
    mel,
    melMobile,
    oldPortfolio,
  } = videoURLs;

  const animOptions: LottieOptions = { animationData: ideaAnimation };

  console.log({ skillsList, techCategories });

  useEffect(() => {
    const delay = 1000;
    setTimeout(() => videoRefs.gordinhoVideoRef.current?.play(), delay * 1);
    setTimeout(() => videoRefs.melMobileVideoRef.current?.play(), delay * 1.5);
    setTimeout(() => videoRefs.d3ChartsVideoRef.current?.play(), delay * 2);
    setTimeout(() => videoRefs.lacosVideoRef.current?.play(), delay * 2.5);
    setTimeout(() => videoRefs.oldPortfolioVideoRef.current?.play(), delay * 3);
    setTimeout(() => videoRefs.capoeiraVideoRef.current?.play(), delay * 3.5);
    setTimeout(() => videoRefs.happyPlantsVideoRef.current?.play(), delay * 4);
    setTimeout(() => videoRefs.melVideoRef.current?.play(), delay * 4.5);
  }, []);

  return (
    <Styles>
      <h2>Projects</h2>

      <a href="https://main.d2797vtjwvpw5j.amplifyapp.com" target="_blank">
        Gordinho Defense
      </a>

      <div className="illustration">
        <Lottie options={animOptions} width={400} height={400} />
      </div>

      <VideoPlayer src={gordinho} forwardedRef={videoRefs.gordinhoVideoRef} />
      <VideoPlayer src={melMobile} forwardedRef={videoRefs.melMobileVideoRef} />
      <VideoPlayer src={d3Charts} forwardedRef={videoRefs.d3ChartsVideoRef} />
      <VideoPlayer src={lacos} forwardedRef={videoRefs.lacosVideoRef} />
      <VideoPlayer src={oldPortfolio} forwardedRef={videoRefs.oldPortfolioVideoRef} />
      <VideoPlayer src={capoeira} forwardedRef={videoRefs.capoeiraVideoRef} />
      <VideoPlayer src={happyPlants} forwardedRef={videoRefs.happyPlantsVideoRef} />
      <VideoPlayer src={mel} forwardedRef={videoRefs.melVideoRef} />
    </Styles>
  );
}
