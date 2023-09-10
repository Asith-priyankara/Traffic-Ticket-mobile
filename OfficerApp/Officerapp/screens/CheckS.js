import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Text, StyleSheet, View, Pressable } from "react-native";

const Timepicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const handlePress = () => {
    setShow(false); // Dismiss the time picker
    console.log(date.toLocaleTimeString());
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Time of Offence:</Text>
        <Pressable onPress={() => setShow(true)}>
          <Text style={styles.chooseText}>Choose</Text>
        </Pressable>
      </View>
      {show && (
        <SafeAreaView>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        </SafeAreaView>
      )}
      <Text>selected: {date.toLocaleTimeString()}</Text>
    </Pressable>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  label: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    marginRight: 54,
  },
  chooseText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Timepicker;
