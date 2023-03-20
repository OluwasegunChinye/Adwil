import {
    View,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

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
                <View className="flex-1 h-1/6 items-center justify-center bg-[#F9F6F0]">
                    <TextInput
                        className="h-12 w-11/12 text-xs rounded-md px-4 bg-white font-[poppins] "
                        keyboardType="default"
                        placeholder=" search for songs by the first line & not title"
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        className="absolute right-8"
                        onPress={() => {
                            setSearch('');
                            setFilteredDataSource(SONGS);
                        }}
                    >
                        <Ionicons name="close" size={23} color="#B0BBBF" />
                    </TouchableOpacity>
                </View>
                <View className="flex-1 h-5/6 bg-[#F9F6F0]">
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
