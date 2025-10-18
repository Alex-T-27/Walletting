import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export  function LoginButton() {
    const router = useRouter();
    const [isNavigating, setIsNavigating] = useState(false);
    const handleButtonPress = () => {
        if (isNavigating) return;
        setIsNavigating(true);
        
        setTimeout(() => {
            router.push('/Auth/Login');
            setIsNavigating(false);
        }, 300);
    };
    return (
        <Pressable style = {({pressed}) => [
            styles.button,
            styles.loginButton,
            pressed && styles.buttonPressed,
            isNavigating && styles.buttonPressed,
        ]} onPress = {handleButtonPress}>
            <Text style = {[styles.buttonText, styles.loginText]}>
                {isNavigating ? 'Navigating...' : 'Go to Login'}
            </Text>
        </Pressable>
    )
}

export function SignupButton() {
    const router = useRouter();
    const [isNavigating, setIsNavigating] = useState(false);
    const handleButtonPress = () => {
        if (isNavigating) return;
        setIsNavigating(true);
        
        setTimeout(() => {
            router.push('/Auth/Signup');
            setIsNavigating(false);
        }, 300);
    };
    return (
        <Pressable style = {({pressed}) => [
            styles.button,
            styles.loginButton,
            pressed && styles.buttonPressed,
            isNavigating && styles.buttonPressed,
        ]} onPress = {handleButtonPress}>
            <Text style = {[styles.buttonText, styles.loginText]}>
                {isNavigating ? 'Navigating...' : 'Go to Sign Up'}
            </Text>
        </Pressable>
    )
}


export default function Index() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to Walletting</Text>
            <LoginButton></LoginButton>
            <SignupButton></SignupButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    header: {
        margin: 16,
        fontSize: 28,
        fontWeight: 'bold',
    },
    button: {
        margin: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        width: '50%',
    },
    buttonPressed: {
        opacity: 0.6,
    },
    loginButton: {
        backgroundColor: '#007AFF'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    },
    loginText: {
        color: '#fff',
    }
});