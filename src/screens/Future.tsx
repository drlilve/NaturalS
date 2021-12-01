import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, 
    TouchableHighlight,Animated } from 'react-native'
import { Text, View,
MaterialCommunityIcon as Icon } from '../theme';

type FutureProps = {
    props: any;
    navigation: any;

};

const Future: React.FC<FutureProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={[styles.view]}>
            <View style={[styles.header]}>
                <Text style={[styles.headerText]}>진로 관련 사이트</Text>
                <Icon onPress={goHome} name="close" size={50} style={[styles.goHomeIcon]}/>
            </View>
            <ScrollView style={styles.buttonContainer}>
                <View>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center', marginBottom: 10}}/>
                    <Text style={styles.text}>공모전 & 대외활동{"\n"}{"\n"}
                        <Text style={styles.text2}>위비티 : https://www.wevity.com/{"\n"}</Text>
                        <Text style={styles.text2}>요즘것들 : https://allforyoung.com/{"\n"}</Text>
                        <Text style={styles.text2}>씽굿 : https://www.thinkcontest.com/{"\n"}</Text>
                        <Text style={styles.text2}>올콘 : https://www.all-con.co.kr/page/uni_contest.php{"\n"}</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center', marginBottom: 10}}/>
                    <Text style={styles.text}>진로 상담{"\n"}{"\n"}
                        <Text style={styles.text2}>영남대 어울림 : https://join.yu.ac.kr/front_new/{"\n"}</Text>
                        <Text style={styles.text2}>꿈날개 : https://www.dream.go.kr/dream/consult/boardInfo.do?menuSeq=10604&groupSeq=1 {"\n"}</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center', marginBottom: 10}}/>
                    <Text style={styles.text}>자격증{"\n"}{"\n"}
                        <Text style={styles.text2}>한국산업인력공단 - 큐넷{"\n"}</Text>
                        <Text style={styles.text2}>대한상공회의소 - 자격평가사업단{"\n"}</Text>
                        <Text style={styles.text2}>한국직업능력개발원 - 민간자격정보 서비스{"\n"}</Text>
                        <Text style={styles.text2}>한국생산성본부 - 정보기술자격센터{"\n"}</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center', marginBottom: 10}}/>
                    <Text style={styles.text}>대학학습{"\n"}{"\n"}
                        <Text style={styles.text2}>KOCW : http://www.kocw.net/home/index.do{"\n"}</Text>
                        <Text style={styles.text2}>늘배움 : http://www.lifelongedu.go.kr/{"\n"}</Text>
                        <Text style={styles.text2}>배움나라 : https://www.estudy.or.kr/estudy3.0/kor/index.asp{"\n"}</Text>
                        <Text style={styles.text2}>K-MOOC : http://www.kmooc.kr/{"\n"}</Text>
                    </Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button}>
                    <Icon name="lead-pencil" size={50} style={{ alignSelf: 'center', marginBottom: 10}}/>
                    <Text style={styles.text}>기타{"\n"}{"\n"}
                        <Text style={styles.text2}>크몽 - 컨설팅 (유료) : https://kmong.com/{"\n"}</Text>
                        <Text style={styles.text2}>커리어넷 - 진로 정보{"\n"}</Text>
                        <Text style={styles.text2}>2022년 취업 박람회 플랫폼 : http://www.job815.com/n_alba/service/expo.php{"\n"}</Text>
                    </Text>
                </TouchableOpacity>  

                </View>
            </ScrollView>

        </View>
    )
}

export default Future;

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    text2: {
        fontSize: 20,
        marginTop: 5,
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
        marginLeft: 140,
        marginTop: 5
    },
    buttonContainer: {
        marginTop: 15
    },
    button: {
        width: Dimensions.get('window').width-22,
        height: 320,
        padding: 15,
        borderWidth: 5,
        borderColor: '#40e0d0',
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 10,

    },
})
