import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions,
Image, Alert, Linking} from 'react-native'
import { Text, View, NavigationHeader,
MaterialCommunityIcon as Icon } from '../theme'


type BusinessProps = {
    props: string;
    navigation: any;
};

const Business: React.FC<BusinessProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={[styles.view]}>
            <View style={[styles.header]}>
                    <Text style={styles.headerText}>제휴사업 <Icon 
                        onPress={() => Alert.alert("제휴사업이란?", "영남대 앞 상권들과의 교류를 통해 자연과학대 학우분들과 상권들 서로에게 도움이 되고자 제휴를 맺어 혜택을 주는 사업")} 
                        name="alert-circle-outline" size={28} />
                    </Text>
                    <Icon onPress={goHome} name="close" size={50} />     
            </View>
            <ScrollView style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText1}>
                        <Icon name="pin" size={30} />  자과대 X 구평  <Icon name="pin" size={30} />
                    </Text>
                    <Image style={{width: 340, height: 300, borderRadius: 10, marginTop: 20}} 
                        source={{uri: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210127_10%2F1611744155522SPLT1_JPEG%2FrZt2Oig8fmsXOdPS5ILGuDqK.jpg'}}/>
                    <Text style={styles.buttonText2}>자연과학대학 학부생 인증 후 스키니 포테이토 or 새우 볼 or 아이스크림 or 음료수 중 한 가지 선택 가능</Text>
                    <Text style={styles.buttonText3}>위치 : 경산시 둥지로 9 나동</Text>
                    <Text style={styles.buttonText3}>인스타그램ID : <Text 
                            style={{ color: '#ff1493'}}
                            onPress={() => Linking.openURL('https://www.instagram.com/9u_pyong/')}>
                            9u_pyong
                        </Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText1}>
                        <Icon name="pin" size={30} />  자과대 X 인쌩맥주  <Icon name="pin" size={30} />
                    </Text>
                    <Image style={{width: 340, height: 300, borderRadius: 10, marginTop: 20}} 
                        source={{uri: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210910_115%2F1631251593643RBzKO_JPEG%2FABZ-oh7BSaz_8YuSoz3caeIy.jpg'}}/>
                    <Text style={styles.buttonText2}>자연과학대학 학부생 인증 후 4만원 이상 시 마약 옥수수 or 마약소시지, 6만원 이상 시 트러플짜파게티 or 인생치킨(소)</Text>
                    <Text style={styles.buttonText3}>위치 : 경산시 대학로59길 15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText1}>
                        <Icon name="pin" size={30} />  자과대 X 꼬뱅  <Icon name="pin" size={30} />
                    </Text>
                    <Image style={{width: 340, height: 300, borderRadius: 10, marginTop: 20}} 
                        source={{uri: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDhfMjI1%2FMDAxNTk0MTk2MjM0NTAw.z24f3zVJqOLEGRcHZMyxzTBYJaX63JtjCW3NE1JrMIUg.AiQF_KlqWqfl_FRJiyyuzYIumyJ9OCSLRRBhcveXZnIg.JPEG.mr910201%2FKakaoTalk_20200708_171440400_03.jpg'}}/>
                    <Text style={styles.buttonText2}>자연과학대학 학부생 인증 후 1만원 이상 시 생과일 음료 SIZE UP or 토스트 토핑 추가 (햄, 치즈)</Text>
                    <Text style={styles.buttonText3}>위치 : 경북 경산시 청운로 13-1</Text>
                </TouchableOpacity>
            </ScrollView>                
        </View>
    )
}

export default Business;

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
        marginRight: 195,
        marginTop: 15,
    },
    content: {
        flex: 0.8
    },
    buttonContainer: {
        marginTop: 15
    },
    button: {
        width: Dimensions.get('window').width-17,
        height: 530,
        padding: 15,
        borderColor: '#b8e8fb',
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
