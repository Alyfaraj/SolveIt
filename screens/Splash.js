import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Splash extends React.Component {

    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate('Chat')
        }, 2500);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
    render() {
        return (
            <View style={{ backgroundColor: "#4f4754", alignContent: 'center', justifyContent: 'center',flex:1,alignItems:'center' }} >
                <Text style={{ fontSize: 44,color:'#f1a849',fontStyle:'bold' }} >SOLVE IT</Text></View>
        );
    }
}