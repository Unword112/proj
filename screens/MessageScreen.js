import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class MessageScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Message Screen </Text>
            </View>
        )
    }
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

