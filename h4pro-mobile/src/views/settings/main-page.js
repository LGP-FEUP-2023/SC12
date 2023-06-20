import styles, { ICON_SIZE } from "../styles/main-page.style";
import { IMAGES } from "../constants/images";
import { MyStatusBar } from "../components/status-bar";
import { MyScoreBoard } from "../components/scoreboard";
import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { CourtButton } from "../components/court-button";
import { Snackbar } from "react-native-paper";
import { COLOR } from "../constants/colors";
import AuthContext from "../../AuthContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import "../constants/localizer";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MainPage = ({ route, navigation }) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackMode, setSnackMode] = useState(0);
  const { token, setToken } = useContext(AuthContext);

  React.useEffect(() => { 
    async function getData() {
      const appData = await AsyncStorage.getItem("isAppFirstLaunch");
      if(appData == null){
        AsyncStorage.setItem('isAppFirstLaunch', 'false');
        navigation.navigate('HelpPage');
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const { snackbar, snackmode } = route.params ?? {};
    if (snackbar) {
      setSnackbarVisible(true);
      setSnackMode(snackmode);
    }
  }, [route.params]);

  const dismissSnackbar = () => {
    setSnackbarVisible(false);
  };
  
  const helpPagePressed = () => {
    navigation.navigate('HelpPage');
  }

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
      </View>

      <MyScoreBoard />
      <CourtButton
        text={"join court"}
        icon={IMAGES.join}
        onPress={() => navigation.navigate("SessionScanner")}
      />
      <CourtButton
        text={"leave court"}
        icon={IMAGES.leave}
        onPress={() => setToken("")}
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={dismissSnackbar}
        duration={3000}
        action={{
          label: "Dismiss",
          textColor: "white",
          onPress: dismissSnackbar,
        }}
      >
        <View style={styles.snackbar}>
          {snackMode == 0 ? (
            <>
              <Icon
                name={"check-circle-outline"}
                color={COLOR.blue}
                size={ICON_SIZE}
              />
              <Text style={styles.snackbartext}>
                Successfully <Text style={{ color: COLOR.blue }}>joined</Text>{" "}
                court.
              </Text>
            </>
          ) : (
            <>
              <Icon
                name={"close-circle-outline"}
                color={COLOR.red}
                size={ICON_SIZE}
              />
              <Text style={styles.snackbartext}>
                <Text style={{ color: COLOR.red }}>Failed</Text> to join court.
              </Text>
            </>
          )}
        </View>
      </Snackbar>
    </View>
  );
};

export default MainPage;
