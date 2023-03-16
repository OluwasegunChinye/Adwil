import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const Done = ({ ...props }) => (
        <TouchableOpacity {...props}>
            <Text style={{ fontSize: 16, marginHorizontal: 20, color: 'gray' }}>Done</Text>
        </TouchableOpacity>
    );

    return (
        <Onboarding
            onSkip={() => navigation.replace('Tabs')}
            onDone={() => navigation.replace('Tabs')}
            DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#EFEFEF',
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
                    backgroundColor: '#EFEFEF',
                    image: (
                        <Image
                            source={require('../assets/images/two.png')}
                            className="w-72 h-72 object-contain"
                        />
                    ),
                    title: 'Over 600',
                    subtitle: 'Inspirational Praise and Worship Songs & Hymns',
                },
                {
                    backgroundColor: '#EFEFEF',
                    image: (
                        <Image
                            source={require('../assets/images/four.png')}
                            className="w-72 h-72 object-contain"
                        />
                    ),
                    title: 'Get started',
                    subtitle: 'No need to sign up or register',
                },
            ]}
        />
    );
};

export default OnboardingScreen;
