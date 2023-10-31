import React, { useEffect, useState } from "react"; //now
import { Pressable, Button, ButtonText } from "@gluestack-ui/themed";
import {
  Alert, // now
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import styles from "../components/styles";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage //now
import axios from "axios"; //now
import { API_URL } from "../utils/constants"; //now

const Dashboard = ({ navigation }) => {
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaView style={styles.containerWhite}>
        {/* <Head navigation={navigation} topic={"DASHBOARD"}/> */}
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PendingFines")}
            style={styles.button2}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                  marginTop: "13%",
                }}
              >
                PENDING FINES
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AccidentReporting")}
            style={styles.button2}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                marginTop: "13%",
              }}
            >
              ACCIDENT
            </Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              REPORTING
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Suggestions")}
            style={styles.button2}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                marginTop: "13%",
              }}
            >
              SUGGESTIONS/
            </Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              COMPLAINTS
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <Footer navigation={navigation} />
      </SafeAreaView>
    </GluestackUIProvider>
  );
};

export default Dashboard;
