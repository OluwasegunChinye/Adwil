import { View, Text, TouchableOpacity, DevSettings, Alert } from 'react-native';
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Refresh = () => {
    const handleRefresh = async () => {
        await AsyncStorage.clear();
        DevSettings.reload()
    };

    const displayRefreshAlert = () => {
        Alert.alert(
            'Are you sure?',
            'This Action will clear up storage by reloading the app afresh, saved favourites songs will also be cleared',
            [
                {
                    text: 'Refresh',
                    onPress: handleRefresh,
                },
                {
                    text: 'No Thanks',
                },
            ],
            {
                cancelable: true,
            }
        );
    };

    return (
        <View className="flex-1 justify-center items-center bg-[#F9F6F0]">
            <View className="my-16">
                <Lottie
                    source={require('../assets/anime01.json')}
                    style={{ width: 150, height: 150 }}
                    duration={5000}
                    autoPlay
                    loop
                />
            </View>
            <Text className="font-[poppins] text-[#030622] text-sm my-5">
                It's ok to Refresh App once in a while.
            </Text>
            <TouchableOpacity onPress={displayRefreshAlert}>
                <Text className="font-[poppins] text-[#030622] mt-5">
                    Click here to Refresh
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Refresh;
