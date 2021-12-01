import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Text, View,
MaterialCommunityIcon as Icon } from '../theme'

type FAQProps = {
    props: string;
    navigation: any;
}; 

const FAQ: React.FC<FAQProps> = (props) => {
    const { navigation } = props
    const goHome = useCallback(() => {navigation.navigate('Home')}, [])

    return (
        <View style={[styles.container]}>
            <View style={[styles.header]}>
                <Text style={[styles.text, styles.titleText]}>FAQ</Text>
                <Icon onPress={goHome} name="close" size={50} />
            </View>
            <ScrollView style={[styles.buttonContainer]}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [일반] <Text style={styles.buttonContent}>인증에 걸리는 시간은 어느 정도인가요?{"\n"}{"\n"}평균적으로 1 ~ 2일 정도의 시간이 소요됩니다.</Text>    
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [일반] <Text style={styles.buttonContent}>글쓰기 수정 및 삭제는 어떻게 하나요?{"\n"}{"\n"}글쓰기 수정 및 삭제는 내 정보에서 글쓰기 수정 버튼을 누르시면 글쓰기 수정 및 삭제가 가능합니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [일반] <Text style={styles.buttonContent}>알림을 끌 수 있나요?{"\n"}{"\n"}기본 설정에서 알림을 끌 수는 있지만 따로 앱에서 알림을 끌 수는 없습니다. </Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [일반] <Text style={styles.buttonContent}>내가 쓴 댓글을 수정이나 삭제는 어떻게 가능한가요?{"\n"}{"\n"}내가 댓글 쓴 게시글에 가면 내가 쓴 댓글을 수정하거나 삭제가 가능합니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [일반] <Text style={styles.buttonContent}>앱을 사용하면서 생기는 불편한 점은 어디에 작성이 가능한가요?{"\n"}{"\n"}앱 스토어에 불편한 점을 작성해 주시면 불편하신 점을 추후 업데이트 시에 반영해드리겠습니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [일반] <Text style={styles.buttonContent}>익명 버튼을 누르지 않고 글을 작성하면 본명이 보이는 건가요?{"\n"}{"\n"}익명 버튼을 누르지 않고 글을 작성하시게 되면 본명이 보이게 됩니다. 이 점 유의하셔서 글을 작성해 주시면 감사하겠습니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [일반] <Text style={styles.buttonContent}>자과대 앱을 사용하면 얻을 수 있는 장점이 무엇인가요?{"\n"}{"\n"}직접 사용해 보시면 아실 수 있습니다. 많은 장점들이 있지만 그중에서 대표적으로 멘토, 멘티와 더불어 취업과 관련된 정보를 졸업자들에게 직접 들을 수 있으며 장터를 통해 자과대 안에서 교재 및 중고물품 거래가 가능하며 그 이외에 여러 장점들이 내포되어 있는 앱입니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [라이프] <Text style={styles.buttonContent}>학식 정보는 언제 업데이트되나요?{"\n"}{"\n"}매주 학식 정보가 업데이트됩니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [라이프] <Text style={styles.buttonContent}>대학원 랩실 후기는 누가 작성한 건가요?{"\n"}{"\n"}직접 그 대학원에 다니는 대학원생들의 생생한 이야기들을 담았습니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [장터] <Text style={styles.buttonContent}>장터의 비밀댓글을 작성하면 작성자만 답이 보이나요?{"\n"}{"\n"}비밀댓글을 작성하시면 장터 게시글의 작성자만 답이 보이므로 그 방법을 통해 구매자와 판매자 간의 소통이 가능하도록 만들었습니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [게시판] <Text style={styles.buttonContent}>핫 게시판은 좋아요 10개를 넘어야 가능한가요? 그 이상 다른 방법으로 핫 게시판에 올라가는 방법은 불가능한가요?{"\n"}{"\n"}핫 게시판에 올라가는 방법은 좋아요 10개 이상 받는 방법을 제외하고는 다른 방법은 존재하지 않습니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [학생회] <Text style={styles.buttonContent}>학교 사업 신청은 어플에서만 가능한가요? 따로 단톡방에 올려주는 건 사라지는 건가요?{"\n"}{"\n"}학교 사업 신청은 단톡방에 지속적으로 계속 올려주지만 앱에서 빠르게 신청이 가능토록 하기 위해 따로 앱에 있을 뿐 다른 곳에서도 신청은 가능합니다.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        [학생회] <Text style={styles.buttonContent}>학생회에서 올리는 공지사항을 따로 단톡방에서 확인이 불가능한가요?{"\n"}{"\n"}자과대 학생회 공지사항은 앱에서도 확인 가능하며 또한 단톡방에도 지속적으로 계속 올라올 예정입니다.</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>         
        </View>
    )
}

export default FAQ;

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        flex: 1
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 265,
        marginTop: 13,
    },
    header: {
        marginTop: 50,
        marginLeft: 10,
        flexDirection: 'row'
    },
    buttonContainer: {
        marginTop: 15
    },
    button: {
        width: Dimensions.get('window').width-22,
        height: 280,
        padding: 15,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 15,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonTitle: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    buttonContent: {
        fontSize: 20,
        fontWeight: '300'
    }
})
