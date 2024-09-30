// app/index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const router = useRouter();

  const handleGetOtp = () => {
    if (mobileNumber.length === 10) {
      // Trigger OTP API call here
      router.push({
        pathname: '/otp',
        params: { mobileNumber }, // Passing mobileNumber to OTP page
      });
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Mobile Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={10}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        placeholder="Mobile Number"
      />
      <Button title="Get OTP" onPress={handleGetOtp} />
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

export default LoginScreen;


