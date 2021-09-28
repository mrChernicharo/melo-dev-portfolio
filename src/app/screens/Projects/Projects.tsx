import React, { useEffect, useRef } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { Styles } from './Styles';

const videoUrls = {
  gordinho: 'https://melo-dev-portfolio.s3.us-west-2.amazonaws.com/gordinho_3D.mp4',
  mel: 'https://melo-dev-portfolio.s3.us-west-2.amazonaws.com/Mel-mobile.mp4',
  lacos: 'https://melo-dev-portfolio.s3.us-west-2.amazonaws.com/Lacos-portfolio.mp4',
};
export default function Projects(): JSX.Element {
  const melVideoRef = useRef<HTMLVideoElement>(null);
  const gordinhoVideoRef = useRef<HTMLVideoElement>(null);
  const lacosVideoRef = useRef<HTMLVideoElement>(null);

  const { gordinho, mel, lacos } = videoUrls;

  useEffect(() => {
    setTimeout(() => gordinhoVideoRef.current?.play(), 1000);
    setTimeout(() => melVideoRef.current?.play(), 2000);
    setTimeout(() => lacosVideoRef.current?.play(), 3000);
  }, []);

  return (
    <Styles>
      <h2>Projects</h2>

      <a href="https://main.d2797vtjwvpw5j.amplifyapp.com" target="_blank">
        Gordinho Defense
      </a>

      <VideoPlayer src={gordinho} forwardedRef={gordinhoVideoRef} />
      <VideoPlayer src={mel} forwardedRef={melVideoRef} />
      <VideoPlayer src={lacos} forwardedRef={lacosVideoRef} />
    </Styles>
  );
}
