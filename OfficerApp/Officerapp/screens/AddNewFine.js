import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import InputTextCurve from "../components/InputTextCurve";
import Dropdown from "../components/Dropdown";
import DatepickerIOS from "../components/DatepickerIOS";
import TimepickerIOS from "../components/TimepickerIOS";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import DatepickerAn from "../components/DatepickerAn";
import TimepickerAn from "../components/TimepickerAn";
import ImagePick from "../components/Imagepick";
import TextArea from "../components/TextArea";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AddNewFine = ({ navigation }) => {
  // State variables to capture user input
  const [vehicleNo, setVehicleNo] = useState("");
  const [nicNo, setNicNo] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date
  const [selectedTime, setSelectedTime] = useState(""); // State to store the selected time

  // Array to store collected data in a tabular format
  const tableData = [
    { column1: "Vehicle No", column2: vehicleNo },
    { column1: "NIC No", column2: nicNo },
    { column1: "Place", column2: place },
    { column1: "Type", column2: type },
    { column1: "Date", column2: selectedDate },
    { column1: "Time", column2: selectedTime },
  ];

  const handleConfirm = () => {
    //navigate to OTPscreen and pass the input values as route params
    navigation.navigate("OTPscreen", {
      tableData, // Pass the tableData to OTPscreen
    });
  };

  // Function to handle the selection of a violation type from the dropdown
  const handleTypeSelection = (selectedItem, index) => {
    setType(selectedItem); // Update the 'type' state with the selected value
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          Headername="ADD NEW FINE"
          back="DashBoard"
        />

        <Button
          title="Request OTP"
          filled
          color="red"
          backgroundColor="#155E75"
          boarderColor="#155E75"
          onPress={() => handleConfirm()}
          fontSize={12}
          style={{ marginTop: 30, width: 100, fontSize: 30 }}
        />

        {/* ScrollView for handling keyboard interactions */}
        <KeyboardAwareScrollView
          style={styles.keyboardAwareContainer}
          contentContainerStyle={styles.scrollContainer} // Apply styles to the inner content
          enableOnAndroid={true} // Enable on Android
          extraScrollHeight={50} // Add extra scroll height when keyboard appears (customize as needed)
          keyboardShouldPersistTaps="handled" // Allow tapping to dismiss the keyboard
        >
          <View style={styles.container2}>
            <InputTextCurve
              style={styles.input}
              placeholder="Vehicle Number"
              onChangeText={(text) => setVehicleNo(text)}
            />

            <InputTextCurve
              style={styles.input}
              placeholder="Driver's NIC Number"
              onChangeText={(text) => setNicNo(text)}
            />

            <InputTextCurve
              style={styles.input}
              placeholder="Place of Offence"
              onChangeText={(text) => setPlace(text)}
            />

            {/* Dropdown for selecting violation type */}
            <Dropdown onSelect={handleTypeSelection} />

            <></>

            {/* Conditional rendering based on platform */}
            {Platform.OS === "ios" ? (
              <>
                <DatepickerIOS
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
                <TimepickerIOS
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              </>
            ) : (
              <>
                <DatepickerAn />
                <TimepickerAn />
              </>
            )}

            <TextArea />

            <ImagePick />

          </View>

        </KeyboardAwareScrollView>

        <Footer />

      </View>

    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
  },

  container2: {
    width: "75%",
    borderRadius: 20,
    backgroundColor: COLORS.GRAY,
    alignItems: "center",
    marginTop: 40,
    paddingBottom: 10,
  },
  scrollContainer: {
    flex: 1, // Make the ScrollView take up all available space
    width: "100%",
    alignItems: "center", // Center horizontally
  },

  keyboardAvoidingContainer: {
    flex: 1, // Ensure KeyboardAvoidingView takes up all available space
    width: "100%",
  },
  keyboardAwareContainer: {
    flex: 1, // Ensure KeyboardAwareScrollView takes up all available space
    width: "100%",
  },

  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default AddNewFine;