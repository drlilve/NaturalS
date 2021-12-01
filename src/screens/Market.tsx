import * as React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react'
import { StyleSheet, FlatList, Alert, Platform } from 'react-native'
import { Image } from 'react-native-elements';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { SafeAreaView, View, Text, TextInput, TopBar, UnderlineText,
    MaterialCommunityIcon as Icon } from '../theme'
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts'
import { Searchbar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as D from '../data'
import Person from './Person'
import { LeftRightNavigation } from '../components'
import type { LeftRightNavigationMethods } from '../components'

type MarketProps = {
    props: string;
};

const Market: React.FC<MarketProps> = (props) => {
    const [ Title, setTitle ] = useState('');
    const [ isLoading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]);
    const [ scrollEnabled ] = useScrollEnabled()
    const [ people, setPeople ] = useState<D.IPerson[]>([])

    const leftRef = useRef<LeftRightNavigationMethods | null>(null)

    const addPerson = useCallback(() => {
    setPeople((people) => [D.createRandomPerson(), ...people])
}, [])
    const removeAllPersons = useCallback(() => {
    setPeople((notUsed) => [])
    leftRef.current?.resetOffset()
}, [])
    const deletePerson = useCallback((id: string) => () => {
    setPeople((people) => people.filter((person) => person.id != id))
    leftRef.current?.resetOffset()
    flatListRef.current?.scrollToOffset({animated: true, offset: 0})
}, [])
    useEffect(() => D.makeArray(5).forEach(addPerson), [])

    const flatListRef = useRef<FlatList | null>(null)

    const getMovies = async () => {
        try {
        // const response = await fetch('http://86e6-118-235-2-253.ngrok.io/api/market-writing/3');
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        }

    useEffect(() => {
        getMovies();
    }, []);

    const [searchQuery, setSearchQuery ] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
        <View style={[styles.view]}>
            {/* <TextInput 
                value={Title}
                placeholder= '   검색을 입력하세요.'
                onChangeText={(text) => setTitle(text)}
                onSubmitEditing={() => console.log('on')}
                style={{ marginVertical: 15, marginHorizontal: 15, height: 40 }}/> */}
            <Searchbar 
                placeholder="검색을 입력하세요"
                onChangeText={onChangeSearch}
                value={searchQuery} 
            />
            {/* {isLoading ? <ActivityIndicator /> : (
            <FlatList 
                data={data}  
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.flatView}>
                        <View style={styles.writer}>
                            <Text style={{ fontSize: 20, fontFamily: 'Marker Felt' }}>{item.title}</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={{ fontSize: 20, fontFamily: 'Chalkboard SE' }}>
                                영화 출시 년도 : ReleaseYear : {item.releaseYear}
                            </Text>
                        </View>
                        <View style={styles.comment}>
                            <Text style={{ fontSize: 20, marginLeft: 15 }}>좋아요 15   댓글 7</Text>
                        </View>
                    </TouchableOpacity>
                )}          
            />
            )} */}
        {/* <TopBar noSwitch>
            <UnderlineText onPress={addPerson} style={styles.text}>
                게시물 추가
            </UnderlineText>
            <UnderlineText onPress={removeAllPersons} style={styles.text}>
                모두 제거
            </UnderlineText>
        </TopBar> */}
            <LeftRightNavigation ref={leftRef} distance={40}
            flatListRef={flatListRef}>
            <FlatList ref={flatListRef} scrollEnabled={scrollEnabled}
            data={people}
            renderItem={({item}) => (
                <Person person={item} deletePressed={deletePerson(item.id)} />
            )}
            keyExtractor={(item) => item.id} />
            </LeftRightNavigation>
        </View>
    );
};

export default Market;

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        marginRight: 10,
        fontSize: 20
    },
    flatView: {
        height: 250,
        borderWidth: 2,
        marginTop: 20,
        marginHorizontal: 10
    },
    writer: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEEB'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 115,
        backgroundColor: '#BA55D3',
        marginHorizontal: 10
    },
    hi: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50
    },
    comment: {
        borderTopWidth: 1,
        marginTop: 20,
        backgroundColor: 'lightgreen',
        height: 41,
        justifyContent: 'center',
    }
})

