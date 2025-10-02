import { ThemedText } from '@/components/themed-text';
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from 'react-native';

var income = 0, expenses = 0, balance = 0;

export default function OverviewSection() {
    return (
        <ThemedView style = {styles.container}>
            <ThemedText style = {[styles.headingText]}>Overview</ThemedText>
            <ThemedView style = {styles.statsContainer}>
                <ThemedView style = {[styles.statBox]}>
                    <ThemedText style = {[styles.incomeStatHeadingText, styles.statHeadingText]}>Income</ThemedText>
                    <ThemedText style = {styles.statValueText}>{income}</ThemedText>
                </ThemedView>
                <ThemedView style = {styles.statBox}>
                    <ThemedText style = {[styles.expenseStatHeadingText, styles.statHeadingText]}>Expenses</ThemedText>
                    <ThemedText style = {styles.statValueText}>{expenses}</ThemedText>
                </ThemedView>
                <ThemedView style = {styles.statBox}>
                    <ThemedText style = {[styles.balanceStatHeadingText, styles.statHeadingText]}>Balance</ThemedText>
                    <ThemedText style = {styles.statValueText}>{balance}</ThemedText>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
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
    statsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        backgroundColor: '#B4EEEE',
    },
    statBox: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 3,
        borderRadius: 8,
        backgroundColor: '#E0E0E0',
        padding: 8,
    },
    statHeadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
    },
    incomeStatHeadingText: {
        color: '#4CAF50',
    },
    expenseStatHeadingText: {
        color: '#FF5722',
    },
    balanceStatHeadingText: {
        color: '#505050',
    },
    statValueText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0000',
    },
})