import styles from '../styles/main-page.style';
import { IMAGES } from '../constants/images';
import { MyStatusBar } from '../components/status-bar';
import { MyScoreBoard } from '../components/scoreboard';
import React from 'react';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import { CourtButton } from '../components/court-button';
import OnBoardingComponent from './onboarding-component';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPage = () =>  {
   const [showOnboarding, setShowOnboarding] = React.useState(false);
   const [isAppFirstLaunch, setIsAppFirstLaunch] = React.useState(null);

   React.useEffect(() => { 
     async function getData() {
       const appData = await AsyncStorage.getItem("isAppFirstLaunch");
       setIsAppFirstLaunch(appData == null);
       if(!isAppFirstLaunch) return;
       AsyncStorage.setItem('isAppFirstLaunch', 'false');
       setShowOnboarding(true);
     }
     getData();
   }, []);

   const joinPressed = () => {
      console.log("join pressed")
   }

   const leavePressed = () => {
      console.log("leave pressed")
   }

   const helpPagePressed = () => {
      setShowOnboarding(true);
   }
   const hideOnBoarding = () => {
      setShowOnboarding(false);
   }

   return (
      <View style={styles.container}>
         <MyStatusBar/>
         <Image style={styles.logo}
                  source={IMAGES.logo}
         />
         <View>
            <TouchableOpacity onPress={helpPagePressed}>
               <Image style={styles.help}
                     source={IMAGES.help}
               />
            </TouchableOpacity>
         </View>
         <MyScoreBoard/>
         <CourtButton text={"join court"} icon={IMAGES.join} press={joinPressed}/>
         <CourtButton text={"leave court"} icon={IMAGES.leave} press={leavePressed}/>
         {
            showOnboarding ? 
            <Modal>
               <OnBoardingComponent closeFunc={hideOnBoarding}></OnBoardingComponent> 
            </Modal>
            : null
         }
      </View>
   )
   
}

export default MainPage