import { View, Text, Button } from 'react-native';
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
                    backgroundColor: '#fff',
                    // image: <Image source={require('./images/circle.png')} />,
                    title: 'Songs of Praise & Worship',
                    subtitle: 'by Adwil Media Services Publication',
                },
                {
                    backgroundColor: '#fff',
                    // image: <Image source={require('./images/circle.png')} />,
                    title: 'Over 4,000',
                    subtitle: 'Inspirational Praise and Worship Songs & Hymns',
                },
                {
                    backgroundColor: '#fff',
                    // image: <Image source={require('./images/circle.png')} />,
                    title: 'Download for free',
                    subtitle: 'No need to sign up or register',
                },
            ]}
        />
    );
};

export default OnboardingScreen;
