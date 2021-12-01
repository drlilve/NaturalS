import React, { useCallback } from 'react'
import { StyleSheet, Linking } from 'react-native'
import { DataTable } from 'react-native-paper'
import { View, Text, NavigationHeader, Switch,
    MaterialCommunityIcon as Icon} from '../theme'
import type { FC } from 'react'
import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { DrawerActions, useTheme } from '@react-navigation/native'
import { Avatar } from '../components'
import * as D from '../data'

const loginUser = D.createRandomPerson()

const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
    const { navigation } = props
    const FAQ = useCallback(() => {navigation.navigate('FAQ')}, [])
    const profile = useCallback(() => {navigation.navigate('Profile')}, [])
    const logout = useCallback(() => {navigation.navigate('Login')}, [])

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
            <NavigationHeader/>
            <View style={[styles.content]}>
                <View style={[styles.row]}>
                    <Avatar uri={loginUser.avatar} size={40} />
                    <Text style={[styles.text, styles.m]}>{loginUser.name}</Text>
                </View>
                <DataTable style={[styles.table]}>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text onPress={() => Linking.openURL('https://www.yu.ac.kr/main/index.do')} 
                                style={[styles.data]}>
                                영남대 홈페이지
                            </Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text onPress={() => Linking.openURL('http://sci.yu.ac.kr/')} 
                                style={[styles.data]}>자연과학대학 홈페이지</Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text onPress={() => Linking.openURL('https://std.yu.ac.kr/std5/std_login.jsp')} 
                                style={[styles.data]}>영남대 URP</Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text onPress={() => Linking.openURL('http://lms.yu.ac.kr/ilos/m/main/main_form.acl')}
                                style={[styles.data]}>LMS 강의포털 시스템</Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text style={[styles.text]}>다크 모드</Text>      <Switch />
                        </DataTable.Title>
                    </DataTable.Header>
                    
                    <Text onPress={FAQ} style={[styles.text, styles.faq]}>FAQ</Text>
                    <Text onPress={profile} style={[styles.text, styles.myInfo]}>내 정보</Text>
                    <Text onPress={logout} style={[styles.text, styles.logout]}>로그아웃</Text>
                    <DataTable.Header style={[styles.snsTable]}>
                        <Text style={[styles.text, styles.sns]}>SNS</Text>
                            <Icon name="instagram" size={45} color='#fa8072'
                                onPress={() => Linking.openURL('https://www.instagram.com/step_2021_/') } />
                            <Text>   </Text>
                            <Icon name="facebook" size={45} color='#4682b4'
                                onPress={() => Linking.openURL('https://www.facebook.com/yunaturalscience')} />
                            <Text>   </Text>
                            <Icon name="chat" size={45} 
                                onPress={() => Linking.openURL('https://open.kakao.com/o/sZvevJVc')}/>
                    </DataTable.Header>
                </DataTable>
            </View>
        </DrawerContentScrollView>
    )
}
export default DrawerContent

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 5
    },
    text: {
        fontSize: 22,
        marginTop: 8,
    },
    data: {
        fontSize: 22,
    },
    row: {
        flexDirection: 'row',
        padding: 5,
        alignContent: 'center'
    },
    m: {
        marginLeft: 5
    },
    content: {
        flex: 1,
        padding: 5
    },
    faq: {
        marginTop: 15,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    logout: {
        marginTop: 15,
        marginLeft: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    myInfo: {
        marginTop: 15,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    table: {
        marginTop: 25
    },
    snsTable: {
        marginTop: 240,
    },
    sns: {
        marginRight: 25
    }
})
