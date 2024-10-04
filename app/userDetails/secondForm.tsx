import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
  Modal,
} from "react-native";
import { useForm, Controller, set } from "react-hook-form";
import { Picker } from "@react-native-picker/picker"; // Correct import for Picker
import { useRouter } from "expo-router";
import { cities } from "./userForm";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import UploadButton from "@/components/uploadButton";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();
  const router = useRouter();

  // Submit handler for both buttons
  const onSubmit = (data: FormData) => {
    router.push("../userDetails/thirdForm");
    console.log("Form Data:", data);
  };

  // Handler for the Cancel button
  const handleCancel = () => {
    router.back();
  };

  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Request permission to access camera and gallery
  const requestPermissions = async () => {
    if (Platform.OS !== "web") {
      const { status: cameraStatus } =
        await ImagePicker.requestCameraPermissionsAsync();
      const { status: galleryStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (cameraStatus !== "granted" || galleryStatus !== "granted") {
        alert(
          "Sorry, we need camera and gallery permissions to make this work!"
        );
      }
    }
  };

  // Open camera to capture photo
  const pickImageFromCamera = async () => {
    await requestPermissions();
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("Image URI:", result.assets[0].uri);
      // You can now upload the image or process it further
    }
    setModalVisible(false);
  };

  // Open gallery to pick image
  const pickImageFromGallery = async () => {
    await requestPermissions();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("Image URI:", result.assets[0].uri);
      // You can now upload the image or process it further
    }
    setModalVisible(false);
  };

  // Pick a file from file manager
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log("File URI:", result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("Image URI:", result.assets[0].uri);
      // You can now upload the image or process it further
    }
    setModalVisible(false);
  };

  // const uploadFile = async (fileUri:any) => {
  //   const fileInfo = await FileSystem.getInfoAsync(fileUri);
  //   console.log('File Info:', fileInfo);

  //   // Upload the file to a server
  //   let formData = new FormData();
  //   formData.append('file', {
  //     uri: fileUri,
  //     name: fileInfo.name || 'file',
  //     type: 'application/octet-stream' // You can change the file type based on the content
  //   });

  //   try {
  //     const response = await fetch('YOUR_SERVER_UPLOAD_URL', {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     const responseData = await response.json();
  //     console.log('Upload Success:', responseData);
  //   } catch (error) {
  //     console.log('Upload Error:', error);
  //   }
  // };

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
        {errors.company_name && (
          <Text style={styles.error}>Company Name is required</Text>
        )}

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
              placeholder="Enter your Address"
            />
          )}
          name="billing_address"
        />
        {errors.billing_address && (
          <Text style={styles.error}>Billing Address is required</Text>
        )}

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
              placeholder="Enter your Pincode"
              keyboardType="numeric"
            />
          )}
          name="billing_pincode"
        />
        {errors.billing_pincode && (
          <Text style={styles.error}>Billing Pincode is required</Text>
        )}

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
                {/* <Picker.Item label="Select City" value="" />
                <Picker.Item label="Kanpur" value="22" />
                <Picker.Item label="Delhi" value="23" />
                <Picker.Item label="Banglore" value="24" /> */}
                {cities.map((city: string) => (
                  <Picker.Item key={city} label={city} value={city} />
                ))}
              </Picker>
            </View>
          )}
          name="billing_city"
        />
        {errors.billing_city && (
          <Text style={styles.error}>City is required</Text>
        )}

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
        {errors.place_of_supply && (
          <Text style={styles.error}>Place of Supply is required</Text>
        )}

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
        {errors.company_type && (
          <Text style={styles.error}>Company Type is required</Text>
        )}

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
              placeholder="Enter your GST number"
              keyboardType="numeric"
            />
          )}
          name="gst_number"
        />
        {errors.gst_number && (
          <Text style={styles.error}>GST number is required</Text>
        )}

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
              placeholder="Enter your PAN number"
              keyboardType="numeric"
            />
          )}
          name="pan_number"
        />
        {errors.pan_number && (
          <Text style={styles.error}>PAN Number is required</Text>
        )}

        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick Image from Gallery" onPress={pickImageFromGallery} />
      <Button title="Take Photo from Camera" onPress={pickImageFromCamera} />
      <Button title="Pick a File" onPress={pickDocument} />

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
      {file && <Button title="Upload File" onPress={() => uploadFile(file)} />}
    </View> */}

         <View style={styles.uploadContainer}>
            <Text style={[styles.fieldHeader]}>Upload Pan Document</Text>
            <Text style={ styles.fieldSubHeader}>upload upto 10 mb</Text>
            <Button title="Upload" onPress={() => setModalVisible(true)} />
            <UploadButton modalVisible={modalVisible}  setModalVisible={setModalVisible}/>
          </View>
        {/* <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, marginTop: 20 }}
            />
          )}
        </View> */}

        {/* Modal for upload options */}
        {/* <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Upload</Text>

              <TouchableOpacity
                onPress={pickImageFromCamera}
                style={styles.optionButton}
              >
                <View style={styles.option}>
                  <MaterialCommunityIcons
                    name="camera-plus"
                    size={45}
                    color="skyblue"
                  />
                  <Text style={styles.uploadOptionText}>
                    Click a picture via camera
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity
                onPress={pickImageFromGallery}
                style={styles.optionButton}
              >
                <View style={styles.option}>
                  <Ionicons name="image-sharp" size={45} color="#8db600" />
                  <Text style={styles.uploadOptionText}>
                    Upload from Gallery
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity
                onPress={pickDocument}
                style={styles.optionButton}
              >
                <View style={styles.option}>
                  <FontAwesome5 name="file-upload" size={45} color="#C5B4E3" />
                  <Text style={styles.uploadOptionText}>Upload from files</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.separator} />
            </View>
          </View>
        </Modal> */}
      </ScrollView>

      {/* Fixed Buttons: Cancel and Next */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={handleSubmit(onSubmit)}
        >
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
    textAlign: "center",
  },
  fieldHeader: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  fieldSubHeader:{
    fontSize: 14,
    marginBottom: 10,
    color: "#808080",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff", // Add background color for visibility
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: "#fff", // Red for Cancel
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    borderColor: "#007AFF",
    borderWidth: 1,
  },
  buttonNext: {
    flex: 1,
    backgroundColor: "#007AFF", // Green for Next
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",  // Aligns text to the left
    alignSelf: "flex-start", // Ensures the text takes up space only as much as it needs
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  uploadOptionText: {
    color: "black",
    textAlign: "left",
    fontWeight: "normal",
    width: "90%",
    fontSize: 18,
    marginLeft: 10,
  },
  cancelButtonText: {
    color: "#007AFF", // Set the text color to #007AFF
    textAlign: "center",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  optionButton: {
    marginVertical: 1,
    flex: 1,
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  option: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  separator: {
    height: 1,
    backgroundColor: "#e5e4e2",
    width: "100%",
  },
  uploadContainerItems : {
   padding: 10,
   margin: 10,
  },
  uploadContainer:{
    flex: 1,
  }
});

export default SecondForm;
