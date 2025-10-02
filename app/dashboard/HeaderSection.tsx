import { ThemedText } from '@/components/themed-text';
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from 'react-native';

let displayName = 'User';

export default function HeaderSection() {
    return (
        <ThemedView style = {styles.container}>
            <ThemedText style = {styles.welcomeText}>Welcome, {displayName}</ThemedText>
            <ThemedText style = {styles.actionText}>Let's manage your wallet today</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 32,
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: '#B4EEEE',
        padding: 16,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0000',
    },
    actionText: {
        fontSize: 16,
        color: '#0000',
    }
})