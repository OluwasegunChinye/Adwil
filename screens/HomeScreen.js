import { View, SafeAreaView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

const HomeScreen = () => {
    const [text, setText] = useState();
    return (
        <SafeAreaView>
            <View className="flex-1 h-full">
                <View className="flex-1 h-1/6 items-center justify-center bg-[#040F0F]">
                    <TextInput
                        className="h-12 w-11/12 border text-sm rounded-md px-4 bg-[#474954] text-white font-[poppins] "
                        keyboardType="default"
                        placeholder=" type here to search for songs"
                        placeholderTextColor={'grey'}
                        onChangeText={setText}
                        value={text}
                        // autoCorrect="false"
                    />
                </View>
                <View className=" bg-red-300 h-5/6">
                    <FlatList />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
