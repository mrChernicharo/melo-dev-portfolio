import React, { ForwardedRef, Ref, SyntheticEvent } from 'react';
import { VideoStyles } from './Styles';

interface VideoProps {
  src: string;
  forwardedRef: ForwardedRef<HTMLVideoElement>;
}

export default function VideoPlayer({ src, forwardedRef }: VideoProps): JSX.Element {
  return (
    <VideoStyles>
      <video ref={forwardedRef} muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </VideoStyles>
  );
}
