"use client";

import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

interface LottieAnimationProps {
  animationData: object;
  width?: any;
  height?: any;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = 150,
  height = 150,
  loop = true,
  autoplay = true,
  style,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or you can return a loader/spinner
  }

  return (
    <Lottie
      loop={loop}
      animationData={animationData}
      play={autoplay}
      style={{ width, height, ...style }}
    />
  );
};

export default LottieAnimation;
