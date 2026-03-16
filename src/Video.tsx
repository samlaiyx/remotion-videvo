import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Scene1Title} from './components/Scene1Title';
import {Scene2Features} from './components/Scene2Features';
import {Scene3Command} from './components/Scene3Command';
import {Scene4Code} from './components/Scene4Code';
import {Scene5CTA} from './components/Scene5CTA';
import {FadeTransition} from './components/FadeTransition';

export const Video: React.FC = () => {
  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)'
    }}>
      <Sequence from={0} durationInFrames={90}>
        <FadeTransition>
          <Scene1Title />
        </FadeTransition>
      </Sequence>
      <Sequence from={90} durationInFrames={150}>
        <FadeTransition>
          <Scene2Features />
        </FadeTransition>
      </Sequence>
      <Sequence from={240} durationInFrames={150}>
        <FadeTransition>
          <Scene3Command />
        </FadeTransition>
      </Sequence>
      <Sequence from={390} durationInFrames={150}>
        <FadeTransition>
          <Scene4Code />
        </FadeTransition>
      </Sequence>
      <Sequence from={540} durationInFrames={60}>
        <FadeTransition>
          <Scene5CTA />
        </FadeTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
