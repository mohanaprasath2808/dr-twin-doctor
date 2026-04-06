import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '../assets/icon/backArrow.svg';

interface BackButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  width?: number;
  height?: number;
  radius?: number;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  width = 40,
  height = 40,
  radius = 20,
  iconSize = 22,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      style={[{ width, height, borderRadius: radius }, style]}
    >
      <LinearGradient
        colors={['#D6E3F3', '#FFFFFF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={[styles.border, { borderRadius: radius }]}
      >
        <View
          style={[
            styles.surface,
            {
              borderRadius: radius,
              opacity: disabled ? 0.6 : 1,
            },
          ]}
        >
          <BackIcon width={iconSize} height={iconSize} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  border: {
    flex: 1,
    padding: 1,
    shadowColor: '#C8CBCC',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 3,
  },
  surface: {
    flex: 1,
    backgroundColor: '#F7FBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButton;
