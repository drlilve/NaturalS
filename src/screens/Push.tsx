import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Text, View, NavigationHeader,
MaterialCommunityIcon as Icon } from '../theme'


type PushProps = {
    props: string;
    navigation: any;
};

const Push: React.FC<PushProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={styles.container}>
            <View style={[styles.header]} >
                <Text style={[styles.text, styles.titleText]}>푸쉬 알림</Text>
                <Icon onPress={goHome} name="close" size={50} style={[styles.goHomeIcon]}/>
            </View>
            <ScrollView style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>장터 게시판 [판매글]</Text>
                    <Text style={styles.content}>
                        김도엽 님이 [아이패드 apple pen] 판매글을 올렸습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>공지사항 [단과대]</Text>
                    <Text style={styles.content}>
                        2021학년도 2학기 기말고사 간식사업 게시글을 올렸습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>학원 매칭 [게시글]</Text>
                    <Text style={styles.content}>
                        YNU Math 학원이 등록되었습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>라이프 [인근맛집, 식당]</Text>
                    <Text style={styles.content}>
                        가보 뚝배기 & 감자탕 글이 재업로드 되었습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>공지사항 [수학과]</Text>
                    <Text style={styles.content}>
                        2021년도 기말고사 수학과 시간표.xlsx를 올렸습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>장터 게시판 [판매글]</Text>
                    <Text style={styles.content}>
                        김동욱님이 김도엽님의 판매글에 댓글을 닫았습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>공지사항 [단과대]</Text>
                    <Text style={styles.content}>
                        2021학년도 2학기 학사 일정 변경 안내 게시글을 올렸습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>공지사항 [단과대]</Text>
                    <Text style={styles.content}>
                        2021학년도 2학기 재학생 폭력예방교육 안내 게시글을 올렸습니다.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>공지사항 [단과대]</Text>
                    <Text style={styles.content}>
                        2021학년도 2학기 기말고사 간식사업 당첨자 명단 및 방법 안내 게시글을 올렸습니다.
                    </Text>
                </TouchableOpacity>
            </ScrollView>         
        </View>
    )
}

export default Push;

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        marginTop: 13,
        marginLeft: 5
    },
    header: {
        marginTop: 50,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        marginLeft: 10,
    },
    buttonContainer: {
        marginTop: 15
    },
    button: {
        width: Dimensions.get('window').width-22,
        height: 110,
        padding: 15,
        borderColor: 'green',
        borderWidth: 5,
        borderRadius: 15,
        marginTop: 10
    },
    goHomeIcon: {
        marginLeft: Dimensions.get('window').width-160
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 18,
        marginTop: 10
    }
})
