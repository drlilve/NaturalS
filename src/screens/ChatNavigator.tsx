import React, { useMemo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationOptions } from '@react-navigation/stack'

import { useNavigationHorizontalInterpolator } from '../hooks'
import Chat from './Chat'


const Stack = createStackNavigator()

export default function LifeNavigator() {
    const interpolator = useNavigationHorizontalInterpolator()
    const leftOptions = useMemo<StackNavigationOptions>(() => ({
        gestureDirection: 'horizontal-inverted',
        cardStyleInterpolator: interpolator
    }), [])
    const rightOptions = useMemo<StackNavigationOptions>(() => ({
        gestureDirection: 'horizontal',
        cardStyleInterpolator: interpolator
    }), [])

    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Board" component={Chat} />
        </Stack.Navigator>
    )
}