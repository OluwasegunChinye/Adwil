import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const Done = ({ ...props }) => (
        <TouchableOpacity {...props}>
            <Text style={{ fontSize: 16, marginHorizontal: 20, color: 'gray' }}>
                Done
            </Text>
        </TouchableOpacity>
    );

    return (
        <Onboarding
            onSkip={() => navigation.replace('Tabs')}
            onDone={() => navigation.replace('Tabs')}
            DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#F9F6F0',
                    image: (
                        <Image
                            source={require('../assets/images/one.png')}
                            className="w-72 h-72 object-contain"
                        />
                    ),
                    title: 'Songs of Praise & Worship',
                    subtitle: '',
                },
                {
                    backgroundColor: '#F9F6F0',
                    image: (
                        <Image
                            source={require('../assets/images/two.png')}
                            className="w-72 h-72 object-contain"
                        />
                    ),
                    title: 'Over 700',
                    subtitle: 'Inspirational Praise and Worship Songs & Hymns',
                },
                {
                    backgroundColor: '#F9F6F0',
                    image: (
                        <Image
                            source={require('../assets/images/four.png')}
                            className="w-72 h-72 object-contain"
                        />
                    ),
                    title: 'Get started',
                    subtitle: 'No need for internet connection',
                },
            ]}
        />
    );
};

export default OnboardingScreen;
