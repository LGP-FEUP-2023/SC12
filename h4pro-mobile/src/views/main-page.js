import styles, { ICON_SIZE } from "../styles/main-page.style";
import { IMAGES } from "../constants/images";
import { MyStatusBar } from "../components/status-bar";
import { MyScoreBoard } from "../components/scoreboard";
import React, { Component, useContext, useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { CourtButton } from "../components/court-button";
import { Snackbar } from "react-native-paper";
import { COLOR } from "../constants/colors";
import AuthContext from "../../AuthContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import "../constants/localizer";

import { Pressable } from "react-native";
import { set } from "react-native-reanimated";

const MainPage = ({ route, navigation, data }) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackMode, setSnackMode] = useState(0);
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    const { snackbar, snackmode } = data ?? {};
    if (snackbar) {
      setSnackbarVisible(true);
      setSnackMode(snackmode);
    }
  }, [data]);

  const dismissSnackbar = () => {
    setSnackbarVisible(false);
  };

  const leave_match = () => {
    setToken("");
    // fetch('https://{endpoint}/leave_match/' + matchId, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorizantion': accessToken,
    //   },
    //   body: JSON.stringify({
    //     timestamp: gettime(),
    //   }),
    // }
    // .catch(error => {
    //   console.error(error);
    // });
    
  };

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
        {/* <Image style={styles.logo} source={IMAGES.logo} />

        <Pressable onPress={() => navigation.openDrawer()}>
          <Image style={styles.settingsIcon} source={IMAGES.settings} />
        </Pressable> */}

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
        onPress={() => leave_match()}
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
