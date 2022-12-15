import { View, Text, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Cards from '../components/Cards';
import { FavouritesContext } from '../store/context/favourite-context';
import { SONGS } from '../data/Songs';

const FavouriteScreen = ({navigation}) => {
    const favouriteSongCtx = useContext(FavouritesContext);

    const favouriteSongs = SONGS.filter((songs) =>
        favouriteSongCtx.ids.includes(songs.id)
    );

    if (favouriteSongs.length === 0) {
        return (
            <View className='flex-1 items-center'>
                <Text>Nothing here </Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View>

            </View>
            <View>
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
