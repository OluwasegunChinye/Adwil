import { View, Text, FlatList, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';

import Cards from '../components/Cards';
import { FavouritesContext } from '../store/context/favourite-context';
import { SONGS } from '../data/Songs';
import Animation from '../components/Animation';

const FavouriteScreen = ({ navigation }) => {
    const favouriteSongCtx = useContext(FavouritesContext);

    const favouriteSongs = SONGS.filter((songs) =>
        favouriteSongCtx.ids.includes(songs.id)
    );

    console.log('no of songs :', favouriteSongs.length);

    if (favouriteSongs.length === 0) {
        return (
            <View className="flex-1 bg-[#030622]">
                <View className="mt-64">
                    <Animation message={'Oops! You have no favourite songs'} />
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView className=" bg-[#030622]">
            <View className="flex-1 items-center justify-center h-1/6">
                <Text className="mt-2 font-[poppins] text-lg text-white ">
                    Your favourite songs
                </Text>
            </View>
            <View className="flex-1 h-5/6 ">
                <FlatList
                    data={favouriteSongs}
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
    );
};

export default FavouriteScreen;
