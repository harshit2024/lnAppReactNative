// // app/otp.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// const OtpScreen: React.FC = () => {
//   const [otp, setOtp] = useState<string>('');
//   const { mobileNumber } = useLocalSearchParams(); // Retrieve mobile number passed from LoginScreen
//   const router = useRouter();

//   const handleVerifyOtp = () => {
//     if (otp.length === 6) {
//       // Verify OTP through API call
//       alert(`OTP verified successfully for mobile number: ${mobileNumber}`);
//       router.push('/'); // Navigate back to the login screen or another page after OTP verification
//     } else {
//       alert('Please enter a valid 6-digit OTP.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter OTP sent to {mobileNumber}</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         maxLength={6}
//         value={otp}
//         onChangeText={setOtp}
//         placeholder="Enter OTP"
//       />
//       <Button title="Verify OTP" onPress={handleVerifyOtp} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//   },
// });

// export default OtpScreen;

// app/otp.tsx
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Logo from '../assets/svg/Logo';

const OtpScreen: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));
  const { mobileNumber } = useLocalSearchParams();
  const router = useRouter();
  
  // State to handle the button text
  const [buttonLabel, setButtonLabel] = useState('Get OTP');

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if there's input and it's not the last one
    if (text && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
    // Go back to the previous input if the current one is empty
    if (!text && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleButtonPress = () => {
    const enteredOtp = otp.join('');
    console.log("OTP:",enteredOtp);
      if (enteredOtp.length === 6) {
        alert(`OTP verified successfully for mobile number: ${mobileNumber}`);
        router.replace('/userDetails/userForm');
      } else {
        alert('Please enter a valid 6-digit OTP.');
      }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Logo width={35} height={35} />
          <Text style={styles.logotitle}>LOAN NETWORK</Text>
        </View>
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.title}>Enter OTP sent to</Text>
        <Text style={styles.label}>{mobileNumber}</Text>
        <Text style={styles.label}>Enter OTP</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.label}>Facing Trouble? Contact Support</Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingTop: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logotitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginLeft: 10,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#808080',
    marginBottom: 10,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    width: 40,
    marginRight: 10,
  },
  bottomSection: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OtpScreen;
