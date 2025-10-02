import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

export default function WalletSection() {
    return (
        <ThemedView style = {[styles.container]}>
            <ThemedText style = {[styles.headingText]}>Wallets</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: '#B4EEEE',
        padding: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0000',
    },
});