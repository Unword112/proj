import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class ProfileScreen extends Component {
    render() {
        return (
            <View>
                <Text> Profile Screen </Text>
            </View>
        )
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

