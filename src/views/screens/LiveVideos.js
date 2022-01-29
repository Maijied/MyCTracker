import React from 'react';
import {SafeAreaView, View, StatusBar, Text, TextInput, FlatList, Dimensions, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import cameras from '../../consts/cameras';
import { Card } from 'react-native-elements';
import VideoPlayer from 'react-native-video-player';

const LiveVideos = ({navigation}) => {
    data = [
        {
            id:1,
            VideoLink: 'https://drive.google.com/file/d/1BB2t4dL2cHQdeGFflnIvuLBU3sTSbQbs/view?usp=sharing',
            title: 'The box is full of miserable creatures -- but one of them doesnt belong there. - The Box',
            time: 10,
        },
        {
            id:2,
            VideoLink: 'https://drive.google.com/file/d/1hJfBNpY5qM6bxJB_9URBofbth0Rj_O3k/view?usp=sharing',
            title: 'La Detente (animation) WINNER Transatlantyk Film Music Competition 2017',
            time: 15,
        },
        {
            id:3,
            VideoLink: 'https://drive.google.com/file/d/1cmreIuYfs6gNbgzVWjm_h1kML3n7FICq/view?usp=sharing',
            title: 'An Object At Rest - Lucian Zbarcea - Special Mention - 5th International Film Music Competition',
            time: 17,
        },
        {
            id:4,
            VideoLink: 'https://drive.google.com/file/d/1GsQ_X9IyaH_WY754tISypWnXyBBp2D7K/view?usp=sharing',
            title: 'The Egyptian Pyramids - Funny Animated Short Film (Full HD)',
            time: 11,
        },
        {
            id:5,
            VideoLink: 'https://drive.google.com/file/d/1XeGY9UiczkN_rJ4AXTvmKCr2o0mAve9I/view?usp=sharing',
            title: 'A loyal dog helps his master turn sheeps wool into clouds. - After the Rain',
            time: 5,
        },
    ];
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
           <FlatList data={data}
                     keyExtractor={(item, index) => `${index}`} 
                     renderItem={({item, index}) => {
                        return(
                            <ScrollView style={{marginTop:10}}>
                                <Card>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Divider />
                                <Text style={style.time}>{item.time}</Text>
                                </Card>
                            </ScrollView>
                        );
                    }}
           />
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
 time:{

 },
});

export default LiveVideos;