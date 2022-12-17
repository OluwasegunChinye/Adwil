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

    if (favouriteSongs.length === 0) {
        return (
            <View className="flex-1 items-center">
                <Text>nothing here tho</Text>
            </View>
            // <Animation />
        );
    }

    return (
        <SafeAreaView>
            <View className="flex-1 items-center h-10">
                <Text className="mt-2 font-[poppins]">
                    Your favourite songs
                </Text>
            </View>
            <View className=" flex-1">
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
