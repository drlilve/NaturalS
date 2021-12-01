import {StyleSheet} from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color'
// prettier-ignore
export const styles = StyleSheet.create({
  view: { backgroundColor: Colors.green200, padding: 15},
  leftView: {padding: 10},
  avatar: { borderColor: color(Colors.black).lighten(0.5).string(), borderWidth: 2},
  rightView: {flex: 1, padding: 10, marginRight: 2, flexDirection: 'row'},
  lrView: {flexDirection: 'row'},
  centerView: { padding: 15},
  name: {marginRight: 5, marginTop: 10, fontSize: 22, fontWeight: '500'},
  email: {textDecorationLine: 'underline',
    color: Colors.blue500, textDecorationColor: Colors.blue500},
  dateView: {flexDirection: 'row', justifyContent: 'space-between',
    padding: 3, marginTop: 5},
  text: {fontSize: 16},
  comments: {marginTop: 1, fontSize: 18},
  image: {height: 180, marginTop: 15},
  countsView: {flexDirection: 'row', padding: 3, justifyContent: 'space-around'},
  countView: {flexDirection: 'row', alignItems: 'center'},
  touchableIcon: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  iconText: {color: Colors.deepPurple500, marginLeft: 3},
})
