import { View, SafeAreaView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

import { SONGS } from '../data/Songs';
import Cards from '../components/Cards';

const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState();

    return (
        <>
            <SafeAreaView>
                <View className="flex-1 h-1/6 items-center justify-center bg-[#6874E8]">
                    <TextInput
                        className="h-12 w-11/12 border text-sm rounded-md px-4 bg-white text-[#6874E8] font-[poppins] "
                        keyboardType="default"
                        placeholder=" type here to search for songs"
                        placeholderTextColor={'grey'}
                        onChangeText={setText}
                        value={text}
                        // autoCorrect="false"
                    />
                </View>
                <View className="flex h-5/6">
                    <FlatList
                        data={SONGS}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Cards
                                title={item.title}
                                number={item.id}
                                onPress={function handlePreview() {
                                    navigation.navigate('Preview', {
                                        songId: item.id,
                                    });
                                }}
                            />
                        )}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

export default HomeScreen;
