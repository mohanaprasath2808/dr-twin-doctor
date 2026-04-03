import React from 'react';
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';

interface Props {
  width?: number;
  height?: number;
  borderRadius?: number;
}

const InnerShadowView: React.FC<Props> = ({
  width = 300,
  height = 47,
  borderRadius = 25,
}) => {
  return (
    <Canvas style={{ width, height }}>
      <RoundedRect
        x={0}
        y={0}
        width={width}
        height={height}
        r={borderRadius}
        color="#E6EBF2"
      >
        {/* Inner shadows */}
        <Shadow dx={2} dy={2} blur={6} color="#A3B1C6" inner />
        <Shadow dx={-2} dy={-2} blur={6} color="#FFFFFF" inner />
      </RoundedRect>
    </Canvas>
  );
};

export default InnerShadowView;
