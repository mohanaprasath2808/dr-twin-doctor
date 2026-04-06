import React from 'react';
import { Dimensions, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { COLORS } from '../../constants/theme';

const width = Dimensions.get('window').width;

interface OtpTextInputProps {
  otp: string;
  setOtp: (otp: string) => void;
  onFilled?: (otp: string) => void;
}

const OtpTextInput: React.FC<OtpTextInputProps> = ({
  otp,
  setOtp,
  onFilled,
}) => {
  return (
    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <OtpInput
        numberOfDigits={4}
        focusColor={COLORS.PRIMARY}
        onTextChange={(text: string) => {
          setOtp(text);
        }}
        onFilled={onFilled}
        textInputProps={{
          returnKeyType: 'done',
          textContentType: 'oneTimeCode',
        }}
        theme={{
          containerStyle: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          inputsContainerStyle: {
            alignSelf: 'center',
            justifyContent: 'center',
            gap: width * 0.035,
          },
          pinCodeContainerStyle: {
            width: 54,
            height: 54,
            borderRadius: 27,
            borderWidth: 1,
            borderColor: '#D6E3F3',
            backgroundColor: COLORS.SURFACE,
            shadowColor: '#C8CBCC',
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.7,
            shadowRadius: 10,
            elevation: 4,
          },
          focusedPinCodeContainerStyle: {
            borderWidth: 1,
            borderColor: '#D6E3F3',
            backgroundColor: COLORS.SURFACE,
            shadowColor: '#C8CBCC',
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 1,
          },
          pinCodeTextStyle: {
            fontSize: 20,
            fontWeight: '600',
            color: COLORS.PRIMARY,
          },
        }}
        type="numeric"
        autoFocus={false}
        blurOnFilled
        hideStick
      />
    </View>
  );
};

export default OtpTextInput;
