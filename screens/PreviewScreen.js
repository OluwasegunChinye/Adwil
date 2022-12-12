import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { SONGS } from '../data/Songs';

const PreviewScreen = ({ route }) => {
    const listId = route.params.songId;

    return (
        <SafeAreaView>
            <View>
                <Text>{listId}</Text>
            </View>
        </SafeAreaView>
    );
};

export default PreviewScreen;
