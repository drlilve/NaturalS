import React, { useState, useCallback } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text, TextInput, TouchableView,
UnderlineText } from '../theme'
import * as D from '../data'
import { useAutoFocus, AutoFocusProvider } from '../contexts'

export default function SignUp() {
  const [ person, setPerson ] = useState<D.IPerson>(D.createRandomPerson())
  const [ password, setPassword ] = useState<string>('1')
  const [ confirmPassword, setConfirmPassword ] = useState<string>(password)

  const focus = useAutoFocus()
  const navigation = useNavigation()
  const goTabNavigator = useCallback(() => {
    if (password === confirmPassword)
      navigation.navigate('TabNavigator')
    else
      Alert.alert('password is invalid')
  }, [ password, confirmPassword ])
  const goLogin = useCallback(() => navigation.navigate('Login'), [])

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <AutoFocusProvider
          contentContainerStyle={[styles.keyboardAwareFocus]}>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>학번(아이디)</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  // value={person.email}
                  onChangeText={(email) => setPerson((person) =>
                    ({...person, email}))}
                  placeholder= "학번(아이디)을 입력하세요.">모아영123</TextInput>
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>이름</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  // value={person.name}
                  onChangeText={(name) => setPerson((person) => ({...person, name}))}
                  placeholder="이름을 입력하세요.">모아영</TextInput>
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>비밀번호</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="비밀번호를 입력하세요." />
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>비밀번호 확인</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="비밀번호 확인" />
              </View>
            </View>
            <TouchableView notification style={[styles.touchableView]}
              onPress={goTabNavigator}>
                <Text style={[styles.text]}>회원가입</Text>
            </TouchableView>
            <UnderlineText style={[styles.text, {marginTop: 15}]} onPress={goLogin}>
              로그인
            </UnderlineText>
          </AutoFocusProvider>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {
    flex: 1, 
    justifyContent: 'space-between',
    alignItems:  'center'
  },
  text: {
    fontSize: 20
  },
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {
    width: '100%',
    padding: 5,
    marginBottom: 10
  },
  textInput: {
    fontSize: 24,
    padding: 10
  },
  textInputView: {
    marginTop: 5,
    borderRadius: 10
  },
  touchableView: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  }

})
