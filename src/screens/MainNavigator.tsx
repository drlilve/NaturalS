import React from 'react'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import Login from './Login'
import SignUp from './SignUp'
import FAQ from './FAQ'
import Profile from './Profile'
import TabNavigator from './TabNavigator'
import DrawerContent from './DrawerContent'
import Notice from './Notice'
import Push from './Push'
import Business from './Business'
import Taste from './Taste'
import Academy from './Academy'
import Future from './Future'

const Drawer = createDrawerNavigator()

export default function MainNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="SignUp" component={SignUp} />
            <Drawer.Screen name="FAQ" component={FAQ} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Notice" component={Notice} />
            <Drawer.Screen name="Push" component={Push}/>
            <Drawer.Screen name="Business" component={Business} />
            <Drawer.Screen name="Taste" component={Taste} />
            <Drawer.Screen name="Academy" component={Academy} />
            <Drawer.Screen name="Future" component={Future} />
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />        
        </Drawer.Navigator>

    )
}

