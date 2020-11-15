import React, { Component } from 'react'
import { Text, View , StyleSheet  } from 'react-native'

export class Notification extends Component {
    render() {
        return (
            <View>
                <Text> Notification Screen </Text>
            </View>
        )
    }
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

