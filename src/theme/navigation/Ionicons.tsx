import React from 'react'
import type { FC, ComponentProps } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native'

export type IconProps = ComponentProps<typeof Icon>

export const Ionicons: FC<IconProps> = ({...props}) => {
    const { colors } = useTheme()
    return <Icon color={colors.text} {...props} />
}