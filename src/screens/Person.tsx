import React, { useState } from 'react'
import type {FC} from 'react'
import { Image } from 'react-native'
import {Colors} from 'react-native-paper'
import { View, Text, UnderlineText, TouchableView, 
MaterialCommunityIcon as Icon } from '../theme/navigation'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {Avatar} from '../components'
import {styles} from './Person.style'

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void // 추가했습니다.
}

const Person: FC<PersonProps> = ({person:initialPerson, deletePressed}) => {
  const [ person, setPerson ] = useState<D.IPerson>(initialPerson)
  
  return (
    <View style={[styles.view]}>
      <View style={styles.lrView}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Icon
            name="chat"
            size={50}
            color={Colors.green500}
            onPress={deletePressed}
            style={{ marginLeft: 30}}
          />
      </View>
      </View>
      <View style={styles.centerView}>  
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
      </View>
    </View>
  )
}
export default Person
