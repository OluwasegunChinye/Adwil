import { View, Text, Button, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    return (
        <Onboarding
            onSkip={() => navigation.replace('Tabs')}
            onDone={() => navigation.replace('Tabs')}
            pages={[
                {
                    backgroundColor: '#030622',
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
                    backgroundColor: '#030622',
                    image: (
                        <Image
                            source={require('../assets/images/two.png')}
                            className="w-72 h-72 object-contain"
                        />
                    ),
                    title: 'Over 400',
                    subtitle: 'Inspirational Praise and Worship Songs & Hymns',
                },
                {
                    backgroundColor: '#030622',
                    image: (
                        <Image
                            source={require('../assets/images/four.png')}
                            className="w-72 h-72 object-contain"
                        />
                    ),
                    title: 'Download for free',
                    subtitle: 'No need to sign up or register',
                    
                },
            ]}
        />
    );
};

export default OnboardingScreen;
