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
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const OtpScreen: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const { mobileNumber } = useLocalSearchParams(); // Retrieve mobile number passed from LoginScreen
  const router = useRouter();

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      // Simulate OTP verification success
      alert(`OTP verified successfully for mobile number: ${mobileNumber}`);
      router.replace('/userDetails/userForm'); // Navigate to the form page after OTP verification
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP sent to {mobileNumber}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
      />
      <Button title="Verify OTP" onPress={handleVerifyOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default OtpScreen;

