import React from 'react';
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';

interface Props {
  width?: number;
  height?: number;
  borderRadius?: number;
  color?: string;
}

const InnerShadowView: React.FC<Props> = ({
  width = 300,
  height = 47,
  borderRadius = 25,
  color = '#F7FBFF',
}) => {
  return (
    <Canvas style={{ width, height }}>
      <RoundedRect
        x={0}
        y={0}
        width={width}
        height={height}
        r={borderRadius}
        color={color}
      >
        {/* Inner shadows */}
        <Shadow dx={2} dy={2} blur={3} color="#C8CBCC99" inner />
        <Shadow dx={-2} dy={-2} blur={3} color="#FFFFFFCC" inner />
      </RoundedRect>
    </Canvas>
  );
};

export default InnerShadowView;
