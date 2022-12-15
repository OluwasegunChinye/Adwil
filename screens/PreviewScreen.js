import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { SONGS } from '../data/Songs';
import { FavouritesContext } from '../store/context/favourite-context';

const PreviewScreen = ({ route, navigation }) => {
    const favouriteSongCtx = useContext(FavouritesContext);

    const songId = route.params.songId;

    const previewSong = SONGS.filter((songItem) => songItem.id === songId);

    const songIsFavourite = favouriteSongCtx.ids.includes(songId);

    function favouriteSongHandler() {
        if (songIsFavourite) {
            favouriteSongCtx.removeFavourite(songId);
        } else {
            favouriteSongCtx.addFavourite(songId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={favouriteSongHandler}>
                        <Ionicons
                            name="heart-sharp"
                            color={songIsFavourite ? '#DB5461' : 'white'}
                            size={20}
                        />
                    </TouchableOpacity>
                );
            },
        });
    }, [navigation, favouriteSongHandler]);

    return (
        <SafeAreaView>
            <FlatList
                data={previewSong}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="flex-1 items-center mt-5">
                        <View className="">
                            <Text className="font-[poppins-bold] my-5 ">
                                {item.title}
                            </Text>
                        </View>
                        <View>
                            <Text className="font-[poppins] text-center">
                                {item.verses[0]}
                            </Text>
                            <Text className="italic font-[poppins] text-center">
                                {item.chorus}
                            </Text>
                            <Text className="font-[poppins] text-center">
                                {item.verses[1]}
                            </Text>
                            <Text className="font-[poppins] text-center mt-4">
                                {item.verses[2]}
                            </Text>
                            <Text className="font-[poppins] text-center mt-4">
                                {item.verses[3]}
                            </Text>
                            <Text className="font-[poppins] text-center mt-4">
                                {item.verses[4]}
                            </Text>
                            <Text className="font-[poppins] text-center mt-4">
                                {item.verses[5]}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default PreviewScreen;
