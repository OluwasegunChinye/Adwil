import { Platform, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    FavouriteScreen,
    HomeScreen,
    OnboardingScreen,
    PreviewScreen,
    RefreshScreen,
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
                tabBarLabelStyle: { color: '' },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Songs',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="ios-book"
                            size={20}
                            color={focused ? '#030622' : '#D2D2DA'}
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
                            size={20}
                            color={focused ? '#030622' : '#D2D2DA'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Refresh App"
                component={RefreshScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="reload-circle-sharp"
                            size={20}
                            color={focused ? '#030622' : '#D2D2DA'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const [isFirstLaunched, setIsFirstLaunched] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunched(true);
            } else {
                setIsFirstLaunched(false);
            }
        });
    }, []);

    const [fontsLoaded] = useFonts({
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
        poppins: require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf'),
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
                        // screenOptions={{
                        //     // headerShown: false,

                        //     headerTintColor: 'white',
                        //     headerTitle: '',
                        // }}
                        >
                            {isFirstLaunched && (
                                <Stack.Screen
                                    name="Onboarding"
                                    component={OnboardingScreen}
                                    options={{
                                        headerShown: false,
                                        headerTitle: '',
                                    }}
                                />
                            )}
                            <Stack.Screen
                                name="Tabs"
                                component={TabNavigator}
                                options={{
                                    headerShown: Platform.OS === 'ios' ? false : null ,
                                    headerTitle: '',
                                    headerStyle: {
                                        backgroundColor: 'white'
                                    },
                                }}
                            />
                            <Stack.Screen
                                name="Preview"
                                component={PreviewScreen}
                                options={{
                                    presentation: 'modal',
                                    headerShown: true,
                                    headerStyle: {
                                        backgroundColor: '#292929',
                                    },
                                    headerTintColor: 'white',
                                    headerTitle:''
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </FavouritesProvider>
            </TailwindProvider>
        </View>
    );
}
