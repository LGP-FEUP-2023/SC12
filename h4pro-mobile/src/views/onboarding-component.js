import React, { Component, useRef } from "react";
import { SafeAreaView, Image, Text, Dimensions, FlatList, View, TouchableOpacity } from "react-native";
import styles from '../styles/onboarding-component.style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;

const slides = [
    {
        id: '1',
        image: require('../../assets/bluetooth.png'),
        title: 'Connect your smartwatch',
        subtitle: 'Easily connect to your smartwatch using bluetooth.',
    },
    {
        id: '2',
        image: require('../../assets/join.png'),
        title: 'Connecting to a court',
        subtitle: 'Using the H4PRO app on your phone, scan the QR code of the court. Your smartwatch will connect to it automatically',
    },
    {
        id: '3',
        image: require('../../assets/sw_btn_screen.png'),
        title: 'Requesting highlights',
        subtitle: 'Press the top button to record a highlight, the right to ask for video referee and the left to play the highlights.',
    },
    {
        id: '4',
        image: require('../../assets/sw_score_screen.png'),
        title: 'Score system',
        subtitle: 'The scores for each team appear under their names. To change the scores, select the number and slide up and down anywhere.',
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
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>
        </View>
    );
};

const OnBoardingComponent = (closeFunction) => {
    const {closeFunc} = closeFunction;

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
                                onPress={closeFunc}>

                                <Text style={styles.getStartedButtonText}>GET STARTED</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.skipButton} onPress={skipSlides}>
                                <Text style={styles.skipButtonText}>SKIP</Text>
                            </TouchableOpacity>
                            <View style={{width:15}}></View>
                            <TouchableOpacity style={styles.nextButton} onPress={goNextSlide}>
                                <Text style={styles.nextButtonText}>NEXT</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>

            </View>
        )
    }

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
