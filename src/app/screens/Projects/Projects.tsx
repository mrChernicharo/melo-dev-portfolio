import React, { useEffect, useRef } from 'react';
import Lottie, { Options as LottieOptions } from 'react-lottie';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { Styles } from './Styles';
import idea from '../../assets/73810-business-idea-animation.json';

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
export default function Projects(): JSX.Element {
  const capoeiraVideoRef = useRef<HTMLVideoElement>(null);
  const d3ChartsVideoRef = useRef<HTMLVideoElement>(null);
  const gordinhoVideoRef = useRef<HTMLVideoElement>(null);
  const happyPlantsVideoRef = useRef<HTMLVideoElement>(null);
  const lacosVideoRef = useRef<HTMLVideoElement>(null);
  const melVideoRef = useRef<HTMLVideoElement>(null);
  const melMobileVideoRef = useRef<HTMLVideoElement>(null);
  const oldPortfolioVideoRef = useRef<HTMLVideoElement>(null);

  const animOptions: LottieOptions = { animationData: idea };

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

  useEffect(() => {
    setTimeout(() => gordinhoVideoRef.current?.play(), 1000);
    setTimeout(() => melMobileVideoRef.current?.play(), 2000);
    setTimeout(() => d3ChartsVideoRef.current?.play(), 3000);
    setTimeout(() => lacosVideoRef.current?.play(), 4000);
    setTimeout(() => oldPortfolioVideoRef.current?.play(), 5000);
    setTimeout(() => capoeiraVideoRef.current?.play(), 6000);
    setTimeout(() => happyPlantsVideoRef.current?.play(), 7000);
    setTimeout(() => melVideoRef.current?.play(), 8000);
  }, []);

  return (
    <Styles>
      <h2>Projects</h2>

      <a href="https://main.d2797vtjwvpw5j.amplifyapp.com" target="_blank">
        Gordinho Defense
      </a>

      <Lottie options={animOptions} width={400} height={400} />

      <VideoPlayer src={gordinho} forwardedRef={gordinhoVideoRef} />
      <VideoPlayer src={melMobile} forwardedRef={melMobileVideoRef} />
      <VideoPlayer src={d3Charts} forwardedRef={d3ChartsVideoRef} />
      <VideoPlayer src={lacos} forwardedRef={lacosVideoRef} />
      <VideoPlayer src={oldPortfolio} forwardedRef={oldPortfolioVideoRef} />
      <VideoPlayer src={capoeira} forwardedRef={capoeiraVideoRef} />
      <VideoPlayer src={happyPlants} forwardedRef={happyPlantsVideoRef} />
      <VideoPlayer src={mel} forwardedRef={melVideoRef} />
    </Styles>
  );
}
