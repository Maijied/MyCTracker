import React from "react";
import { SafeAreaView, StyleSheet, Image, StatusBar, View, Text, Pressable } from "react-native";
import COLORS from '../../consts/colors';

const OnBoardScreen = ({navigation}) => {
    return <SafeAreaView
      style={{flex:1, backgroundColor: COLORS.white}}>
        <StatusBar translucent backgroundColor={COLORS.transparent}/>
        <Image source = {require('../../assets/CTrackerImage1.jpg')} style={style.image} />
        <View style={style.indicatorContainer}>
          <View style={style.indicator}/>
          <View style={style.indicator}/>
          <View style={[style.indicator, style.indicatorActive]}/>
        </View>
        <View style={{paddingHorizontal:20, paddingTop:20}}>
          <View>
            <Text style={style.title}>Secure Your</Text>
            <Text style={style.title}>Sweet Home</Text>
          </View>
          <View style={style.subTitle}><Text>Neque porro quisquam est qui dolorem </Text></View>
          <View style={style.subTitle}><Text>ipsum quia dolor sit amet</Text></View>
        </View>
        <View style={{flex:1,justifyContent:'flex-end',paddingBottom:40}}>
          <Pressable onPress={()=> navigation.navigate("HomeScreen")}>
          <View style={style.btn}>
            <Text style={{color:COLORS.white}}>Get Started</Text>
          </View>
          </Pressable>
        </View>
      </SafeAreaView>
};

const style  = StyleSheet.create({
  image:{
    height:420,
    width:'100%',
    borderBottomLeftRadius:100,
  },
  indicatorContainer:{
    height: 20,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  indicator:{
    height:3,
    width:30,
    backgroundColor: COLORS.grey,
    marginHorizontal:5,
    borderRadius:5,
  },
  indicatorActive:{
    backgroundColor:COLORS.dark,
  },
  title:{
    fontSize:32,
    fontWeight: 'bold',
    color:'black',
  },
  subTitle:{
    fontSize:16,
    color: COLORS.grey,
  },
  btn:{
    height:60,
    marginHorizontal:20,
    backgroundColor:COLORS.dark,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
  }
});
export default OnBoardScreen;

