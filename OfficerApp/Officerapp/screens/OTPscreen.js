import React , {useState}from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import InputTextCurve from "../components/InputTextCurve";
import Table from "../components/Table";
import Button from "../components/Button";
import ModalTester from "../components/ModalTester";
import { API_URL } from "../constants/url";
const OTPscreen = ({ route, navigation }) => {
  const  tableData  = route.params.tableData; // Get the tableData from the OTPscreen
  const  sendData  = route.params.sendData; // Get the sendData from the OTPscreen
  const [otp, setOtp] = useState(""); // State to store the OTP entered by the user
  const [Success, setSuccess] = useState(false);
  const [Fail1, setFail1] = useState(false);
  const [Fail2, setFail2] = useState(false);

  const handlesuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false); // Set the button press state to false after 10 milisecond
    }, 1000);
    setTimeout(() => {
      navigation.navigate("DashBoard");
    }, 2000);
    };
  
  const handlefail1 = () => {
    setFail1(true);
    setTimeout(() => {
      setFail1(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };
  const handlefail2 = () => {
    setFail2(true);
    setTimeout(() => {
      setFail2(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };


  const handleConfirm = async () => {
    // Define the data you want to send to the API
    const finedata = {
      time: sendData[5],
      date: sendData[4],
      location: sendData[2],
      description: sendData[6],
      due_date: new Date(sendData[4]), // Convert the date to a JavaScript Date object
      payment_status: "false",
      vehicle: sendData[0],
      driver: sendData[1],
      violation: "1",
    };
    
    // Calculate due_date two weeks (14 days) after the date
    finedata.due_date.setDate(finedata.due_date.getDate() + 14);
    
    // Convert the due_date back to a string in the desired format if needed
    // For example, "MM/DD/YYYY"
    const formattedDueDate = `${finedata.due_date.getFullYear()}-${finedata.due_date.getMonth() + 1}-${finedata.due_date.getDate()}`;
    
    finedata.due_date = formattedDueDate;
    console.log(finedata);
   
    // Make an HTTP POST request to the API
    try {
      console.log("Sending data to the API...");
      const response = await fetch(`${API_URL}api/fines/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(finedata),
      });

      if (response.status === 201) {
        // handlesuccess();
        // Successfully added the data
        navigation.navigate("DashBoard");
      } else {
        handlefail1();
        // console.error("Failed to add data to the API.");
      }
    } catch (error) {
      handlefail2();
      // console.error("Error occurred while sending data to the API:", error);
      // Handle the error or show an error message
    }
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          Headername="ADD NEW FINE"
          back="AddNewFine"
        />

        <View style={styles.container1}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            Enter OTP
          </Text>

          {/* OTP Input */}
          <InputTextCurve style={styles.input} />

          {/* Edit and Confirm Buttons */}
          <View style={{ flexDirection: "row" }}>
            <Button
              title="Edit"
              filled
              onPress={() => navigation.navigate("AddNewFine")}
              fontSize={12}
              style={{ marginTop: 30, width: 100 }}
            />
            <Button
              title="Confirm"
              filled
              onPress={handleConfirm} // Call the function when the button is pressed
              fontSize={12}
              style={{ marginTop: 30, width: 100, marginLeft: 100 }}
            />
          </View>
        </View>

        <View style={styles.container2}>
          <Table data={tableData} />
        </View>
                  {/* Success and Fail modals */}
            <ModalTester
            set={Success}
            messagetodisplay="Send Successfully"
            backgroundColor="green"
          />
          <ModalTester
            set={Fail1}
            messagetodisplay="Input Data is not Valid"
            backgroundColor="red"
          />
          <ModalTester
            set={Fail2}
            messagetodisplay="Network Error"
            backgroundColor="red"
          />

        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  container1: {
    width: "100%",
    height: 200,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 200,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
});

export default OTPscreen;
