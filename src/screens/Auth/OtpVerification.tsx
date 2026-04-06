import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import OtpTextInput from '../../components/Auth/OtpTextInput';
import OtpTimer from '../../components/Auth/OtpTimer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/theme';
import ReusableButton from '../../neomorphism/ReusableButton';
import BackButton from '../../neomorphism/BackButton';
import { useNavigation } from '@react-navigation/native';

const OtpVerification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <BackButton
        width={40}
        height={40}
        radius={20}
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subTitle}>
        Enter the 4-digit code sent to your Email address
      </Text>

      <View style={styles.otpContainer}>
        <OtpTextInput otp={otp} setOtp={setOtp} />
      </View>

      <OtpTimer initialSeconds={30} onResend={() => {}} />

      <ReusableButton
        title="Verify"
        onPress={() => {}}
        containerStyle={styles.verifyBtn}
        backgroundColor="#2E3A8C"
        textColor="#FFFFFF"
      />
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SURFACE,
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: Platform.OS === 'ios' ? 6 : 16,
  },
  title: {
    marginTop: 24,
    fontSize: 32,
    fontWeight: '600',
    color: COLORS.TEXT_DARK,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.TEXT_60,
    fontWeight: '400',
  },
  otpContainer: {
    marginTop: 34,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyBtn: {
    marginTop: 28,
  },
});
