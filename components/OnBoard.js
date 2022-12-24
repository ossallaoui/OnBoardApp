import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors.js';
import {LinearGradient} from 'expo-linear-gradient';

import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('../assets/images/Group1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'stay on top of your education',
    text: 'Reduce your stress, inrease your productivity',
    image: require('../assets/images/Group2.png'),
    bg: '#febe29',
  },
  {
    title: 'Spend more time doing the things you love',
    text: "Get started within five minutes",
    image: require('../assets/images/Group3.png'),
    bg: '#22bcb5',
  },
];

const OnBoard = (props) => {
  const [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
  })
  if (!fontsLoaded) return null;

  const renderItem = ({item}) => {
    return (
      <View style={styles.View1}>
        <Image source={item.image} style={styles.image1}/>
        <View>
          <Text style={styles.title1}>{item.title}</Text>
          <Text style={styles.text1}>{item.text}</Text>
        </View>
      </View>
    )
  }

  const keyExtractor= (item) => item.title;

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#A5C8FF', '#23286B']} style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>
          Done
        </Text>
      </LinearGradient>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        onDone={handleDone}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  
  View1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1:{
    marginVertical: 60,
  },
  title1: {
    fontFamily: 'Bold',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 40,
  },
  text1: {
    fontFamily: 'Regular',
    fontSize: 14,
    marginTop: 21,
    textAlign: 'center',
    color: colors.gray,
    marginHorizontal: 40,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    color: colors.blue,
    fontFamily: 'SemiBold',
    fontSize: 14,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: colors.blue,
    fontFamily: 'SemiBold',
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.fadedBlue,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    borderRadius: 25,
    marginRight: -40
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'Regular',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  
});

export default OnBoard;