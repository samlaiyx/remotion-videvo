import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const Scene4Code: React.FC = () => {
  const frame = useCurrentFrame();

  const text1Opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const text1Scale = interpolate(frame, [0, 30], [0.95, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const text2Opacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const text2Scale = interpolate(frame, [40, 70], [0.95, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const codeOpacity = interpolate(frame, [10, 40], [0, 1], {
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
      <div style={{width: '100%', maxWidth: 900}}>
        <div
          style={{
            backgroundColor: '#f5f5f7',
            padding: 32,
            borderRadius: 12,
            fontFamily: '"SF Mono", Menlo, Monaco, monospace',
            fontSize: 32,
            color: '#1d1d1f',
            marginBottom: 60,
            opacity: codeOpacity,
            lineHeight: 1.6,
            border: '1px solid #d2d2d7',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
        >
          <span style={{color: '#ad3da4'}}>function</span>{' '}
          <span style={{color: '#0071e3'}}>getUserData</span>
          <span style={{color: '#1d1d1f'}}>(</span>
          <span style={{color: '#1d1d1f'}}>userId</span>
          <span style={{color: '#1d1d1f'}}>)</span> {'{\n'}
          {'  '}<span style={{color: '#6e6e73'}}>// Fetch user from database</span>{'\n'}
          {'  '}<span style={{color: '#ad3da4'}}>const</span> user = <span style={{color: '#ad3da4'}}>await</span> db.users.findOne(userId);{'\n'}
          {'  '}<span style={{color: '#ad3da4'}}>return</span> user;{'\n'}
          {'}'}
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: 30,
            opacity: text1Opacity,
            transform: `scale(${text1Scale})`,
            fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif',
          }}
        >
          现在我 80% 的代码都是 AI 写的
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: '#0071e3',
            textAlign: 'center',
            opacity: text2Opacity,
            transform: `scale(${text2Scale})`,
            fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif',
          }}
        >
          但 leader 以为是我手写的
        </div>
      </div>
    </AbsoluteFill>
  );
};
