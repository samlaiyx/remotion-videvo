import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const Scene2Features: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleTranslateY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const feature1Opacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const feature1TranslateX = interpolate(frame, [20, 45], [-30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const feature1Scale = interpolate(frame, [20, 45], [0.95, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const feature2Opacity = interpolate(frame, [50, 75], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const feature2TranslateX = interpolate(frame, [50, 75], [-30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const feature2Scale = interpolate(frame, [50, 75], [0.95, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const feature3Opacity = interpolate(frame, [80, 105], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const feature3TranslateX = interpolate(frame, [80, 105], [-30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const feature3Scale = interpolate(frame, [80, 105], [0.95, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 80px',
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: 900,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        padding: 60,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
      }}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: 80,
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
            fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif',
            letterSpacing: '-0.3px',
          }}
        >
          Superpower Skills =<br />给 Claude 装上"代码洁癖"
        </div>

        <div style={{fontSize: 36, color: '#1d1d1f', fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif'}}>
          <div
            style={{
              marginBottom: 60,
              opacity: feature1Opacity,
              transform: `translateX(${feature1TranslateX}px) scale(${feature1Scale})`,
              fontWeight: 400,
            }}
          >
            <span style={{color: '#0071e3', marginRight: 20}}>✓</span>
            自动对齐团队规范
          </div>
          <div
            style={{
              marginBottom: 60,
              opacity: feature2Opacity,
              transform: `translateX(${feature2TranslateX}px) scale(${feature2Scale})`,
              fontWeight: 400,
            }}
          >
            <span style={{color: '#0071e3', marginRight: 20}}>✓</span>
            变量命名不再迷惑
          </div>
          <div
            style={{
              opacity: feature3Opacity,
              transform: `translateX(${feature3TranslateX}px) scale(${feature3Scale})`,
              fontWeight: 400,
            }}
          >
            <span style={{color: '#0071e3', marginRight: 20}}>✓</span>
            注释该有的都有
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
