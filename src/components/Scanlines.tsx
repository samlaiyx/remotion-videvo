import React from 'react';
import {AbsoluteFill} from 'remotion';

export const Scanlines: React.FC = () => {
  return (
    <AbsoluteFill style={{
      backgroundImage: `
        repeating-linear-gradient(
          0deg,
          rgba(0, 255, 136, 0.03) 0px,
          rgba(0, 255, 136, 0.03) 1px,
          transparent 1px,
          transparent 3px
        )
      `,
      pointerEvents: 'none',
    }} />
  );
};
