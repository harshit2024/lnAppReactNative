import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker'; // Correct import for Picker
import { useRouter } from 'expo-router';

interface FormData {
  company_name: string;
billing_address: string;
billing_pincode: string;
billing_city: string;
place_of_supply: string;
company_type: string;
  email: string;
gst_number: string;
pan_number: string;
}

const SecondForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();
 const router = useRouter();

  // Submit handler for both buttons
  const onSubmit = (data: FormData) => {
    router.push('../userDetails/thirdForm');
    console.log('Form Data:', data);
  };

  // Handler for the Cancel button
  const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer}>
      

        {/* Name Field */}
        <Text style={styles.fieldHeader}> Company Name</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your name"
            />
          )}
          name="company_name"
        />
        {errors.company_name && <Text style={styles.error}>Company Name is required</Text>}

        <Text style={styles.fieldHeader}>Billing Address</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your Organisation Name"
            />
          )}
          name="billing_address"
        />
        {errors.billing_address && <Text style={styles.error}>Billing Address is required</Text>}


        <Text style={styles.fieldHeader}>Billing Pincode</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your Organisation Name"
            />
          )}
          name="billing_pincode"
        />
        {errors.billing_pincode && <Text style={styles.error}>Billing Pincode is required</Text>}

        <Text style={styles.fieldHeader}>Billing City</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={value}
                style={styles.picker}
                onValueChange={onChange}
              >
                <Picker.Item label="Select City" value="" />
                <Picker.Item label="Kanpur" value="22" />
                <Picker.Item label="Delhi" value="23" />
                <Picker.Item label="Banglore" value="24" />
              </Picker>
            </View>
          )}
          name="billing_city"
        />
        {errors.billing_city && <Text style={styles.error}>City is required</Text>}


        
        <Text style={styles.fieldHeader}>Place of Supply</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={value}
                style={styles.picker}
                onValueChange={onChange}
              >
                <Picker.Item label="Select City" value="" />
                <Picker.Item label="Kanpur" value="22" />
                <Picker.Item label="Delhi" value="23" />
                <Picker.Item label="Banglore" value="24" />
              </Picker>
            </View>
          )}
          name="place_of_supply"
        />
        {errors.place_of_supply && <Text style={styles.error}>Place of Supply is required</Text>}



        
        <Text style={styles.fieldHeader}>Company Type</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={value}
                style={styles.picker}
                onValueChange={onChange}
              >
                <Picker.Item label="Select City" value="" />
                <Picker.Item label="Kanpur" value="22" />
                <Picker.Item label="Delhi" value="23" />
                <Picker.Item label="Banglore" value="24" />
              </Picker>
            </View>
          )}
          name="company_type"
        />
        {errors.company_type && <Text style={styles.error}>Company Type is required</Text>}


        {/* Email Field */}
        <Text style={styles.fieldHeader}>Email Address</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Simple email pattern
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your email"
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.error}>Enter a valid email</Text>}

        {/* Age Dropdown (Picker) */}
        {/* College Field */}
        <Text style={styles.fieldHeader}>GST Number</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your Organisation Name"
            />
          )}
          name="gst_number"
        />
        {errors.gst_number && <Text style={styles.error}>GST number is required</Text>}

        <Text style={styles.fieldHeader}>PAN Number</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your Organisation Address"
            />
          )}
          name="pan_number"
        />
        {errors.pan_number && <Text style={styles.error}>PAN Number is required</Text>}
      </ScrollView>

      {/* Fixed Buttons: Cancel and Next */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 20,
     // Add padding to prevent content from hiding behind buttons
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  fieldHeader: {
    fontSize: 16,
    marginBottom: 5,
    marginTop:10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // Add background color for visibility
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: '#fff', // Red for Cancel
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    borderColor: '#007AFF',
    borderWidth: 1,
  },
  buttonNext: {
    flex: 1,
    backgroundColor: '#007AFF', // Green for Next
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#007AFF', // Set the text color to #007AFF
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SecondForm;
