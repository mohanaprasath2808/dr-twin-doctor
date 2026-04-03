import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import InnerShadowView from './InnerShadowView';
import NeumorphicView from './NeumorphicView';

interface Props {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  secureTextEntry?: boolean;
  placeholder?: string;
}
const HEIGHT = 47;
const RADIUS = 64;
const InputField: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [width, setWidth] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {/* 🔥 Gradient BORDER */}
      <LinearGradient
        colors={['#D6E3F3', '#FFFFFF', '#FFFFFF', '#FFFFFF00']}
        locations={[0, 0.4, 0.7, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradientBorder, { borderRadius: RADIUS }]}
      >
        {/* 🔥 INNER CONTENT */}
        <View style={styles.innerWrapper}>
          {/* Shadow */}
          {width > 0 && (
            <View style={styles.shadowWrapper}>
              {focused ? (
                <InnerShadowView width={width} height={HEIGHT} />
              ) : (
                <NeumorphicView width={width} height={HEIGHT} color="#F7FBFF" />
              )}
            </View>
          )}

          {/* Input */}
          <View style={styles.inputWrapper}>
            {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

            <TextInput
              {...props}
              style={styles.input}
              placeholderTextColor="#ABABAB"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />

            {rightIcon && (
              <TouchableOpacity
                onPress={onRightIconPress}
                style={styles.rightIcon}
              >
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },

  gradientBorder: {
    borderRadius: 12,
    padding: 1, // 🔥 THIS creates border thickness
  },

  innerWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F7FBFF',
  },

  shadowWrapper: {
    position: 'absolute',
    width: '100%',
    height: 47,
  },

  inputWrapper: {
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    zIndex: 1,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#000',
  },

  leftIcon: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightIcon: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
