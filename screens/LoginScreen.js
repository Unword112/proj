import React, { Component } from 'react'
import { Text , View , StyleSheet , TextInput , TouchableOpacity, Button , Image , StatusBar , LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        email: "",
        Password: "",
        errorMassage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMassage: error.massage}))
    };

    render() {
        LayoutAnimation.easeInEaseOut();
        
        return (
            <View style={styles.container}>
                <Statusbar barStyle="light-content"></Statusbar>
                
                <Image source={require("../assets/authHeader.png")}
                    style={{ marginTop: -176, marginLeft: -50 }}
                ></Image>
                
                <Image source={require("../assets/authFooter.png")}
                    style={{ position: "absolute" , bottom: -325, right: -225 }}
                ></Image>

                <Image source={require("../assets/authloginLogo.png")}
                    style={{ marginTop: -110 , alignSelf: "center" }}
                ></Image>

                <TouchableOpacity>
                        <Ionicons name="ïos-arrow-round-back" size={32} color="@FFF"></Ionicons>
                </TouchableOpacity>
                <Text Style={styles.greeting}>{'Hello. \nWelcome Back'}</Text>
                <View Style={styles.errorMassage}>
                    {this.state.errorMassage && <Text style={styles.error}>{this.state.errorMassage}</Text>}
                </View>
                <View Style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Addess</Text>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={ email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                        style={styles.input}
                        secureTextEntry 
                        autoCapitalize ="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF" , fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ alignSelf: "center", marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Register")}
                    >
                    <Text style={{ color: "#414959", fontSize: 13}}>
                        New to SocialApp? <Text style={{ fontWeight: "500", color: "#E9446A"}}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        margintop: -32,
        fontsize: 18,
        fontWeight: "400",
        textAliign: "center"
    },
    errorMassage: {
        height: 72,
        alignItem: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginButtom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "8A8F9E",
        borderBottomWidth: StyleSheet .hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});