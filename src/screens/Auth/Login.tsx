import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import DoctorTempImage from '../../assets/image/tempImage/doctorTempImage.png';
import NeumorphicCircle from '../../neomorphism/NeumorphicCircle';
import MailIcon from '../../assets/icon/mailIcon.svg';
import PasswordIcon from '../../assets/icon/passwordIcon.svg';
import HideIcon from '../../assets/icon/hideIcon.svg';
import UnhideIcon from '../../assets/icon/unHide.svg';
import InputField from '../../neomorphism/InputField';

const SHADOW_SIZE = 160;
const Login = () => {
  const [secure, setSecure] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.wrapper}>
          {/* Shadow Circle */}
          <NeumorphicCircle size={144} />

          {/* Profile Image */}
          <Image source={DoctorTempImage} style={styles.image} />
        </View>
      </View>
      <Text style={styles.name}>Dr. Soliman</Text>
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.heading}>Login</Text>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <InputField
            placeholder="Enter email"
            leftIcon={<MailIcon width={18} height={18} />}
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <InputField
            placeholder="Enter password"
            secureTextEntry={secure}
            leftIcon={<PasswordIcon width={18} height={18} />}
            rightIcon={
              secure ? (
                <HideIcon width={18} height={18} />
              ) : (
                <UnhideIcon width={18} height={18} />
              )
            }
            onRightIconPress={() => setSecure(!secure)}
          />

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up */}
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signup}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SURFACE,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  wrapper: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 117,
    height: 117,
    resizeMode: 'contain',
    position: 'absolute',
    borderRadius: 57,
  },
  name: {
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
    marginTop: 4,
  },
  dataContainer: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.TEXT_DARK,
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: COLORS.TEXT_60,
    marginTop: 10,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    fontWeight: 500,
  },
  loginBtn: {
    marginTop: 30,
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    // Neumorphic shadow
    backgroundColor: '#2E3A8C',
    shadowColor: '#A3B1C6',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupText: {
    textAlign: 'center',
    paddingBottom: 20,
    color: COLORS.TEXT_60,
  },
  signup: {
    color: '#2E3A8C',
    fontWeight: '500',
  },
});
