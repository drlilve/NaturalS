import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, 
    TouchableHighlight,Animated } from 'react-native'
import { Text, View,
MaterialCommunityIcon as Icon } from '../theme';

type AcademyProps = {
    props: any;
    navigation: any;

};

const Academy: React.FC<AcademyProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={[styles.view]}>
            <View style={[styles.header]}>
                <Text style={[styles.headerText]}>학원 매칭</Text>
                <Icon onPress={goHome} name="close" size={50} style={[styles.goHomeIcon]}/>
            </View>
            <ScrollView style={styles.buttonContainer}>
                <View>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center'}}/>
                    <Text style={styles.text}>송원학원{"\n"}
                        <Text style={styles.text2}>{"\n"}문의 : 053-123-4567</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center'}}/>
                    <Text style={styles.text}>시매쓰학원{"\n"}
                        <Text style={styles.text2}>{"\n"}문의 : 010-2221-7721</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center'}}/>
                    <Text style={styles.text}>김현승 국어학원{"\n"}
                        <Text style={styles.text2}>{"\n"}문의 : 053-231-4317</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center'}}/>
                    <Text style={styles.text}>청솔학원{"\n"}
                        <Text style={styles.text2}>{"\n"}문의 : 053-812-8532</Text>
                    </Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center'}}/>
                    <Text style={styles.text}>청솔학원{"\n"}
                        <Text style={styles.text2}>{"\n"}문의 : 053-812-8532</Text>
                    </Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center'}}/>
                    <Text style={styles.text}>강철 수학학원{"\n"}
                        <Text style={styles.text2}>{"\n"}문의 : 053-932-0532</Text>
                    </Text>
                </TouchableOpacity>  

                </View>
            </ScrollView>

        </View>
    )
}

export default Academy;

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginHorizontal: 70
    },
    text2: {
        fontSize: 20,
    },
    headerText: {
        fontSize: 26,
        marginTop: 15,
        fontWeight: 'bold'
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        flexDirection: 'row'
    },
    goHomeIcon: {
        marginLeft: 220,
        marginTop: 5
    },
    buttonContainer: {
        marginTop: 15
    },
    button: {
        width: Dimensions.get('window').width-22,
        height: 130,
        padding: 15,
        borderColor: 'lightgreen',
        borderWidth: 5,
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
})
