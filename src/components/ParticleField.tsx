import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';

const Particle: React.FC<{x: number; y: number; delay: number; duration: number}> = ({x, y, delay, duration}) => {
  const frame = useCurrentFrame();
  const adjustedFrame = frame - delay;

  const opacity = interpolate(
    adjustedFrame,
    [0, duration * 0.3, duration * 0.7, duration],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );

  const scale = interpolate(
    adjustedFrame,
    [0, duration],
    [0.5, 2],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );

  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: '#00ff88',
      boxShadow: '0 0 15px #00ff88',
      opacity,
      transform: `scale(${scale})`,
    }} />
  );
};

export const ParticleField: React.FC = () => {
  const particles = Array.from({length: 30}, (_, i) => ({
    id: i,
    x: Math.random() * 1080,
    y: Math.random() * 1920,
    delay: Math.random() * 60,
    duration: 40 + Math.random() * 40,
  }));

  return (
    <>
      {particles.map(p => (
        <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} duration={p.duration} />
      ))}
    </>
  );
};
