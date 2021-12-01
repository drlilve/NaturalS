import React, { useMemo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationOptions } from '@react-navigation/stack'

import { useNavigationHorizontalInterpolator } from '../hooks'
import Market from './Market'


const Stack = createStackNavigator()

export default function MarketNavigator() {
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
            <Stack.Screen name="Market" component={Market} />
        </Stack.Navigator>
    )
}