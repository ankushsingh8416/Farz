"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR issues

  return <Lottie animationData={animationPath} loop autoplay style={{ width: '95%' }} />;
};

export default AnimationLottie;
