import { Platform, View } from 'react-native';
import { useCallback } from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';

import {
    FavouriteScreen,
    HomeScreen,
    OnboardingScreen,
    PreviewScreen,
} from './screens';
import FavouritesProvider from './store/context/favourite-context';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            // sceneContainerStyle={{ backgroundColor: 'transparent' }}
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="ios-book"
                            size={size}
                            color={focused ? 'red' : 'grey'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="heart-sharp"
                            size={size}
                            color={focused ? 'red' : 'grey'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const [fontsLoaded] = useFonts({
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <TailwindProvider>
                <FavouritesProvider>
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                headerShown:
                                    Platform.OS === 'android' ? false : '',
                                headerTitle: '',
                                headerStyle: {
                                    backgroundColor: '#6874E8',
                                },
                                headerTintColor: 'white',
                            }}
                        >
                            <Stack.Screen
                                name="Onboarding"
                                component={OnboardingScreen}
                            />
                            <Stack.Screen
                                name="Preview"
                                component={PreviewScreen}
                                options={{
                                    presentation: 'modal',
                                    headerShown: true,
                                    headerStyle: {
                                        backgroundColor: '#6874E8',
                                    },
                                }}
                            />
                            <Stack.Screen
                                name="Tabs"
                                component={TabNavigator}
                                options={{
                                    title: '',
                                    headerTitleStyle: {
                                        color: 'blue',
                                    },
                                    headerStyle: {
                                        backgroundColor: '#6874E8',
                                    },
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </FavouritesProvider>
            </TailwindProvider>
        </View>
    );
}
