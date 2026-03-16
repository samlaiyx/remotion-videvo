import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const Scene3Command: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleTranslateY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const command = '$ npx skills add superpower-skills';
  const charsToShow = Math.floor(interpolate(frame, [30, 100], [0, command.length], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));
  const displayedCommand = command.slice(0, charsToShow);

  const cursorOpacity = Math.floor(frame / 15) % 2 === 0 ? 1 : 0;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 80px',
      }}
    >
      <div style={{width: '100%', maxWidth: 900}}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: 60,
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
            fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif',
            letterSpacing: '-0.3px',
          }}
        >
          一行命令搞定：
        </div>

        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '32px 40px',
            borderRadius: 12,
            fontFamily: '"SF Mono", Menlo, Monaco, monospace',
            fontSize: 36,
            color: '#1d1d1f',
            border: '1px solid #d2d2d7',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          {displayedCommand}
          <span style={{opacity: charsToShow >= command.length ? cursorOpacity : 1, color: '#86868b'}}>
            |
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
