import { View, SafeAreaView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

import { SONGS } from '../data/Songs';
import Cards from '../components/Cards';

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(SONGS);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = SONGS.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(SONGS);
            setSearch(text);
        }
    };
    return (
        <>
            <SafeAreaView>
                <View className="flex-1 h-1/6 items-center justify-center bg-[#030622]">
                    <TextInput
                        className="h-12 w-11/12 border text-sm rounded-md px-4 bg-white text-[#030622] font-[poppins] "
                        keyboardType="default"
                        placeholder=" type here to search for songs"
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        autoCorrect={false}
                    />
                </View>
                <View className="flex-1 bg-[#030622] h-5/6">
                    <FlatList
                        data={filteredDataSource}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <Cards
                                    title={item.title}
                                    number={item.id}
                                    onPress={function handlePreview() {
                                        navigation.navigate('Preview', {
                                            songId: item.id,
                                        });
                                    }}
                                />
                            );
                        }}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

export default HomeScreen;
