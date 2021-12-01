import React, { useState, useCallback, useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { SafeAreaView, View, Text, TopBar, Button,
  MaterialCommunityIcon as Icon } from '../theme'
import moaY from '../assets/images/moaY.png'

export default function Home() {
  const navigation = useNavigation();
  const Business = useCallback(() => navigation.navigate('Business'), [])
  const Taste = useCallback(() => navigation.navigate('Taste'), [])
  const Academy = useCallback(() => navigation.navigate('Academy'), [])
  const Future = useCallback(() => navigation.navigate('Future'), [])

  return (
    // <SafeAreaView>
    <ScrollView style={[styles.container]}>
      <Text style={[styles.title]}>자과대의 모든 것을   <Text style={[styles.moa]}>"모아영"</Text></Text>
      <Image style={[styles.mainImage]} source={moaY}/>
      <ScrollView style={[styles.middleContainer]} horizontal>
        <TouchableOpacity onPress={Taste} style={styles.middleButton1}>
          <Text style={styles.middleButtonText}>인근맛집</Text>
          <Text style={styles.middleButtonText2}>영남대 대학로 인근에{"\n"}위치한 맛집</Text>
          <Text onPress={Taste} style={styles.addButton}>
            자세히 보기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton1}>
          <Text style={styles.middleButtonText}>학원 매칭</Text>
          <Text style={styles.middleButtonText2}>자과대와 제휴한{"\n"}학원들의 채용 공고</Text>
          <Text onPress={Academy} style={styles.addButton}>
            자세히 보기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton1}>
          <Text style={styles.middleButtonText}>진로 관련 사이트</Text>
          <Text style={styles.middleButtonText2}>진로, 취업, 자격증 등과 관련된 사이트 집합소</Text>
          <Text onPress={Future} style={styles.addButton}>
            자세히 보기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton1}>
          <Text style={styles.middleButtonText}>제휴사업</Text>
          <Text style={styles.middleButtonText2}>자연과학대학 제휴사업</Text>
          <Text style={styles.middleButtonText2}>
            ex) 구평.인쌩맥주.꼬뱅
          </Text>
          <Text onPress={Business} style={styles.addButton}>
            자세히 보기
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.advContainer}>
        <TouchableOpacity style={styles.advButton}><Text style={styles.adbText}>광고</Text></TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.middleButton2}>
          <Text style={styles.foodTitle}>중도학식</Text>
          <Text style={styles.foodContent}>제육볶음</Text>
          <Text style={styles.foodContent}>불고기피자</Text>
          <Text style={styles.foodContent}>꽁치찌개</Text>
          <Text style={styles.foodContent}>김치찌개</Text>
          <Text style={styles.foodContent}>김치볶음밥</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton2}>
          <Text style={styles.foodTitle}>이도학식</Text>
          <Text style={styles.foodContent}>공대치즈라면</Text>
          <Text style={styles.foodContent}>된장찌개</Text>
          <Text style={styles.foodContent}>순두부찌개</Text>
          <Text style={styles.foodContent}>불야돈</Text>
          <Text style={styles.foodContent}>연어덮밥</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
    // </SafeAreaView>
  )
}
    
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15
  },
  mainImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 20,
    fontFamily: 'HoeflerText-Regular'
  },
  moa: {
    fontSize: 25,
    fontFamily: 'Futura-CondensedMedium'
  },
  middleContainer: {
    marginLeft: 10,
    height: 180
  },
  advContainer: {
    height: 50,
  },
  bottomContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    height: 220,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  middleButton1: {
    width: 200,
    height: 150,
    padding: 15,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#1e90ff',
    borderRadius: 15,
    margin: 7
  },
  middleButton2: {
    width: 170,
    padding: 15,
    borderColor: '#8b4513',
    borderWidth: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 7
  },
  advButton: {
    height: 50,
  },
  addButton: {
    width: 88,
    alignSelf: 'center',
    marginTop: 15,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10
  },
  middleButtonText: {
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Verdana-Bold'
  },
  middleButtonText2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
  },
  adbText: {
    textAlign: 'center',
    fontSize: 40
  },
  foodTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  foodContent: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
  }
})