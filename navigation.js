import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import loading from './screens/Splash';
import chat from './screens/Chat';
import {NavigationContainer} from '@react-navigation/native'


const AuthStack=createStackNavigator();

const AuthStackScreens=()=>(
<AuthStack.Navigator headerMode='none' >

<AuthStack.Screen name="Loading" component={loading} />    
<AuthStack.Screen name="Chat" component={chat} />    

</AuthStack.Navigator>
);

const AppNav=()=>{
    return(
        <NavigationContainer>
            <AuthStackScreens/>
        </NavigationContainer>
    )
}

export default AppNav;