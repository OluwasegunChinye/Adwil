import { View, Text, TouchableOpacity, DevSettings, Alert } from 'react-native';
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Refresh = () => {
    const handleRefresh = async () => {
        DevSettings.reload();
        await AsyncStorage.clear();

        console.log('it was cleared');
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
                    onPress: () => console.log('no thanks'),
                },
            ],
            {
                cancelable: true,
            }
        );
    };

    return (
        <View className="flex-1 justify-center items-center bg-white">
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
                It's ok to Refresh App once a while.
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
