import * as React from 'react';
import { StyleSheet,} from 'react-native'
import { View, Text,
    MaterialCommunityIcon as Icon } from '../theme'

export default function Council() {

    return (
        <View style={styles.view}>
            <Text style={styles.alert}>개발 예정</Text>
        </View>
    ); 
}
    
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        marginTop: 30,
        fontSize: 20,
        alignSelf: 'center'
    },
    alert: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 280
    }
})