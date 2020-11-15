import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export class PostScreen extends Component {
    render() {
        return (
            <SafeAreaView style= {styles.container}>
                <View style={styles.header}>
                    
                    <TouchableOpacity>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Text style={{fontWeight: "500"}}>Post</Text>
                    
                    </TouchableOpacity>

                </View>

                <View style={styles.inputContainer}>
                    
                    <Image source={require("../assets/tempAvatar.jpg")} style={styles.avatar}></Image>
                    
                <TextInput 
                    autoFocus={true} 
                    multiline={true} 
                    numberOfLines={4} 
                    style={{flex: 1}} placeholder="Want to share someting? ">
                </TextInput>
                </View>

                <TouchableOpacity style={styles.photo}>
                    <Ionicons name="md-camara" size={32} color="#D8D9DZB"></Ionicons>

                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderEndWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        marginRight: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    }
})