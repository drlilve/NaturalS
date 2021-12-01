import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import HomeNavigator from './HomeNavigator'
import CouncilNavigator from './CouncilNavigator'
import BoardNavigator from './BoardNavigator'
import MarketNavigator from './MarketNavigator'
import ChatNavigator from './ChatNavigator'


import type { RouteProp, ParamListBase } from '@react-navigation/native'
type TabBarIconProps = { focused: boolean; color: string; size: number}

const icons: Record<string, string[]> = {
    HomeNavigator: ['home', 'home-outline'],
    CouncilNavigator: ['apple-keyboard-command', 'apple-keyboard-command'],
    BoardNavigator: ['clipboard-check', 'clipboard-check-outline'],
    MarketNavigator: ['store', 'store-outline'],
    ChatNavigator: ['chat', 'chat']
}

const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string>}) => {
    return {
        tabBarIcon: ({ focused, color, size}: TabBarIconProps) => {
            const { name } = route
            const focusedSize = focused ? size + 6 : size
            const focusedColor = focused ? Colors.lightBlue500 : color
            const [ icon, iconOutline ] = icons[name]
            const iconName = focused ? icon : iconOutline
            return <Icon name={iconName} size={focusedSize} color={focusedColor} />
        }
    }
}

const Tab =createBottomTabNavigator()

export default function TabNavigator() {
    const navigation = useNavigation();
    const Notice = useCallback(() => {return navigation.navigate('Notice')}, [])
    const Push = useCallback(() => {return navigation.navigate('Push')}, [])

    return (
        <Tab.Navigator screenOptions={screenOptions} >
            <Tab.Screen name="HomeNavigator" component={HomeNavigator}
                options={{ tabBarLabel: "홈", title: "MOA  모아영" ,headerTitleAlign: "left", 
                headerTitleStyle:{fontFamily: 'BodoniSvtyTwoOSITCTT-Bold'},
                headerRight: () => 
                <View style={[styles.headerRight]}>
                    <Icon name="bullhorn-outline" size={35} style={[styles.bullhorn]} onPress={Notice} />
                    <Icon name="bell-outline" size={35} style={[styles.bell]} onPress={Push} />
                </View> }} 
            />
            <Tab.Screen name="CouncilNavigator" component={CouncilNavigator}
                options={{ tabBarLabel: "학생회", title: "학생회", headerTitleAlign: "left",
                headerTitleStyle:{fontFamily: 'BodoniSvtyTwoOSITCTT-Bold'}, }}
            />
            <Tab.Screen name="BoardNavigator" component={BoardNavigator} 
                options={{ tabBarLabel: "게시판", title: "게시판", headerTitleAlign: "left",
                headerTitleStyle:{fontFamily: 'BodoniSvtyTwoOSITCTT-Bold'}, }}/>
            <Tab.Screen name="MarketNavigator" component={MarketNavigator}
                options={{ tabBarLabel: "장터", title: "장터", headerTitleAlign: "left",
                headerTitleStyle:{fontFamily: 'BodoniSvtyTwoOSITCTT-Bold'}, }} />
            <Tab.Screen name="ChatNavigator" component={ChatNavigator}
                options={{ tabBarLabel: "채팅", title: "채팅", headerTitleAlign: "left",
                headerTitleStyle:{fontFamily: 'BodoniSvtyTwoOSITCTT-Bold'}, }} />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    bullhorn: {
        marginRight: 12
    },
    bell: {
        marginRight: 10
    },
    headerRight: {
        flexDirection: 'row',
    },

})