import React from 'react';
import {SafeAreaView, View, StatusBar, Text, TextInput, FlatList, Dimensions, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import cameras from '../../consts/cameras';

const RecordedVideos = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
             <View>
                <Text>Recorded Videos</Text>
            </View>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({

});

export default RecordedVideos;