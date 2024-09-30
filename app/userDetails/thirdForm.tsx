import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker'; // Correct import for Picker
import { useRouter } from 'expo-router';

interface FormData {
  account_holder_name: string;
  bank_ifsc: string;
  bank_name: string;
  account_type: string;
  account_number: string;
}

const ThirdForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();
 const router = useRouter();

  // Submit handler for both buttons
  const onSubmit = (data: FormData) => {
    router.push('../userDetails/secondForm');
    console.log('Form Data:', data);
  };

  // Handler for the Cancel button
  const handleCancel = () => {
    const values = getValues();
    console.log('Cancel button pressed, form data:', values);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer}>
      

        {/* Name Field */}
        <Text style={styles.fieldHeader}> Account Holder Name</Text>
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
          name="account_holder_name"
        />
        {errors.account_holder_name && <Text style={styles.error}>Name is required</Text>}

       


        {/* Email Field */}
       

        {/* Age Dropdown (Picker) */}
        {/* College Field */}
        <Text style={styles.fieldHeader}>Bank IFSC</Text>
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
          name="bank_ifsc"
        />
        {errors.bank_ifsc && <Text style={styles.error}>Bank IFSC is required</Text>}



        <Text style={styles.fieldHeader}>Bank Name</Text>
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
          name="bank_name"
        />
        {errors.bank_name && <Text style={styles.error}>Bank Name is required</Text>}


        <Text style={styles.fieldHeader}>Account Type</Text>
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
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
              </Picker>
            </View>
          )}
          name="account_type"
        />
        {errors.account_type && <Text style={styles.error}>City is required</Text>}


        <Text style={styles.fieldHeader}>Account Number</Text>
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
          name="account_number"
        />
        {errors.account_number && <Text style={styles.error}>Account Number is required</Text>}
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

export default ThirdForm;
