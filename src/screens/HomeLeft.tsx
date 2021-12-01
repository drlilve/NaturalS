import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text, NavigationHeader,
MaterialCommunityIcon as Icon } from '../theme'

export default function HomeLeft() {
  const navigation = useNavigation()
  const goHome = useCallback(() => navigation.navigate('Home'), [])

  return (
    <SafeAreaView>
      <View style={[styles.view]}>

      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {
    flex: 1, 
    padding: 5
  },
  text: {
    fontSize: 20
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

})
