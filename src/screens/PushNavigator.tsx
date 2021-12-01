import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationOptions } from '@react-navigation/stack'

import Push from './Push'


const Stack = createStackNavigator()

export default function PushNavigator() {
    
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Notice" component={Push} />
        </Stack.Navigator>
    )
}