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
import AsyncStorage from "@react-native-async-storage/async-storage";
import "../constants/localizer";
import { useTranslation } from 'react-i18next';
import { leave_court } from "../utils";


const MainPage = ({ navigation, data }) => {
  const { t } = useTranslation();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackMode, setSnackMode] = useState(0);
  const { token, setToken } = useContext(AuthContext);


  React.useEffect(() => {
    async function getData() {
      const appData = await AsyncStorage.getItem("isAppFirstLaunch");
      if (appData == null) {
        AsyncStorage.setItem('isAppFirstLaunch', 'false');
        navigation.navigate('Help');
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const { snackbar, snackmode } = data ?? {};
    if (snackbar) {
      setSnackbarVisible(true);
      setSnackMode(snackmode);
    } else {
      setSnackbarVisible(false);
    }
  }, [data]);

  const dismissSnackbar = () => {
    setSnackbarVisible(false);
  };

  const leave_match = () => {
    //leave_court({ token });
    setToken("");

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
          label: t("Dismiss"),
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
                <Text style={{ color: COLOR.blue }}>{t("Successfully joined the court - part1")}</Text> {t("Successfully joined the court - part2")}.
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
                <Text style={{ color: COLOR.red }}>{t("Failed to join court - part1")}</Text> {t("Failed to join court - part2")}.
              </Text>
            </>
          )}

        </View>
      </Snackbar>
    </View>
  );
};

export default MainPage;
