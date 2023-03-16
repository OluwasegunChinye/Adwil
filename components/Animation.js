import { View, Text } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Animation = ({ message }) => {
    return (
        <View className="flex-1 justify-center items-center ">
            <Text className=" text-sm font-[poppins] p-5">
                {message}
            </Text>
            <Lottie
                source={require('../assets/anime02.json')}
                style={{ width: 150, height: 150 }}
                duration={5000}
                autoPlay
                loop
            />
        </View>
    );
};

export default Animation;
