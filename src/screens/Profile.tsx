import React, { useCallback, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { Text, View, NavigationHeader, TextInput,
MaterialCommunityIcon as Icon } from '../theme'


type ProfileProps = {
    props: string;
    navigation: any;
};

const Profile: React.FC<ProfileProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={[styles.view]}>
            <View style={[styles.header]}>
                <Icon onPress={goHome} name="close" size={50} style={[styles.goHomeIcon]}/>
            </View>   
            <Text style={styles.alert}>개발 예정</Text>     
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    header: {
        flex: 0.2,
        marginTop: 50,
        marginLeft: 330
    },
    content: {
        flex: 0.8
    },
    goHomeIcon: {
        

    },
    textInput: {
        width: '50%',
        height: 70,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 20,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    nameContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    textInputName: {
        alignSelf: 'center',
        fontSize: 30,
        marginLeft: Dimensions.get('window').width-340
    },
    alert: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 200
    }
})
