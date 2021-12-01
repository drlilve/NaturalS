import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, 
    TouchableHighlight,Animated } from 'react-native'
import { Text, View,
MaterialCommunityIcon as Icon } from '../theme';

type TasteProps = {
    props: any;
    navigation: any;

};

const Taste: React.FC<TasteProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={[styles.view]}>
            <View style={[styles.header]}>
                    <Text style={styles.headerText}>인근 맛집</Text>
                    <Icon onPress={goHome} name="close" size={50} />     
            </View>
            <ScrollView style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText1}>
                        <Icon name="pin" size={30} />  연화반점 <Icon name="pin" size={30} />
                    </Text>
                    <Image style={{width: 340, height: 300, borderRadius: 10, marginTop: 20}} 
                        source={{uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MThfMTg5%2FMDAxNjIzOTc2ODU2MzAz.Hiyzs_qxFvUSJ4q5E2HaOJOIws2O2fweDxgHTZKnResg.pQ29JjxlUeiPKVZth4mNjKAT-voo7_1-mZ-y-G0myJEg.JPEG.dgskyroad%2F20210613%25A3%25DF190601.jpg&type=a340'}}/>
                    <Text style={styles.buttonText2}>경산 중식으로 유명한 영대맛집</Text>
                    <Text style={styles.buttonText3}>위치 : 경북 경산시 청운1로 12-2 1층</Text>
                    <Text style={styles.buttonText3}>전화번호 : 010-5711-9378</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText1}>
                        <Icon name="pin" size={30} />  오브닝  <Icon name="pin" size={30} />
                    </Text>
                    <Image style={{width: 340, height: 300, borderRadius: 10, marginTop: 20}} 
                        source={{uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMDZfMjk1%2FMDAxNTc4MzAxMjUyNjUz.DuWq_zAQhG4JFDyDx4p0cnQrvZFttiPSWRLQ6c1nBdsg.XVq2Etgbvy2kmg5NWucR2b2u_gU9bl1xLhxYW3_WMGUg.JPEG.mk971234%2FIMG_7761.JPG&type=sc960_832'}}/>
                    <Text style={styles.buttonText2}>영남대 인근에 위치한 맥주, {"\n"}호프 등을 판매하는 술집</Text>
                    <Text style={styles.buttonText3}>위치 : 경북 경산시 대학로59길 14</Text>
                    <Text style={styles.buttonText3}>전화번호 : 010-4556-4086</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText1}>
                        <Icon name="pin" size={30} />  더리터  <Icon name="pin" size={30} />
                    </Text>
                    <Image style={{width: 340, height: 300, borderRadius: 10, marginTop: 20}} 
                        source={{uri: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200804_112%2F1596520188836sXINv_JPEG%2Fd8wSfVt41qm0z0R4Syil1L3d.jpg'}}/>
                    <Text style={styles.buttonText2}>영남대 인근에 위치한 카페,{"\n"} 테이크아웃 전문점</Text>
                    <Text style={styles.buttonText3}>위치 : 경북 경산시 청운로 13-2</Text>
                    <Text style={styles.buttonText3}>전화번호 : 053-801-1007</Text>
                </TouchableOpacity>
            </ScrollView>                
        </View>
    )
}

export default Taste;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginLeft: 10
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    header: {
        marginTop: 50,
        marginLeft: 10,
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 220,
        marginTop: 15,
    },
    content: {
        flex: 0.8
    },
    buttonContainer: {
        marginTop: 15
    },
    button: {
        width: Dimensions.get('window').width-22,
        height: 530,
        padding: 15,
        borderColor: '#48d1cc',
        borderWidth: 5,
        borderRadius: 15,
        marginTop: 10
    },
    buttonText1: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonText2: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
        textAlign: 'center'
    },
    buttonText3: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5
    }
})
