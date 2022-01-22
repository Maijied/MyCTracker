import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import cameras from '../../consts/cameras';
const {width} = Dimensions.get("screen");

const HomeScreen = () => {
    const ListCategories = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndexset] = React.useState(0,);
        const categoryList = ['Recomended', 'Live', 'Saved'];
        return <View style={style.categoryListContainer}>
            {categoryList.map((category, index)=>(
            <Text style={[style.categoryListText, (index = selectedCategoryIndex && style.activeCategoryListText)]}>
                {category}
            </Text>
            ))}
        </View>
    }
    const ListOptions = () => {
        const optionList = [
            {title: 'Live Camera 1', img: require('../../assets/CTrackerImage4.jpg')},
            {title: 'Live Camera 2', img: require('../../assets/CTrackerImage5.jpg')},
        ];
        return (
            <View style={style.optionListContainer}>
                {optionList.map((option, index) => (
                    <View style={style.optionCard} key={index}>
                        <Image source={option.img} style={style.optionCardImage}/>
                        <Text style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>{option.title}</Text>
                    </View>
                ))}
            </View>
        );
    };
    return ( 
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
            <StatusBar translucent={false} 
            backgroundColor={COLORS.white} 
            barStyle="dark-content"
            />
            <View style={style.header}>
                <View>
                    <Text style={{color:COLORS.grey}}>Location</Text>
                    <Text style={{color:COLORS.dark, fontSize:20, fontWeight:'bold'}}>20/A, Niketon</Text>
                </View>
                <Image source={require('../../assets/person.jpg')} style={style.profileImage}/>
            </View>
            <ScrollView>
                <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:20}}> 
                    <View style={style.serchInputContainer}>
                        {/* <Icon name="search" size={25} color={COLORS.grey}/> */}
                        <TextInput placeholder="Search Camera or recorded videos"/>
                    </View>
                    <View style={style.sortBtn}>
                        <Text style={{color:COLORS.light, fontSize:12}}>Search</Text>
                    </View>
                </View>
                <ListOptions/>
                <ListCategories/>
            </ScrollView>
    </SafeAreaView>
    );
};

const style  = StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    profileImage:{
        height:50,
        width:50,
        borderRadius:25,
    },
    serchInputContainer:{
        height: 50,
        backgroundColor:COLORS.light,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        borderRadius:10,
    },
    sortBtn:{
        backgroundColor:COLORS.dark,
        height:50,
        width:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
    },
    optionListContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        paddingHorizontal:20,
    },
    optionCard:{
        height: 210,
        width: width /  2 - 30,
        elevation:15,
        backgroundColor:COLORS.white,
        alignItems:'center',
        borderRadius:20,
        paddingLeft:10,
        paddingHorizontal:10,
    },
    optionCardImage:{
        height:140,
        borderRadius:10,
        width: '100%',
        marginTop:10,
    },
    categoryListContainer:{
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:40,
    },
    categoryListText:{
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:5,
        color:COLORS.grey,

    },
    activeCategoryListText:{
        color:COLORS.dark,
        borderBottomWidth:1,
        paddingBottom:5,

    },
});
export default HomeScreen;