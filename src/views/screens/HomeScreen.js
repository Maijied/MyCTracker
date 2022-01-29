// import React from "react";
// import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, Dimensions, Pressable, FlatList } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import COLORS from '../../consts/colors';
// import cameras from '../../consts/cameras';
// const {width} = Dimensions.get("screen");

// const HomeScreen = () => {
//     const ListCategories = () => {
//         const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0,);
//         const categoryList = ['Recomended', 'Live', 'Favourite'];
//         return <View style={style.categoryListContainer}>
//             {categoryList.map((category, index)=>(
//                 <Pressable key={index} onPress={()=>setSelectedCategoryIndex(index)}>
//                      <Text style={[style.categoryListText, (index == selectedCategoryIndex && style.activeCategoryListText)]}>
//                         {category}
//                     </Text>
//                 </Pressable>
//             ))}
//         </View>
//     }
//     const ListOptions = () => {
//         const optionList = [
//             {title: 'Live Camera 1', img: require('../../assets/corridor.jpg')},
//             {title: 'Live Camera 2', img: require('../../assets/roomView.jpg')},
//         ];
//         return (
//             <View style={style.optionListContainer}>
//                 {optionList.map((option, index) => (
//                     <View style={style.optionCard} key={index}>
//                         <Image source={option.img} style={style.optionCardImage}/>
//                         <Text style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>{option.title}</Text>
//                     </View>
//                 ))}
//             </View>
//         );
//     };
//     const Card = (camera) => {
//         return <View style={style.card}>
            
//         </View>
//     };
//     return ( 
//     <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
//             <StatusBar translucent={false} 
//             backgroundColor={COLORS.white} 
//             barStyle="dark-content"
//             />
//             <View style={style.header}>
//                 <View>
//                     <Text style={{color:COLORS.grey}}>Location</Text>
//                     <Text style={{color:COLORS.dark, fontSize:20, fontWeight:'bold'}}>20/A, Niketon</Text>
//                 </View>
//                 <Image source={require('../../assets/person.jpg')} style={style.profileImage}/>
//             </View>
//             <ScrollView>
//                 <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:20}}> 
//                     <View style={style.serchInputContainer}>
//                         {/* <Icon name="search" size={25} color={COLORS.grey}/> */}
//                         <TextInput placeholder="Search Camera or recorded videos"/>
//                     </View>
//                     <View style={style.sortBtn}>
//                         <Text style={{color:COLORS.light, fontSize:12}}>Search</Text>
//                     </View>
//                 </View>
//                 <ListOptions/>
//                 <ListCategories/>
//                 {/* <FlatList
//                     horizontal
//                     data = {cameras} 
//                     renderItem = {({item}) => <Card camera={item} />}
//                  /> */}
//                  <FlatList
//                     snapToInterval={width - 20}
//                     showsHorizontalScrollIndicator={false}
//                     // contentContainerStyle={{paddingLeft: 10, paddingVertical: 10}}
//                     horizontal
//                     data={cameras} renderItem={({item}) => <Card camera={item} />}
//                 />
//             </ScrollView>
//     </SafeAreaView>
//     );
// };

// const style  = StyleSheet.create({
//     header:{
//         paddingVertical:20,
//         flexDirection:'row',
//         justifyContent:'space-between',
//         paddingHorizontal:20,
//     },
//     profileImage:{
//         height:50,
//         width:50,
//         borderRadius:25,
//     },
//     serchInputContainer:{
//         height: 50,
//         backgroundColor:COLORS.light,
//         flex:1,
//         flexDirection:'row',
//         alignItems:'center',
//         paddingHorizontal:20,
//         borderRadius:10,
//     },
//     sortBtn:{
//         backgroundColor:COLORS.dark,
//         height:50,
//         width:50,
//         borderRadius:10,
//         justifyContent:'center',
//         alignItems:'center',
//         marginLeft:10,
//     },
//     optionListContainer:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//         marginTop:20,
//         paddingHorizontal:20,
//     },
//     optionCard:{
//         height: 210,
//         width: width /  2 - 30,
//         elevation:15,
//         backgroundColor:COLORS.white,
//         alignItems:'center',
//         borderRadius:20,
//         paddingLeft:10,
//         paddingHorizontal:10,
//     },
//     optionCardImage:{
//         height:140,
//         borderRadius:10,
//         width: '100%',
//         marginTop:10,
//     },
//     categoryListContainer:{
//         marginTop:40,
//         flexDirection:'row',
//         justifyContent:'space-between',
//         paddingHorizontal:40,
//     },
//     categoryListText:{
//         fontSize:16,
//         fontWeight:'bold',
//         paddingBottom:5,
//         color:COLORS.grey,

//     },
//     activeCategoryListText:{
//         color:COLORS.dark,
//         borderBottomWidth:1,
//         paddingBottom:5,

//     },
//     card:{
//         height:250,
//         backgroundColor:COLORS.white,
//         elevation:10,
//         width:width-50,
//         marginRight:20,
//         padding:15,
//         borderRadius:20,
//     },
// });
// export default HomeScreen;


import React from 'react';
import {SafeAreaView, View, StatusBar, Text, TextInput, FlatList, Dimensions, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import cameras from '../../consts/cameras';
const HomeScreen = ({navigation}) => {
  const optionsList = [
    {title: 'Live Camera 1', img: require('../../assets/corridor.jpg')},
    {title: 'Live Camera 2', img: require('../../assets/roomView.jpg')},
  ];
  const categoryList = ['Recomended', 'Live', 'Recorded'];
  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    return (
      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <View style={style.optionsCard} key={index}>
            <Image source={option.img} style={style.optionsCardImage} />
            <Pressable onPress={()=> navigation.navigate("LiveVideos")}>
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                {option.title}
                </Text>
           </Pressable>
          </View>
        ))}
      </View>
    );
  };
  const Card = ({camera}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', camera)}>
        <View style={style.card}>
          {/* House image */}
          <Image source={camera.image} style={style.cardImage} />
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {camera.title}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                $1,500
              </Text>
            </View>

            {/* Location text */}

            <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
              {camera.location}
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={style.header}>
        <View>
          <Text style={{color: COLORS.grey}}>Location</Text>
          <Text style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>
            Canada
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={require('../../assets/person.jpg')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" color={COLORS.grey} size={25} />
            <TextInput placeholder="Search address, city, location" />
          </View>
          <Pressable onPress={()=> navigation.navigate("RecordedVideos")}>
            <View style={style.sortBtn}>
              <Icon name="tune" color={COLORS.white} size={25} />
            </View>
          </Pressable>
        </View>

        {/* Render list options */}
        <ListOptions />

        {/* Render categories */}
        <ListCategories />

        {/* Render Card */}
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={cameras}
          renderItem={({item}) => <Card camera={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
});
export default HomeScreen;