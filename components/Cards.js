import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Cards = ({ onPress, title, number }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View className="flex-1 flex-row w-full h-16 px-6 items-center ">
                <Text className=" text-xs font-[poppins-bold]">
                    {number}.
                </Text>
                <Text className=" text-xs ml-6 font-[poppins] ">
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Cards;
