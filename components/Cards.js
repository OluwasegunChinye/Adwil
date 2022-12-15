import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Cards = ({ onPress, title, number }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View className="flex flex-row w-full h-16 px-6 items-center  bg-[#6874E8]">
                <Text className="text-white text-xs font-[poppins-bold]">
                    {number}.
                </Text>
                <Text className=" text-xs ml-6 font-[poppins] text-white">
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Cards;
