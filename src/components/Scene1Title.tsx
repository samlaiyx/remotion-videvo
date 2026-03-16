import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const Scene1Title: React.FC = () => {
  const frame = useCurrentFrame();

  const translateY = interpolate(frame, [0, 30], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [0, 20], [0.95, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 60px',
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: 600,
          color: '#1d1d1f',
          textAlign: 'center',
          lineHeight: 1.3,
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,
          fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif',
          letterSpacing: '-0.5px',
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08))',
        }}
      >
        终于有人治得住
        <br />
        AI 写的屎山代码了
      </div>
    </AbsoluteFill>
  );
};
