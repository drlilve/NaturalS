import React, { useCallback, useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { Text, View, TextInput, 
MaterialCommunityIcon as Icon } from '../theme'


type NoticeProps = {
    props: string;
    navigation: any;
};
                        
const Notice: React.FC<NoticeProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={[styles.view]}>

            <View style={[styles.header]}>
                <Icon onPress={goHome} name="close" size={50} />
            </View>
            <View style={[styles.content]}>
                <Text style={[styles.text]}>공지 페이지{"\n"}</Text>
                <Text style={styles.alert}>개발 예정</Text>
            </View>         
        </View>
    );
}
export default Notice;

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    header: {
        flex: 0.2,
        marginTop: 50,
        marginLeft: 330,
        flexDirection: 'row'
    },
    content: {
        flex: 0.8
    },
    searchBar: {
        margin: 20,
        height: 35,
        borderWidth: 2
    },
    alert: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 150
    }
})
