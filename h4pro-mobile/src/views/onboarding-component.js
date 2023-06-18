import React, { Component, useRef } from "react";
import { SafeAreaView, Image, Text, Dimensions, FlatList, View, TouchableOpacity } from "react-native";
import styles from '../styles/onboarding-component.style';
import { ScrollView } from "react-native-gesture-handler";
import { SLIDE_1_TITLE } from "../constants/text";
import { useTranslation } from "react-i18next";

const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;


const OnBoardingComponent = ({navigation}) => {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = useRef(null);

    const Footer = () =>{
        return(
            <View style={styles.footerContainer}>

                <View style={styles.footerIndicatorContainer}>

                    {slides.map((_, index) => (
                        currentSlideIndex == index ?
                        <View key={index} style={styles.currentIndicator}></View>
                        : 
                        <View key={index} style={styles.indicator}></View>
                    ))}

                </View>

                <View style={{marginBottom: 20}}>
                    {
                        currentSlideIndex == slides.length - 1 ?

                        <View style={{height: 50}}>
                            <TouchableOpacity style={styles.getStartedButton} 
                                onPress={() => {
                                    setCurrentSlideIndex(0);
                                    ref?.current?.scrollToOffset(0);
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: "Root" }],
                                      });
                                    }
                                    }>

                                <Text style={styles.getStartedButtonText}>{t("GET_STARTED")}</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.skipButton} onPress={skipSlides}>
                                <Text style={styles.skipButtonText}>{t("SKIP")}</Text>
                            </TouchableOpacity>
                            <View style={{width:15}}></View>
                            <TouchableOpacity style={styles.nextButton} onPress={goNextSlide}>
                                <Text style={styles.nextButtonText}>{t("NEXT")}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>

            </View>
        )
    }
        
    const { t } = useTranslation();

    const slides = [
        {
            id: '1',
            image: require('../../assets/bluetooth.png'),
            title: t("SLIDE_1_TITLE"),
            subtitle: t("SLIDE_1_SUBTITLE"),
        },
        {
            id: '2',
            image: require('../../assets/onboarding_join.png'),
            title: t("SLIDE_2_TITLE"),
            subtitle: t("SLIDE_2_SUBTITLE"),
        },
        {
            id: '3',
            image: require('../../assets/sw_btn_screen.png'),
            title: t("SLIDE_3_TITLE"),
            subtitle: t("SLIDE_3_SUBTITLE"),
        },
        {
            id: '4',
            image: require('../../assets/sw_score_screen.png'),
            title: t("SLIDE_4_TITLE"),
            subtitle: t("SLIDE_4_SUBTITLE"),
        }
    ];

    const Slide = ({item}) => {
        return (
            <View style={styles.slideContainer}>
                <Image
                    source={item.image}
                    style={styles.slideImage}
                />
                <View style={styles.slideText && {width:width}}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <ScrollView style={{height: '25%'}}>
                        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    };

    const updateCurrrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;

        if(nextSlideIndex >= slides.length) return;

        const offset = nextSlideIndex * width;

        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(nextSlideIndex);
    }
    const skipSlides = () => {
        const lastSlideIndex = slides.length - 1;
        
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    }


    return (
    <SafeAreaView style={styles.onBoardingComp}>
        <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrrentSlideIndex}
            pagingEnabled={true}
            data={slides}
            contentContainerStyle={{height: height*0.75}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item}/>}
        />
        <Footer/>
    </SafeAreaView>
    )
}

export default OnBoardingComponent;
