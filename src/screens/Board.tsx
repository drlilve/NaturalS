import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Searchbar } from 'react-native-paper'
import { StyleSheet, FlatList } from 'react-native'
import { SafeAreaView, View, UnderlineText, Text, TopBar,
NavigationHeader, MaterialCommunityIcon as Icon } from '../theme'
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts'


export default function Board() {
  const [searchQuery, setSearchQuery ] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
        <Searchbar 
                placeholder="검색을 입력하세요"
                onChangeText={onChangeSearch}
                value={searchQuery} 
            />
          <Text style={styles.alert}>개발 예정</Text>
        </View>
        
      </ScrollEnabledProvider>
                

    ) 
}
    
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        marginRight: 10,
        fontSize: 20,
        fontFamily: 'Marker Felt'
    },
    alert: {
      fontSize: 25,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 280
    }
})