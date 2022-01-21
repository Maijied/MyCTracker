import React from "react";
import { SafeAreaView, StyleSheet, Image, StatusBar, View, Text, Pressable, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import cameras from '../../consts/cameras';

const Signin = ({navigation}) => {
    return <SafeAreaView
    style={{flex:1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor={COLORS.transparent}/>
      <Image source = {require('../../assets/CTrackerImage2.jpg')} style={style.image} />
      <View style={style.indicatorContainer}>
        <View style={style.indicator}/>
        <View style={[style.indicator, style.indicatorActive]}/>
        <View style={style.indicator}/>
      </View>
      <View style={{paddingHorizontal:20, paddingTop:20}}>
        <View>
          {/* <Text style={style.title}>Secure Your</Text> */}
          <Text style={style.title}>Sweet Homee</Text>
        </View>
        {/* <View style={style.subTitle}><Text>Neque porro quisquam est qui dolorem </Text></View> */}
        <View style={style.subTitle}><Text>Please Enter Your Credential</Text></View>
      </View>
      <ScrollView style={{paddingHorizontal:20, paddingTop:20}}>
          <View style={style.phoneNumberInput}>
            {/* <Icon name="contacts"/> */}
            <TextInput keyboardType='numeric' placeholder="Enter your phone number or ID"></TextInput>
          </View>
          <View style={style.passwordInput}>
            <TextInput placeholder="Enter your password"></TextInput>
          </View>
      </ScrollView>
      <View style={{flex:1,justifyContent:'flex-end',paddingBottom:40}}>
        <TextInput></TextInput>
        <Pressable onPress={()=> navigation.navigate("HomeScreen")}>
        <View style={style.btn}>
          <Text style={{color:COLORS.white}}>Login</Text>
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
    },
    phoneNumberInput:{
      height:40,
      backgroundColor:COLORS.light,
      flex:1,
      borderRadius:10,
    },
    passwordInput:{
      height:40,
      backgroundColor:COLORS.light,
      flex:1,
      borderRadius:10,
      marginTop:15,
    },
  });
export default Signin;