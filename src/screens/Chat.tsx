import React, { useState, useCallback, useEffect, useRef } from 'react'
import { StyleSheet, FlatList, TouchableOpacity, } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { SafeAreaView, View, UnderlineText, Text, TopBar,
MaterialCommunityIcon as Icon } from '../theme'
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts'
import axios from 'axios';

type LifeProps = { 
    props: any;
    data: string;
    item: string;
    alert: any;
}

const Chat: React.FC<LifeProps> = () =>  {
    const navigation = useNavigation()

    function getDataUsingSimpleGetCall(): void {
    axios
      .get('http://localhost:9000/api/market-writing/3')
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data))
      })
      .catch(function (error) {
        // handle error
        alert(error.message)
      })
      .finally(function () {
        // always executed
        alert('Finally called')
      })
  }
    
      const getDataUsingAsyncAwaitGetCall = async () => {
        try {
          const response = await axios.get(
            'http://localhost:9000/api/market-writing/3',
          );
          alert(JSON.stringify(response.data));
        } catch (error) {
          // handle error
        }
      };
    
      const postDataUsingSimplePostCall = () => {
        axios
          .post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
          .then(function (response) {
            // handle success
            alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          });
      };
    
      const multipleRequestsInSingleCall = () => {
        axios
          .all([
            axios
              .get('http://localhost:9000/api/market-writing/3')
              .then(function (response) {
                // handle success
                alert('Post 1 : ' + JSON.stringify(response.data));
              }),
            axios
            .get('https://jsonplaceholder.typicode.com/posts/2')
            .then(function (response) {
              // handle success
              alert('Post 2 : ' + JSON.stringify(response.data));
            }),
        ])
        .then(
          axios.spread(function (acct, perms) {
            // Both requests are now complete
            alert('Both requests are now complete');
          }),
        );
    };  

    return (
        <SafeAreaView>
        <ScrollEnabledProvider>
            <View style={[styles.view]}>
              <Text style={styles.alert}>개발 예정</Text>
            {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
        </TouchableOpacity> */}
    </View>
        </ScrollEnabledProvider>
        </SafeAreaView>
    ) 
}

export default Chat;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10
    },
    buttonStyle: {
        alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
    },
    alert: {
      fontSize: 25,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignSelf: 'center'
    }
})

function alert(arg0: string) {
  throw new Error('Function not implemented.')
}
