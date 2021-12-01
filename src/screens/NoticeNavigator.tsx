import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationOptions } from '@react-navigation/stack'

import Notice from './Notice'


const Stack = createStackNavigator()

export default function NoticeNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Notice" component={Notice} />
        </Stack.Navigator>
    )
}