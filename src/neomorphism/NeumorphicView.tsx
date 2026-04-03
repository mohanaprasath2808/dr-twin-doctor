import React from 'react';
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';

interface Props {
  width?: number;
  height?: number;
  borderRadius?: number;
}

const NeumorphicView = ({ width = '100%', height = 47, borderRadius = 12 }) => {
  return (
    <Canvas style={{ width, height }}>
      <RoundedRect
        x={0}
        y={0}
        width={typeof width === 'string' ? 999 : width} // fallback
        height={height}
        r={borderRadius}
        color="#E6EBF2"
      >
        <Shadow dx={4} dy={4} blur={20} color="#C8CBCC" />
        <Shadow dx={-6} dy={-6} blur={20} color="#FFFFFFE5" />
        <Shadow dx={2} dy={2} blur={4} color="#728EAB1A" />
      </RoundedRect>
    </Canvas>
  );
};

export default NeumorphicView;
