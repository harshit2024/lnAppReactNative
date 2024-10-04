// app/index.tsx
import React from "react";
import { useRouter } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import Profile from "../assets/SVG/profile";
import Chat from "../assets/SVG/chat";
import Logo from "../assets/SVG/logo";
import Earnings from "../assets/SVG/earnings";
import Lead from "../assets/SVG/lead";
import Sbi from "../assets/SVG/sbi";
import Boi from "@/assets/SVG/boi";
import BankCodes from "@/assets/SVG/bankcodes";
import BankCodesarrow from "@/assets/SVG/arrow";
import Earningsnew from "@/assets/SVG/earningsnew";

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const handleLogIn = () => {
    router.push("/login");
  };
  const handleBankCode = () => {
    router.push("/bankcodes");
  };

  const handleWhatsAppChat = () => {
    // Define the WhatsApp URL
    let phoneNumber = "919588979508"; // include the country code, without '+' sign
    let url = `whatsapp://send?phone=${phoneNumber}&text=Hello`;

    // Open the URL
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("WhatsApp is not installed");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.headerContainer}>
        {/* Loan Network Logo */}
        <Logo></Logo>
        {/* Icons on the right */}
        <TouchableOpacity>
          <Chat onPress={handleWhatsAppChat}></Chat>
        </TouchableOpacity>
        <Pressable>
          <Profile
            title="Login"
            onPress={handleLogIn}
            marginRight={15}
          ></Profile>
        </Pressable>
      </View>

      <View style={styles.container}>
        {/* Total Earnings Section */}
        <View style={styles.earningsContainer}>
          {/* <Earnings> */}
          <Earningsnew></Earningsnew>
          {/* </Earnings> */}
        </View>

        <Pressable style={styles.bankcodescontainer}>
          <View style={styles.bankcodescontent}>
            {/* Bank Icon */}
            <BankCodes title="Bank Codes" onPress={handleBankCode}></BankCodes>
          </View>
          {/* Right Arrow */}
          <BankCodesarrow
            title="BankCodes"
            onPress={handleBankCode}
          ></BankCodesarrow>
        </Pressable>

        {/* Create Lead Section */}
        <View style={styles.backgroundImage}>
          {/* Background Image with Button */}
          <Lead></Lead>
          {/* Button */}
          <TouchableOpacity style={styles.createLeadButton}>
            <Text style={styles.buttonText}>CREATE LEAD</Text>
          </TouchableOpacity>
        </View>

        {/* Bank Codes Section */}
        <View style={styles.bankCardContainer}>
          <View style={styles.bankCard}>
            {/* SBI Bank Codes Section */}
            <Sbi></Sbi>
          </View>
          <View style={styles.bankCard}>
            {/* BOI Bank Codes Section */}
            <Boi></Boi>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  headerContainer: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff", // Set your desired background color
  },
  container: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    paddingHorizontal: 20,
  },
  earningsContainer: {
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    fontSize: 20,
    marginTop: -35,
  },
  bankcodescontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "#21427",
    elevation: 3, // For Android shadow
    marginVertical: -35,
  },
  bankcodescontent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: 400,
    flex: 1,
    justifyContent: "flex-end", // Position the button at the bottom
    alignItems: "center", // Center the button horizontally
    resizeMode: "cover", // Make sure the image covers the entire background
  },
  createLeadButton: {
    backgroundColor: "#007AFF",
    marginHorizontal: 30,
    alignItems: "center",
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    color: "#fff",
    marginTop: -105,
    marginBottom: 20, // Adjust this to move the button higher or lower
  },
  buttonText: {
    color: "fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bankCardContainer: {
    width: "100%",
    height: "100%",
  },
  bankCard: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
