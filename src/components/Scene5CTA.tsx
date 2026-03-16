import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowTranslateY = interpolate(
    frame % 60,
    [0, 30, 60],
    [0, 15, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: 120,
          textAlign: 'center',
          opacity,
          transform: `translateY(${arrowTranslateY}px)`,
        }}
      >
        👇
      </div>
    </AbsoluteFill>
  );
};
