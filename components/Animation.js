import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import Lottie from 'lottie-react-native';

const Animation = ({ message }) => {
    return (
        <View className="flex-1 items-center">
            <Lottie source={require('../assets/anime01.json')} autoPlay loop />
            <Text>{message}</Text>
        </View>
    );
};

export default Animation;
